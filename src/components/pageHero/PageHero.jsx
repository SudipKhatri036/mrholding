import ButtonArrow from "../buttonArrow/ButtonArrow";
import "./PageHero.css";

function PageHero({ pageMainTxt, pageSubTxt, pageTxt }) {
  return (
    <div className={`speech__hero-cont`}>
      <div className={`speech__hero`}>
        <div className="speech_content">
          <h3 className="speech__hero__subtitle">{pageSubTxt}</h3>
          <p className="speech__hero_para">{pageTxt || pageSubTxt}</p>
          <h1>
            Japan AI <span>{pageMainTxt}</span>
          </h1>
        </div>

        <div className="speech__btn-cont">
          <ButtonArrow
            btnTxt="Download Documents"
            styleClass="btn--speech-btn"
          />

          <ButtonArrow btnTxt="Inquiry" styleClass="btn--speech-btn" />
        </div>
      </div>
    </div>
  );
}

export default PageHero;
