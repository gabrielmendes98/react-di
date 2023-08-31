import { ReactNode } from 'react';

export enum FeatureName {
  ShowBreadcrumb,
}

export enum BusinessEnvironment {
  MCR = 'MCR',
  MCM = 'MCM',
}

export type FeatureToggleConfig = Record<
  BusinessEnvironment,
  Record<FeatureName, boolean>
>;

export type FeatureToggleContextConfig = Record<FeatureName, boolean>;

export type FeatureToggleProviderProps = {
  children: ReactNode;
};
