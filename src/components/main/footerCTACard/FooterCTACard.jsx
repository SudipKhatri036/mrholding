import ButtonArrow from "../../buttonArrow/ButtonArrow";
import "./FooterCTACard.css";

function FooterCTACard({ btnText, title, subtitle }) {
  return (
    <div className="cta-card">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ButtonArrow btnTxt={btnText} styleClass="btn--footer-cta" />
    </div>
  );
}

export default FooterCTACard;
