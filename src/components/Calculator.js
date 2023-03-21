export default function Calculator(handleClick) {
  return (
    <div className="whole">
      <div className="OutputValue">0</div>
      <div className="calculatorContainer">
        <button className="individualButton" onClick={handleClick} type="button">
          AC
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          +/-
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          %
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          /
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          7
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          8
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          9
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          x
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          4
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          5
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          6
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          -
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          1
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          2
        </button>
        <button className="individualButton" onClick={handleClick} type="button">
          3
        </button>
        <button className="individualButton coloredButtons" onClick={handleClick} type="button">
          +
        </button>
        <button className="individualButton fullWidth" onClick={handleClick} type="button">
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
