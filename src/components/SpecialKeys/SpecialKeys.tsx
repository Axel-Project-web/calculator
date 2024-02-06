//components
import Btn from "../btn/Btn";

//helper
import { SPECIAL_CHARACTER } from "../../helper/special_characters";

//styles
import "./SpecialKeys.css";

//local interface
interface PropType {
  onPressKey: (char: string) => void;
}

//keys
const characters: Array<string> = [
  "(",
  "+",
  ")",
  "-",
  SPECIAL_CHARACTER.DELETE,
  "x",
  SPECIAL_CHARACTER.CLEAR,
  "/",
];

const SpecialKeys = ({ onPressKey }: PropType) => {
  const onClick = (value: string) => onPressKey(value);
  return (
    <div className="SpecialKeys">
      {characters.map((character: string) => (
        <Btn
          $fontSize={25}
          key={character}
          onClick={onClick}
          value={character}
        />
      ))}
    </div>
  );
};

export default SpecialKeys;
