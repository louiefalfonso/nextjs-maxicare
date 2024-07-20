import React from 'react'

const ContactMap = () => {
  return (
    <>
      <div className="contact__map contact__map-footer_up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7712380162134!2d121.04568927473825!3d14.555070385925879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f6d97d4a9b%3A0x185dbfb0e8c281cd!2sSt.%20Luke's%20Medical%20Center%20-%20Global%20City!5e0!3m2!1sen!2suk!4v1721485403281!5m2!1sen!2suk"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}

export default ContactMap