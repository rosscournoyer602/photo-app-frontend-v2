import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "../reset.scss";
import "../style.scss";

import Wrapper from "../components/Wrapper";

const AppRouter = () => {
  return (
    <Router>
      <Wrapper>
        <Switch>
          {routes.map((r, i) => (
            <Route
              path={r.path}
              component={r.component}
              exact={r.exact}
              key={r.path || i}
              render={r.render}
            />
          ))}
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default AppRouter;
