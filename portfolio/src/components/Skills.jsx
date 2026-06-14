import { Code2, Database, Layers3, Terminal, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks",
    icon: Layers3,
    skills: ["React", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MongoDB", "Firebase"],
  },
  {
    category: "Concepts",
    icon: Terminal,
    skills: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Problem Solving"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "REST APIs"],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Skills
      </p>

      <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
        Technologies and tools I work with.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map(({ category, icon: Icon, skills }, index) => (
          <article
            key={category}
            className={
              index === 0
                ? "rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:col-span-2"
                : "rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            }
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-200">
                <Icon className="size-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
