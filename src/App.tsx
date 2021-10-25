import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/HomePage/Homepage.component";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
      </Switch>
    </Router>
  );
};
export default App;
