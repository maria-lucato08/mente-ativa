import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import "./global.css";
import { AuthProvider } from "./context/AuthProvider";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
