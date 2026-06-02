import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 pt-1">
              Contact
            </p>
          </div>

          <div className="md:col-span-9">
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-10">
              Open to internship opportunities, research collaborations, and good
              conversations. Reach out directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:j.theodore.andersen@gmail.com"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all group"
              >
                <Mail size={15} className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
                j.theodore.andersen@gmail.com
              </a>

              <a
                href="https://github.com/jth3o"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all group"
              >
                <Github size={15} className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/james-t-andersen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all group"
              >
                <Linkedin size={15} className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <p className="text-xs text-neutral-300 dark:text-neutral-700">
          © {new Date().getFullYear()} James Andersen
        </p>
      </div>
    </section>
  );
}
