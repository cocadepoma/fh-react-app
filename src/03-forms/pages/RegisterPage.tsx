import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    password2,
    handleInputChange,
    resetForm,
    isValidEmail,
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
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Este campo es obligatorio</span>}

        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          className={`${password.trim().length <= 0 && 'has-error'}`}
        />
        {password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe de tener al menos 6 caracteres</span>}

        <br />

        <label htmlFor="password2">Repeat Password</label>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
          placeholder="Repeat your password"
          className={`${password2.trim().length <= 0 && 'has-error'}`}
        />
        {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password2.trim().length > 0 && password !== password2 && <span>Las contraseñas no coinciden</span>}

        <br />

        <button type="submit" >Register</button>
        <button type="button" onClick={resetForm}>Reset</button>

      </form>
    </div>
  );
};
