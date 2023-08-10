import './App.css';
import { Breadcrumb } from './features/breadcrumb';
import { Header } from './features/header/container';
import { RouteProvider } from './routes';
import { Router } from './routes/router';

function App() {
  return (
    <div className="App">
      <RouteProvider>
        <Header />
        <Breadcrumb />
        <Router />
      </RouteProvider>
    </div>
  );
}

export default App;
