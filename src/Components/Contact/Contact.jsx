import './Contact.css';

function Contact() {
  return (
    <>
      <div className="contact">
        <header>
          <h2 className="h2-contact-title">Contact</h2>
        </header>

        <section className="mapbox">
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.831640526217!2d36.779625174803336!3d-1.2482136987398809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178f5812c587%3A0x74b11285536e78ff!2sTracom%20Services%20Limited!5e1!3m2!1sen!2ske!4v1728251975866!5m2!1sen!2ske"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </section>

      <section className="contact-form">
      <div className="contact-form-container">
      <h2 className="form-title">Contact Form</h2>

      <form className="contact-form">
        <div className="form-row">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            required
          />
        </div>

        <textarea
          name="message"
          className="form-input textarea-input"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="form-button">
          <i className="send-icon">✉️</i> Send Message
        </button>
      </form>
    </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
