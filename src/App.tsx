import "./App.css";
import Private from "./component/auth/Private";
import Profile from "./component/auth/Profile";

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={false} component={Profile} />
    </div>
  );
}

export default App;
