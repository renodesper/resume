import React from 'react';

import styles from './Contact.css';

const Contact = () => (
  <section className={styles.container} id="contact">
    <h3>Contact</h3>
    <hr />

    <form>
      <input
        className={`${styles.input} ${styles.textinput}`}
        type="email"
        placeholder="Email"
      /><br />
      <input
        className={`${styles.input} ${styles.textinput}`}
        type="text"
        placeholder="Name"
      /><br />
      <textarea
        className={`${styles.input} ${styles.textarea}`}
        placeholder="Message"
      /><br />
      <input
        className={`${styles.input} ${styles.submit}`}
        type="submit"
      />
    </form>
  </section>
);
export default Contact;
