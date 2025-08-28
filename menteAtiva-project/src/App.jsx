import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import "./global.css";
import { Cadastro } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
