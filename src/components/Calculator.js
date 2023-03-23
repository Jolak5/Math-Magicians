import { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [intialValue, finalValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = calculate(intialValue, e.target.textContent);
    finalValue((intialValue) => ({
      ...intialValue,
      ...result,
    }));
  };

  const { total, next } = intialValue;

  return (
    <div className="whole">
      <div className="OutputValue">{next || total || 0}</div>
      <div className="calculatorContainer">
        <button name="AC" className="individualButton" onClick={handleClick} type="button">
          AC
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          +/-
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          %
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          ÷
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          7
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          8
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          9
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          x
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          4
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          5
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          6
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          -
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          1
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          2
        </button>
        <button className="individualButton" type="button" onClick={handleClick}>
          3
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          +
        </button>
        <button className="individualButton fullWidth" type="button" onClick={handleClick}>
          0
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          .
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          =
        </button>
      </div>

    </div>
  );
}
