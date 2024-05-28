import React from "react";
interface DataRow {
  id: number;
  [key: string]: any;
}
interface DataTableProps {
  columns: string[];
  data: DataRow[];
}
const DataTable: React.FC<DataTableProps> = ({ columns, data }) => (
  <table className="data-table">
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column, index) => (
            <td key={index}>{row[column]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
export default DataTable;
