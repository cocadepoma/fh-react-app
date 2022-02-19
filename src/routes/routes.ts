import { lazy } from 'react';
import { LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
};

const LazyPage = lazy(() => import(/* webpackChunkName: "LazyPage" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/nolazy',
    Component: NoLazy,
    name: 'No Lazy Loading',
  },
  {
    path: '/lazypage',
    Component: LazyPage,
    name: 'LazyPage-2',
  },
];