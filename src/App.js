import {BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./components/AppRoutes";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <AppRoutes />
    </Router>
  );
};

export default App;
