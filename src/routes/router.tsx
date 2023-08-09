import { useRoute } from '.';

export const Router = () => {
  const { currentRoute } = useRoute();

  const Component = currentRoute.component;

  return <Component />;
};
