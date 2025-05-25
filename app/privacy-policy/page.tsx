import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | New Journey Immigration',
  description: 'Privacy Policy for New Journey Immigration - Learn how we protect and handle your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#13294E] dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Fill out consultation forms</li>
                <li>Contact us via email or phone</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our website services</li>
                <li>Apply for our immigration services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Provide immigration consultation services</li>
                <li>Process your applications and requests</li>
                <li>Communicate with you about our services</li>
                <li>Send you relevant updates and information</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                3. Information Sharing
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist us in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>To educational institutions or government agencies as part of your application process</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> support@newjourneyworld.com<br />
                  <strong>Phone:</strong> +91 7623 043 499 | +1 437-663-5437<br />
                  <strong>Address:</strong> Mehsana, India | Brampton, ON, Canada
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
