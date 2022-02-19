import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const Navigation = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <h2>Lazy LAyout Pages</h2>

      <ul>
        <li><NavLink activeClassName="nav-active" to={`${url}/lazy1`}>Lazy Page 1</NavLink></li>
        <li><NavLink activeClassName="nav-active" to={`${url}/lazy2`}>Lazy Page 2</NavLink></li>
        <li><NavLink activeClassName="nav-active" to={`${url}/lazy3`}>Lazy Page 3</NavLink></li>

      </ul>

      <Switch>
        <Route exact path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route exact path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>
        <Route exact path={`${path}/lazy3`}>
          <LazyPage3 />
        </Route>

        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </>
  )
}
