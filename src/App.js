import './App.css';
import { RouteProvider } from './routes';
import { Router } from './routes/router';

function App() {
  return (
    <div className="App">
      <RouteProvider>
        <Router />
      </RouteProvider>
    </div>
  );
}

export default App;
