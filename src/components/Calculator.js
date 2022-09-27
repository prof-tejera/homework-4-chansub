import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useState } from "react";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [equation, setEquation] = useState('');
  const [operation, setOperation] = useState('');

  const clearScreen = () => {
    setEquation('');
    setOperation('');
  }

  const calculate = (n1, n2) => {
    return parseInt(n1) + parseInt(n2);
  }
  
  /** TODO: what happens when I click a number? */
  const handleNumberClick = event => {
    console.info("handleNumberClick called, number punched is ", event.target.value);
    let num = event.target.value;
    setEquation(equation.concat(num));
  };


  /** TODO: what happens when I click an operation? */
  const handleOperationClick = event => {
      console.info("you clicked an operation event:", event.target.value);
      let oper = event.target.value;

      if(oper === 'clear'){
        clearScreen();
      }
      else if(oper === '='){
        //do the math
        console.info("calculate this", equation);
        let eArr = equation.split(/['+','-','x','/']/);
        console.info("eArr",eArr[0], operation, eArr[1]);
        clearScreen();
        //do the math and display on screen
        let ttl = calculate(eArr[0],eArr[1]);
        console.info("ttl is", ttl);
        
      }
      else if(['+','-','x','/'].indexOf(oper) >= 0) {
        if((operation === '') && (equation !== '')){
          setOperation(oper);
          setEquation(equation.concat(oper));
        }
      }
  };




  return (
    <div>
      <Screen value={equation} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
