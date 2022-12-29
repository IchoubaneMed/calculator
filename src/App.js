import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          <div className="formula"></div>
          <div className="display"></div>
        </div>
        <div className="buttons">
          <div className="operators">
            <button className="operators_btn" id="add">+</button>
            <button className="operators_btn" id="substract">-</button>
            <button className="operators_btn" id="multiply">*</button>
            <button className="operators_btn" id="divide">/</button>
            <button className="operators_btn" id="clear">C</button>
          </div>
          <div className="digits">
            <button className="digits_btn" id="seven">7</button>
            <button className="digits_btn" id="eight">8</button>
            <button className="digits_btn" id="nine">9</button>

            <button className="digits_btn" id="four">4</button>
            <button className="digits_btn" id="five">5</button>
            <button className="digits_btn" id="six">6</button>
            
            <button className="digits_btn" id="one">1</button>
            <button className="digits_btn" id="two">2</button>
            <button className="digits_btn" id="three">3</button>

            <button className="digits_btn" id="zero">0</button>
            <button className="digits_btn" id="decimal">.</button>
            <button className="digits_btn" id="equal">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
