import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-10 flex flex-col justify-center items-center gap-4">
      <p className="text-sm">Follow us on:</p>
      <div className="flex gap-4">
        <a
          href="https://github.com/nikhilsundriya"
          target="_blank"
          rel="noreferrer"
          aria-label="Nikhil on GitHub"
        >
          <Github className="h-5 w-5 stroke-[0.75]" />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhilsundriya/"
          target="_blank"
          rel="noreferrer"
          aria-label="Nikhil on LinkedIn"
        >
          <Linkedin className="h-5 w-5 stroke-[0.75]" />
        </a>
        <a
          href="https://x.com/nikhil_sundriya"
          target="_blank"
          rel="noreferrer"
          aria-label="Nikhil on X/Twitter"
        >
          <Twitter className="h-5 w-5 stroke-[0.75]" />
        </a>
        <a
          href="https://instagram.com/nikhil_choudhary25"
          target="_blank"
          rel="noreferrer"
          aria-label="Nikhil on Instagram"
        >
          <Instagram className="h-5 w-5 stroke-[0.75]" />
        </a>
      </div>
      <a
        href="https://personal-portfolio-nikhil.netlify.app"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit my Portfolio"
        className="group"
      >
        {"</>"} with 💛 by{" "}
        <span className="font-semibold transition-all ease-in-out group-hover:text-blue-500 decoration-wavy decoration-1 group-hover:underline underline-offset-[6px]">
          Nikhil Sundriya
        </span>
      </a>
    </footer>
  );
}
