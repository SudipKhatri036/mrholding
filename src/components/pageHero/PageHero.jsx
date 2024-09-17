import ButtonArrow from "../buttonArrow/ButtonArrow";
import "./PageHero.css";

function PageHero({ pageMainTxt, pageSubTxt, pageTxt }) {
  return (
    <div className="page__hero-cont">
      <div className="page__hero">
        <div className="page_content">
          <h3 className="page__hero__subtitle">{pageSubTxt}</h3>
          <p className="page__hero_para">{pageTxt || pageSubTxt}</p>
          <h1>
            Japan AI <span>{pageMainTxt}</span>
          </h1>
        </div>

        <div className="pageHero__btn-cont">
          <ButtonArrow
            btnTxt="Download Documents"
            styleClass="btn--pageHero-btn"
          />

          <ButtonArrow
            btnTxt="Inquiry"
            styleClass="btn--pageHero-btn"
            linkto="/inquiry"
          />
        </div>
      </div>
      <div className="pageHero-bg-all"></div>
    </div>
  );
}

export default PageHero;
