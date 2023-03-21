import calculate from '../logic/calculate';
import operate from '../logic/operate';

export default function Calculator() {
  return (
    <div className="whole">
      <div className="OutputValue">0</div>
      <div className="calculatorContainer">
        <button className="individualButton" onClick={calculate} type="button">
          AC
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          +/-
        </button>
        <button className="individualButton" onClick={operate} type="button">
          %
        </button>
        <button className="individualButton coloredButtons" onClick={operate} type="button">
          ÷
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          7
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          8
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          9
        </button>
        <button className="individualButton coloredButtons" onClick={operate} type="button">
          x
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          4
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          5
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          6
        </button>
        <button className="individualButton coloredButtons" onClick={operate} type="button">
          -
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          1
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          2
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          3
        </button>
        <button className="individualButton coloredButtons" onClick={operate} type="button">
          +
        </button>
        <button className="individualButton fullWidth" onClick={calculate} type="button">
          0
        </button>
        <button className="individualButton" onClick={calculate} type="button">
          .
        </button>
        <button className="individualButton coloredButtons" onClick={operate} type="button">
          =
        </button>
      </div>

    </div>
  );
}
