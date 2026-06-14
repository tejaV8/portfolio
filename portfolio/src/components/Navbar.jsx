import { useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-2xl -translate-x-1/2 sm:top-5">
      <ul className="flex items-center justify-between gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/45 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-md">
        {links.map((item) => (
          <li key={item.href} className="relative">
            {active === item.label && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <a
              href={item.href}
              onClick={() => setActive(item.label)}
              className="relative z-10 block whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:text-white sm:px-4 sm:text-sm"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
