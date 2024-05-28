// File: /pages/TablePage.tsx

import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community"; // Importing column definition types from ag-Grid
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";

interface DataRow {
  id: number;
  SSN: string;
  employee: string;
  itemNumber: string; // Using quotes because of the space in the property name
  reason: string;
  from: string;
  to: string;
  FV: string;
  text: string;
}

const TablePage: React.FC = () => {
  const [rowData, setRowData] = useState<DataRow[]>([]);

  useEffect(() => {
    // Fetching the data from the local server
    fetch("http://localhost:3001/data") // Ensuring the endpoint matches your Node.js server setup
      .then((response) => response.json())
      .then((data: DataRow[]) => setRowData(data)); // Type assertion for the fetched data
  }, []);

  const columnDefs: ColDef[] = [
    { headerName: "ID", field: "id" },
    { headerName: "SSN", field: "SSN" },
    { headerName: "Employee", field: "employee" },
    { headerName: "Item Number", field: "itemNumber" },
    { headerName: "Reason", field: "reason" },
    { headerName: "From", field: "from" },
    { headerName: "To", field: "to" },
    { headerName: "F/V", field: "FV" },
    { headerName: "Text", field: "text" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        domLayout="autoHeight" // Adjust grid size dynamically
        animateRows={true} // Animates rows when they are updated
      />
    </div>
  );
};

export default TablePage;
