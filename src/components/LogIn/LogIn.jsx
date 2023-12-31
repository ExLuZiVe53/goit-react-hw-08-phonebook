import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import * as authOperation from 'redux/auth/auth-operation';

import css from './Login.module.css';

const initialValues = { email: '', password: '' };

const schema = yup.object().shape({
  email: yup.string().required().min(4),
  password: yup.string().required().min(4),
});
export const LogIn = () => {
  const dispatch = useDispatch();

  const handleSabmit = (values, { resetForm }) => {
    console.log('valuesLOG', values);
    // const log = JSON.stringify({
    //   name: values.name.trim(),
    //   email: values.email.trim(),
    // });
    // console.log('loglog', log);
    dispatch(
      authOperation.logIn({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSabmit}
    >
      <Form>
        <h3>LogIn</h3>

        <label htmlFor="email">E-mail</label>
        <Field
          name="email"
          className={css.FormInput}
          placeholder="Enter e-mail"
        />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field
          name="password"
          className={css.FormInput}
          placeholder="Enter password"
        />
        <ErrorMessage name="password" component="div" />

        <button className={css.Enter} type="submit">
          Enter
        </button>
      </Form>
    </Formik>
  );
};
