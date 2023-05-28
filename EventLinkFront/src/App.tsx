import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

function Routess() {
  return useRoutes(routes);
}

function App() {
  return (
    <Router>
      <Routess />
    </Router>
  );
}

export default App;
