import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getTableData } from "./api/api";
import { useQuery } from "@tanstack/react-query";
import Example from "./components/example";

function App() {
  const [count, setCount] = useState(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ["tableData"],
    queryFn: () => getTableData(),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // useEffect(() => {
  //   console.log(tableData);
  // }, [tableData]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Example />
    </>
  );
}

export default App;

// folder structure:
// src
//   - assets
//   - components
//   - pages
