import { useState } from 'react';
import styles from '../styles.module.css';
import axios from 'axios';


// const bcrypt = require('bcrypt');

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PrivacyContainerProps {
    
}

const PrivacyContainer: React.FunctionComponent<PrivacyContainerProps> = () => {
  

   
    return ( 
        <div className={styles.content__container}>
            <ToastContainer />            
            <div className={styles.content}>                
                <div className={styles.terms__content}>
                <h1>Privacy Policy</h1>

<p>Your privacy is important to us. It is Be1 Encyclopedia's policy to respect your privacy regarding any information we may collect from you through our website and services.</p>

<h2>Information We Collect</h2>

<p>We may collect personal information from you, including but not limited to your name, email address, and contact details. We may also collect non-personally identifiable information when you visit our website, such as your IP address, browser type, and browsing behavior.</p>

<h2>How We Use Your Information</h2>

<p>We use the information we collect from you to provide and improve our services. This may include:</p>

<ul>
    <li>Communicating with you regarding your inquiries, feedback, or support requests.</li>
    <li>Personalizing your experience and providing you with relevant content.</li>
    <li>Analyzing and monitoring the usage of our website and services.</li>
    <li>Protecting the security and integrity of our website and services.</li>
    <li>Complying with legal obligations and enforcing our terms and conditions.</li>
</ul>

<h2>Information Sharing and Disclosure</h2>

<p>We may share your personal information with third parties in the following circumstances:</p>

<ul>
    <li>With your consent or at your direction.</li>
    <li>With service providers who assist us in delivering our services, subject to confidentiality obligations.</li>
    <li>When required by law or in response to a valid legal request.</li>
    <li>In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of the transaction.</li>
</ul>

<h2>Data Security</h2>

<p>We take the security of your personal information seriously. We implement reasonable measures to protect your information from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

<h2>Third-Party Links</h2>

<p>Our website may contain links to third-party websites. We have no control over the content and practices of these websites and are not responsible for their privacy policies or practices. We encourage you to review the privacy policies of those third parties before providing any personal information.</p>

<h2>Your Rights</h2>

<p>You have the right to access, update, and delete your personal information in our records, subject to certain exceptions provided by law. If you wish to exercise these rights, please contact us using the contact information provided below.</p>

<h2>Changes to This Privacy Policy</h2>

<p>We may update our privacy policy from time to time. Any changes we make will be posted on this page, and we will revise the "Last Updated" date at the top of this policy. We encourage you to review this privacy policy periodically for any changes.</p>

<h2>Contact Us</h2>

<p>If you have any questions or concerns about our privacy policy or the handling of your personal information, please contact us:</p>

<p>[Your Company Name]</p>
<p>[Contact Information]</p>
                </div>
            </div>
        </div>
     );
}
 
export default PrivacyContainer;

