import "./App.css";
import Box from "./component/context/Box";
import ThemeContextProvider from "./component/context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
