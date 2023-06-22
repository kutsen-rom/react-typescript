import "./App.css";
import Greeting from "./component/Greeting";
import Heading from "./component/Heading";
import Oscar from "./component/Oscar";
import Status from "./component/Status";

function App() {
  return (
    <div className="App">
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>
          Oscar goes to someone
        </Heading>
      </Oscar>
      <Greeting name="Roman" isLoggedIn={true} />
    </div>
  );
}

export default App;
