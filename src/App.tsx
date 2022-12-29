import { Outlet } from "react-router-dom";
// css
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Buscador</h1>
      <Outlet />
    </div>
  );
}

export default App;
