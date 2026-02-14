import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="container">
      {page === 1 && (
        <div className="page">
          <h1>Hi!</h1>
          <button onClick={() => setPage(2)}>Open</button>
        </div>
      )}

      {page === 2 && (
        <div className="page">
          <h1>Thank you for being my friend for so long</h1>
          <p>You mean so much to me.</p>
          <button onClick={() => setPage(3)}>Continue</button>
        </div>
      )}

      {page === 3 && (
        <div className="page">
          <h1>Happy Valentine’s Day ❤️</h1>
          <p>
            Thank you for being my makulit na friend all the time.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
