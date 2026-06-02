export function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 pt-1">
              About
            </p>
          </div>

          <div className="md:col-span-9">
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5">
              I&apos;m a student at the University of Michigan studying{" "}
              <span className="text-neutral-400 dark:text-neutral-500 italic">
                Industrial and Operations Engineering
              </span>
              , with a focus on data science, machine learning, and building products powered by AI.
            </p>
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5">
              My work lives at the intersection of rigorous quantitative analysis and practical
              engineering — I care about building things that actually work, not just things that
              look good in a slide deck.
            </p>
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I&apos;m actively pursuing a{" "}
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                BCG consulting internship
              </span>{" "}
              where I can bring structured problem-solving and technical depth to client challenges
              that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
