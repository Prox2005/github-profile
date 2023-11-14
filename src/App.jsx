import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Repositories } from "./pages/index";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/github-profile">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repositories/:profile" element={<Repositories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
