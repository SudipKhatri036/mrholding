import ButtonArrow from "../../buttonArrow/ButtonArrow";
import "./FooterCTACard.css";

function FooterCTACard({ btnText, title, subtitle, linkto }) {
  return (
    <div className="cta-card">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ButtonArrow
        btnTxt={btnText}
        styleClass="btn--footer-cta"
        linkto={linkto}
      />
    </div>
  );
}

export default FooterCTACard;
