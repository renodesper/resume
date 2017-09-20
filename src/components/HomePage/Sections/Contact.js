import React from 'react';

import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h3>Contact</h3>
    <hr />

    <form>
      <input className="contact__form__textinput contact__form__input--global" type="email" placeholder="Email" /><br />
      <input className="contact__form__textinput contact__form__input--global" type="text" placeholder="Name" /><br />
      <textarea className="contact__form__textarea contact__form__input--global" placeholder="Message" /><br />
      <input className="contact__form__submit contact__form__input--global" type="submit" />
    </form>
  </section>
);
export default Contact;
