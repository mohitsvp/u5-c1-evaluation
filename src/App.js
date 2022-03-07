import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let valueBook = 13;
  let valuePen = 10;
  let valueNotebook = 44;
  let valueInkpen = 78;
  let totalValue = valueBook + valuePen + valueNotebook + valueInkpen;
  const [counterBook, setCounterBook] = useState(valueBook);
  const [counterPen, setCounterPen] = useState(valuePen);
  const [counterNotebook, setCounterNotebook] = useState(valueNotebook);
  const [counterInkpen, setCounterInkpen] = useState(valueInkpen);
  const [totalCounter, setTotalCounter] = useState(totalValue);
  const handleChangeBook = (valueBook) => {
    setCounterBook(counterBook + valueBook);
  };
  const handleChangePen = (valuePen) => {
    setCounterPen(counterPen + valuePen);
  };
  const handleChangeNotebook = (valueNotebook) => {
    setCounterNotebook(counterNotebook + valueNotebook);
  };
  const handleChangeInkpen = (valueInkpen) => {
    setCounterInkpen(counterInkpen + valueInkpen);
  };
  const handleTotalChange = (totalValue) => {
    setTotalCounter(totalCounter + totalValue);
  };
  return (
    <>
      <div className="items">
        <span>Books: </span>
        <button
          className="addBook"
          onClick={() => {
            handleChangeBook(1);
            handleTotalChange(1);
          }}
        >
          +
        </button>
        <button
          className="remBook"
          onClick={() => {
            if (counterBook > 0) {
              handleChangeBook(-1);
              handleTotalChange(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalBooks">{counterBook}</span>
      </div>
      <div className="items">
        <span>Pens: </span>
        <button
          className="addPen"
          onClick={() => {
            handleChangePen(1);
            handleTotalChange(1);
          }}
        >
          +
        </button>
        <button
          className="remPen"
          onClick={() => {
            if (counterPen > 0) {
              handleChangePen(-1);
              handleTotalChange(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalPens">{counterPen}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="addNotebook"
          onClick={() => {
            handleChangeNotebook(1);
            handleTotalChange(1);
          }}
        >
          +
        </button>
        <button
          className="remNotebook"
          onClick={() => {
            if (counterNotebook > 0) {
              handleChangeNotebook(-1);
              handleTotalChange(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalNotebooks">{counterNotebook}</span>
      </div>
      <div className="items">
        <span>Inkpens: </span>
        <button
          className="addInkpen"
          onClick={() => {
            handleChangeInkpen(1);
            handleTotalChange(1);
          }}
        >
          +
        </button>
        <button
          className="remInkpen"
          onClick={() => {
            if (counterInkpen > 0) {
              handleChangeInkpen(-1);
              handleTotalChange(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalInkpens">{counterInkpen}</span>
      </div>
      <div className="totalTitle">Total Items:</div>
      <div className="total">{totalCounter}</div>
    </>
  );
}

export default App;
