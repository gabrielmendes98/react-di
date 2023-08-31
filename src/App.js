import './App.css';
import {
  FeatureToggleProvider,
  Feature,
  FeatureName,
} from './commons/feature-toggle';
import { Breadcrumb } from './features/breadcrumb';
import { Header } from './features/header/container';
import { RouteProvider } from './routes/provider';
import { Router } from './routes/router';

function App() {
  return (
    <FeatureToggleProvider>
      <div className="App">
        <RouteProvider>
          <Header />
          <Feature name={FeatureName.ShowBreadcrumb}>
            <Breadcrumb />
          </Feature>
          <Router />
        </RouteProvider>
      </div>
    </FeatureToggleProvider>
  );
}

export default App;
