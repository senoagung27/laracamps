import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route} from "react-router-dom";
import LandingPage from "pages/LandingPage";

import "assets/scss/style.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
