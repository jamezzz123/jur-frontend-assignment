import { Route } from "react-router-dom";
import FirstTime from "./views/FirstTime";

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={FirstTime} />
    </div>
  );
}

export default App;
