import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First name is required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Page</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && <span className="error">{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Enter your Last name"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && <span className="error">{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && <span className="error">{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
