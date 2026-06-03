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
              I study Industrial and Operations Engineering at Michigan with a minor in Data Science.
              I spend most of my time consulting, working with startups, and building software —
              usually some mix of all three.
            </p>
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Most of my projects start from something I or someone around me actually needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
