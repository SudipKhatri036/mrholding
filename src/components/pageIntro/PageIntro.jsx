import HorizontalLine from "../horizontalLine/HorizontalLine";
import IntroCardCont from "../introCardCont/IntroCardCont";
import "./PageIntro.css";

function PageIntro() {
  return (
    <div className="page__intro-cont">
      <div className="page__intro-content">
        <h2 className="page-heading">What is JAPAN SPEECH ?</h2>
        <HorizontalLine />
        <p className="intro-cont__subhead">
          JAPAN AI SPEECH is an AI solution that simultaneously achieves the
          world's most accurate and fastest transcription and speaker
          separation.
        </p>
        <IntroCardCont />
      </div>
    </div>
  );
}

export default PageIntro;
