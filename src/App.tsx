import "./App.css";
import Button from "./component/Button";
import Input from "./component/Input";

function App() {
  return (
    <div className="App">
      <Button handleClick={(e, id) => console.log(e, id)} />
      <Input value="" handleChange={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default App;
