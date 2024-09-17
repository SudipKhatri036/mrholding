import { Link } from "react-router-dom";
import "./ButtonArrow.css";
import { GoTriangleRight } from "react-icons/go";

function ButtonArrow({ btnTxt, styleClass = "", linkto }) {
  return (
    <button className={`btn btn--boxArrow ${styleClass}`}>
      {linkto ? (
        <Link to={linkto}>
          {btnTxt} <GoTriangleRight className="btn-icon" />
        </Link>
      ) : (
        <>
          {btnTxt} <GoTriangleRight className="btn-icon" />
        </>
      )}
    </button>
  );
}

export default ButtonArrow;
