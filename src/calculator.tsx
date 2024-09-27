import "./calculator.css";
import { CalculatorDisplay, CalculatorKey } from "./components";
import { NumericKeys } from "./enums/numeric-keys.enum";
import { OperatorKeys } from "./enums/operator-keys.enum";
import { ActionKeys } from "./enums/action-keys.enum";
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  function numericKeyPressHandler(key: NumericKeys): void {
    if (display === "0" || display === "Error") {
      setDisplay(String(key));
    } else {
      setDisplay(`${display}${key}`);
    }
  }

  function operatorKeyPressHandler(key: OperatorKeys): void {
    setDisplay(
      display === "Error" || display === "0" || display === "."
        ? String(key)
        : `${display}${key}`
    );
  }

  function actionKeyPressHandler(key: ActionKeys): void {
    switch (key) {
      case ActionKeys.CLEAR:
        setDisplay("0");
        break;
      case ActionKeys.SIGN_FLIP:
        setDisplay(display.startsWith('-') ? display.slice(1) : `-${display}`);
        break;
      case ActionKeys.SQRT:
        const num = parseFloat(display);
        if (num >= 0) {
          setDisplay(Math.sqrt(num).toString());
        } else {
          setDisplay("Error");
        }
        break;
      case ActionKeys.EQUALS:
        try {
          setDisplay(eval(display).toString());
        } catch (error) {
          setDisplay("Error");
        }
        break;
      default:
        dummy(key);
    }
  }

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
                onPress={actionKeyPressHandler}
              />
              <CalculatorKey
                className="key-sign"
                label={ActionKeys.SIGN_FLIP}
                onPress={actionKeyPressHandler}
              />
              <CalculatorKey
                className="key-percent"
                label={OperatorKeys.SQRT}
                onPress={operatorKeyPressHandler}
              />
            </div>
            <div className="digit-keys">
              <CalculatorKey
                className="key-0"
                label={NumericKeys.ZERO}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-dot"
                label={ActionKeys.DOT}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-1"
                label={NumericKeys.ONE}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-2"
                label={NumericKeys.TWO}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-3"
                label={NumericKeys.THREE}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-4"
                label={NumericKeys.FOUR}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-5"
                label={NumericKeys.FIVE}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-6"
                label={NumericKeys.SIX}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-7"
                label={NumericKeys.SEVEN}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-8"
                label={NumericKeys.EIGHT}
                onPress={numericKeyPressHandler}
              />
              <CalculatorKey
                className="key-9"
                label={NumericKeys.NINE}
                onPress={numericKeyPressHandler}
              />
            </div>
          </div>
          <div className="operator-keys">
            <CalculatorKey
              className="key-divide"
              label={OperatorKeys.DIV}
              onPress={operatorKeyPressHandler}
            />
            <CalculatorKey
              className="key-multiply"
              label={OperatorKeys.MULT}
              onPress={operatorKeyPressHandler}
            />
            <CalculatorKey
              className="key-subtract"
              label={OperatorKeys.MINUS}
              onPress={operatorKeyPressHandler}
            />
            <CalculatorKey
              className="key-add"
              label={OperatorKeys.PLUS}
              onPress={operatorKeyPressHandler}
            />
            <CalculatorKey
              className="key-equals"
              label={ActionKeys.EQUALS}
              onPress={actionKeyPressHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
