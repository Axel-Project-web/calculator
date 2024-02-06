//styles
import "./Viewer.css";

//local interface
interface PropType {
  viewer: Array<string>;
  toCalculate: Array<string>;
}

const PROCESSING_MESSAGE = "calculating...";

function Viewer({ viewer, toCalculate }: PropType) {
  let result = PROCESSING_MESSAGE;
  try {
    result = eval(toCalculate.join(""));
  } catch (error) {
    result = PROCESSING_MESSAGE;
  }

  return (
    <div className="viewer">
      <div className="wrapper-data">
        <div className="viewer-data">{viewer.length > 0 ? viewer : 0}</div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}

export default Viewer;
