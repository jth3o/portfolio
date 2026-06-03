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
              I study{" "}
              <span className="text-neutral-500 dark:text-neutral-400 italic">
                Industrial and Operations Engineering
              </span>{" "}
              at the University of Michigan, with a minor in Data Science. IOE sits at the overlap
              of math, systems thinking, and decision-making under uncertainty — which is basically
              how I approach most things.
            </p>
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5">
              Outside of class I consult through Iota Consulting — I&apos;ve worked on an M&A
              analysis for a biotech acquisition, an AI infrastructure strategy, and an investment
              thesis for a stock pitch. On the startup side, I helped LetsPark raise $10,000 from
              Birmingham Angels and represented the company at TEDx Detroit.
            </p>
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I also build software. I like the combination of having a real problem and being able
              to just go build the thing — most of my projects start from something I or someone
              around me actually needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
