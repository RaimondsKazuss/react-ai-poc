import { useEffect, useState } from "react";
import salesData from "../sales.json"; // Adjust the import path as necessary

function TopSales() {
  const [sales, setSales] = useState<
    { id: number; first_name: string; last_name: string; sales: string }[]
  >([]);

  useEffect(() => {
    const sortedSales = salesData.sort(
      (a, b) => Number(b.sales) - Number(a.sales)
    );
    setSales(sortedSales.slice(0, 5));
  }, []);

  return (
    <div style={{ padding: "3rem 2rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          fontSize: "2em",
          margin: "20px 0",
        }}
      >
        Top Sales
      </h2>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "10px",
          padding: 0,
          listStyleType: "none",
        }}
      >
        {sales.map((sale, index) => (
          <li
            key={index}
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <p>{sale.first_name}</p>
            <p>{sale.sales}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopSales;
