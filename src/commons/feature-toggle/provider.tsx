import { createContext, ReactNode } from 'react';
import {
  BusinessEnvironment,
  FeatureToggleContextConfig,
  FeatureToggleProviderProps,
} from './models';
import { config } from './config';

export const FeatureToggleContext = createContext<FeatureToggleContextConfig>(
  config[BusinessEnvironment.MCM],
);

export const FeatureToggleProvider = ({
  children,
}: FeatureToggleProviderProps) => {
  const configToProvide = config[process.env.REACT_APP_BUSINESS_ENV];

  return (
    <FeatureToggleContext.Provider value={configToProvide}>
      {children}
    </FeatureToggleContext.Provider>
  );
};
