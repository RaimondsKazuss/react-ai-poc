import React, { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";

import data from "../data.json";
import DataTable, { DataRow } from "../components/DataTable";

const TablePage: React.FC = () => {
  const [rowData, setRowData] = useState<DataRow[]>([]);

  useEffect(() => {
    // Mock fetching the data from the local server
    setRowData(data);
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
    <div style={{ padding: "0 2rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          fontSize: "2em",
          margin: "20px 0",
        }}
      >
        Table Page
      </h2>
      <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
        {/* <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          domLayout="autoHeight" // Adjust grid size dynamically
          animateRows
          pagination
          paginationPageSize={15}
        /> */}
        <DataTable columnDefs={columnDefs} rowData={rowData} />
      </div>
    </div>
  );
};

export default TablePage;
