import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";
import "./App.scss";
import TablePage from "./pages/TablePage/TablePage";
import Authorization from "./pages/Authorization/Authorization";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <div>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/table" className="link">
              Data table
            </Link>
          </div>
          <Link to="/settings" className="link">
            Settings
          </Link>
          <Link to="/authorization" className="link">
            Login
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
