import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BmiApp from "./BmiApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BmiApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
