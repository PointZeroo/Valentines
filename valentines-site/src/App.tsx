import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="container">
      {page === 1 && (
        <div className="page">
          <h1>Hi love 💖</h1>
          <button onClick={() => setPage(2)}>Open</button>
        </div>
      )}

      {page === 2 && (
        <div className="page">
          <h1>Before anything else...</h1>
          <p>You mean so much to me.</p>
          <button onClick={() => setPage(3)}>Continue</button>
        </div>
      )}

      {page === 3 && (
        <div className="page">
          <h1>Happy Valentine’s Day ❤️</h1>
          <p>
            Thank you for being my peace, my happiness, and my home.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
