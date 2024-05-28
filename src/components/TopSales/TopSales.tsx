import { useEffect, useState } from "react";
import salesData from "../../sales.json"; // Adjust the import path as necessary
import "./TopSales.scss";

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
    <div className="container">
      <h2 className="title">Top Sales</h2>
      <ul className="salesList">
        {sales.map((sale, index) => (
          <li key={index} className="saleItem">
            <p>{sale.first_name}</p>
            <p>{sale.sales}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopSales;
