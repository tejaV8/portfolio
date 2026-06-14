import { GitHubLogo, LinkedInLogo } from "@/components/BrandLogo";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 bg-black  text-zinc-500 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Bhanu Teja. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            <GitHubLogo className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/bhanu-teja-715995332/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            <LinkedInLogo className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
