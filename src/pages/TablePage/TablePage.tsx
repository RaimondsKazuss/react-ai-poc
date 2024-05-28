import React, { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";

import data from "../../data.json";
import DataTable, { DataRow } from "../../components/DataTable";
import "./TablePage.scss";

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
    <div className="table-page">
      <h2>Table Page</h2>
      <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
        <DataTable columnDefs={columnDefs} rowData={rowData} />
      </div>
    </div>
  );
};

export default TablePage;
