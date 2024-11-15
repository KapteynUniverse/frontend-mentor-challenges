import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:planetName" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/:crewName" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/:technologyName" element={<Technology />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
