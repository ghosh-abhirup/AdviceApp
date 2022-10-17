import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  });

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((data) => data.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="header">{advice}</h1>
        <button onClick={fetchAdvice}>Give me an advice</button>
      </div>
    </div>
  );
}

export default App;
