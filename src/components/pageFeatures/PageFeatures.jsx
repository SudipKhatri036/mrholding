import HorizontalLine from "../horizontalLine/HorizontalLine";
import "./PageFeatures.css";
import PageFeaturesCard from "../pageFeaturesCard/PageFeaturesCard";

function PageFeatures() {
  return (
    <div className="page__features-cont">
      <h2 className="page-heading">Features of JAPAN AI SPEECH</h2>
      <HorizontalLine />
      <div className="page__features-card-cont">
        <PageFeaturesCard />
        <PageFeaturesCard />
        <PageFeaturesCard />
      </div>
    </div>
  );
}

export default PageFeatures;
