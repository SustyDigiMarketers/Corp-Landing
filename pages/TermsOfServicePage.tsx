import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: October 26, 2024"
      />
      <Section>
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
          <h2>1. Agreement to Terms</h2>
          <p>
            By using our website, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the website. We may revise the Terms at any time, and the revised version will be effective when posted.
          </p>
          
          <h2>2. Use of the Site</h2>
          <p>
            You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
          </p>
          <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which, as determined by us, may harm the Company or users of the Site or expose them to liability.</li>
              <li>Use the Site in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Site.</li>
          </ul>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          
          <h2>4. Governing Law</h2>
           <p>
            All matters relating to the Site and these Terms and any dispute or claim arising therefrom or related thereto shall be governed by and construed in accordance with the internal laws of the State without giving effect to any choice or conflict of law provision or rule.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions or comments about these Terms of Service, please contact us at: <a href="mailto:legal@sustydigi.com">legal@sustydigi.com</a>.
          </p>
        </div>
      </Section>
    </>
  );
};

export default TermsOfServicePage;
