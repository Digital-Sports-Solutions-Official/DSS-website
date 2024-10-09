/* Noah Klein */

import Footer from '../../common_components/Footer';
import NavBar from '../../common_components/NavBar';
import './TermsOfService.css';

const TermsOfService = () => {
    return (
        <>
            <NavBar />
            <div className="TermsOfService">
                <h1>Terms of Service</h1>

                <div className='container'>

                    <h3>Introduction</h3>
                    <p>Welcome to the Digital Sports Solutions LLC website. By accessing or using our site, you agree to comply with and be bound by the following Terms of Service. Please review these terms carefully. If you do not agree to these terms, you should not use this website.</p>

                    <h3>Use of Website</h3>
                    <p>This website is intended to provide information about Digital Sports Solutions LLC and our services. The content on this site is for general informational purposes only and should not be considered as professional advice. We reserve the right to modify the content on this site at any time without prior notice.</p>

                    <h3>User Conduct</h3>
                    <p>When using this website, you agree not to:</p>
                    <p>- Violate any applicable laws or regulations. </p>
                    <p>- Use the website in any manner that could interfere with other users' access or enjoyment of the site. </p>
                    <p>- Attempt to gain unauthorized access to any portion of the site, its systems, or networks.</p>

                    <h3>Mailing List Sign-Up</h3>
                    <p>Our website offers users the option to sign up for our mailing list. By signing up, you consent to receive periodic emails from Digital Sports Solutions LLC regarding news, updates, and promotional offers. You can unsubscribe from the mailing list at any time by following the instructions provided in the emails.</p>

                    <h3>Privacy</h3>
                    <p>We are committed to protecting your privacy. Please refer to our <span><a href="/privacy" target="_blank">Privacy Policy</a></span> for information on how we handle user data. Please note that we do not collect personal information beyond what is provided voluntarily through the mailing list sign-up.</p>

                    <h3>Third-Party Links</h3>
                    <p>Our website may contain links to third-party websites. Digital Sports Solutions LLC is not responsible for the content or practices of any third-party sites. We encourage you to review the terms of service and privacy policies of any external websites you visit.</p>

                    <h3>Changes to These Terms</h3>
                    <p>Digital Sports Solutions LLC reserves the right to update or modify these Terms of Service at any time without prior notice. By continuing to use the website after changes are posted, you agree to accept the updated terms.</p>

                    <h3>Contact Us</h3>
                    <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:contact@digitalsportssolutions.com" target='_blank'>contact@digitalsportssolutions.com</a>.</p>
                    <p>By using this website, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.</p>

                </div>
            </div >

            <Footer />
        </>
    );
}

export default TermsOfService;