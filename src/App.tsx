import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>GitHub Buscador</h1>
      <Outlet />
    </div>
  );
}

export default App;
