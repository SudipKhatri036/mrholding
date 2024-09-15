import "./ButtonArrow.css";
import { GoTriangleRight } from "react-icons/go";

function ButtonArrow({ btnTxt, styleClass = "" }) {
  return (
    <button className={`btn btn--boxArrow ${styleClass}`}>
      {btnTxt} <GoTriangleRight className="btn-icon" />
    </button>
  );
}

export default ButtonArrow;
