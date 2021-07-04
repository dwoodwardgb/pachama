import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForestGalleryPage from "./ForestGalleryPage";
import ForestDetailPage from "./ForestDetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ForestGalleryPage />
        </Route>
        <Route path="/:forestId">
          <ForestDetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
