import { NestedOne } from '../features/nested-1/container';
import { PersonListContainer } from '../features/person-list/container';
import { PersonRegisterContainer } from '../features/person-register/container';
import { Route, Routes } from './interfaces';
import { Notfound } from './not-found';

export const notFoundRoute: Route = {
  path: '/404',
  title: 'Not Found',
  component: Notfound,
};

export const defaultRoute: Route = {
  path: '/',
  title: 'Person List',
  component: PersonListContainer,
};

export const routes: Routes = {
  '/': defaultRoute,
  '/404': notFoundRoute,
  '/register': {
    path: '/register',
    title: 'Register Person',
    component: PersonRegisterContainer,
  },
  '/nested-1': {
    path: '/nested-1',
    title: 'Nested One',
    component: NestedOne,
  },
};
