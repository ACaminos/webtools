import { Link } from "react-router-dom"

export const About = () => {
  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
            &larr; Back to home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">About WebTools</h1>

        <div className="space-y-8 text-gray-600 dark:text-gray-300">
          <section className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What is WebTools?</h2>
            <p>WebTools is a curated collection of free tools and resources for frontend developers. The goal is to provide a quick starting point to find icons, APIs, frameworks, libraries, UI generators, and much more.</p>
          </section>

          <section className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Categories</h2>
            <p>WebTools currently features over 100 tools organized into 17 categories:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {["Icons", "Image Bank", "Spinners", "GitHub", "APIs", "DataTables", "Dashboards", "Skeleton", "Dividers", "JSON", "Animations", "Libraries", "AI", "Frameworks", "Deployment", "UI Generators", "Others"].map((cat) => (
                <li key={cat} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  {cat}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p>If you have suggestions, find a broken link, or want to recommend a tool, you can open an issue on GitHub:</p>
            <div className="mt-4">
              <a
                href="https://github.com/ACaminos/webtools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-500 transition-all duration-300"
              >
                <i className="fa-brands fa-github fa-lg"></i>
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
