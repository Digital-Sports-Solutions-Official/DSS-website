/* Noah Klein */

import './RequestQuote.css'

const RequestQuote = ({ }) => {
    return (
        <div className='RequestQuote'>
            <h2>Wondering if we can meet the needs of your league? Contact us!</h2>

            <form action="https://formspree.io/f/mldereay" method="POST">
                <label id="name">
                    Name
                    <input type="text" name="name" required />
                </label>
                <label id="email">
                    Email
                    <input type="email" name="email" required />
                </label>
                <label id="request">
                    Your needs
                    <textarea name="request" required rows={5} />
                </label>
                <button type="submit" className="submit-button">Send</button>
            </form>

        </div>
    )
}

export default RequestQuote;