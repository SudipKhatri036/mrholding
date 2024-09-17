import "./pageFeaturesCard.css";

function PageFeaturesCard({ imgSrc }) {
  return (
    <div className="page__features-card">
      <div className="features-img-wrap">
        <img
          src={imgSrc ? imgSrc : "./feature_list_1.png"}
          alt="Feature list"
        />
      </div>
      <div className="features__desc">
        <h3>Supports industry and technical terms to achieve high accuracy</h3>
        <p>
          Additional learning is conducted for words that are difficult to read,
          such as industry jargon and technical (terms this is tailored to each
          company in order to achieve higher accuracy).
        </p>
      </div>
    </div>
  );
}

export default PageFeaturesCard;
