import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo" />
            <ul>
              {
                routes.map(({ path, name }) => (
                  <li key={path}>
                    <NavLink to={path} activeClassName="nav-active">{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Switch>
            {
              routes.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={path}
                  render={() => <Component />}
                />
              ))
            }
            <Redirect to={routes[0].path} />

            <Route path="*">
              <Redirect to={routes[0].path} />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
