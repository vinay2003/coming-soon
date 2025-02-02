import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-lg">Effective Date: Wed 6 Sep 2023</p>
      </header>

      <section className="space-y-6">
        <p>
          At <strong>Modifio</strong>, we are committed to safeguarding your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when you use our website and services. Please read this policy carefully to understand how we handle your data.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <p>
          We collect limited information to improve user experience and enhance the performance of our services. The information we collect includes:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li><strong>Usage Information</strong>: We may collect information about your interaction with our website, such as the pages you visit, your IP address, browser type, device type, and referral URLs. This information helps us understand how users interact with our website and enables us to improve its functionality and content.</li>
          <li><strong>Cookies & Tracking Technologies</strong>: We use cookies and similar technologies to collect and store information about your interactions with our website. This helps us personalize your experience and analyze website performance. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect your experience on our website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p>
          We use the information collected through Google Analytics and cookies to:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>Understand user behavior on our website.</li>
          <li>Improve our website’s functionality and content.</li>
          <li>Provide a personalized experience.</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal data with third parties for any marketing or unrelated purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to enhance your experience on our website. These cookies are used for:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li><strong>Session management</strong>: Maintaining your session while navigating between pages.</li>
          <li><strong>Analytics</strong>: To analyze website usage (using Google Analytics).</li>
          <li><strong>Customization</strong>: Remembering your preferences and settings.</li>
        </ul>
        <p>
          You can control cookies through your browser settings, and you can opt to disable them. However, please note that disabling cookies may affect the functionality of the website.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of data transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites or services that are not operated by us. We are not responsible for the content, privacy policies, or practices of these third-party websites. We encourage you to review the privacy policies of any third-party websites you visit before providing them with personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Children's Privacy</h2>
        <p>
          Our services are not intended for children under the age of 13, and we do not knowingly collect or solicit personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at the email provided below, and we will take steps to remove the information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any time. If we make changes to this policy, the updated version will be posted on this page, and the “Effective Date” at the top of the policy will be revised accordingly. We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have the following rights regarding your personal data:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li><strong>Access</strong>: You may request a copy of the information we have about you.</li>
          <li><strong>Correction</strong>: You may request corrections to any inaccuracies in the information we have about you.</li>
          <li><strong>Deletion</strong>: You may request the deletion of your personal information, subject to applicable laws and exceptions.</li>
          <li><strong>Objection</strong>: You may object to our processing of your personal data.</li>
          <li><strong>Portability</strong>: You may request a transfer of your personal data to another service provider.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at the provided contact details.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or the data we collect, or if you would like to exercise any of your rights related to your personal data, please contact us at:
        </p>
        <p className="mt-2">
          <strong>Email:</strong> <a href="mailto:contact@proba.in" className="text-blue-500">contact@proba.in</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
