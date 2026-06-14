import { Mail, Send } from "lucide-react";
import { GitHubLogo, LinkedInLogo } from "@/components/BrandLogo";

const contactEmail = "your.email@example.com";
const linkedInUrl = "https://www.linkedin.com/in/bhanu-teja-715995332/";
const githubUrl = "https://github.com/";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Contact
      </p>

      <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
        Let&apos;s build something useful.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        Have an opportunity, project idea, or collaboration in mind? Reach me
        through email, LinkedIn, GitHub, or send a message below.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <a
          href={`mailto:${contactEmail}`}
          className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-200">
            <Mail className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm text-zinc-500">Email</span>
            <span className="block truncate font-medium">{contactEmail}</span>
          </span>
        </a>

        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-200">
            <LinkedInLogo className="size-5" />
          </span>
          <span>
            <span className="block text-sm text-zinc-500">LinkedIn</span>
            <span className="font-medium">View profile</span>
          </span>
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-200">
            <GitHubLogo className="size-5" />
          </span>
          <span>
            <span className="block text-sm text-zinc-500">GitHub</span>
            <span className="font-medium">View profile</span>
          </span>
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-300">Name</span>
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="h-12 w-full rounded-lg border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-200/60"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-300">Email</span>
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              className="h-12 w-full rounded-lg border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-200/60"
            />
          </label>
        </div>

        <label className="mt-5 block space-y-2">
          <span className="text-sm font-medium text-zinc-300">Message</span>
          <textarea
            required
            name="message"
            rows={7}
            placeholder="Tell me about your project or opportunity..."
            className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-200/60"
          />
        </label>

        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
        >
          Send Message
          <Send className="size-4" />
        </button>
      </form>
    </section>
  );
}
