import CompanyContent from "../components/companyContent/CompanyContent";
import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import Form from "../components/form/Form";
import "./CompanyGuide.css";

function CompanyGuide() {
  return (
    <section className="guide">
      <h2>Company introduction materials</h2>
      <p className="guide__para">Company Guide</p>
      <HorizontalLine />
      <div className="guide__main-content">
        <CompanyContent />
        <Form />
      </div>
    </section>
  );
}

export default CompanyGuide;
