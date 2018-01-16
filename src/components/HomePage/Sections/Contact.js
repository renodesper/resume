import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import Yup from 'yup';
import axios from 'axios';

import styles from './Contact.css';

const InnerForm = ({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
  <form onSubmit={handleSubmit} id="contact-form">
    <input
      className={`${styles.input} ${styles.textinput}`}
      type="email"
      name="email"
      placeholder="john@wick.com"
      onChange={handleChange}
      value={values.email}
    />
    {touched.email && errors.email && <div>{errors.email}</div>}

    <br />
    <input
      className={`${styles.input} ${styles.textinput}`}
      type="text"
      name="name"
      placeholder="John Wick"
      onChange={handleChange}
      value={values.name}
    />
    {touched.name && errors.name && <div>{errors.name}</div>}

    <br />
    <textarea
      className={`${styles.input} ${styles.textarea}`}
      name="message"
      placeholder="Message"
      onChange={handleChange}
      value={values.message}
    />
    {touched.message && errors.message && <div>{errors.message}</div>}

    <br />
    <input
      className={`${styles.input} ${styles.submit}`}
      type="submit"
      value="Submit"
      disabled={isSubmitting}
    />
  </form>
);
InnerForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

const ContactForm = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().required(),
    message: Yup.string().required(),
  }),
  mapPropsToValues: props => ({
    email: '',
    name: '',
    message: '',
  }),
  handleSubmit: (values, { props }) => {
    axios.post('https://renodesper-mail-service.herokuapp.com', {
      email: values.email,
      name: values.name,
      message: values.message,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'renodesper.com',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, a49d1abeaa6a11e79d494851b7d65d67',
        a49d1abeaa6a11e79d494851b7d65d67: 'c03bc9d2aa6a11e79d494851b7d65d67',
      },
    }).then((response) => {
      document.getElementById('contact-form').reset();
    }).catch((error) => {
      console.log(`error: ${error}`);
    });
  },
})(InnerForm);

const Contact = () => (
  <section className={styles.container} id="contact">
    <h3>Contact</h3>
    <hr />

    <ContactForm />
  </section>
);
export default Contact;
