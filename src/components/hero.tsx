"use client";

import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24">
        <div className="animate-fade-in-up" style={{ animationFillMode: "both" }}>
          <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-6">
            University of Michigan
          </p>
        </div>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "100ms", animationFillMode: "both", opacity: 0 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.08] mb-6">
            James Andersen
          </h1>
        </div>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "both", opacity: 0 }}
        >
          <p className="text-xl sm:text-2xl font-medium text-neutral-700 dark:text-neutral-300 max-w-2xl leading-snug mb-4">
            I turn messy data and complex problems into decisions that hold up under scrutiny.
          </p>
        </div>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "300ms", animationFillMode: "both", opacity: 0 }}
        >
          <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-xl mb-12">
            Machine learning, data science, and product — built for rigor, designed for impact.
          </p>
        </div>

        <div
          className="animate-fade-in-up flex flex-wrap gap-3"
          style={{ animationDelay: "400ms", animationFillMode: "both", opacity: 0 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-md hover:border-neutral-900 dark:hover:border-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full pb-12 flex justify-start px-6">
        <a
          href="#about"
          className="text-neutral-300 dark:text-neutral-700 hover:text-neutral-500 dark:hover:text-neutral-500 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
