/* Noah Klein */

import './RequestQuote.css'

const RequestQuote = ({ }) => {

    return (
        <div className='RequestQuote'>
            <h2>Wondering if we can meet the needs of your league? Contact us!</h2>
            

            {/* TODO This is a really good short term solution but something better should be done eventually */}
            <form action="https://formsubmit.co/769eea541dd66c08f65d7c9ff1b01712" method="POST" className="quote-form">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required className="input-field" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required className="input-field" />
                </div>
                <div className="input-group">
                    <label htmlFor="request">Your needs</label>
                    <textarea name="request" required rows={5} />
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    )
}

export default RequestQuote;