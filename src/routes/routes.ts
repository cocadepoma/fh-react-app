import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  path: string;
  name: string;
};

const LazyLayout = lazy(/* webpackChunkName: LazyPage1*/() => import("../01-lazyload/layout/LazyLayout"));
const NoLazy = lazy(/* webpackChunkName: LazyPage2*/() => import("../01-lazyload/pages/NoLazy"));

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout - Dash',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
]