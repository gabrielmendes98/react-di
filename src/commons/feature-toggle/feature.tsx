import { useContext, ReactNode } from 'react';
import { FeatureName } from './models';
import { FeatureToggleContext } from './provider';

type Props = {
  name: FeatureName;
  children: ReactNode;
};

export const Feature = ({ name, children }: Props) => {
  const flags = useContext(FeatureToggleContext);

  return flags[name] && children ? children : null;
};
