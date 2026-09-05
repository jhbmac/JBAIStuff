import Link from "next/link";

const projects = [
  {
    name: "JBAIStuff",
    description: "The home of everything I'm building — experiments, demos, and tools for working with AI.",
    status: "Live",
    url: "/",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-indigo-50/60 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950/40">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Projects &amp; experiments by Jeff Brown
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
            Building useful things with AI
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl dark:text-zinc-400">
            A collection of ideas, prototypes, and tools — learn, tinker, and
            ship. This site is a work in progress, like everything on it.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View projects
            </Link>
            <Link
              href="https://github.com/jhbmac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-transparent dark:text-white dark:hover:bg-zinc-800"
            >
              GitHub profile
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                  {project.status}
                </span>
              </div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Jeff Brown
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/jhbmac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              GitHub
            </Link>
            <a
              href="mailto:hello@jbaistuff.dev"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}