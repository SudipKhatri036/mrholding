import SpeechFeaturesCard from "../speechFeaturesCard/SpeechFeaturesCard";
import HorizontalLine from "../horizontalLine/HorizontalLine";
import "./PageFeatures.css";

function PageFeatures() {
  return (
    <div className="speech__features-cont">
      <h2 className="page-heading">Features of JAPAN AI SPEECH</h2>
      <HorizontalLine />
      <div className="speech__features-card-cont">
        <SpeechFeaturesCard />
        <SpeechFeaturesCard />
        <SpeechFeaturesCard />
      </div>
    </div>
  );
}

export default PageFeatures;
