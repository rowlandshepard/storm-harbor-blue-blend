import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as RotateCcw, o as ArrowRight, r as Shuffle, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DFcLqoYw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TOPIC_LABEL = {
	cord: "The cord",
	matter: "Gray & white",
	roots: "Roots & ganglia",
	nerves: "Nerves",
	cranial: "Cranial nerves",
	spinal: "Spinal nerves",
	sensory: "Sensory path",
	motor: "Motor paths",
	ans: "Autonomic",
	plexus: "Plexuses",
	reflex: "Reflexes",
	clinical: "Clinical"
};
var TOPICS = Object.keys(TOPIC_LABEL);
var CARDS = [
	{
		id: "cord-extent",
		topic: "cord",
		prompt: "The spinal cord extends from the foramen magnum to which region?",
		choices: [
			"The lumbar vertebrae",
			"The tip of the coccyx, inside the skull",
			"The foramen ovale",
			"Only the cervical enlargement"
		],
		why: "It is a pathway and a reflex center running from the foramen magnum to the lumbar vertebrae. The lecture figure marks the end near L1."
	},
	{
		id: "cord-cauda",
		topic: "cord",
		prompt: "The bundle of nerve roots hanging below the end of the cord is the:",
		choices: [
			"Cauda equina",
			"Cervical enlargement",
			"Brachial plexus",
			"Central canal"
		],
		why: "Below the cord proper, dorsal and ventral roots continue as the cauda equina."
	},
	{
		id: "cord-enlarge",
		topic: "cord",
		prompt: "Which two swellings of the cord supply the limbs?",
		choices: [
			"Cervical and lumbosacral enlargements",
			"Thoracic and coccygeal enlargements",
			"A single sacral enlargement only",
			"The medulla and the pons"
		],
		why: "The cervical enlargement feeds the upper limb; the lumbosacral enlargement feeds the lower limb."
	},
	{
		id: "cord-jobs",
		topic: "cord",
		prompt: "Besides linking the body with the brain, the cord also works as a:",
		choices: [
			"Reflex center",
			"Hormone gland",
			"Cable of axons that never synapse",
			"Second cerebellum"
		],
		why: "The overview lists two jobs: a pathway to and from the brain, and a reflex center."
	},
	{
		id: "cord-matter-place",
		topic: "cord",
		prompt: "How are gray matter and white matter arranged in the cord?",
		choices: [
			"Gray inside, white outside",
			"White inside, gray outside, like the cerebral cortex",
			"Gray only — the cord has no white columns",
			"Two separate cords, one gray and one white"
		],
		why: "Horns of cell bodies sit in the core. Axon columns wrap them. That is the reverse of the cerebral cortex."
	},
	{
		id: "cord-parts",
		topic: "cord",
		prompt: "The lecture divides the cord lengthwise into which parts?",
		choices: [
			"Cervical, thoracic, lumbar, and sacral",
			"Only cervical and lumbar",
			"Cortex, brainstem, and cord",
			"Cranial, pelvic, and caudal"
		],
		why: "The overview figure labels a cervical part, thoracic part, lumbar part, and sacral part."
	},
	{
		id: "matter-gray",
		topic: "matter",
		prompt: "Gray horns contain:",
		choices: [
			"Neuron cell bodies and synapses",
			"Only myelinated axons running up and down",
			"Only cerebrospinal fluid",
			"The meninges"
		],
		why: "Gray matter is the processing core: somas and synapses, on the inside of the cord."
	},
	{
		id: "matter-white",
		topic: "matter",
		prompt: "White columns, or funiculi, contain:",
		choices: [
			"Neuron axons",
			"Neuron cell bodies and synapses",
			"Posterior-root ganglia",
			"Cerebrospinal fluid"
		],
		why: "White matter is the outside wrapping of axons, split into anterior, lateral, and posterior columns."
	},
	{
		id: "matter-horns",
		topic: "matter",
		prompt: "Name the three gray horns.",
		choices: [
			"Anterior, lateral, and posterior",
			"Cervical, thoracic, and lumbar",
			"Sensory nerve, motor nerve, and mixed nerve",
			"Dorsal root, ventral root, and ramus"
		],
		why: "Each horn is a job: anterior somatic motor, lateral visceral motor, posterior sensory."
	},
	{
		id: "matter-columns",
		topic: "matter",
		prompt: "Name the three white columns.",
		choices: [
			"Anterior, lateral, and posterior",
			"Anterior and posterior only",
			"Horns, roots, and rami",
			"Cervical, brachial, and lumbar"
		],
		why: "The lecture pairs each column with a traffic type: posterior sensory, anterior somatic motor, lateral visceral motor."
	},
	{
		id: "matter-ant-horn",
		topic: "matter",
		prompt: "The anterior gray horn holds:",
		choices: [
			"Somatic motor somas and synapses",
			"Visceral motor somas",
			"Sensory somas",
			"Unipolar cell bodies of incoming sensation"
		],
		why: "Somatic motor = anterior white column (axons) + anterior gray horn (somas)."
	},
	{
		id: "matter-lat-horn",
		topic: "matter",
		prompt: "The lateral gray horn holds:",
		choices: [
			"Visceral motor somas and synapses",
			"Somatic motor somas",
			"Sensory somas",
			"Axons of the posterior columns"
		],
		why: "Visceral motor = lateral white column (axons) + lateral gray horn (somas)."
	},
	{
		id: "matter-post-horn",
		topic: "matter",
		prompt: "The posterior gray horn holds:",
		choices: [
			"Somatic or visceral sensory somas and synapses",
			"Somatic motor somas",
			"Only visceral motor somas",
			"Upper motor neurons straight from the cortex"
		],
		why: "Sensory = posterior gray horn (somas) + posterior white columns (axons)."
	},
	{
		id: "matter-post-col",
		topic: "matter",
		prompt: "Posterior white columns carry:",
		choices: [
			"Somatic or visceral sensory axons",
			"Somatic motor axons",
			"Visceral motor axons",
			"Only fibers that end on skeletal muscle"
		],
		why: "This is the lecture’s map: sensory traffic climbs in the posterior columns."
	},
	{
		id: "matter-ant-col",
		topic: "matter",
		prompt: "Per this lecture, anterior white columns carry:",
		choices: [
			"Somatic motor axons",
			"Sensory axons from the skin",
			"Visceral motor axons",
			"Cerebrospinal fluid"
		],
		why: "Somatic motor axons travel the anterior white columns before synapsing in the anterior gray horn."
	},
	{
		id: "matter-lat-col",
		topic: "matter",
		prompt: "Per this lecture, lateral white columns carry:",
		choices: [
			"Visceral motor axons",
			"Somatic motor axons",
			"Sensory axons",
			"Only cranial-nerve fibers"
		],
		why: "The lecture assigns visceral motor axons to the lateral white columns, then the lateral gray horn."
	},
	{
		id: "matter-canal",
		topic: "matter",
		prompt: "The central canal contains:",
		choices: [
			"Cerebrospinal fluid",
			"Blood alone",
			"Myelin",
			"Air"
		],
		why: "The canal sits in the gray commissure and is continuous with the brain’s CSF spaces."
	},
	{
		id: "matter-fissure",
		topic: "matter",
		prompt: "Which landmark marks the anterior surface of the cord?",
		choices: [
			"The anterior median fissure",
			"The posterior root ganglion",
			"The cauda equina",
			"The central canal"
		],
		why: "A deeper groove, the anterior median fissure, tells you which side is anterior."
	},
	{
		id: "matter-pair",
		topic: "matter",
		prompt: "Match the lecture’s pairing of place and job.",
		choices: [
			"Somatic motor: anterior column + anterior horn",
			"Somatic motor: posterior column + posterior horn",
			"Sensory: lateral column + lateral horn",
			"Visceral motor: posterior root ganglion only"
		],
		why: "Sensory is posterior, somatic motor is anterior, visceral motor is lateral. Axons in the column, somas in the horn."
	},
	{
		id: "roots-post",
		topic: "roots",
		prompt: "The posterior root contains:",
		choices: [
			"Sensory axons entering the cord",
			"All motor axons leaving the cord",
			"Only skeletal muscle fibers",
			"Mixed cranial nerves"
		],
		why: "Sensation comes in the back door. Motor leaves by the anterior root."
	},
	{
		id: "roots-ant",
		topic: "roots",
		prompt: "The anterior root contains:",
		choices: [
			"All motor axons leaving the cord",
			"All sensory axons entering the cord",
			"The posterior root ganglion",
			"Cerebrospinal fluid"
		],
		why: "Both somatic and visceral motor axons exit through the anterior root."
	},
	{
		id: "roots-merge",
		topic: "roots",
		prompt: "Posterior and anterior roots merge to form:",
		choices: [
			"One spinal nerve",
			"A cranial nerve",
			"The thalamus",
			"A white column"
		],
		why: "The two roots join, so the spinal nerve they make is mixed."
	},
	{
		id: "roots-prg",
		topic: "roots",
		prompt: "Cell bodies of the sensory neurons in a spinal nerve sit in the:",
		choices: [
			"Posterior root ganglion",
			"Anterior gray horn",
			"Lateral gray horn",
			"Primary motor cortex"
		],
		why: "Their axons run from that ganglion into the posterior root, then synapse in the posterior gray horn."
	},
	{
		id: "roots-shape",
		topic: "roots",
		prompt: "Sensory neurons with somas in the posterior root ganglion are:",
		choices: [
			"Unipolar",
			"Multipolar, like a typical motor neuron",
			"Anaxonic",
			"Bipolar motor neurons"
		],
		why: "First-order sensory neurons are unipolar. The motor neurons in this lecture are multipolar."
	},
	{
		id: "roots-ganglion",
		topic: "roots",
		prompt: "A ganglion is best described as:",
		choices: [
			"An island of gray matter inside the white matter of a nerve",
			"A bundle of axons with no cell bodies",
			"A horn inside the cord",
			"A plexus of ventral rami"
		],
		why: "Somas and synapses surrounded by axons — the same idea as nuclei in the brainstem, but outside the CNS texture of a nerve."
	},
	{
		id: "roots-vm-where",
		topic: "roots",
		prompt: "Visceral motor ganglia are located:",
		choices: [
			"Outside the CNS",
			"In the posterior gray horn",
			"In the central canal",
			"Inside the thalamus"
		],
		why: "Somatic motor has no ganglion. Visceral motor synapses again in a ganglion on the way to the organ."
	},
	{
		id: "roots-job",
		topic: "roots",
		prompt: "Like any gray matter, a ganglion is a place where:",
		choices: [
			"One neuron can hand its impulse to the next",
			"Axons pass through and never synapse",
			"CSF is made",
			"Dermatomes are drawn on the skin"
		],
		why: "Axon of neuron 1 → synapse → dendrites and soma of neuron 2 → axon of neuron 2."
	},
	{
		id: "nerves-def",
		topic: "nerves",
		prompt: "A nerve is a bundle of axons serving one place, and it travels:",
		choices: [
			"Outside the CNS — that is the peripheral nervous system",
			"Only inside the cerebral cortex",
			"Only inside a gray horn",
			"Only between the two hemispheres"
		],
		why: "Nerves make up the PNS. Tracts inside the CNS are not called nerves in this lecture."
	},
	{
		id: "nerves-three",
		topic: "nerves",
		prompt: "The three types of nerves are:",
		choices: [
			"Sensory, motor, and mixed",
			"Gray, white, and ganglion",
			"Ascending, descending, and reflex",
			"Cervical, thoracic, and lumbar"
		],
		why: "Sensory nerves hold only sensory axons. Motor nerves hold only motor axons. Mixed nerves hold both."
	},
	{
		id: "nerves-common",
		topic: "nerves",
		prompt: "The most common type of nerve is:",
		choices: [
			"Mixed",
			"Sensory only",
			"Motor only",
			"A nerve with no axons"
		],
		why: "Spinal nerves are all mixed, and mixed is the usual pattern in the PNS."
	},
	{
		id: "nerves-sensory-way",
		topic: "nerves",
		prompt: "A sensory nerve conducts:",
		choices: [
			"From the body toward the CNS",
			"From the CNS toward the body",
			"Only inside one muscle",
			"Both directions inside every axon"
		],
		why: "Sensory = afferent = body to CNS. Motor = efferent = CNS to body."
	},
	{
		id: "nerves-motor-way",
		topic: "nerves",
		prompt: "A motor nerve conducts:",
		choices: [
			"From the CNS toward the body",
			"From the body toward the CNS",
			"From skin into the posterior horn only",
			"Between two sense organs"
		],
		why: "Motor axons leave the CNS. They do not carry skin sensation back in."
	},
	{
		id: "cranial-count",
		topic: "cranial",
		prompt: "Cranial nerves are:",
		choices: [
			"12 pairs coming off the brainstem",
			"31 pairs coming off the cord",
			"8 pairs coming off the cerebral cortex",
			"5 pairs coming off the cerebellum"
		],
		why: "Twelve pairs leave the brainstem and branch to the head and neck. Spinal nerves are the 31 pairs."
	},
	{
		id: "cranial-sensory",
		topic: "cranial",
		prompt: "Which cranial nerves are entirely sensory?",
		choices: [
			"I olfactory, II optic, VIII vestibulocochlear",
			"III, IV, and VI",
			"V, VII, IX, and X",
			"XI and XII"
		],
		why: "Smell, sight, and hearing/balance come in with no motor fibers in those three nerves."
	},
	{
		id: "cranial-motor",
		topic: "cranial",
		prompt: "Which cranial nerves are entirely motor?",
		choices: [
			"III oculomotor, IV trochlear, VI abducens, XI accessory, XII hypoglossal",
			"I, II, and VIII",
			"V, VII, IX, and X",
			"Only the vagus"
		],
		why: "Those five move the eyes, a shoulder/neck pair (accessory), and the tongue. They are not mixed."
	},
	{
		id: "cranial-mixed",
		topic: "cranial",
		prompt: "Which cranial nerves are mixed?",
		choices: [
			"V trigeminal, VII facial, IX glossopharyngeal, X vagus",
			"I, II, and VIII",
			"III, IV, and VI",
			"XI and XII only"
		],
		why: "Face sensation and chewing, facial expression, throat, and the wandering vagus all carry both ways."
	},
	{
		id: "cranial-territory",
		topic: "cranial",
		prompt: "Cranial nerves branch mainly to the:",
		choices: [
			"Head and neck",
			"Anterior thigh",
			"Posterior leg",
			"Body wall below T1"
		],
		why: "Limb and trunk nerves are spinal. The twelve cranial nerves stay with the head and neck."
	},
	{
		id: "cranial-viii",
		topic: "cranial",
		prompt: "Nerve VIII, vestibulocochlear, splits into:",
		choices: [
			"A vestibular branch and a cochlear branch",
			"Olfactory and optic branches",
			"Radial and ulnar branches",
			"Femoral and obturator branches"
		],
		why: "Vestibular is balance. Cochlear is hearing. The nerve as a whole is sensory."
	},
	{
		id: "cranial-x",
		topic: "cranial",
		prompt: "The vagus nerve is:",
		choices: [
			"Cranial nerve X, and it is mixed",
			"Cranial nerve II, and it is sensory only",
			"Spinal nerve T10",
			"Another name for the sciatic nerve"
		],
		why: "X is vagus, a mixed cranial nerve. II is optic, sensory only."
	},
	{
		id: "cranial-sort",
		topic: "cranial",
		prompt: "Optic, facial, and hypoglossal — in that order — are:",
		choices: [
			"Sensory, mixed, and motor",
			"All mixed",
			"All sensory",
			"Motor, sensory, and mixed"
		],
		why: "II optic is sensory, VII facial is mixed, XII hypoglossal is motor."
	},
	{
		id: "spinal-count",
		topic: "spinal",
		prompt: "Spinal nerves number:",
		choices: [
			"31 pairs, and every pair is mixed",
			"12 pairs, and every pair is sensory",
			"31 pairs, and every pair is motor only",
			"8 pairs, serving only the neck"
		],
		why: "8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal. All mixed."
	},
	{
		id: "spinal-split",
		topic: "spinal",
		prompt: "The 31 pairs divide as:",
		choices: [
			"8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal",
			"7 cervical, 12 thoracic, 5 lumbar, 5 sacral, 4 coccygeal",
			"8 cervical, 8 thoracic, 8 lumbar, 7 sacral",
			"12 cranial and 19 spinal"
		],
		why: "Cervical nerves outnumber cervical vertebrae: there is a C8."
	},
	{
		id: "spinal-c8",
		topic: "spinal",
		prompt: "There are 7 cervical vertebrae. Cervical spinal nerves number:",
		choices: [
			"8",
			"7",
			"12",
			"5"
		],
		why: "C1 through C8. The extra nerve is why the brachial plexus can include C5–C8 and T1."
	},
	{
		id: "spinal-dermatome",
		topic: "spinal",
		prompt: "A dermatome is:",
		choices: [
			"The skin region whose sensation one spinal-nerve pair monitors",
			"The motor unit inside one muscle",
			"A plexus",
			"A gray horn"
		],
		why: "Each pair watches a strip of body surface. That is why shingles appears in a band."
	},
	{
		id: "spinal-rami",
		topic: "spinal",
		prompt: "Just after the roots join, the spinal nerve splits into:",
		choices: [
			"An anterior ramus and a posterior ramus",
			"An anterior horn and a posterior horn",
			"A ganglion and a plexus",
			"Two central canals"
		],
		why: "Roots come together to make the nerve. Rami are the branches after that. One slide titles this “RAMI = ROOTS”; the figure still labels them separately."
	},
	{
		id: "spinal-roots-vs-rami",
		topic: "spinal",
		prompt: "On the lecture figure, roots sit ___ the spinal nerve forms, and rami sit ___ it forms.",
		choices: [
			"Before; after",
			"After; before",
			"Both inside a gray horn",
			"Both only on cranial nerves"
		],
		why: "Posterior root (with its ganglion) and anterior root merge into the nerve, which then gives off posterior and anterior rami."
	},
	{
		id: "spinal-brachial-rami",
		topic: "spinal",
		prompt: "Ventral rami of C5–C8 and T1 form the:",
		choices: [
			"Brachial plexus",
			"Lumbar plexus",
			"Sacral plexus",
			"Cauda equina"
		],
		why: "Those ventral rami weave into the plexus that innervates the arm."
	},
	{
		id: "spinal-lumbar-rami",
		topic: "spinal",
		prompt: "Ventral rami of L1–L4 form the:",
		choices: [
			"Lumbar plexus",
			"Brachial plexus",
			"Posterior white columns",
			"Cervical enlargement"
		],
		why: "The lumbar plexus is the anterior-leg network, built from L1–L4."
	},
	{
		id: "sens-way",
		topic: "sensory",
		prompt: "Somatic and visceral sensation in this lecture travels:",
		choices: [
			"Up: an ascending path from body to CNS",
			"Down: a descending path from cortex to muscle",
			"Only out to an organ through a ganglion",
			"From the motor cortex straight to the anterior horn"
		],
		why: "Sensory is ascending. Motor is descending."
	},
	{
		id: "sens-three",
		topic: "sensory",
		prompt: "The sensory path uses how many neurons, and of what shape?",
		choices: [
			"Three: unipolar, then multipolar, then multipolar",
			"Two, both unipolar",
			"One, from receptor to cortex",
			"Three, all unipolar"
		],
		why: "1st order is the unipolar cell in the posterior root ganglion. 2nd and 3rd order are multipolar."
	},
	{
		id: "sens-start",
		topic: "sensory",
		prompt: "Which opening matches the sensory path?",
		choices: [
			"Receptor → spinal nerve → posterior root → posterior root ganglion",
			"Motor cortex → anterior root → muscle",
			"Brainstem nucleus → ganglion → organ",
			"Thalamus → receptor → anterior horn"
		],
		why: "The receptor starts it. The signal enters on the posterior root, whose cell body is in the ganglion."
	},
	{
		id: "sens-cord",
		topic: "sensory",
		prompt: "After the posterior root ganglion, the lecture sends sensation to the:",
		choices: [
			"Posterior gray horn, then the posterior white column",
			"Anterior gray horn, then the anterior root",
			"Lateral gray horn, then a visceral ganglion",
			"Skeletal muscle, with no stop in the cord"
		],
		why: "They synapse in the cord before climbing. The lecture’s next stop is the posterior white column."
	},
	{
		id: "sens-cross",
		topic: "sensory",
		prompt: "Ascending sensory fibers cross at the:",
		choices: [
			"Medulla oblongata",
			"Cauda equina",
			"Posterior root ganglion",
			"Wrist, in the carpal tunnel"
		],
		why: "The lecture’s crossover for this path is the medulla, in the brainstem."
	},
	{
		id: "sens-thal",
		topic: "sensory",
		prompt: "Between the medulla and the cerebral cortex, sensation stops in the:",
		choices: [
			"Thalamus",
			"Anterior gray horn",
			"Posterior root ganglion, a second time",
			"Deltoid"
		],
		why: "Order: cross in the medulla → thalamus → primary somatosensory cortex."
	},
	{
		id: "sens-end",
		topic: "sensory",
		prompt: "The sensory path ends in the:",
		choices: [
			"Primary somatosensory cortex",
			"Primary motor cortex",
			"Posterior root ganglion",
			"Skeletal muscle"
		],
		why: "Feeling becomes conscious in the primary somatosensory cortex. The motor cortex is the start of somatic movement."
	},
	{
		id: "sens-synapse",
		topic: "sensory",
		prompt: "Per the lecture, sensory neurons synapse in the spinal cord:",
		choices: [
			"Before they go on to the brain",
			"Only after they reach the cortex",
			"Never",
			"Only in a ganglion beside an organ"
		],
		why: "The slide states it directly: neurons synapse in the cord before going to the brain."
	},
	{
		id: "mot-som-way",
		topic: "motor",
		prompt: "Somatic motor signals travel:",
		choices: [
			"Down: a descending path from CNS to body",
			"Up from muscle to the cortex",
			"Through a ganglion outside the CNS",
			"Only inside a single dermatome"
		],
		why: "Somatic motor is descending, two neurons, no ganglion, ending on skeletal muscle."
	},
	{
		id: "mot-som-count",
		topic: "motor",
		prompt: "Somatic motor uses:",
		choices: [
			"Two multipolar neurons and no ganglia",
			"Three neurons and a ganglion outside the CNS",
			"One unipolar neuron",
			"Two neurons whose somas both sit in a ganglion"
		],
		why: "1st order: cerebrum to cord. 2nd order: cord to skeletal muscle. Ganglia are for the visceral path."
	},
	{
		id: "mot-som-cord",
		topic: "motor",
		prompt: "Inside the cord, somatic motor uses the:",
		choices: [
			"Anterior white column, then the anterior gray horn",
			"Posterior white column, then the posterior horn",
			"Lateral white column only",
			"Posterior root ganglion, then muscle"
		],
		why: "Axons descend in the anterior white column and synapse on somas in the anterior gray horn."
	},
	{
		id: "mot-som-order",
		topic: "motor",
		prompt: "Which sequence is the somatic motor path?",
		choices: [
			"Motor cortex → cross in the medulla → anterior horn → anterior root → spinal nerve → skeletal muscle",
			"Receptor → posterior horn → thalamus → muscle",
			"Brainstem → ganglion → skeletal muscle, skipping the horn",
			"Posterior root → posterior horn → biceps"
		],
		why: "Basal nuclei and the cerebellum may adjust the command (the lecture marks them +/−), but they are not required steps."
	},
	{
		id: "mot-som-cross",
		topic: "motor",
		prompt: "Somatic motor fibers cross in the:",
		choices: [
			"Medulla oblongata",
			"Thalamus",
			"Lumbar plexus",
			"Posterior root ganglion"
		],
		why: "Both the main sensory path and the somatic motor path cross in the medulla in this lecture."
	},
	{
		id: "mot-soma",
		topic: "motor",
		prompt: "The soma of the neuron that actually reaches skeletal muscle is in the:",
		choices: [
			"Anterior gray horn",
			"Posterior root ganglion",
			"Lateral gray horn",
			"Primary somatosensory cortex"
		],
		why: "That is the 2nd-order somatic motor neuron. Its axon leaves by the anterior root."
	},
	{
		id: "mot-vis-count",
		topic: "motor",
		prompt: "Visceral motor, the autonomic path, uses:",
		choices: [
			"Three neurons, with another synapse in a ganglion outside the CNS",
			"Two neurons and no ganglion",
			"One neuron from cortex to organ",
			"The same path as somatic motor"
		],
		why: "1st order: brainstem nuclei to the cord. 2nd: cord to a ganglion (preganglionic). 3rd: ganglion to the organ (postganglionic)."
	},
	{
		id: "mot-vis-cord",
		topic: "motor",
		prompt: "In the cord, visceral motor traffic uses the:",
		choices: [
			"Lateral white column and lateral gray horn, then the anterior root",
			"Posterior column and posterior horn",
			"Anterior horn only, and then no ganglion",
			"Central canal"
		],
		why: "It still leaves through the anterior root — all motor axons do — but the horn it uses is the lateral one."
	},
	{
		id: "mot-vis-after",
		topic: "motor",
		prompt: "After the spinal nerve, a visceral motor signal must still pass a:",
		choices: [
			"Ganglion, before it reaches the organ",
			"Skeletal muscle, before it reaches the skin",
			"Posterior root ganglion, before it reaches the cortex",
			"Thalamus, before it reaches a dermatome"
		],
		why: "The lecture’s point: visceral motor neurons synapse again outside the CNS before the organ."
	},
	{
		id: "mot-vis-start",
		topic: "motor",
		prompt: "The lecture starts the visceral motor path in:",
		choices: [
			"Nuclei of the pons or medulla",
			"The primary somatosensory cortex",
			"The posterior root ganglion",
			"The deltoid"
		],
		why: "Somatic motor starts in the motor cortex. Visceral motor starts in brainstem nuclei."
	},
	{
		id: "ans-def",
		topic: "ans",
		prompt: "The autonomic nervous system is the:",
		choices: [
			"Visceral motor system — activity outside conscious control",
			"Map of dermatomes",
			"Path for voluntary skeletal muscle",
			"Set of twelve cranial nerves"
		],
		why: "ANS = visceral motor. It has a sympathetic division and a parasympathetic division."
	},
	{
		id: "ans-sym",
		topic: "ans",
		prompt: "The sympathetic division is the:",
		choices: [
			"On-switch: fight or flight",
			"Off-switch: rest and digest",
			"Sensory path in the posterior columns",
			"Plexus of the anterior thigh"
		],
		why: "Sympathetic stimulates. Parasympathetic is the lecture’s off-switch."
	},
	{
		id: "ans-para",
		topic: "ans",
		prompt: "The parasympathetic division is the:",
		choices: [
			"Off-switch: rest and digest",
			"On-switch: fight or flight",
			"Somatic path to the quadriceps",
			"Knee-jerk reflex and nothing else"
		],
		why: "Rest and digest stores energy: digestion up, heart rate down, pupils tight."
	},
	{
		id: "ans-ne",
		topic: "ans",
		prompt: "The lecture’s sympathetic neurotransmitter is:",
		choices: [
			"Norepinephrine",
			"Acetylcholine",
			"Serotonin",
			"Dopamine at the neuromuscular junction"
		],
		why: "Norepinephrine mimics adrenaline. Acetylcholine is the parasympathetic transmitter in this lecture."
	},
	{
		id: "ans-ach",
		topic: "ans",
		prompt: "The lecture’s parasympathetic neurotransmitter is:",
		choices: [
			"Acetylcholine",
			"Norepinephrine",
			"Epinephrine as its only transmitter",
			"Glutamate onto skeletal muscle"
		],
		why: "Acetylcholine goes with rest, digest, and contraction of digestive muscle."
	},
	{
		id: "ans-sym-fx",
		topic: "ans",
		prompt: "Which set of effects is sympathetic?",
		choices: [
			"Dilated pupils, quieter gut, relaxed bladder, open airways, faster heart",
			"Tight pupils, busy gut, contracted bladder, narrow airways, slower heart",
			"Only contraction of the biceps",
			"Only hearing and balance"
		],
		why: "Fight or flight spends energy and opens the pipes for air and blood."
	},
	{
		id: "ans-para-fx",
		topic: "ans",
		prompt: "Which set of effects is parasympathetic?",
		choices: [
			"Tight pupils, busy gut, contracted bladder, narrow airways, slower heart",
			"Dilated pupils and a faster heart",
			"Extension of the elbow",
			"Abduction of the hip"
		],
		why: "Rest and digest does the opposite of the sympathetic list, point for point."
	},
	{
		id: "ans-anxiety",
		topic: "ans",
		prompt: "The lecture calls anxiety a disease of the:",
		choices: [
			"Sympathetic nervous system",
			"Parasympathetic nervous system",
			"Posterior columns",
			"Cerebellum"
		],
		why: "The “why this matters” slide ties anxiety to the fight-or-flight system."
	},
	{
		id: "ans-nicotine",
		topic: "ans",
		prompt: "The lecture says nicotine mimics the relaxing effects of the:",
		choices: [
			"Parasympathetic nervous system",
			"Sympathetic nervous system",
			"Somatic motor neurons",
			"Vestibulocochlear nerve"
		],
		why: "That slide pairs nicotine with rest-and-digest, not with fight-or-flight."
	},
	{
		id: "ans-tropic",
		topic: "ans",
		prompt: "Tropicamide is given to dilate the pupil. Dilation is which division’s effect, so the drop mimics it?",
		choices: [
			"Sympathetic",
			"Parasympathetic",
			"Somatic motor",
			"A sensory cranial nerve"
		],
		why: "The lecture lists pupil dilation under sympathetic and constriction under parasympathetic. The question asks which division the drop mimics — the dilation — so the answer is sympathetic."
	},
	{
		id: "ans-air",
		topic: "ans",
		prompt: "A drug that opens the airways is copying which division?",
		choices: [
			"Sympathetic — it dilates respiratory passages",
			"Parasympathetic — it constricts respiratory passages",
			"Somatic motor",
			"The posterior white columns"
		],
		why: "Open airways and a faster heart are sympathetic. Narrow airways are parasympathetic. The lecture’s α-blocker question is about blocking that sympathetic (norepinephrine) side."
	},
	{
		id: "ans-alpha",
		topic: "ans",
		prompt: "α receptors answer to norepinephrine. An α-blocker blocks signaling of the:",
		choices: [
			"Sympathetic division",
			"Parasympathetic division",
			"Olfactory nerve",
			"Posterior ramus only"
		],
		why: "Norepinephrine is the sympathetic transmitter. The lecture asks which division α2-blockers block — the norepinephrine side."
	},
	{
		id: "plex-def",
		topic: "plexus",
		prompt: "A plexus is:",
		choices: [
			"A network of nerves from ventral rami, serving the limbs",
			"A single cranial nerve",
			"Gray matter inside the cord",
			"The central canal"
		],
		why: "Cervical, lumbar, and sacral regions contribute ventral rami. The lecture then focuses on three limb plexuses."
	},
	{
		id: "plex-three",
		topic: "plexus",
		prompt: "Match the three plexuses.",
		choices: [
			"Brachial: arm. Lumbar: anterior leg. Sacral: posterior leg.",
			"Brachial: leg. Lumbar: arm. Sacral: face.",
			"All three serve only the hand",
			"Only a cervical plexus is named"
		],
		why: "The overview figure also shows a cervical plexus. The three the lecture asks you to learn for the limbs are brachial, lumbar, and sacral."
	},
	{
		id: "plex-ax",
		topic: "plexus",
		prompt: "The axillary nerve:",
		choices: [
			"Moves the shoulder (deltoid) and supplies shoulder skin",
			"Flexes the elbow (biceps)",
			"Extends the wrist and the fingers",
			"Adducts the thigh"
		],
		why: "Axillary is shoulder. Musculocutaneous is elbow flexion. Radial is extension."
	},
	{
		id: "plex-rad",
		topic: "plexus",
		prompt: "The radial nerve:",
		choices: [
			"Extends elbow, wrist, and digits (triceps, extensor digitorum); posterior arm skin",
			"Flexes the elbow via biceps",
			"Supplies the medial hand",
			"Flexes the knee"
		],
		why: "Radial = extensors of the upper limb, plus skin on the back of the arm."
	},
	{
		id: "plex-mc",
		topic: "plexus",
		prompt: "The musculocutaneous nerve:",
		choices: [
			"Flexes the elbow (biceps) and supplies lateral forearm skin",
			"Extends the elbow (triceps)",
			"Supplies the medial hand",
			"Extends the knee"
		],
		why: "Biceps brachii is the muscle the lecture names. The skin territory is the lateral forearm."
	},
	{
		id: "plex-med",
		topic: "plexus",
		prompt: "The median nerve:",
		choices: [
			"Flexes the wrist; skin of the forearm and the lateral hand, including the thumb",
			"Supplies only the medial hand",
			"Extends the digits",
			"Adducts the thigh"
		],
		why: "Lateral hand and thumb point to median. Medial hand points to ulnar."
	},
	{
		id: "plex-uln",
		topic: "plexus",
		prompt: "The ulnar nerve:",
		choices: [
			"Flexes the wrist and digits and supplies medial hand skin",
			"Supplies only the thumb side of the hand",
			"Abducts the shoulder",
			"Extends the knee"
		],
		why: "Ulnar is the medial hand. Median is the lateral hand."
	},
	{
		id: "plex-cts",
		topic: "plexus",
		prompt: "Carpal tunnel syndrome affects the:",
		choices: [
			"Median nerve",
			"Ulnar nerve",
			"Radial nerve",
			"Sciatic nerve"
		],
		why: "The lecture’s clinical question for the brachial plexus: carpal tunnel is the median nerve."
	},
	{
		id: "plex-fem",
		topic: "plexus",
		prompt: "The femoral nerve:",
		choices: [
			"Flexes the hip, extends the knee (quadriceps), and supplies anterior leg skin",
			"Adducts the thigh",
			"Extends the hip and flexes the knee",
			"Abducts the shoulder"
		],
		why: "Femoral is anterior: hip flexion and knee extension. Obturator is the adductor."
	},
	{
		id: "plex-obt",
		topic: "plexus",
		prompt: "The obturator nerve:",
		choices: [
			"Adducts the thigh (adductors) and supplies medial leg skin",
			"Extends the knee (quadriceps)",
			"Flexes the knee (biceps femoris)",
			"Extends the wrist"
		],
		why: "Lumbar plexus pair: femoral in front, obturator on the medial thigh."
	},
	{
		id: "plex-sci",
		topic: "plexus",
		prompt: "The sciatic nerve:",
		choices: [
			"Extends the hip, flexes the knee (biceps femoris); lateral and posterior thigh skin",
			"Flexes the hip and extends the knee",
			"Moves the shoulder",
			"Flexes the elbow"
		],
		why: "Sciatic is the sacral plexus nerve for the back of the thigh. It is not the femoral nerve."
	},
	{
		id: "plex-glut",
		topic: "plexus",
		prompt: "Superior and inferior gluteal nerves:",
		choices: [
			"Extend and abduct the hip (gluteal muscles)",
			"Adduct the thigh",
			"Flex the elbow",
			"Flex the wrist"
		],
		why: "Gluteal nerves are sacral-plexus motor to the gluteal muscles: extension and abduction."
	},
	{
		id: "plex-which",
		topic: "plexus",
		prompt: "Knee extension belongs to which nerve?",
		choices: [
			"Femoral",
			"Sciatic",
			"Obturator",
			"Radial"
		],
		why: "Quadriceps extend the knee and are femoral. Sciatic flexes the knee (biceps femoris)."
	},
	{
		id: "ref-def",
		topic: "reflex",
		prompt: "In this lecture a reflex is a response that is:",
		choices: [
			"Rapid, predictable, and involuntary, started by the spinal cord",
			"Slow, and decided in the cortex",
			"Always a hormone release with no neurons",
			"A voluntary stretch you choose to hold"
		],
		why: "The cord is the reflex center. These loops do not wait for a conscious decision."
	},
	{
		id: "ref-five",
		topic: "reflex",
		prompt: "The five parts of a reflex, in order, are:",
		choices: [
			"Receptor, sensory neuron, integration center, motor neuron, effector",
			"Effector, cortex, ganglion, horn, skin",
			"Ramus, plexus, nerve, root, horn",
			"First-order neuron, muscle, ganglion, CSF, dermatome"
		],
		why: "Stimulus in, decision in the cord, command out to a muscle or gland."
	},
	{
		id: "ref-center",
		topic: "reflex",
		prompt: "The integration center of these reflexes is:",
		choices: [
			"Entirely inside the spinal cord",
			"Only in the cerebral cortex",
			"Only in a visceral ganglion",
			"In the thalamus"
		],
		why: "That is why a reflex can happen without the brain finishing the loop."
	},
	{
		id: "ref-why",
		topic: "reflex",
		prompt: "The lecture says spinal reflexes matter because they:",
		choices: [
			"Help maintain homeostasis",
			"Replace the white columns",
			"Store words and names",
			"Form the cauda equina"
		],
		why: "The closing slide: reflexes maintain homeostasis."
	},
	{
		id: "ref-effector",
		topic: "reflex",
		prompt: "The effector in a reflex is:",
		choices: [
			"The muscle or gland that is stimulated",
			"The receptor that notices the stimulus",
			"Only the cerebellum",
			"The posterior root ganglion"
		],
		why: "Five stops end at the effector organ — muscle or gland — not back at the receptor."
	},
	{
		id: "clin-high",
		topic: "clinical",
		prompt: "A higher spinal-cord injury has a worse outlook because:",
		choices: [
			"Every white column passes through the neck, including columns headed for the legs",
			"The cauda equina sits in the neck",
			"Gray matter exists only above C3",
			"Cranial nerves leave the lumbar cord"
		],
		why: "Leg fibers still have to travel the cervical cord. Damage there can take the arms and the legs."
	},
	{
		id: "clin-plegia",
		topic: "clinical",
		prompt: "Paraplegia and quadriplegia, as the lecture uses them:",
		choices: [
			"A lower injury can take the legs only; a higher injury takes arms and legs",
			"Paraplegia always includes the arms",
			"Quadriplegia spares the hands",
			"Both words mean loss of hearing"
		],
		why: "Paraplegia: inferior injury, legs. Quadriplegia: superior injury, arms and legs."
	},
	{
		id: "clin-breath",
		topic: "clinical",
		prompt: "Injuries of the upper neck can take out:",
		choices: [
			"Respiration",
			"Smell only",
			"Only the knee jerk, with breathing spared",
			"Hearing alone"
		],
		why: "The lecture flags upper-cervical damage as a threat to breathing, not just to the limbs."
	},
	{
		id: "clin-vzv",
		topic: "clinical",
		prompt: "Varicella-zoster (chickenpox) lies dormant in posterior root ganglia. Its return is:",
		choices: [
			"Shingles",
			"A femoral neuropathy from a tight belt",
			"Parkinson disease",
			"A leak of cerebrospinal fluid"
		],
		why: "The virus waits in sensory cell bodies. Recrudescence is shingles."
	},
	{
		id: "clin-band",
		topic: "clinical",
		prompt: "Shingles shows up in a band of skin because the virus was living in:",
		choices: [
			"Sensory cell bodies of one spinal nerve",
			"Motor neurons of the anterior horn only",
			"The quadriceps",
			"The central canal, with no nerve involved"
		],
		why: "Those somas belong to one pair of spinal nerves, and that pair owns one dermatome."
	},
	{
		id: "clin-both",
		topic: "clinical",
		prompt: "Why can a neck injury paralyze the legs even though the legs are not in the neck?",
		choices: [
			"Axons to the legs already occupy white columns at cervical levels",
			"The lumbar plexus forms in the neck",
			"Dermatomes of the feet sit on the scalp",
			"The sciatic nerve exits between C1 and C2"
		],
		why: "All white columns travel through the neck, including the ones going to the legs."
	}
];
var seen = /* @__PURE__ */ new Set();
for (const card of CARDS) {
	if (seen.has(card.id)) throw new Error(`Duplicate card id: ${card.id}`);
	seen.add(card.id);
	if (card.choices.length !== 4) throw new Error(`Need 4 choices: ${card.id}`);
	if (new Set(card.choices).size !== 4) throw new Error(`Duplicate choice: ${card.id}`);
}
var STORAGE_KEY = "cord-deck-v1";
function shuffle(items) {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const swap = next[i];
		next[i] = next[j];
		next[j] = swap;
	}
	return next;
}
function poolIds(topic, mode, tags) {
	return CARDS.filter((card) => {
		if (topic !== "all" && card.topic !== topic) return false;
		const tag = tags[card.id];
		if (mode === "learning") return tag !== "known";
		if (mode === "needs") return tag === "needs-work";
		if (mode === "known") return tag === "known";
		return true;
	}).map((card) => card.id);
}
function readSave() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		const tags = {};
		if (parsed.tags && typeof parsed.tags === "object") {
			for (const [id, tag] of Object.entries(parsed.tags)) if (tag === "known" || tag === "needs-work") tags[id] = tag;
		}
		return {
			tags,
			topic: parsed.topic === "all" || TOPICS.includes(parsed.topic ?? "") ? parsed.topic : "all",
			mode: parsed.mode === "learning" || parsed.mode === "needs" || parsed.mode === "known" || parsed.mode === "all" ? parsed.mode : "learning"
		};
	} catch {
		return null;
	}
}
function writeSave(save) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(save));
}
var BY_ID = new Map(CARDS.map((card) => [card.id, card]));
var MODES = [
	{
		id: "learning",
		label: "Still learning",
		hint: "Hides cards you marked known"
	},
	{
		id: "needs",
		label: "Needs work",
		hint: "Only cards you flagged"
	},
	{
		id: "known",
		label: "Known",
		hint: "The cards a shuffle would skip"
	},
	{
		id: "all",
		label: "Whole lecture",
		hint: "Every card, known included"
	}
];
function dealChoices() {
	return shuffle([
		0,
		1,
		2,
		3
	]);
}
function begin(order, keepScore) {
	if (order.length === 0) return {
		order,
		cursor: 0,
		phase: "done",
		picked: null,
		dealt: [
			0,
			1,
			2,
			3
		],
		correct: keepScore?.correct ?? 0,
		missed: keepScore?.missed ?? 0,
		missedIds: keepScore?.missedIds ?? []
	};
	return {
		order,
		cursor: 0,
		phase: "answer",
		picked: null,
		dealt: dealChoices(),
		correct: 0,
		missed: 0,
		missedIds: []
	};
}
function DeckApp() {
	const [tags, setTags] = (0, import_react.useState)({});
	const [topic, setTopic] = (0, import_react.useState)("all");
	const [mode, setMode] = (0, import_react.useState)("learning");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [play, setPlay] = (0, import_react.useState)(() => begin([]));
	const [armReset, setArmReset] = (0, import_react.useState)(false);
	const [booted, setBooted] = (0, import_react.useState)(false);
	const tagsRef = (0, import_react.useRef)(tags);
	const playRef = (0, import_react.useRef)(play);
	const modeRef = (0, import_react.useRef)(mode);
	const topicRef = (0, import_react.useRef)(topic);
	tagsRef.current = tags;
	playRef.current = play;
	modeRef.current = mode;
	topicRef.current = topic;
	(0, import_react.useEffect)(() => {
		const saved = readSave();
		if (saved) {
			setTags(saved.tags);
			setTopic(saved.topic);
			setMode(saved.mode);
		}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		writeSave({
			tags,
			topic,
			mode
		});
	}, [
		tags,
		topic,
		mode,
		ready
	]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		setPlay(begin(shuffle(poolIds(topic, mode, tagsRef.current))));
		setBooted(true);
		setArmReset(false);
	}, [
		ready,
		topic,
		mode
	]);
	const card = play.phase === "done" ? void 0 : BY_ID.get(play.order[play.cursor] ?? "");
	const counts = (0, import_react.useMemo)(() => {
		let known = 0;
		let needs = 0;
		for (const item of CARDS) {
			const tag = tags[item.id];
			if (tag === "known") known += 1;
			if (tag === "needs-work") needs += 1;
		}
		return {
			known,
			needs,
			total: CARDS.length
		};
	}, [tags]);
	function reshuffle(nextMode = modeRef.current, nextTopic = topicRef.current) {
		setPlay(begin(shuffle(poolIds(nextTopic, nextMode, tagsRef.current))));
	}
	function pick(position) {
		const current = playRef.current;
		const currentCard = BY_ID.get(current.order[current.cursor] ?? "");
		if (!currentCard || current.phase !== "answer") return;
		const right = current.dealt[position] === 0;
		setPlay({
			...current,
			phase: "review",
			picked: position,
			correct: current.correct + (right ? 1 : 0),
			missed: current.missed + (right ? 0 : 1),
			missedIds: right ? current.missedIds : [...current.missedIds, currentCard.id]
		});
	}
	function goNext() {
		const current = playRef.current;
		if (current.phase !== "review") return;
		const next = current.cursor + 1;
		if (next >= current.order.length) {
			setPlay({
				...current,
				cursor: next,
				phase: "done",
				picked: null
			});
			return;
		}
		setPlay({
			...current,
			cursor: next,
			phase: "answer",
			picked: null,
			dealt: dealChoices()
		});
	}
	function applyTag(tag) {
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
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		function onKey(event) {
			if (event.metaKey || event.ctrlKey || event.altKey) return;
			const target = event.target;
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
	const activeTag = card ? tags[card.id] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full min-w-0 max-w-5xl md:grid md:grid-cols-[4.75rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden border-r border-line md:flex md:flex-col md:items-center md:justify-between md:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl leading-none text-teal",
						children: "11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "spine text-xs font-semibold tracking-widest text-muted uppercase",
						children: "Spinal cord"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted tabular-nums",
						children: CARDS.length
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 px-4 pt-5 pb-16 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-teal uppercase",
								children: "Lecture 11"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl leading-none text-ink sm:text-5xl",
								children: "Cord Deck"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-base text-muted text-pretty",
								children: "Spinal cord, pathways, and the peripheral nervous system. Answer the card, then mark it. The next shuffle leaves out anything you marked known."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-cream px-4 text-sm font-semibold text-ink hover:border-teal",
							onClick: () => reshuffle(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Shuffle"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Still in play",
								value: mode === "known" ? play.order.length : remaining
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Known",
								value: counts.known
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Needs work",
								value: counts.needs
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",
						role: "radiogroup",
						"aria-label": "Which cards to deal",
						children: MODES.map((item) => {
							const on = mode === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "radio",
								"aria-checked": on,
								title: item.hint,
								onClick: () => setMode(item.id),
								className: on ? "min-h-11 rounded-full bg-ink px-3 text-sm font-semibold text-cream" : "min-h-11 rounded-full border border-line bg-cream px-3 text-sm font-semibold text-ink hover:border-teal",
								children: item.label
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 max-w-full overflow-x-auto pb-1",
						role: "radiogroup",
						"aria-label": "Topic",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-max gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicChip, {
								label: "All",
								on: topic === "all",
								onClick: () => setTopic("all")
							}), TOPICS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicChip, {
								label: TOPIC_LABEL[id],
								on: topic === id,
								onClick: () => setTopic(id)
							}, id))]
						})
					}),
					!ready || !booted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-muted",
						children: "Dealing the first card…"
					}) : play.phase === "done" || !card ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonePanel, {
						play,
						mode,
						known: counts.known,
						needs: counts.needs,
						onShuffle: () => reshuffle(),
						onNeeds: () => setMode("needs"),
						onLearning: () => setMode("learning"),
						onRetry: retryMissed,
						canRetry: play.missedIds.some((id) => tags[id] !== "known"),
						armReset,
						onArm: () => setArmReset(true),
						onReset: () => {
							tagsRef.current = {};
							setTags({});
							setArmReset(false);
							if (modeRef.current === "learning") setPlay(begin(shuffle(poolIds(topicRef.current, "learning", {}))));
							else setMode("learning");
						}
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "sheet rise mt-5 rounded-2xl border border-line bg-cream p-4 sm:p-7",
						"data-card": card.id,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 text-xs font-semibold tracking-widest text-muted uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: TOPIC_LABEL[card.topic] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [
										play.cursor + 1,
										" / ",
										play.order.length
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-1 overflow-hidden rounded-full bg-paper-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-teal",
									style: { width: `${play.cursor / play.order.length * 100}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-2xl leading-snug text-balance text-ink sm:text-3xl",
								children: card.prompt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid gap-2",
								role: "group",
								"aria-label": "Choices",
								children: play.dealt.map((original, position) => {
									const text = card.choices[original] ?? "";
									const locked = play.phase === "review";
									const isCorrect = original === 0;
									const isPicked = play.picked === position;
									let tone = "border-line bg-paper text-ink hover:border-teal";
									if (locked && isCorrect) tone = "border-teal bg-teal text-cream";
									else if (locked && isPicked && !isCorrect) tone = "border-copper bg-copper text-cream";
									else if (locked) tone = "border-line bg-paper text-muted";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										disabled: locked,
										onClick: () => pick(position),
										className: `flex min-h-12 items-start gap-3 rounded-xl border px-3 py-3 text-left text-base leading-snug ${tone}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-paper-deep text-sm font-bold text-ink",
											children: position + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text })]
									}, `${card.id}-${original}`);
								})
							}),
							play.phase === "review" && play.picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								card,
								picked: play.picked,
								dealt: play.dealt
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 border-t border-line pt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-widest text-muted uppercase",
										children: "Tag this card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 grid gap-2 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagButton, {
											on: activeTag === "known",
											label: "I know this",
											detail: "Left out of the next shuffle",
											onClick: () => applyTag("known"),
											kind: "known"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagButton, {
											on: activeTag === "needs-work",
											label: "Needs work",
											detail: "Comes back in later shuffles",
											onClick: () => applyTag("needs-work"),
											kind: "needs"
										})]
									}),
									play.phase === "review" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: goNext,
										className: "mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-4 text-base font-semibold text-cream hover:bg-teal-deep sm:w-auto sm:px-6",
										children: ["Next card", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "size-4",
											"aria-hidden": "true"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted",
										children: "Pick an answer. Keys 1–4 answer, K known, W needs work, N next, S shuffle."
									})
								]
							})
						]
					}),
					answered > 0 && play.phase !== "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted tabular-nums",
						children: [
							"This pass: ",
							play.correct,
							" correct, ",
							play.missed,
							" missed",
							answered > 0 ? ` · ${Math.round(play.correct / answered * 100)}%` : ""
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xl text-sm text-muted text-pretty",
						children: "Drawn from Lecture 11, The Spinal Cord and Pathways. White-column jobs follow the lecture’s map (posterior sensory, anterior somatic motor, lateral visceral motor), which is simpler than a full tract atlas."
					})
				]
			})]
		})
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-cream px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs font-semibold tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-display text-2xl leading-tight text-ink tabular-nums",
			children: value
		})]
	});
}
function TopicChip({ label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "radio",
		"aria-checked": on,
		onClick,
		className: on ? "shrink-0 min-h-11 rounded-full bg-teal px-3 text-sm font-semibold text-cream" : "shrink-0 min-h-11 rounded-full border border-line bg-cream px-3 text-sm font-semibold text-ink hover:border-teal",
		children: label
	});
}
function TagButton({ on, label, detail, onClick, kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: `min-h-12 rounded-xl border px-3 py-2 text-left ${on ? kind === "known" ? "border-teal bg-teal text-cream" : "border-copper bg-copper text-cream" : "border-line bg-paper text-ink hover:border-ink"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `block text-xs ${on ? "text-cream" : "text-muted"}`,
			children: detail
		})]
	});
}
function Result({ card, picked, dealt }) {
	const right = dealt[picked] === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: right ? "rise mt-4 rounded-xl bg-teal px-4 py-3 text-cream" : "rise mt-4 rounded-xl bg-copper px-4 py-3 text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-lg font-semibold",
				children: [right ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-5",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "size-5",
					"aria-hidden": "true"
				}), right ? "Correct" : "Incorrect"]
			}),
			!right ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-cream",
				children: ["Answer: ", card.choices[0]]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-sm text-pretty ${right ? "mt-1 text-cream" : "mt-2 text-cream"}`,
				children: card.why
			})
		]
	});
}
function DonePanel({ play, mode, known, needs, onShuffle, onNeeds, onLearning, onRetry, canRetry, armReset, onArm, onReset }) {
	const answered = play.correct + play.missed;
	const freshEmpty = play.order.length === 0 && answered === 0;
	let title = "This pile is finished";
	let body = "Known cards stay out of the next shuffle. Needs-work cards come back.";
	if (freshEmpty && mode === "learning") {
		title = known > 0 ? "Nothing left to deal" : "The pile is empty";
		body = known > 0 ? "Every card in this view is marked known, so a shuffle skips them." : "No cards match this topic.";
	} else if (freshEmpty && mode === "needs") {
		title = "No cards need work";
		body = "Flag a card as needs work and it will show up in this pile.";
	} else if (freshEmpty && mode === "known") {
		title = "No known cards yet";
		body = "Mark a card “I know this” and later shuffles will leave it out.";
	} else if (answered > 0) body = `${play.correct} correct, ${play.missed} missed${answered ? ` · ${Math.round(play.correct / answered * 100)}%` : ""}. Known cards will not be in the next shuffle.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sheet rise mt-5 rounded-2xl border border-line bg-cream p-5 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-balance text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-lg text-base text-muted text-pretty",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onShuffle,
						className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Shuffle again"]
					}),
					canRetry && !freshEmpty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onRetry,
						className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Retry missed"]
					}) : null,
					needs > 0 && mode !== "needs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onNeeds,
						className: "inline-flex min-h-12 items-center justify-center rounded-full border border-copper px-5 text-sm font-semibold text-copper",
						children: "Study needs work"
					}) : null,
					mode !== "learning" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onLearning,
						className: "inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink",
						children: "Back to still learning"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							if (!armReset) {
								onArm();
								return;
							}
							onReset();
						},
						className: "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-muted hover:text-ink",
						children: armReset ? "Confirm: clear every tag" : "Clear known & needs-work"
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeckApp, {});
}
//#endregion
export { Home as component };
