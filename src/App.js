import './App.css';
import { Breadcrumb } from './features/breadcrumb';
import { RouteProvider } from './routes';
import { Router } from './routes/router';

function App() {
  return (
    <div className="App">
      <RouteProvider>
        <Breadcrumb />
        <Router />
      </RouteProvider>
    </div>
  );
}

export default App;
