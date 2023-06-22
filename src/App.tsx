import "./App.css";
import Greeting from "./component/Greeting";
import Person from "./component/Person";
import PersonList from "./component/PersonList";

function App() {
  const personName = {
    first: "Akira",
    last: "Kurosawa",
  };

  const nameList = [
    { first: "Akira", last: "Kurosawa" },
    { first: "Kent", last: "Dodds" },
    { first: "Princess", last: "Diana" },
  ];

  return (
    <div className="App">
      <Greeting name="Roman" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
