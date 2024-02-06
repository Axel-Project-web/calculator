//components
import Btn from "../btn/Btn";

//styles
import "./Keyboard.css";

//local interface
interface PropType {
  onPressKey: (char: string) => void;
}

//keys
const characters: Array<string> = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "e",
  "0",
  "π",
];

const Keyboard = ({ onPressKey }: PropType) => {
  const onClick = (value: string) => onPressKey(value);
  return (
    <div className="wrapper-keyboard">
      <div className="keyboard">
        <div className="numbers">
          {characters.map((character: string) => (
            <Btn
              key={character}
              value={character}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
