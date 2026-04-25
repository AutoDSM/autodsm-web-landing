/** Source of truth for landing FAQ (page + JSON-LD FAQPage). */
export const LANDING_FAQS = [
  {
    question: "How is this different from Storybook?",
    answer:
      "Storybook depends on authored stories. AutoDSM reads source code directly, generates the living system, and can open pull requests to resolve drift.",
  },
  {
    question: "Can it work with AI coding tools?",
    answer:
      "Yes. The free CLI generates structured context files and components.txt so Cursor, Claude Code, Copilot, and Codex can build with the real system.",
  },
  {
    question: "Does it actually fix issues or just report them?",
    answer:
      "It does both. AutoDSM detects issues, proposes scoped fixes, validates results, and opens PRs for human review.",
  },
] as const;
