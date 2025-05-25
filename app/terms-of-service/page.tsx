import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | New Journey Immigration',
  description: 'Terms of Service for New Journey Immigration - Learn about our service terms and conditions.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#13294E] dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing and using New Journey Immigration&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                2. Services Provided
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                New Journey Immigration provides:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Immigration consultation services</li>
                <li>Study abroad guidance</li>
                <li>Visa application assistance</li>
                <li>IELTS coaching</li>
                <li>University application support</li>
                <li>Document preparation assistance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                3. Client Responsibilities
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Submit required documents in a timely manner</li>
                <li>Pay fees as agreed upon</li>
                <li>Follow our guidance and recommendations</li>
                <li>Inform us of any changes in your circumstances</li>
                <li>Respect our staff and maintain professional communication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                4. Fees and Payment
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Service fees are determined based on the complexity and scope of services required. Payment terms will be clearly outlined in your service agreement. Refund policies vary by service type and will be specified in your contract.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                While we strive to provide the best possible service, we cannot guarantee specific outcomes such as visa approvals or university admissions. Our liability is limited to the fees paid for our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                6. Confidentiality
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We maintain strict confidentiality of all client information and documents. Information will only be shared with relevant authorities or institutions as required for your application process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All content on our website, including text, graphics, logos, and software, is the property of New Journey Immigration and is protected by copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                8. Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Either party may terminate the service agreement with written notice. Termination conditions and refund policies will be as specified in your service contract.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                9. Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These terms are governed by the laws of India and Canada, depending on the jurisdiction where services are provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#13294E] dark:text-white mb-4">
                10. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
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
                11. Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
