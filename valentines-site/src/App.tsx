import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="container">
      {page === 1 && (
        <div className="page">
          <h1>Yooooooo!</h1>
          <button onClick={() => setPage(2)}>Open</button>
        </div>
      )}

      {page === 2 && (
        <div className="page">
          <h1>I know madalas masama ako sayo</h1>
          <button onClick={() => setPage(3)}>Continue</button>
        </div>
      )}

      {page === 3 && (
        <div className="page">
          <h1>To the point na visible na sayo sungay ko</h1>
          <button onClick={() => setPage(4)}>Continue</button>
        </div>
      )}

      {page === 4 && (
        <div className="page">
          <h1>And alam ko most of the time BI ako sayo</h1>
          <button onClick={() => setPage(5)}>Continue</button>
        </div>
      )}

      {page === 5 && (
        <div className="page">
          <h1>I just want to tell you...</h1>
          <button onClick={() => setPage(6)}>Continue</button>
        </div>
      )}

      {page === 6 && (
        <div className="page">
          <h1>WALA AKONG BALAK MAG BAGO BWHAHAHAHAHA</h1>
          <button onClick={() => setPage(7)}>Continue</button>
        </div>
      )}

      {page === 7 && (
        <div className="page">
          <h1>Thank you for being my friend for so long</h1>
          <button onClick={() => setPage(8)}>Continue</button>
        </div>
      )}

      {page === 8 && (
        <div className="page">
          <h1>I do really appreciate you a lot</h1>
          <button onClick={() => setPage(9)}>Continue</button>
        </div>
      )}

      {page === 9 && (
        <div className="page">
          <h1>Happy Valentine’s Day Shaina!❤️</h1>
        </div>
      )}
    </div>
  );
}

export default App;
