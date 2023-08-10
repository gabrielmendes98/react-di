import { useRoute } from './useRoute';

export const Router = () => {
  const { currentRoute } = useRoute();

  const Component = currentRoute.component;

  return <Component />;
};
