//helper
import { SPECIAL_CHARACTER } from "../../helper/special_characters";

// Components styled
import styled from "styled-components";

//local interface
interface PropType {
  $fontSize?: number;
  value: string;
  onClick: (value: string) => void;
}

const Component = styled.button<{ $fontSize?: number }>`
  width: 100%;
  height: 100%;

  border-radius: 10px;
  background-color: ${({ value }) =>
    value === SPECIAL_CHARACTER.CLEAR ? "#C12828" : "#232323"};

  font-size: ${({ $fontSize }) => $fontSize || 35}px;

  color: ${({ value }) => {
    let color = "white";
    const SpecialKeys = /^[()x+/\-πe]$/;

    if (SpecialKeys.test(`${value}`)) color = "#FFE452";
    else if (value === SPECIAL_CHARACTER.DELETE) color = "red";
    else color = "white";

    return color;
  }};

  outline: none;
  border: none;

  cursor: pointer;

  transition-duration: 0.1s;

  &:hover {
    box-shadow: -1px 1px 6px 0px #1d1d1d;
    transform: translate(1px, -1.5px);
  }
  &:active {
    box-shadow: -0px 0px 0px 0px #1d1d1d;
    transform: translate(0px, 0px);
  }
`;

export default function Btn({ value, $fontSize, onClick }: PropType) {
  return (
    <Component
      value={value}
      $fontSize={$fontSize}
      onClick={() => onClick(value)}
    >
      {value}
    </Component>
  );
}
