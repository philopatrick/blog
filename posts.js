/*
 * Your blog content lives here.
 *
 * To publish a new note, copy one post object and change its values.
 * - id must be unique and URL-friendly.
 * - date uses YYYY-MM-DD.
 * - set pinned to true to feature it at the top of the home page.
 * - body accepts simple HTML: p, h2, blockquote, ul, ol, and pre/code.
 */
window.BLOG_POSTS = [
  {
    id: "building-this-place",
    title: "Building a place of my own",
    excerpt: "Why this small corner of the internet exists—and what I hope to keep here.",
    date: "2026-09-12",
    readingTime: "3 min read",
    tags: ["meta", "making"],
    pinned: true,
    accent: "coral",
    body: `
      <p>There is something grounding about having a place on the internet that moves at your own pace. No feed to satisfy, no format to squeeze into—just enough room for a thought to become clear.</p>
      <p>This blog is that place for me. It is a notebook in public: part record, part workshop, and part invitation to stay curious.</p>
      <h2>What belongs here</h2>
      <p>I want to write about things I am learning, choices I am thinking through, and small details that are too easy to lose. Some notes will be practical. Others will simply follow an interesting question.</p>
      <blockquote>The best personal sites feel less like publications and more like rooms somebody has taken care to arrange.</blockquote>
      <p>The shape of the archive will reveal itself over time. For now, beginning is enough.</p>
    `,
  },
  {
    id: "software-should-feel-quiet",
    title: "Software should feel quiet",
    excerpt: "A few principles for making digital tools that leave space for the person using them.",
    date: "2026-09-06",
    readingTime: "5 min read",
    tags: ["design", "technology"],
    pinned: true,
    accent: "blue",
    body: `
      <p>The software I return to rarely demands attention. It has a point of view, but it does not insist on becoming the center of mine.</p>
      <p>Quiet software is not empty software. It is confident enough to remove the unnecessary and careful enough to make the necessary feel obvious.</p>
      <h2>A quieter checklist</h2>
      <ul>
        <li>Make the next action clear without making everything loud.</li>
        <li>Use motion to explain change, not decorate waiting.</li>
        <li>Let defaults carry the common case.</li>
        <li>Remember that the user has a life outside the product.</li>
      </ul>
      <p>Restraint is not a lack of imagination. Often, it is imagination edited into focus.</p>
    `,
  },
  {
    id: "notes-on-attention",
    title: "Notes on attention",
    excerpt: "What changes when attention is treated as a place, not a resource.",
    date: "2026-08-24",
    readingTime: "4 min read",
    tags: ["thinking", "life"],
    pinned: false,
    accent: "green",
    body: `
      <p>We often talk about attention as though it were currency: something to spend, save, capture, or waste. The metaphor is useful, but incomplete.</p>
      <p>Attention also behaves like a place. Stay somewhere long enough and you begin to notice its texture. Return often enough and paths appear.</p>
      <h2>Choosing where to stand</h2>
      <p>The question is not only “What deserves my attention?” It is also “What kind of person does this place allow me to become?”</p>
      <p>A book, a conversation, a walk without headphones—each creates a different room for the mind. Choosing carefully may matter more than managing every minute.</p>
    `,
  },
  {
    id: "small-tools-long-lives",
    title: "Small tools, long lives",
    excerpt: "In praise of simple things that keep working after the excitement moves on.",
    date: "2026-07-18",
    readingTime: "3 min read",
    tags: ["technology", "making"],
    pinned: false,
    accent: "gold",
    body: `
      <p>A useful tool does not need to become a platform. Sometimes it can remain a tool: legible, limited, dependable.</p>
      <p>Smallness gives software a chance to become familiar. Its edges can be understood. Its behavior can become part of muscle memory. It can be maintained by a person, not an institution.</p>
      <p>There is ambition in longevity—the patient ambition to keep doing one thing well.</p>
    `,
  },
  {
    id: "the-value-of-a-logbook",
    title: "The value of a logbook",
    excerpt: "Memory edits. A simple daily record gives the past some texture back.",
    date: "2025-12-29",
    readingTime: "4 min read",
    tags: ["practice", "life"],
    pinned: false,
    accent: "violet",
    body: `
      <p>Memory is a talented editor. It keeps the dramatic turns, compresses the repetition, and quietly discards the details that once filled our days.</p>
      <p>A logbook resists that compression. A sentence or two each day is enough: what happened, what mattered, what question remained open.</p>
      <h2>Keep the bar low</h2>
      <p>The system works because it asks almost nothing. There is no demand for insight. The value arrives later, when small entries assemble into a life at its actual scale.</p>
    `,
  },
  {
    id: "begin-before-ready",
    title: "Begin before it feels ready",
    excerpt: "A reminder that clarity often follows the first imperfect attempt.",
    date: "2025-10-03",
    readingTime: "2 min read",
    tags: ["making", "practice"],
    pinned: false,
    accent: "coral",
    body: `
      <p>Readiness is often a story we tell while waiting for uncertainty to disappear. It rarely does.</p>
      <p>Beginning creates information that planning cannot: where the friction is, which questions matter, and whether the idea still feels alive once it has weight.</p>
      <p>The first version is not a verdict. It is a way of asking reality a better question.</p>
    `,
  },
];
