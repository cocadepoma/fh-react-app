import { FormEvent } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useForm } from '../hooks/useForm';
import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  const {
    name,
    email,
    password,
    password2,
  } = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, password, password2 });
  };

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik initialValues={{
        name: '',
        email: '',
        password: '',
        password2: '',
      }}
        onSubmit={(values) => { console.log(values) }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe de tener al menos de caracteres')
            .max(15, 'Debe de ser menor de 15 caracteres')
            .required('El nombre es requerido'),
          email: Yup.string()
            .email('Debe de ser un email valido')
            .required('El email es requerido'),
          password: Yup.string()
            .min(6, 'Debe de tener al menos de 6 caracteres')
            .required('La contraseña es requerida'),
          password2: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
            .required('La contraseña es requerida'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Nombre:"
              name="name"
              placeholder="Nombre"
            />

            <MyTextInput
              label="Email:"
              name="email"
              placeholder="Email"
            />

            <MyTextInput
              label="Password:"
              name="password"
              placeholder="Password"
              type="password"
            />

            <MyTextInput
              label="Repetir password:"
              name="password2"
              placeholder="Repetir password"
              type="password"
            />

            <button type="submit">Submit</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
