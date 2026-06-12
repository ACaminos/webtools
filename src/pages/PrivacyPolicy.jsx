import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"

export const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - WebTools</title>
        <meta name="description" content="Política de privacidad de WebTools. Información sobre cookies, Google AdSense y el uso de datos." />
        <meta property="og:title" content="Política de Privacidad - WebTools" />
        <meta property="og:url" content="https://webtools.vercel.app/privacy-policy" />
      </Helmet>
      <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
            &larr; Back to home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
          <p>Last updated: 2024</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">1. Introduction</h2>
            <p>At WebTools, we take your privacy very seriously. This policy describes how we collect, use, and protect your information when you use our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">2. Data we collect</h2>
            <p>WebTools is a directory of resources and tools for developers. We do not collect personal information from our users nor require registration to access the content.</p>
            <p className="mt-2">We may collect anonymous usage data through:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Google Analytics / Vercel Analytics (anonymous browsing data)</li>
              <li>Google AdSense (cookies for contextual advertising)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">3. Cookies</h2>
            <p>We use cookies to improve your browsing experience and display relevant advertising. You can configure your browser to reject all cookies or to indicate when a cookie is being sent.</p>
            <p className="mt-2">The cookies we use include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Technical cookies:</strong> necessary for the functioning of the site</li>
              <li><strong>Personalization cookies:</strong> remember your preferences (dark/light theme)</li>
              <li><strong>Advertising cookies:</strong> used by Google AdSense to show relevant ads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">4. Advertising with Google AdSense</h2>
            <p>We use Google AdSense to display ads on our site. Google AdSense uses cookies to serve ads based on prior visits to this website or other sites.</p>
            <p className="mt-2">You can learn more about Google's privacy practices at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">https://policies.google.com/privacy</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">5. Third-party links</h2>
            <p>Our site contains links to external tools and resources. We are not responsible for the privacy practices of these websites. We recommend reading the privacy policies of each site you visit.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">6. Changes to this policy</h2>
            <p>We reserve the right to update this privacy policy at any time. Changes will be posted on this page with a revised update date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">7. Contact</h2>
            <p>If you have questions about this privacy policy, you can contact us through the <Link to="/about" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">About</Link> page.</p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}
