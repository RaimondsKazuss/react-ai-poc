import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopSales from "./components/TopSales";
import Settings from "./pages/Settings/Settings";
import TablePage from "./pages/TablePage/TablePage";

function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: 0,
            width: "100%",
            backgroundColor: "#f8f9fa",
            padding: "10px 0",
            borderBottom: "1px solid #dee2e6",
          }}
        >
          <div>
            <Link
              to="/"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Home
            </Link>
            <Link
              to="/table"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Table
            </Link>
          </div>

          <Link
            to="/settings"
            style={{ margin: "0 15px", textDecoration: "none", color: "black" }}
          >
            User
          </Link>
        </nav>
        <div style={{ paddingTop: "50px" }}>
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/table" element={<TablePage />} />
            <Route path="/settings" element={<Settings />} />{" "}
            {/* Add your Settings component here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Example Home component
const Home = () => (
  <div>
    <TopSales />
  </div>
);
export default App;
