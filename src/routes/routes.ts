import { NestedOne } from '../features/nested-1/container';
import { PersonListContainer } from '../features/person-list/container';
import { PersonRegisterContainer } from '../features/person-register/container';
import { Notfound } from './not-found';

export type Route = {
  path: string;
  title: string;
  component: any;
};

export type Routes = Record<string, Route>;

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
