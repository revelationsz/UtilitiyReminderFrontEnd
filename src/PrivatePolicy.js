import React from 'react'
import './PrivatePolicy.css'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

const PrivatePolicy = () => {

    return(
        <div className="">
        
        <Header/>

        <div id='privacyPolicyContainer' className=''>
            <h1>Privacy Policy</h1>

            <h2>Effective Date: 5/26/2023</h2>

            <p>We at Sarsen Whatmore Management value your privacy and are committed to protecting the personal information you provide to us.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services.</p>

            <h3>1. Information We Collect</h3>

            <p>When you use our website or services, we may collect the following information:</p>

            <ul>
                <li>Gmail Inbox Access: We request your permission to access your Gmail inbox to search for emails from your utility company. We only access and analyze emails related to utility bills and do not view or store any other email content.</li>
                <li>Google Account Information: To use our services, you must log in with your Gmail account. We collect your Google account information, such as your email address, name, and profile picture, solely for the purpose of authentication and providing our services.</li>
                <li>Utility Information: We collect and store the phone numbers of you and your roommates for communication purposes. Additionally, we keep track of the ID of the last email received from each utility company to assist in identifying and organizing your utility bills efficiently.</li>
                <li>Google OAuth2 Client Information: We securely store your Google OAuth2 client information, including the client ID and client secret, to authenticate and authorize our application to access your Gmail inbox.</li>
            </ul>

            <h3>2. Use of Information</h3>

            <p>We use the collected information for the following purposes:</p>

            <ul>
                <li>Accessing and analyzing your Gmail inbox to identify utility bills from your utility company.</li>
                <li>Authenticating your Gmail account and providing personalized services.</li>
                <li>Storing your phone numbers to facilitate communication related to utility bills.</li>
                <li>Managing and organizing utility bills efficiently using the ID of the last received email from each utility company.</li>
                <li>Improving our services and enhancing the user experience.</li>
            </ul>

            <h3>3. Information Sharing</h3>

            <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>

            <ul>
                <li>Service Providers: We may engage trusted third-party service providers who assist us in delivering our services. These providers are bound by confidentiality obligations and are prohibited from using your information for any other purpose.</li>
                <li>Legal Requirements: We may disclose your information if required by law or in response to valid legal processes or enforceable governmental requests.</li>
                <li>User Consent: We may share your information with your consent or as otherwise disclosed at the time of collection.</li>
            </ul>

            <h3>4. Data Security</h3>

            <p>We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission or storage is completely secure, and we cannot guarantee the absolute security of your information.</p>

            <h3>5. Retention of Information</h3>

            <p>We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Once the information is no longer needed, we will securely delete or anonymize it.</p>

            <h3>6. Your Rights and Choices</h3>
            <p>You have the right to access, update, or delete your personal information. You can also revoke our access to your Gmail inbox at any time by adjusting your Google account settings. For any privacy-related inquiries or to exercise your rights, please contact us using the information provided below.</p>
            <h3>7. Children's Privacy</h3>
            <p>Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you believe that we may have inadvertently collected information from a child, please contact us immediately.</p>
            <h3>8. Changes to this Privacy Policy</h3>
            <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this Privacy Policy periodically for any updates.</p>
            <h3>9. Contact Us</h3>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our practices, please contact us at:</p>
            <p>Sarsen Whatmore Management</p>
            <p>Rhinoam@gmail.com</p>            

        </div>

        <Footer id="NonSTickfooter"/>
        </div>
    )

}

export default PrivatePolicy;