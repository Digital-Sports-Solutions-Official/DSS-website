/* Noah Klein */

import './PreOrder.css';

const PreOrder = () => {
    return (

        <div className="PreOrder">
            <h1>Pre-Orders Coming Soon!</h1>
            <p>We are not ready to ship products quite yet, stay tuned by joining our mailing list!</p>

            <form
                action="https://formspree.io/f/xanywypg"
                method="POST"
            >
                <label>
                    Your email:
                    <input type="email" name="email" />
                </label>

                <button type="submit">Join</button>
            </form>

        </div>
    );
};

export default PreOrder;
