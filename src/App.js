import BaseButton from "./components/BaseButton";
import ContactList from "./components/ContactList";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <Title title="Let's us know who you are" subTitle="" />
      <ContactList />

      <div className="row text-end">
        <div className="col">
          <BaseButton />
        </div>
      </div>
    </div>
  );
}

export default App;
