import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useState } from "react";

const Calculator = () => {
  //useStates to keep track of calculator state
  const [equation, setEquation] = useState('');
  const [operation, setOperation] = useState('');
  
  const clearScreen = () => {
    setEquation('');
    setOperation('');
  }

  const calculate = (n1, n2, o) => {

    if((!n1)||(!n2)||(!o)) return 0;

    if(o === '+') return parseInt(n1) + parseInt(n2);
    else if(o === '–') { return parseInt(n1)-parseInt(n2); } 
    else if(o === 'x')  return parseInt(n1) * parseInt(n2);
    else if(o === '/')  return parseInt(n1) / parseInt(n2);
    return 0;
  }
  
  //When I click a number, append to the equation
  const handleNumberClick = event => {
    let num = event.target.value;
    setEquation(equation.concat(num));
  };

  //When I click on an operation, set the operation & append to the equation, if valid
  const handleOperationClick = event => {
      let oper = event.target.value;

      if(equation === '') return; //if there's no equation, don't proceed

      if(oper === 'clear'){ clearScreen();}

      if(oper === '='){
        let eArr = equation.split(/['+','–','x','/']/);
        clearScreen();
        //do the math and display on screen
        let ttl = calculate(eArr[0],eArr[1],operation);
        if(ttl) setEquation(ttl.toString());
      }
      else if(['+','–','x','/'].indexOf(oper) >= 0) {
        if((operation === '') && (equation !== '')){
          setOperation(oper);
          setEquation(equation.concat(oper));
        }
      }
  };

  const mystyle = {
    display: "flex",
    flexFlow: "row wrap",
    listStyle: "none",
    color: "white",
    backgroundColor: "#F7DC6F",
    padding: "10px",
    fontFamily: "Arial",
    width:"350px"
  };

  return (
    <div>
      <Screen className="screen" value={equation} />
      <div style={mystyle}>
            <Number value={1} onClick={handleNumberClick} />
            <Number value={2} onClick={handleNumberClick} />
            <Number value={3} onClick={handleNumberClick} />
            <Operation value="/" onClick={handleOperationClick} />

            <Number value={4} onClick={handleNumberClick} />
            <Number value={5} onClick={handleNumberClick} />
            <Number value={6} onClick={handleNumberClick} />
            <Operation value="x" onClick={handleOperationClick} />

            <Number value={7} onClick={handleNumberClick} />
            <Number value={8} onClick={handleNumberClick} />
            <Number value={9} onClick={handleNumberClick} />
            <Operation value="–" onClick={handleOperationClick} />
        
            <Operation value="clear" onClick={handleOperationClick} />
            <Number value={0} onClick={handleNumberClick} />
            <Operation value="=" onClick={handleOperationClick} />
            <Operation value="+" onClick={handleOperationClick} />
          
    </div>     
  </div>
    
  );
};

export default Calculator;
