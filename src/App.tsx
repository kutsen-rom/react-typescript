import "./App.css";
import User from "./component/context/User";
import UserContextProvider from "./component/context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
