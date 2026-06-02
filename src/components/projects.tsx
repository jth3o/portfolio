"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  live?: string;
  features: { title: string; detail: string }[];
};

const projects: Project[] = [
  {
    title: "Point",
    description:
      "AI-powered app that converts lecture transcripts into flashcards and quizzes you with a spaced repetition scheduler — like Anki, but built in.",
    stack: ["Next.js", "TypeScript", "MongoDB", "OpenAI API"],
    href: "https://github.com/jth3o/Point",
    live: "https://point-tawny.vercel.app",
    features: [
      {
        title: "Upload any .vtt transcript",
        detail:
          "Drop in a .vtt file from any lecture recording. Point parses and segments it into meaningful chunks automatically.",
      },
      {
        title: "AI fact extraction",
        detail:
          "OpenAI reads each transcript segment and pulls out the key facts — no manual highlighting or note-taking required.",
      },
      {
        title: "Automatic flashcard generation",
        detail:
          "Facts are converted into atomic front/back flashcards, structured to test one concept at a time.",
      },
      {
        title: "Spaced repetition scheduler",
        detail:
          "Cards resurface based on how well you know them. Rate each card Again / Hard / Good / Easy and the scheduler adjusts the next review date.",
      },
      {
        title: "In-session help",
        detail:
          "Stuck on a card? Ask for an explanation or a worked example mid-review without leaving the study session.",
      },
      {
        title: "Course & lecture organization",
        detail:
          "Group lectures into courses. Each user sees only their own data — full session-based authentication.",
      },
    ],
  },
  {
    title: "TapTask",
    description:
      "Project scaffolding tool that generates a complete GitHub repository structure and boilerplate from a plain-English description.",
    stack: ["Next.js", "GitHub API"],
    href: "https://github.com/jth3o",
    features: [
      {
        title: "Plain-English project description",
        detail:
          "Describe what you want to build in plain English. TapTask figures out the right structure, stack, and boilerplate for the job.",
      },
      {
        title: "Instant repo generation",
        detail:
          "A fully initialized GitHub repository is created in seconds — folders, config files, and starter code included.",
      },
      {
        title: "Stack-aware scaffolding",
        detail:
          "TapTask selects appropriate boilerplate based on the project type — Next.js, Python, etc. — rather than outputting a generic template.",
      },
    ],
  },
  {
    title: "VOC Classifier",
    description:
      "Random Forest model distinguishing three respiratory diseases from breath VOC measurements. 96.7% cross-validated accuracy on a 121-patient clinical dataset.",
    stack: ["Python", "scikit-learn", "pandas", "matplotlib"],
    href: "https://github.com/jth3o",
    features: [
      {
        title: "Clinical dataset — 121 patients, 3 diseases",
        detail:
          "Real breath sample data from patients diagnosed with Asthma, Bronchi, or COPD. 78 volatile organic compound (VOC) intensity measurements per patient.",
      },
      {
        title: "Log transform + standard scaling",
        detail:
          "Raw VOC intensities are log2-transformed to compress the range, then standard-scaled so no single compound dominates the model.",
      },
      {
        title: "Random Forest with 5-fold cross-validation",
        detail:
          "200-tree Random Forest trained with stratified 5-fold CV to preserve class balance across folds. Mean accuracy: 96.7%.",
      },
      {
        title: "Confusion matrix analysis",
        detail:
          "Asthma classified perfectly (53/53). The only confusion was between Bronchi and COPD — clinically expected given their overlapping pathophysiology.",
      },
    ],
  },
];

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-28 px-6 border-t border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 pt-1">
              Projects
            </p>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project) => {
                const isOpen = expanded === project.title;
                return (
                  <div
                    key={project.title}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-600"
                  >
                    {/* Card header — always visible */}
                    <div className="p-7">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                            >
                              Live
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                          >
                            GitHub
                            <ArrowUpRight size={12} />
                          </a>
                        </div>
                      </div>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() =>
                            setExpanded(isOpen ? null : project.title)
                          }
                          className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors ml-4 flex-shrink-0"
                        >
                          {isOpen ? "Less" : "Features"}
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Expandable features section */}
                    {isOpen && (
                      <div className="border-t border-neutral-100 dark:border-neutral-800 px-7 py-6">
                        <ol className="space-y-4">
                          {project.features.map((f, i) => (
                            <li key={f.title} className="flex gap-4">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-xs font-semibold flex items-center justify-center mt-0.5">
                                {i + 1}
                              </span>
                              <div>
                                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-0.5">
                                  {f.title}
                                </p>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                  {f.detail}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
