import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckBox } from '../components';

import '../styles/styles.css';

export const FormikAbstractation = () => {

  return (
    <div>
      <h1>Formik Abstractation</h1>
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
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="Email"
            />
            <MySelect label="Job Type" name="jobType" as="select" >
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="IT Senior">IT Senior</option>
              <option value="IT Junior">IT Junior</option>
            </MySelect>

            <MyCheckBox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
