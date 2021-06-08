import AdminLogin from "./components/login/Admin_login";
import VenueLogin from "./components/login/Venue_login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin-login" component={AdminLogin} exact />
        <Route path="/venue-login" component={VenueLogin} exact />
        <Route path="/" component={AdminLogin} exact />
      </Switch>
    </Router>
  );
}

export default App;
