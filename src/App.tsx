import "./App.css";
import List from "./component/generics/List";

function App() {
  return (
    <div className="App">
      {/* <List
        items={["Roman", "Akira", "Diana"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: "Roman", last: "Lastname" },
          { id: 2, first: "Akira", last: "Kurosawa" },
          { id: 3, first: "Diana", last: "Princess" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
