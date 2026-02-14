import { useState } from "react";
import "./App.css";
import Page1 from "./assets/Page1.gif";
import Page2 from "./assets/Page2.gif";
import Page3 from "./assets/Page3.gif";
import Page4 from "./assets/Page4.gif";
import Page5 from "./assets/Page5.gif";
import Page6 from "./assets/Page6.gif";
import Page7 from "./assets/Page7.gif";
import Page8_9 from "./assets/Page8_9.gif";
import Page10 from "./assets/Page10.gif";

function App() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="container">
      {page === 1 && (
        <div className="page">
          <img src={Page1} alt="Page 1" className="page-gif" />
          <h1>Yooooooo!</h1>
          <button onClick={() => setPage(2)}>Open</button>
        </div>
      )}

      {page === 2 && (
        <div className="page">
          <img src={Page2} alt="Page 2" className="page-gif" />
          <h1>I know madalas masama ako sayo</h1>
          <button onClick={() => setPage(3)}>Continue</button>
        </div>
      )}

      {page === 3 && (
        <div className="page">
          <img src={Page3} alt="Page 3" className="page-gif" />
          <h1>To the point na visible na sayo sungay ko</h1>
          <button onClick={() => setPage(4)}>Continue</button>
        </div>
      )}

      {page === 4 && (
        <div className="page">
          <img src={Page4} alt="Page 4" className="page-gif" />
          <h1>And alam ko most of the time BI ako sayo</h1>
          <button onClick={() => setPage(5)}>Continue</button>
        </div>
      )}

      {page === 5 && (
        <div className="page">
          <img src={Page5} alt="Page 5" className="page-gif" />
          <h1>I just want to tell you...</h1>
          <button onClick={() => setPage(6)}>Continue</button>
        </div>
      )}

      {page === 6 && (
        <div className="page">
          <img src={Page6} alt="Page 6" className="page-gif" />
          <h1>WALA AKONG BALAK MAG BAGO BWHAHAHAHAHA</h1>
          <button onClick={() => setPage(7)}>Continue</button>
        </div>
      )}

      {page === 7 && (
        <div className="page">
          <img src={Page7} alt="Page 7" className="page-gif" />
          <h1>Anyway...</h1>
          <button onClick={() => setPage(8)}>Continue</button>
        </div>
      )}

      {page === 8 && (
        <div className="page">
          <img src={Page8_9} alt="Page 8" className="page-gif" />
          <h1>Thank you for being my friend for so long</h1>
          <button onClick={() => setPage(9)}>Continue</button>
        </div>
      )}

      {page === 9 && (
        <div className="page">
          <img src={Page8_9} alt="Page 9" className="page-gif" />
          <h1>I do really appreciate you a lot</h1>
          <button onClick={() => setPage(10)}>Continue</button>
        </div>
      )}

      {page === 10 && (
        <div className="page">
          <img src={Page10} alt="Page 10" className="page-gif" />
          <h1>Happy Valentine's Day Shaina!❤️</h1>
        </div>
      )}
    </div>
  );
}

export default App;
