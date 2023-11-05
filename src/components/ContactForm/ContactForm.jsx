import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/contacts/operation';

import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';

import { getContacts } from 'redux/contacts/selectors.js';
import toast from 'react-hot-toast';

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(getContacts);

  const handleSabmit = (values, { resetForm }) => {
    const haveNameInPhonebook = items.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (haveNameInPhonebook) {
      return toast.error(`${values.name} is already in contacts`)({
        duration: 1000,
        position: 'top-center',
      });
    }

    dispatch(
      operation.addContact({
        name: values.name.trim(),
        number: values.number.trim(),
      })
    );

    resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().required().min(4),
    number: yup.number().required().min(4),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSabmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Field name="number" type="tel" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">add contacts</button>
      </Form>
    </Formik>
  );
};
