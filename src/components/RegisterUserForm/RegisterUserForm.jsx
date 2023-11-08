import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import * as authOperation from 'redux/auth/auth-operation';

import css from './RegisterUserForm.module.css';

const initialValues = { name: '', email: '', password: '' };

export const RegisterUserForm = () => {
  const dispatch = useDispatch();

  const handleSabmit = (values, { resetForm }) => {
    console.log('values', values);

    const register = JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    });
    console.log('register', register);

    dispatch(
      authOperation.register({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );

    resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().min(4),
    password: yup.string().required().min(4),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSabmit}
      displayName="MyForm"
    >
      <Form>
        <h3>Registaration</h3>
        <label htmlFor="email">E-mail</label>
        <Field
          name="email"
          type="email"
          className={css.FormInput}
          placeholder="Enter E-mail"
        />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="name">Name</label>
        <Field
          name="name"
          type="name"
          className={css.FormInput}
          placeholder="Enter name"
        />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          className={css.FormInput}
          placeholder="Enter password"
        />
        <ErrorMessage name="password" component="div" />
        <button type="submit" className={css.SignIn}>
          Sign in
        </button>
      </Form>
    </Formik>
  );
};
