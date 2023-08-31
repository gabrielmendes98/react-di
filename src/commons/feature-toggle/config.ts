import {
  BusinessEnvironment,
  FeatureName,
  FeatureToggleConfig,
  FeatureToggleContextConfig,
} from './models';

export const MCMConfig: FeatureToggleContextConfig = {
  [FeatureName.ShowBreadcrumb]: true,
};

export const MCRConfig: FeatureToggleContextConfig = {
  [FeatureName.ShowBreadcrumb]: false,
};

export const config: FeatureToggleConfig = {
  [BusinessEnvironment.MCR]: MCRConfig,
  [BusinessEnvironment.MCM]: MCMConfig,
};
