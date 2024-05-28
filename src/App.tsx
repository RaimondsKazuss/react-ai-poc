import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TablePage from "./pages/TablePage"; // Adjust the import path as necessary

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/table">Table</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Define a Home component or use an existing component */}
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Example Home component
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome! Click on the link above to view the table.</p>
  </div>
);

export default App;
