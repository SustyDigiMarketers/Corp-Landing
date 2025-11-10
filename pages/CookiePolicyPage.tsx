import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';

const CookiePolicyPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Cookie Policy"
        subtitle="Last updated: October 26, 2024"
      />
      <Section>
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
          <h2>1. What Are Cookies?</h2>
          <p>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
          </p>
          
          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
          </p>

          <h2>3. Disabling Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
          </p>
          
          <h2>4. The Cookies We Set</h2>
           <ul>
                <li>
                    <p><strong>Account related cookies:</strong> If you create an account with us, then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out; however, in some cases, they may remain afterward to remember your site preferences when logged out.</p>
                </li>
                <li>
                    <p><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
                </li>
                <li>
                    <p><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.</p>
                </li>
            </ul>

          <h2>5. More Information</h2>
          <p>
            Hopefully, that has clarified things for you. If you are still looking for more information, then you can contact us through one of our preferred contact methods: <a href="mailto:cookies@sustydigi.com">cookies@sustydigi.com</a>.
          </p>
        </div>
      </Section>
    </>
  );
};

export default CookiePolicyPage;
