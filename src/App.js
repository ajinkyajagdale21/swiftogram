import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
