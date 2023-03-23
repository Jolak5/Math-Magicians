import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/quote';

function App() {
  // javascript-land
  return (
    <div className="wholeCalculator">
      <Quotes />
      <Calculator />
    </div>
  );
}

export default App;
