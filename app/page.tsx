export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <header className="border-b border-zinc-800 px-6 py-4">
        <span className="text-lg font-semibold tracking-tight">AutoDSM</span>
      </header>
      <main className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
          Design system intelligence
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Turn your repository into a living brand system
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-zinc-400">
          Scan tokens, document decisions, and ship a source-of-truth your product and marketing teams can
          trust—without leaving the tools you already use.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-200">
            Coming soon
          </span>
        </div>
      </main>
      <footer className="border-t border-zinc-800 px-6 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} AutoDSM
      </footer>
    </div>
  );
}
