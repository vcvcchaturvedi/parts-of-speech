import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NewForm from "./components/form";
import Result from "./components/result";
function App() {
  const [resultAvailable, setResultAvailable] = useState(false);
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        {resultAvailable ? (
          <Result data={data} />
        ) : (
          <NewForm
            data={data}
            setData={setData}
            setResultAvailable={setResultAvailable}
          />
        )}
      </header>
    </div>
  );
}

export default App;
