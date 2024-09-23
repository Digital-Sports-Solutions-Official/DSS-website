/* Noah Klein */

import './Footer.css';

//TODO add terms of service and privacy policy

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Get in touch</h4>
                    <p><a href="mailto:contact@digitalsportssolutions.com" target='_blank'>contact@digitalsportssolutions.com</a></p>
                    <p><a href="mailto:support@digitalsportssolutions.com" target='_blank'>support@digitalsportssolutions.com</a></p>
                    <p><a href="tel:216-924-5393">216-924-5393</a></p>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <p><a href="https://www.instagram.com/digitalsportssolutions?igsh=MTc0YXltdXBmdjFqcw==" target='_blank'>Instagram</a></p>
                    <p><a href="https://www.linkedin.com/company/digitalsportssolutions/" target='_blank'>LinkedIn</a></p>
                </div>

                <div className="footer-section">
                    <h4>Design Services</h4>
                    <p>Pizza Pizza Design Services GmbH</p>
                    <p>Dresdener Str. 22</p>
                    <p>10999 Berlin, Germany</p>
                </div>

                <div className="footer-section">
                    <h4>Ventures</h4>
                    <p>Pizza Pizza Ventures GmbH</p>
                    <p>Dresdener Str. 22</p>
                    <p>10999 Berlin, Germany</p>
                </div>
            </div>

            <div className="footer-blurb">
                <p>
                    This website is for informational purposes only and does not constitute legal advice. All product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
                </p>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Digital Sports Solutions LLC</p>
                <p><a href="#">Terms of Service</a><span>|</span><a href="#">Privacy Policy</a></p>
            </div>
        </footer>
    )
}

export default Footer;
