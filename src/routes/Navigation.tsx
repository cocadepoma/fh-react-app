import { BrowserRouter, Navigate, NavLink, Routes, Route } from 'react-router-dom';

import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstractation,
} from '../03-forms/pages';

import logo from '../logo.svg';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { DynamicFormPage } from '../03-forms/pages/DynamicFormPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">

        <nav>
          <img src={logo} alt="react-logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Register</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dinamic Form</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/formik" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstractation" element={<FormikAbstractation />} />
          <Route path="/formik-register" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicFormPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to="register" />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}
