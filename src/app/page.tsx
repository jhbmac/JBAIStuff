import ThemeToggle from "@/components/ThemeToggle";
import {
  profile,
  summary,
  skills,
  experiences,
  education,
  certifications,
  awards,
} from "@/data/resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-4xl items-start justify-between gap-4 px-6 py-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              {profile.displayName}
            </h1>
            <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Systems Programmer · Developer · Systems Engineer · Software QA
              Specialist
            </p>
            {profile.email ? (
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sky-600 underline-offset-4 hover:underline dark:text-sky-400"
                >
                  {profile.email}
                </a>
              </p>
            ) : null}
          </div>
          <ThemeToggle />
        </div>
      </header>

      <section className="mx-auto w-full max-w-4xl px-6 py-10">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Summary
        </h2>
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          {summary}
        </p>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-10">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Experience
        </h2>
        <div className="mt-4 space-y-8">
          {experiences.map((exp) => (
            <article key={`${exp.organization}-${exp.role}-${exp.dates}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {exp.dates}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {exp.organization}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-10">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Skills &amp; Tools
        </h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {group.label}
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-10">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Education
        </h2>
        <div className="mt-4 space-y-4">
          {education.map((ed) => (
            <article key={ed.institution}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {ed.institution}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {ed.dates}
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {ed.detail}
              </p>
            </article>
          ))}
        </div>

        <h2 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-white">
          Certifications
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>

        <h2 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-white">
          Awards &amp; Honors
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </section>

      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-2 px-6 py-8 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Jeff Brown
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Resume website
          </p>
        </div>
      </footer>
    </main>
  );
}