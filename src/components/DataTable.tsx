import React from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";

export interface DataRow {
  id: number;
  [key: string]: string | number;
}

interface DataTableProps {
  columnDefs: ColDef[];
  rowData: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ columnDefs, rowData }) => (
  <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
    <AgGridReact
      columnDefs={columnDefs}
      rowData={rowData}
      domLayout="autoHeight"
      animateRows
      pagination
      paginationPageSize={15}
    />
  </div>
);

export default DataTable;
