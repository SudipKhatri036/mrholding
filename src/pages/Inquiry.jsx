import Form from "../components/form/Form";
import "./Inquiry.css";

function Inquiry() {
  return (
    <section className="page-inquiry">
      <p>
        For any inquiries or applications to JAPAN AI, please contact us using
        the form below.
      </p>
      <p>* indicates required fields</p>
      <Form />
    </section>
  );
}

export default Inquiry;
