import { CARDS, TOPICS, type Topic } from "@/data/cards";

export type Tag = "known" | "needs-work";
export type Mode = "learning" | "needs" | "known" | "all";
export type TopicFilter = "all" | Topic;

export type Save = {
  tags: Record<string, Tag>;
  topic: TopicFilter;
  mode: Mode;
};

export const STORAGE_KEY = "cord-deck-v1";

export function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = next[i];
    next[i] = next[j] as T;
    next[j] = swap as T;
  }
  return next;
}

export function poolIds(topic: TopicFilter, mode: Mode, tags: Record<string, Tag>): string[] {
  return CARDS.filter((card) => {
    if (topic !== "all" && card.topic !== topic) return false;
    const tag = tags[card.id];
    if (mode === "learning") return tag !== "known";
    if (mode === "needs") return tag === "needs-work";
    if (mode === "known") return tag === "known";
    return true;
  }).map((card) => card.id);
}

export function readSave(): Save | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Save>;
    const tags: Record<string, Tag> = {};
    if (parsed.tags && typeof parsed.tags === "object") {
      for (const [id, tag] of Object.entries(parsed.tags)) {
        if (tag === "known" || tag === "needs-work") tags[id] = tag;
      }
    }
    const topic: TopicFilter =
      parsed.topic === "all" || (TOPICS as readonly string[]).includes(parsed.topic ?? "")
        ? (parsed.topic as TopicFilter)
        : "all";
    const mode: Mode =
      parsed.mode === "learning" ||
      parsed.mode === "needs" ||
      parsed.mode === "known" ||
      parsed.mode === "all"
        ? parsed.mode
        : "learning";
    return { tags, topic, mode };
  } catch {
    return null;
  }
}

export function writeSave(save: Save) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(save));
}
