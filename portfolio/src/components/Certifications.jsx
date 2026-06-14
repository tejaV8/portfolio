import { Award, BadgeCheck, ExternalLink, Trophy } from "lucide-react";
import oracleCertificate from "@/assets/certificates/oracle.png";
import hackerRankJavaCertificate from "@/assets/certificates/hackerrank-java.png";
import kagglePythonCertificate from "@/assets/certificates/kaggle-python.jpg";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure Networking Professional",
    issuer: "Oracle",
    year: "2025",
    image: oracleCertificate,
    type: "Professional Certification",
    description:
      "Recognizes professional-level understanding of Oracle Cloud Infrastructure networking concepts and services.",
  },
  {
    title: "Java Basic",
    issuer: "HackerRank",
    year: "2025",
    image: hackerRankJavaCertificate,
    type: "Skill Certification",
    description:
      "Validated core Java programming fundamentals through HackerRank's skill certification assessment.",
  },
  {
    title: "Python",
    issuer: "Kaggle",
    year: "2025",
    image: kagglePythonCertificate,
    type: "Course Certificate",
    description:
      "Completed Python learning through Kaggle, covering programming basics used in data and ML workflows.",
  },
];

const recognitions = [
  "Professional cloud infrastructure credential from Oracle",
  "Verified Java programming skill certification from HackerRank",
  "Python learning milestone completed through Kaggle",
];

function CertificateCard({ title, issuer, year, image, type, description }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex h-56 items-center justify-center overflow-hidden border-b border-white/10 bg-white p-4">
        <img
          src={image}
          alt={`${issuer} ${title} certificate`}
          className="max-h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
            {issuer}
          </span>
          <span className="rounded-lg border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-400">
            {year}
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-zinc-500">{type}</p>
        <p className="mt-4 leading-7 text-zinc-400">{description}</p>
      </div>
    </article>
  );
}

export default function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Certifications
      </p>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Certifications, achievements, and recognitions.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A focused set of credentials that show my progress across cloud
            infrastructure, programming fundamentals, and Python-based learning.
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-200">
              <Trophy className="size-5" />
            </div>
            <h3 className="text-xl font-semibold text-white">Recognition</h3>
          </div>

          <ul className="space-y-3">
            {recognitions.map((recognition) => (
              <li
                key={recognition}
                className="flex gap-3 text-sm leading-6 text-zinc-300"
              >
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-cyan-200" />
                <span>{recognition}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.title} {...certificate} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-zinc-300">
          <Award className="size-4 text-cyan-200" />
          3 verified learning milestones
        </div>
        <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-zinc-300">
          <ExternalLink className="size-4 text-cyan-200" />
          Cloud, Java, and Python
        </div>
      </div>
    </section>
  );
}
