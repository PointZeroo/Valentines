import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="container">
      {page === 1 && (
        <div className="page">
          <img src="/src/assets/Page 1.gif" alt="Page 1" className="page-gif" />
          <h1>Yooooooo!</h1>
          <button onClick={() => setPage(2)}>Open</button>
        </div>
      )}

      {page === 2 && (
        <div className="page">
          <img src="/src/assets/Page 2.gif" alt="Page 2" className="page-gif" />
          <h1>I know madalas masama ako sayo</h1>
          <button onClick={() => setPage(3)}>Continue</button>
        </div>
      )}

      {page === 3 && (
        <div className="page">
          <img src="/src/assets/Page 3.gif" alt="Page 3" className="page-gif" />
          <h1>To the point na visible na sayo sungay ko</h1>
          <button onClick={() => setPage(4)}>Continue</button>
        </div>
      )}

      {page === 4 && (
        <div className="page">
          <img src="/src/assets/Page 4.gif" alt="Page 4" className="page-gif" />
          <h1>And alam ko most of the time BI ako sayo</h1>
          <button onClick={() => setPage(5)}>Continue</button>
        </div>
      )}

      {page === 5 && (
        <div className="page">
          <img src="/src/assets/Page 5.gif" alt="Page 5" className="page-gif" />
          <h1>I just want to tell you...</h1>
          <button onClick={() => setPage(6)}>Continue</button>
        </div>
      )}

      {page === 6 && (
        <div className="page">
          <img src="/src/assets/Page 6.gif" alt="Page 6" className="page-gif" />
          <h1>WALA AKONG BALAK MAG BAGO BWHAHAHAHAHA</h1>
          <button onClick={() => setPage(7)}>Continue</button>
        </div>
      )}

      {page === 7 && (
        <div className="page">
          <img src="/src/assets/Page 7.gif" alt="Page 7" className="page-gif" />
          <h1>Anyway...</h1>
          <button onClick={() => setPage(8)}>Continue</button>
        </div>
      )}

      {page === 8 && (
        <div className="page">
          <img src="/src/assets/Page 8&9.gif" alt="Page 8" className="page-gif" />
          <h1>Thank you for being my friend for so long</h1>
          <button onClick={() => setPage(9)}>Continue</button>
        </div>
      )}

      {page === 9 && (
        <div className="page">
          <img src="/src/assets/Page 8&9.gif" alt="Page 9" className="page-gif" />
          <h1>I do really appreciate you a lot</h1>
          <button onClick={() => setPage(10)}>Continue</button>
        </div>
      )}

      {page === 10 && (
        <div className="page">          <img src="/src/assets/Page 10.gif" alt="Page 10" className="page-gif" />          <h1>Happy Valentine’s Day Shaina!❤️</h1>
        </div>
      )}
    </div>
  );
}

export default App;
