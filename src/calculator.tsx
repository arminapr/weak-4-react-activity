import './calculator.css';
import { CalculatorDisplay, CalculatorKey } from './components';
import { NumericKeys } from './enums/numeric-keys.enum';
import { OperatorKeys } from './enums/operator-keys.enum';
import { ActionKeys } from './enums/action-keys.enum';
import { useState } from 'react';


export default function Calculator() {
  const [display, setDisplay] = useState("0");

  function dummy(key: NumericKeys | OperatorKeys | ActionKeys): void {
    alert(`${key}-key pressed.`);
  }

  return (
    <div className="container">
      <div className="calculator">
        <CalculatorDisplay displayValue={display} />

        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <CalculatorKey
                className="key-clear"
                label={ActionKeys.CLEAR}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-sign"
                label={ActionKeys.SIGN_FLIP}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-percent"
                label={OperatorKeys.SQRT}
                onPress={dummy}
              />
            </div>
            <div className="digit-keys">
              <CalculatorKey
                className="key-0"
                label={NumericKeys.ZERO}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-dot"
                label={ActionKeys.DOT}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-1"
                label={NumericKeys.ONE}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-2"
                label={NumericKeys.TWO}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-3"
                label={NumericKeys.THREE}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-4"
                label={NumericKeys.FOUR}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-5"
                label={NumericKeys.FIVE}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-6"
                label={NumericKeys.SIX}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-7"
                label={NumericKeys.SEVEN}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-8"
                label={NumericKeys.EIGHT}
                onPress={dummy}
              />
              <CalculatorKey
                className="key-9"
                label={NumericKeys.NINE}
                onPress={dummy}
              />
            </div>
          </div>
          <div className="operator-keys">
            <CalculatorKey
              className="key-divide"
              label={OperatorKeys.DIV}
              onPress={dummy}
            />
            <CalculatorKey
              className="key-multiply"
              label={OperatorKeys.MULT}
              onPress={dummy}
            />
            <CalculatorKey
              className="key-subtract"
              label={OperatorKeys.MINUS}
              onPress={dummy}
            />
            <CalculatorKey
              className="key-add"
              label={OperatorKeys.PLUS}
              onPress={dummy}
            />
            <CalculatorKey
              className="key-equals"
              label={ActionKeys.EQUALS}
              onPress={dummy}
            />
          </div>
        </div>
      </div>
    </div>
  );
}