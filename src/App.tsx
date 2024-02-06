//styles
import "./App.css";

//react
import { useState } from "react";

//components
import Viewer from "./components/Viewer/Viewer";
import Keyboard from "./components/Keyboard/Keyboard";
import SpecialKeys from "./components/SpecialKeys/SpecialKeys";

//types
import { CalculationType } from "./types/type";

//helper
import { MATH } from "./helper/constants";
import { SPECIAL_CHARACTER } from "./helper/special_characters";

//init state
const INIT_CALCULATION_STATE: CalculationType = {
  viewer: [],
  toCalculate: [],
};

function App() {
  const [calculation, setCalculator] = useState(INIT_CALCULATION_STATE);

  function onPressKey(char: string) {
    switch (char) {
      case SPECIAL_CHARACTER.DELETE:
        setCalculator((prevState: CalculationType) => {
          let dataToCalculate = [...prevState.viewer];
          dataToCalculate.pop();
          return {
            viewer: dataToCalculate,
            toCalculate: dataToCalculate,
          };
        });
        break;
      case SPECIAL_CHARACTER.CLEAR:
        setCalculator(INIT_CALCULATION_STATE);
        break;
      default:
        setCalculator(({ viewer, toCalculate }: CalculationType) => ({
          viewer: [...viewer, char],
          toCalculate: [
            ...toCalculate,
            MATH.hasOwnProperty(char) ? MATH[char] : char,
          ],
        }));
        break;
    }
  }

  return (
    <div className="App">
      <Viewer {...calculation} />
      <div className="wrapper-keyboard">
        <SpecialKeys onPressKey={onPressKey} />
        <Keyboard onPressKey={onPressKey} />
      </div>
    </div>
  );
}

export default App;
