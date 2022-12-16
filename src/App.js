import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Navigation from "./components/Navigation";
import { UserProvider } from "./contexts/User";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </UserProvider>
  );
};

export default App;
