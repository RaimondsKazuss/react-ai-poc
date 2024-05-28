import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";

interface DataRow {
  id: number;
  [key: string]: string | number;
}

interface DataTableProps {
  columnDefs: ColDef[];
  rowData: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ columnDefs, rowData }) => (
  <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
    <AgGridReact columnDefs={columnDefs} rowData={rowData}></AgGridReact>
  </div>
);

export default DataTable;
