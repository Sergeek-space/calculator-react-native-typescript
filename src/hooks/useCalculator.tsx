import { useRef, useState } from "react";

enum Operators {
  division, multiplication, subtraction, addition
}

export function useCalculator() {

  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperator = useRef<Operators>();

  function clearHandler() {
    setNumber('0');
    setPreviousNumber('0');
  }

  function concatInputHandler(input: string) {
    if (number.includes('.') && input === '.') return;
    if (!number.startsWith('0.') && number.startsWith('0') && input !== '.') {
      setNumber(input); //remove leading zero
    }
    else setNumber(number + input);
  }

  function flipSignHandler() {
    setNumber((parseFloat(number) * -1).toString())
  }

  function backspaceHandler() {
    if (number.length === 2 && number.startsWith('-')) {
      setNumber('0');
      return;
    }
    if (number.length > 1) {
      setNumber(number.slice(0, -1));
    }
    else setNumber('0');
  }

  function setPreviousNumHandler() {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    }
    else setPreviousNumber(number);
    setNumber('0');
  }

  function divisionHandler() {
    setPreviousNumHandler();
    lastOperator.current = Operators.division;
  }
  function multiplicationHandler() {
    setPreviousNumHandler();
    lastOperator.current = Operators.multiplication;
  }
  function subtractionHandler() {
    setPreviousNumHandler();
    lastOperator.current = Operators.subtraction;
  }
  function additionHandler() {
    setPreviousNumHandler();
    lastOperator.current = Operators.addition;
  }
  function calculateHandler() {
    const num1 = Number(previousNumber);
    const num2 = Number(number);

    switch (lastOperator.current) {
      case Operators.addition:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtraction:
        setNumber(`${num1 - num2}`);
        break;
      case Operators.multiplication:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.division:
        if (num1 === 0) {
          clearHandler();
        }
        else setNumber(`${num1 / num2}`);
        break;
    }
    setPreviousNumber('0');
  }

  return {
    previousNumber,
    number,
    clearHandler,
    flipSignHandler,
    backspaceHandler,
    divisionHandler,
    concatInputHandler,
    multiplicationHandler,
    subtractionHandler,
    additionHandler,
    calculateHandler
  }
}
