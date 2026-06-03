"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, ChevronDown, X, ChevronLeft, ChevronRight, Images } from "lucide-react";

type Screenshot = {
  src: string;
  caption: string;
};

type Feature = {
  title: string;
  detail: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  live?: string;
  features: Feature[];
  screenshots?: Screenshot[];
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
        detail: "Drop in a .vtt file from any lecture recording. Point parses and segments it into meaningful chunks automatically.",
      },
      {
        title: "AI fact extraction",
        detail: "OpenAI reads each transcript segment and pulls out the key facts — no manual highlighting or note-taking required.",
      },
      {
        title: "Automatic flashcard generation",
        detail: "Facts are converted into atomic front/back flashcards, structured to test one concept at a time.",
      },
      {
        title: "Spaced repetition scheduler",
        detail: "Cards resurface based on how well you know them. Rate each card Again / Hard / Good / Easy and the scheduler adjusts the next review date.",
      },
      {
        title: "In-session help",
        detail: "Stuck on a card? Ask for an explanation or a worked example mid-review without leaving the study session.",
      },
      {
        title: "Course & lecture organization",
        detail: "Group lectures into courses. Each user sees only their own data — full session-based authentication.",
      },
    ],
    screenshots: [
      { src: "/screenshots/point-01-signin.png",        caption: "Sign in with Google to get started — no account setup required." },
      { src: "/screenshots/point-02-dashboard.png",     caption: "Create courses to organize your lectures. Each course holds as many uploads as you need." },
      { src: "/screenshots/point-03-course.png",        caption: "Upload a .vtt transcript from any lecture recording. Point processes it automatically — here it extracted 161 facts and built 74 cards from one lecture." },
      { src: "/screenshots/point-04-cards.png",         caption: "Every card is generated from a specific fact in the transcript, tagged by topic and difficulty so you can see exactly where it came from." },
      { src: "/screenshots/point-05-study-picker.png",  caption: "The study page shows how many cards are due in each course — the scheduler spaces reviews so you're always working on what you're most likely to forget." },
      { src: "/screenshots/point-06-card-front.png",    caption: "A question appears — try to recall the answer before revealing it. Active recall is the core of how spaced repetition works." },
      { src: "/screenshots/point-07-card-revealed.png", caption: "Rate how well you knew it. Again brings it back immediately. Easy pushes it far into the future. The scheduler adjusts each card's interval based on your history." },
      { src: "/screenshots/point-08-card-menu.png",     caption: "Stuck on a card? The menu gives you three options — get an explanation, see a worked example, or delete the card if it's not useful." },
      { src: "/screenshots/point-09-explain.png",       caption: "Point explains the concept in depth using the context from your own lecture — not a generic definition, but one grounded in what you actually studied." },
    ],
  },
  {
    title: "TapTask",
    description:
      "Project scaffolding tool that generates a complete GitHub repository structure and boilerplate from a plain-English description.",
    stack: ["Next.js", "GitHub OAuth", "AI"],
    href: "https://github.com/jth3o/TapTask",
    live: "https://taptask.vercel.app",
    features: [
      {
        title: "Plain-English project description",
        detail: "Describe what you want to build in plain English. TapTask figures out the right structure, stack, and boilerplate for the job.",
      },
      {
        title: "Instant repo generation",
        detail: "A fully initialized GitHub repository is created in seconds — folders, config files, and starter code included.",
      },
      {
        title: "Works with any GitHub account",
        detail: "Sign in with GitHub OAuth — TapTask creates repos directly in your own account, no sharing credentials required.",
      },
    ],
    screenshots: [
      { src: "/screenshots/taptask-01-signin.png",       caption: "Sign in with GitHub — TapTask connects directly to your account to create repos and open PRs on your behalf." },
      { src: "/screenshots/taptask-02-build.png",        caption: "Pick any repo from your GitHub, choose a task type, and describe what you want built in plain English." },
      { src: "/screenshots/taptask-03-ideas-list.png",   caption: "The Ideas tab tracks every project you're working on — each one has its own spec, task breakdown, and build status." },
      { src: "/screenshots/taptask-04-idea-form.png",    caption: "Define the problem, target user, MVP scope, assumptions, and success metrics. TapTask can generate any of these for you." },
      { src: "/screenshots/taptask-05-task-groups.png",  caption: "Once an idea is scoped, TapTask breaks it into task groups and individual features. Each feature becomes a GitHub issue sent to an AI agent." },
      { src: "/screenshots/taptask-06-market-scanner.png", caption: "The Market tab scans a space you're watching and surfaces real signals — pain points, workarounds, and product gaps people are talking about." },
      { src: "/screenshots/taptask-07-market-results.png", caption: "Each signal is scored and explained — what changed, who's affected, what the current workarounds are, and why now is the right time to build." },
      { src: "/screenshots/taptask-08-send-task.png",    caption: "Tasks prefilled from Ideas drop straight into the build view. Pick your agent — Cursor, Codex, or Claude — and hit Send." },
      { src: "/screenshots/taptask-09-cursor-running.png", caption: "The agent picks up the task, creates a branch, and starts building. TapTask polls for the PR automatically." },
      { src: "/screenshots/taptask-10-pr-opened.png",    caption: "When the agent opens a PR, TapTask shows the diff, risk level, and exact git commands to pull and test it locally." },
      { src: "/screenshots/taptask-11-pr-ready.png",     caption: "Once you're happy, mark it ready and merge directly from TapTask — no need to go back to GitHub." },
      { src: "/screenshots/taptask-12-merged.png",       caption: "Merged. The task is done and logged. The whole loop — idea to merged PR — without leaving the dashboard." },
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
        detail: "Real breath sample data from patients diagnosed with Asthma, Bronchi, or COPD. 78 volatile organic compound (VOC) intensity measurements per patient.",
      },
      {
        title: "Log transform + standard scaling",
        detail: "Raw VOC intensities are log2-transformed to compress the range, then standard-scaled so no single compound dominates the model.",
      },
      {
        title: "Random Forest with 5-fold cross-validation",
        detail: "200-tree Random Forest trained with stratified 5-fold CV to preserve class balance across folds. Mean accuracy: 96.7%.",
      },
      {
        title: "Confusion matrix analysis",
        detail: "Asthma classified perfectly (53/53). The only confusion was between Bronchi and COPD — clinically expected given their overlapping pathophysiology.",
      },
    ],
    screenshots: [
      { src: "/screenshots/voc-confusion-matrix.png", caption: "Confusion matrix — 96.7% mean accuracy across 5 folds" },
    ],
  },
];

// ── Carousel modal ────────────────────────────────────────────────────────────
function CarouselModal({
  screenshots,
  startIndex,
  onClose,
}: {
  screenshots: Screenshot[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(() => setIdx((i) => (i - 1 + screenshots.length) % screenshots.length), [screenshots.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % screenshots.length), [screenshots.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black" onClick={onClose}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm text-white/50">{idx + 1} / {screenshots.length}</span>
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Image — fills remaining space */}
      <div
        className="relative flex-1 flex items-center justify-center min-h-0 px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={screenshots[idx].src}
          alt={screenshots[idx].caption}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
        />

        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Caption + dots */}
      <div className="flex-shrink-0 px-8 py-6 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
          {screenshots[idx].caption}
        </p>
        {screenshots.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === idx ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Projects section ──────────────────────────────────────────────────────────
export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [carousel, setCarousel] = useState<{ project: Project; index: number } | null>(null);

  return (
    <section id="projects" className="py-28 px-6 border-t border-neutral-100 dark:border-neutral-800">
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
                const hasScreenshots = project.screenshots && project.screenshots.length > 0;

                return (
                  <div
                    key={project.title}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-600"
                  >
                    {/* Clickable header */}
                    <button
                      onClick={() => setExpanded(isOpen ? null : project.title)}
                      className="w-full text-left p-7 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                          {project.title}
                        </h3>
                        <ChevronDown
                          size={15}
                          className={`flex-shrink-0 mt-0.5 text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                        {project.description}
                      </p>

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
                    </button>

                    {/* Expanded section */}
                    {isOpen && (
                      <div className="border-t border-neutral-100 dark:border-neutral-800 px-7 py-6">
                        {/* External links */}
                        <div className="flex gap-4 mb-6">
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                          >
                            GitHub <ArrowUpRight size={12} />
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                            >
                              Live site <ArrowUpRight size={12} />
                            </a>
                          )}
                          {hasScreenshots && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarousel({ project, index: 0 });
                              }}
                              className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                            >
                              Screenshots <Images size={12} />
                            </button>
                          )}
                        </div>

                        {/* Features list */}
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

      {/* Carousel modal */}
      {carousel && (
        <CarouselModal
          screenshots={carousel.project.screenshots!}
          startIndex={carousel.index}
          onClose={() => setCarousel(null)}
        />
      )}
    </section>
  );
}
