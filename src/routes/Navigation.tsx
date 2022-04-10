import { BrowserRouter, Navigate, NavLink, Routes, Route } from 'react-router-dom';

import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstractation,
} from '../03-forms/pages';

import logo from '../logo.svg';

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
              <NavLink to="/formik" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Comp.</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstract.</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/formik" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstractation" element={<FormikAbstractation />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to="register" />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}
