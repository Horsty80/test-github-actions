import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import config from "../config/config.json";

function App() {
  const [count, setCount] = useState(0);
  const { title, secret_data, public_data } = config;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <p>
          Welcome to my <strong>{title}</strong>
        </p>
        <p>
          This is a super secret data: <strong>{secret_data}</strong>
        </p>
        <p>
          This is a public data: <strong>{public_data}</strong>
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
