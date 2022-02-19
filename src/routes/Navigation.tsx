import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react-logo" />
          <ul>
            <li>
              <NavLink to="/home" activeClassName="nav-active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active">About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <LazyPage1 />
          </Route>
          <Route path="/about">
            <LazyPage2 />
          </Route>
          <Route path="/users">
            <LazyPage3 />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
          {/* <Route path="/*" element={<Navigate to="home" />} /> */}

        </Switch>
      </div>
    </BrowserRouter>
  )
}
