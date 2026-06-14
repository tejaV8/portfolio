import { ArrowUpRight } from "lucide-react";
import { GitHubLogo } from "@/components/BrandLogo";
import codeSlateImage from "@/assets/projects/codeslate.png";
import matriCalcImage from "@/assets/projects/matricalc.png";

const projects = [
  {
    title: "CodeSlate",
    label: "Workspace Platform",
    image: codeSlateImage,
    description:
      "A secure full-stack workspace platform that allows users to create and access private workspaces using encrypted keys. Features include save, save & close, lock protection, permanent deletion, and cross-device data access.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bcrypt",
      "Cloudflare Workers",
    ],
    liveUrl: "",
    githubUrl: "#",
  },
  {
    title: "MatriCalc",
    label: "Matrix Calculator",
    image: matriCalcImage,
    description:
      "A matrix calculator supporting addition, subtraction, multiplication, and transpose operations. Built with React and TypeScript with dynamic matrix sizing and an intuitive user experience.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "https://matricalc.lovable.app/",
    githubUrl: "#",
  },
];

function ProjectCard({
  title,
  label,
  image,
  description,
  technologies,
  liveUrl,
  githubUrl,
}) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="relative h-64 overflow-hidden border-b border-white/10 bg-zinc-950">
        <img
          src={image}
          alt={`${title} ${label} screenshot`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/55 px-3 py-2 text-sm text-zinc-200 backdrop-blur">
          {label}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-zinc-400">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Live Demo
            <ArrowUpRight className="size-4" />
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-white transition hover:bg-white/5"
          >
            GitHub
            <GitHubLogo className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Projects
      </p>

      <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
        Featured projects
      </h2>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400">
        A collection of projects that showcase my skills in full-stack
        development, problem solving, and modern web technologies.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
