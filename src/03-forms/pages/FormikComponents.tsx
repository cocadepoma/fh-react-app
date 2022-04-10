import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values,) => { console.log(values) }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First name is required'),
          lastName: Yup.string()
            .max(100, 'Must be 15 characters or less')
            .required('Last name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          terms: Yup.boolean()
            .isTrue('You must accept the terms and conditions'),
          jobType: Yup.string()
            .notOneOf(['IT Junior'], 'Juniors are not allowed')
            .required('Job type is required'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="First name" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" placeholder="Last name" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" placeholder="Email addres" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jopType">Email Address</label>
            <Field name="jobType" as="select" >
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="IT Senior">IT Senior</option>
              <option value="IT Junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              Terms and conditions
              <Field name="terms" type="checkbox" />
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
