import { Route } from "react-router-dom";
import FirstTime from "./views/FirstTime";
import SelectUser from "./views/SelectUser";
import CreateConversation from "./views/SetConversationTitle";
import Conversation from "./views/Conversations";
import AConversation from "./views/AConversation";
import Notify from "./components/Notifications";

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={FirstTime} />
      <Route exact path="/select-user" component={SelectUser} />
      <Route exact path="/create-conversation" component={CreateConversation} />
      <Route exact path="/conversations" component={Conversation} />
      <Route exact path="/conversation/:id" component={AConversation} />
      <Route exact path="/notify" component={Notify} />
    </div>
  );
}

export default App;
