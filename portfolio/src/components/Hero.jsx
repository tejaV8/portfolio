import { ArrowDown, Mail } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-32 text-center text-white">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
        <img
          src="https://avatars.githubusercontent.com/u/205764482?v=4"
          alt="Bhanu Teja"
          className="relative mb-7 size-36 rounded-full border border-white/20 object-cover shadow-2xl shadow-cyan-950/40 sm:size-40"
        />
      </div>

      <BorderBeam
        className="mb-5"
        contentClassName="border border-white/10 bg-black/80 backdrop-blur"
        borderWidth={1}
        duration={4}
        colorFrom="#38bdf8"
        colorTo="#a78bfa"
      >
        <p className="px-4 py-2 text-sm text-zinc-300">
          CSE student focused on web development and DSA
        </p>
      </BorderBeam> 

      <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white md:text-7xl">
        Hi, I&apos;m Bhanu Teja.
        <span className="block text-zinc-400">I build clean web projects.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        I am learning by building practical applications, strengthening problem
        solving fundamentals, and turning ideas into simple, reliable user
        experiences.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
        >
          View Projects
          <ArrowDown className="size-4" />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
        >
          Contact Me
          <Mail className="size-4" />
        </a>
      </div>
    </section>
  );
}
