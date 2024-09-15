import FooterCTACard from "../footerCTACard/FooterCTACard";
import "./FooterCTA.css";

function FooterCTA() {
  return (
    <section className="footer-cta">
      <FooterCTACard
        btnText="Download the document here"
        title="Download"
        subtitle="You can download the company information sheet here"
      />
      <FooterCTACard
        btnText="For inquireies, please click here"
        title="Contact"
        subtitle="If you have any questions or concerns please contact us here."
      />
    </section>
  );
}

export default FooterCTA;
