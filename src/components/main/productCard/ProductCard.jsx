import { GoTriangleRight } from "react-icons/go";
import "./ProductCard.css";

function ProductCard({ direction = "", subtitle, imgSrc, bgName }) {
  return (
    <div className={`product-card${direction}`}>
      <div className="product-card__imgCont">
        <img src={imgSrc} alt="product image" />
      </div>
      <div className={`product-card__contentCont ${bgName} bg-prop`}>
        <p className="product-card__subtitle">{subtitle}</p>
        <button className="btn btn--boxArrow btn--learn-more">
          Learn more <GoTriangleRight className="btn-icon" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
