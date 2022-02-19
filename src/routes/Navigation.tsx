import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import logo from '../logo.svg';

import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Cargando</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo" />
            <ul>
              {routes.map(({ name, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}
