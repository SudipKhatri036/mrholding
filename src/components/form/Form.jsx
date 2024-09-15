import "./Form.css";

function Form() {
  return (
    <form className="form">
      <label htmlFor="sur-name">Name (Sur name)</label>
      <span className="form-required">*</span>
      <input type="text" id="sur-name" placeholder="Surname" />

      <label htmlFor="name">Name (First name)</label>
      <span className="form-required">*</span>
      <input type="text" placeholder="First name" id="name" />
      <label>Company name </label>
      <span className="form-required">*</span>
      <input type="text" name="company1" placeholder="Company Name" />
      <label>Company name </label>
      <span className="form-required">*</span>
      <input type="text" name="company2" placeholder="Company Name" />
      <label>Company name </label>
      <input type="text" placeholder="Company Name" />
      <label>Company name </label>
      <input type="text" name="company3" placeholder="Company Name" />
      <label>Company name </label>
      <input type="text" name="company4" placeholder="Company Name" />
      <label>Company name </label>
      <input type="text" name="company5" placeholder="Company Name" />
    </form>
  );
}

export default Form;
