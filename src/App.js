import { Route } from "react-router-dom";
import FirstTime from "./views/FirstTime";
import SelectUser from "./views/SelectUser";

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={FirstTime} />
      <Route exact path="/select-user/:user" component={SelectUser} />
    </div>
  );
}

export default App;
