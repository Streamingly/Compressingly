import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="border-b border-gray-200 p-6">
        <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
        <p className="text-gray-600 mt-2">Last Updated: March 5, 2024</p>
      </div>
      
      <div className="px-16 py-4">
        <div className="space-y-6">
          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Compressingly. These Terms and Conditions ("Terms") govern your access to and use of our website and services ("Service"). By accessing or using our Service, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Service.
            </p>
          </section>

          {/* Section 2: Definitions */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Definitions</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>"Service"</strong> refers to the video compression services provided by Compressingly.</p>
              <p><strong>"User"</strong> refers to any individual or entity using our services.</p>
              <p><strong>"Content"</strong> refers to any video or media files uploaded to our platform.</p>
              <p><strong>"Platform"</strong> refers to our website, applications, and any related services.</p>
              <p><strong>"Terms"</strong> refers to these Terms and Conditions.</p>
            </div>
          </section>

            {/* Section 3: Service Usage */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Service Usage</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>3.1. <strong>Eligibility:</strong> You must be at least 18 years old or have legal parental or guardian consent to use our Service.</p>
                <p>3.2. <strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.</p>
                <p>3.3. <strong>Acceptable Use:</strong> You agree not to use the Service for any unlawful purposes or in a way that might harm, disrupt, or damage the reputation of Compressingly.</p>
                <p>3.4. <strong>Modification and Discontinuation:</strong> We reserve the right to modify, suspend, or discontinue the Service at any time without notice.</p>
                <p>3.5. <strong>Compliance:</strong> You agree to comply with all applicable laws and regulations when using our Service.</p>
              </div>
            </section>

            {/* Section 4: Content Policy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Content Policy</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>4.1. <strong>Ownership:</strong> You retain all rights to your uploaded Content. Compressingly does not claim ownership of your Content.</p>
                <p>4.2. <strong>License to Use Content:</strong> By uploading Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and process your Content solely for the purpose of providing the Service.</p>
                <p>4.3. <strong>Prohibited Content:</strong> You agree not to upload Content that is illegal, harmful, threatening, defamatory, obscene, infringing, or otherwise objectionable.</p>
                <p>4.4. <strong>Content Removal:</strong> We reserve the right to remove or disable access to any Content that violates these Terms or our policies.</p>
                <p>4.5. <strong>Responsibility:</strong> You are solely responsible for your Content and any consequences of uploading it.</p>
              </div>
            </section>

            {/* Section 5: Privacy and Data Protection */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Privacy and Data Protection</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>5.1. <strong>Data Collection:</strong> We collect and process personal data in accordance with our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.</p>
                <p>5.2. <strong>GDPR Compliance:</strong> We handle personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.</p>
                <p>5.3. <strong>Security Measures:</strong> We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>5.4. <strong>Data Retention:</strong> We retain personal data only as long as necessary for the purposes outlined in our Privacy Policy.</p>
                <p>5.5. <strong>Third-Party Services:</strong> We may use third-party services to assist in providing the Service. These third parties are obligated to protect your data in accordance with our policies.</p>
              </div>
            </section>

            {/* Section 6: Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>6.1. <strong>Ownership:</strong> All intellectual property rights in the Service and Platform, including software, text, images, and trademarks, are owned by Compressingly or its licensors.</p>
                <p>6.2. <strong>Restrictions:</strong> You may not copy, modify, distribute, sell, or lease any part of our Service or included software.</p>
                <p>6.3. <strong>Feedback:</strong> Any feedback or suggestions you provide are entirely voluntary, and we may use them without any obligation to you.</p>
              </div>
            </section>

            {/* Section 7: Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Liability</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>7.1. <strong>As-Is Service:</strong> The Service is provided on an "as is" and "as available" basis without warranties of any kind.</p>
                <p>7.2. <strong>No Liability for Damages:</strong> Compressingly is not liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                <p>7.3. <strong>Maximum Liability:</strong> Our maximum liability to you is limited to the amount you have paid to us for the Service.</p>
                <p>7.4. <strong>Jurisdictional Exceptions:</strong> Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability; these limitations may not apply to you.</p>
              </div>
            </section>

            {/* Section 8: Changes to Terms */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to Terms</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>8.1. <strong>Right to Modify:</strong> We reserve the right to modify these Terms at any time.</p>
                <p>8.2. <strong>Notification of Changes:</strong> We will notify you of significant changes by posting the new Terms on this page and updating the "Last Updated" date.</p>
                <p>8.3. <strong>Acceptance of Changes:</strong> By continuing to use the Service after changes become effective, you agree to be bound by the revised Terms.</p>
              </div>
            </section>

            {/* Section 9: Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Information</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>For any questions or concerns about these Terms, please contact us:</p>
                <p><strong>Email:</strong> <a href="mailto:info@compressingly.net" className="text-blue-600 underline">info@compressingly.net</a></p>
                <p><strong>Phone:</strong> +358 41 576 5858</p>
                <p><strong>Address:</strong> Compressingly Oy, Example Street 123, 00100 Helsinki, Finland</p>
              </div>
            </section>

            {/* Section 10: Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of Finland, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Finland.
              </p>
            </section>

            {/* Additional Sections */}

            {/* Section 11: Termination */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Termination</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>11.1. <strong>Termination by User:</strong> You may stop using our Service at any time.</p>
                <p>11.2. <strong>Termination by Compressingly:</strong> We may suspend or terminate your access to the Service if you violate these Terms or for any other reason at our discretion.</p>
                <p>11.3. <strong>Effect of Termination:</strong> Upon termination, your right to use the Service will immediately cease.</p>
              </div>
            </section>

            {/* Section 12: Indemnification */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold Compressingly harmless from any claims, damages, losses, liabilities, and expenses arising out of your use of the Service or violation of these Terms.
              </p>
            </section>

            {/* Section 13: Severability */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
              </p>
            </section>

            {/* Section 14: Entire Agreement */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms constitute the entire agreement between you and Compressingly regarding the Service and supersede any prior agreements.
              </p>
            </section>

            {/* Section 15: Waiver */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">15. Waiver</h2>
              <p className="text-gray-700 leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            {/* Section 16: Assignment */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">16. Assignment</h2>
              <p className="text-gray-700 leading-relaxed">
                You may not assign or transfer these Terms or your rights under these Terms, in whole or in part, without our prior written consent.
              </p>
            </section>

            {/* Section 17: Force Majeure */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">17. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                We will not be liable for any failure or delay in performance due to causes beyond our reasonable control, such as natural disasters, war, or other uncontrollable events.
              </p>
            </section>

            {/* Section 18: Language */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">18. Language</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are provided in English. If we provide a translation of the English version, the English version will govern in the event of any conflict.
              </p>
            </section>

            {/* Section 19: Dispute Resolution */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">19. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising out of or relating to these Terms or the Service will be resolved through confidential binding arbitration in accordance with the rules of the Finnish Arbitration Act.
              </p>
            </section>

            {/* Section 20: Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">20. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at <a href="mailto:info@compressingly.net" className="text-blue-600 underline">info@compressingly.net</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
