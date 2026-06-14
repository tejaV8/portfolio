import { BookOpen, BrainCircuit, Target } from "lucide-react";

const highlights = [
  {
    title: "Education",
    icon: BookOpen,
    body: "B.Tech in Computer Science Engineering at SRIIT College, Hyderabad, with focus on software development, DSA, web technologies, and AI/ML.",
    meta: "Expected graduation: 2028",
  },
  {
    title: "Interests",
    icon: BrainCircuit,
    body: "Data structures, full-stack web development, artificial intelligence, machine learning, and building practical products from scratch.",
    meta: "Learning through projects",
  },
  {
    title: "Goal",
    icon: Target,
    body: "Grow into a strong software engineer who can design useful products, write maintainable code, and keep improving through real-world work.",
    meta: "Long-term focus",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        About Me
      </p>

      <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
        Passionate about building software and solving real-world problems.
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        I am a Computer Science Engineering student focused on strengthening my
        foundations in software development, problem-solving, and modern web
        technologies. I enjoy learning by building projects and continuously
        improving my technical skills.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {highlights.map(({ title, icon: Icon, body, meta }) => (
          <article
            key={title}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="mb-5 flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-200">
              <Icon className="size-5" />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 leading-7 text-zinc-300">{body}</p>
            <p className="mt-5 text-sm text-zinc-500">{meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
