import "./App.css";
import Button from "./component/html/Button";

function App() {
  return (
    <div className="App">
      <Button variant="primary" onClick={() => console.log("Clicked")}>
        Primary
      </Button>
    </div>
  );
}

export default App;
