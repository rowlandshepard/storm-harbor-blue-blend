import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, RotateCcw, Shuffle, X } from "lucide-react";
import { CARDS, TOPIC_LABEL, TOPICS, type Card } from "@/data/cards";
import {
  poolIds,
  readSave,
  shuffle,
  writeSave,
  type Mode,
  type Tag,
  type TopicFilter,
} from "@/lib/deck";

const BY_ID = new Map(CARDS.map((card) => [card.id, card]));

const MODES: { id: Mode; label: string; hint: string }[] = [
  { id: "learning", label: "Still learning", hint: "Hides cards you marked known" },
  { id: "needs", label: "Needs work", hint: "Only cards you flagged" },
  { id: "known", label: "Known", hint: "The cards a shuffle would skip" },
  { id: "all", label: "Whole lecture", hint: "Every card, known included" },
];

type Phase = "answer" | "review" | "done";

type Play = {
  order: string[];
  cursor: number;
  phase: Phase;
  picked: number | null;
  dealt: number[];
  correct: number;
  missed: number;
  missedIds: string[];
};

function dealChoices() {
  return shuffle([0, 1, 2, 3]);
}

function begin(order: string[], keepScore?: Pick<Play, "correct" | "missed" | "missedIds">): Play {
  if (order.length === 0) {
    return {
      order,
      cursor: 0,
      phase: "done",
      picked: null,
      dealt: [0, 1, 2, 3],
      correct: keepScore?.correct ?? 0,
      missed: keepScore?.missed ?? 0,
      missedIds: keepScore?.missedIds ?? [],
    };
  }
  return {
    order,
    cursor: 0,
    phase: "answer",
    picked: null,
    dealt: dealChoices(),
    correct: 0,
    missed: 0,
    missedIds: [],
  };
}

export function DeckApp() {
  const [tags, setTags] = useState<Record<string, Tag>>({});
  const [topic, setTopic] = useState<TopicFilter>("all");
  const [mode, setMode] = useState<Mode>("learning");
  const [ready, setReady] = useState(false);
  const [play, setPlay] = useState<Play>(() => begin([]));
  const [armReset, setArmReset] = useState(false);
  const [booted, setBooted] = useState(false);
  const tagsRef = useRef(tags);
  const playRef = useRef(play);
  const modeRef = useRef(mode);
  const topicRef = useRef(topic);
  tagsRef.current = tags;
  playRef.current = play;
  modeRef.current = mode;
  topicRef.current = topic;

  useEffect(() => {
    const saved = readSave();
    if (saved) {
      setTags(saved.tags);
      setTopic(saved.topic);
      setMode(saved.mode);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeSave({ tags, topic, mode });
  }, [tags, topic, mode, ready]);

  useEffect(() => {
    if (!ready) return;
    setPlay(begin(shuffle(poolIds(topic, mode, tagsRef.current))));
    setBooted(true);
    setArmReset(false);
  }, [ready, topic, mode]);

  const card: Card | undefined =
    play.phase === "done" ? undefined : BY_ID.get(play.order[play.cursor] ?? "");

  const counts = useMemo(() => {
    let known = 0;
    let needs = 0;
    for (const item of CARDS) {
      const tag = tags[item.id];
      if (tag === "known") known += 1;
      if (tag === "needs-work") needs += 1;
    }
    return { known, needs, total: CARDS.length };
  }, [tags]);

  function reshuffle(nextMode = modeRef.current, nextTopic = topicRef.current) {
    setPlay(begin(shuffle(poolIds(nextTopic, nextMode, tagsRef.current))));
  }

  function pick(position: number) {
    const current = playRef.current;
    const currentCard = BY_ID.get(current.order[current.cursor] ?? "");
    if (!currentCard || current.phase !== "answer") return;
    const original = current.dealt[position];
    const right = original === 0;
    setPlay({
      ...current,
      phase: "review",
      picked: position,
      correct: current.correct + (right ? 1 : 0),
      missed: current.missed + (right ? 0 : 1),
      missedIds: right ? current.missedIds : [...current.missedIds, currentCard.id],
    });
  }

  function goNext() {
    const current = playRef.current;
    if (current.phase !== "review") return;
    const next = current.cursor + 1;
    if (next >= current.order.length) {
      setPlay({ ...current, cursor: next, phase: "done", picked: null });
      return;
    }
    setPlay({
      ...current,
      cursor: next,
      phase: "answer",
      picked: null,
      dealt: dealChoices(),
    });
  }

  function applyTag(tag: Tag) {
    const current = playRef.current;
    const id = current.order[current.cursor];
    if (!id || current.phase === "done") return;
    setTags((prev) => {
      const next = { ...prev };
      if (next[id] === tag) delete next[id];
      else next[id] = tag;
      tagsRef.current = next;
      return next;
    });
  }

  function retryMissed() {
    const ids = playRef.current.missedIds.filter((id) => tagsRef.current[id] !== "known");
    setPlay(begin(shuffle(ids)));
  }

  useEffect(() => {
    if (!ready) return;
    function onKey(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      const key = event.key.toLowerCase();
      if (key >= "1" && key <= "4") {
        event.preventDefault();
        pick(Number(key) - 1);
      } else if (key === "n" || key === "enter") {
        event.preventDefault();
        goNext();
      } else if (key === "k") {
        event.preventDefault();
        applyTag("known");
      } else if (key === "w") {
        event.preventDefault();
        applyTag("needs-work");
      } else if (key === "s") {
        event.preventDefault();
        reshuffle();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ready]);

  const answered = play.correct + play.missed;
  const remaining = play.order.filter((id) => tags[id] !== "known").length;
  const activeTag = card ? tags[card.id] : undefined;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full min-w-0 max-w-5xl md:grid md:grid-cols-[4.75rem_minmax(0,1fr)]">
        <aside className="hidden border-r border-line md:flex md:flex-col md:items-center md:justify-between md:py-8">
          <p className="font-display text-4xl leading-none text-teal">11</p>
          <p className="spine text-xs font-semibold tracking-widest text-muted uppercase">
            Spinal cord
          </p>
          <p className="text-xs text-muted tabular-nums">{CARDS.length}</p>
        </aside>

        <main className="min-w-0 px-4 pt-5 pb-16 sm:px-8">
          <header className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-widest text-teal uppercase">
                Lecture 11
              </p>
              <h1 className="font-display text-4xl leading-none text-ink sm:text-5xl">Cord Deck</h1>
              <p className="mt-2 max-w-xl text-base text-muted text-pretty">
                Spinal cord, pathways, and the peripheral nervous system. Answer the card, then
                mark it. The next shuffle leaves out anything you marked known.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-cream px-4 text-sm font-semibold text-ink hover:border-teal"
              onClick={() => reshuffle()}
            >
              <Shuffle className="size-4" aria-hidden="true" />
              Shuffle
            </button>
          </header>

          <dl className="mt-5 grid grid-cols-3 gap-2">
            <Stat label="Still in play" value={mode === "known" ? play.order.length : remaining} />
            <Stat label="Known" value={counts.known} />
            <Stat label="Needs work" value={counts.needs} />
          </dl>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup" aria-label="Which cards to deal">
            {MODES.map((item) => {
              const on = mode === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  title={item.hint}
                  onClick={() => setMode(item.id)}
                  className={
                    on
                      ? "min-h-11 rounded-full bg-ink px-3 text-sm font-semibold text-cream"
                      : "min-h-11 rounded-full border border-line bg-cream px-3 text-sm font-semibold text-ink hover:border-teal"
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 max-w-full overflow-x-auto pb-1" role="radiogroup" aria-label="Topic">
            <div className="flex w-max gap-2">
              <TopicChip label="All" on={topic === "all"} onClick={() => setTopic("all")} />
              {TOPICS.map((id) => (
                <TopicChip
                  key={id}
                  label={TOPIC_LABEL[id]}
                  on={topic === id}
                  onClick={() => setTopic(id)}
                />
              ))}
            </div>
          </div>

          {!ready || !booted ? (
            <p className="mt-8 text-muted">Dealing the first card…</p>
          ) : play.phase === "done" || !card ? (
            <DonePanel
              play={play}
              mode={mode}
              known={counts.known}
              needs={counts.needs}
              onShuffle={() => reshuffle()}
              onNeeds={() => setMode("needs")}
              onLearning={() => setMode("learning")}
              onRetry={retryMissed}
              canRetry={play.missedIds.some((id) => tags[id] !== "known")}
              armReset={armReset}
              onArm={() => setArmReset(true)}
              onReset={() => {
                tagsRef.current = {};
                setTags({});
                setArmReset(false);
                if (modeRef.current === "learning") {
                  setPlay(begin(shuffle(poolIds(topicRef.current, "learning", {}))));
                } else {
                  setMode("learning");
                }
              }}
            />
          ) : (
            <article
              className="sheet rise mt-5 rounded-2xl border border-line bg-cream p-4 sm:p-7"
              data-card={card.id}
            >
              <div className="flex items-center justify-between gap-3 text-xs font-semibold tracking-widest text-muted uppercase">
                <span>{TOPIC_LABEL[card.topic]}</span>
                <span className="tabular-nums">
                  {play.cursor + 1} / {play.order.length}
                </span>
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-paper-deep">
                <div
                  className="h-full bg-teal"
                  style={{ width: `${(play.cursor / play.order.length) * 100}%` }}
                />
              </div>
              <h2 className="mt-5 font-display text-2xl leading-snug text-balance text-ink sm:text-3xl">
                {card.prompt}
              </h2>

              <div className="mt-5 grid gap-2" role="group" aria-label="Choices">
                {play.dealt.map((original, position) => {
                  const text = card.choices[original] ?? "";
                  const locked = play.phase === "review";
                  const isCorrect = original === 0;
                  const isPicked = play.picked === position;
                  let tone =
                    "border-line bg-paper text-ink hover:border-teal";
                  if (locked && isCorrect) tone = "border-teal bg-teal text-cream";
                  else if (locked && isPicked && !isCorrect) tone = "border-copper bg-copper text-cream";
                  else if (locked) tone = "border-line bg-paper text-muted";
                  return (
                    <button
                      key={`${card.id}-${original}`}
                      type="button"
                      disabled={locked}
                      onClick={() => pick(position)}
                      className={`flex min-h-12 items-start gap-3 rounded-xl border px-3 py-3 text-left text-base leading-snug ${tone}`}
                    >
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-paper-deep text-sm font-bold text-ink">
                        {position + 1}
                      </span>
                      <span>{text}</span>
                    </button>
                  );
                })}
              </div>

              {play.phase === "review" && play.picked !== null ? (
                <Result card={card} picked={play.picked} dealt={play.dealt} />
              ) : null}

              <div className="mt-5 border-t border-line pt-4">
                <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                  Tag this card
                </p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <TagButton
                    on={activeTag === "known"}
                    label="I know this"
                    detail="Left out of the next shuffle"
                    onClick={() => applyTag("known")}
                    kind="known"
                  />
                  <TagButton
                    on={activeTag === "needs-work"}
                    label="Needs work"
                    detail="Comes back in later shuffles"
                    onClick={() => applyTag("needs-work")}
                    kind="needs"
                  />
                </div>
                {play.phase === "review" ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-4 text-base font-semibold text-cream hover:bg-teal-deep sm:w-auto sm:px-6"
                  >
                    Next card
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                ) : (
                  <p className="mt-3 text-sm text-muted">
                    Pick an answer. Keys 1–4 answer, K known, W needs work, N next, S shuffle.
                  </p>
                )}
              </div>
            </article>
          )}

          {answered > 0 && play.phase !== "done" ? (
            <p className="mt-4 text-sm text-muted tabular-nums">
              This pass: {play.correct} correct, {play.missed} missed
              {answered > 0 ? ` · ${Math.round((play.correct / answered) * 100)}%` : ""}
            </p>
          ) : null}

          <p className="mt-8 max-w-xl text-sm text-muted text-pretty">
            Drawn from Lecture 11, The Spinal Cord and Pathways. White-column jobs follow the
            lecture’s map (posterior sensory, anterior somatic motor, lateral visceral motor), which
            is simpler than a full tract atlas.
          </p>
        </main>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-line bg-cream px-3 py-2">
      <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="font-display text-2xl leading-tight text-ink tabular-nums">{value}</dd>
    </div>
  );
}

function TopicChip({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={on}
      onClick={onClick}
      className={
        on
          ? "shrink-0 min-h-11 rounded-full bg-teal px-3 text-sm font-semibold text-cream"
          : "shrink-0 min-h-11 rounded-full border border-line bg-cream px-3 text-sm font-semibold text-ink hover:border-teal"
      }
    >
      {label}
    </button>
  );
}

function TagButton({
  on,
  label,
  detail,
  onClick,
  kind,
}: {
  on: boolean;
  label: string;
  detail: string;
  onClick: () => void;
  kind: "known" | "needs";
}) {
  const active =
    kind === "known"
      ? "border-teal bg-teal text-cream"
      : "border-copper bg-copper text-cream";
  const idle = "border-line bg-paper text-ink hover:border-ink";
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`min-h-12 rounded-xl border px-3 py-2 text-left ${on ? active : idle}`}
    >
      <span className="block text-sm font-semibold">{label}</span>
      <span className={`block text-xs ${on ? "text-cream" : "text-muted"}`}>{detail}</span>
    </button>
  );
}

function Result({ card, picked, dealt }: { card: Card; picked: number; dealt: number[] }) {
  const right = dealt[picked] === 0;
  return (
    <div
      role="status"
      className={
        right
          ? "rise mt-4 rounded-xl bg-teal px-4 py-3 text-cream"
          : "rise mt-4 rounded-xl bg-copper px-4 py-3 text-cream"
      }
    >
      <p className="flex items-center gap-2 text-lg font-semibold">
        {right ? <Check className="size-5" aria-hidden="true" /> : <X className="size-5" aria-hidden="true" />}
        {right ? "Correct" : "Incorrect"}
      </p>
      {!right ? <p className="mt-1 text-sm text-cream">Answer: {card.choices[0]}</p> : null}
      <p className={`text-sm text-pretty ${right ? "mt-1 text-cream" : "mt-2 text-cream"}`}>{card.why}</p>
    </div>
  );
}

function DonePanel({
  play,
  mode,
  known,
  needs,
  onShuffle,
  onNeeds,
  onLearning,
  onRetry,
  canRetry,
  armReset,
  onArm,
  onReset,
}: {
  play: Play;
  mode: Mode;
  known: number;
  needs: number;
  onShuffle: () => void;
  onNeeds: () => void;
  onLearning: () => void;
  onRetry: () => void;
  canRetry: boolean;
  armReset: boolean;
  onArm: () => void;
  onReset: () => void;
}) {
  const answered = play.correct + play.missed;
  const freshEmpty = play.order.length === 0 && answered === 0;
  let title = "This pile is finished";
  let body = "Known cards stay out of the next shuffle. Needs-work cards come back.";
  if (freshEmpty && mode === "learning") {
    title = known > 0 ? "Nothing left to deal" : "The pile is empty";
    body =
      known > 0
        ? "Every card in this view is marked known, so a shuffle skips them."
        : "No cards match this topic.";
  } else if (freshEmpty && mode === "needs") {
    title = "No cards need work";
    body = "Flag a card as needs work and it will show up in this pile.";
  } else if (freshEmpty && mode === "known") {
    title = "No known cards yet";
    body = "Mark a card “I know this” and later shuffles will leave it out.";
  } else if (answered > 0) {
    body = `${play.correct} correct, ${play.missed} missed${
      answered ? ` · ${Math.round((play.correct / answered) * 100)}%` : ""
    }. Known cards will not be in the next shuffle.`;
  }

  return (
    <section className="sheet rise mt-5 rounded-2xl border border-line bg-cream p-5 sm:p-7">
      <h2 className="font-display text-3xl text-balance text-ink">{title}</h2>
      <p className="mt-2 max-w-lg text-base text-muted text-pretty">{body}</p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={onShuffle}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-cream"
        >
          <Shuffle className="size-4" aria-hidden="true" />
          Shuffle again
        </button>
        {canRetry && !freshEmpty ? (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Retry missed
          </button>
        ) : null}
        {needs > 0 && mode !== "needs" ? (
          <button
            type="button"
            onClick={onNeeds}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-copper px-5 text-sm font-semibold text-copper"
          >
            Study needs work
          </button>
        ) : null}
        {mode !== "learning" ? (
          <button
            type="button"
            onClick={onLearning}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink"
          >
            Back to still learning
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => {
            if (!armReset) {
              onArm();
              return;
            }
            onReset();
          }}
          className="inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-muted hover:text-ink"
        >
          {armReset ? "Confirm: clear every tag" : "Clear known & needs-work"}
        </button>
      </div>
    </section>
  );
}
