import "./Form.css";

function Form() {
  return (
    <form className="form">
      <div className="form-container">
        <input placeholder="Full Name" type="text" className="input" />
        <input placeholder="Email" id="mail" type="email" className="input" />
        <input
          placeholder="050-7123-2933"
          id="number"
          type="number"
          className="input"
        />
        <input
          placeholder="Company Nmae"
          id="company-name"
          type="text"
          className="input"
        />
        <textarea
          placeholder="Inquiry Message"
          rows="10"
          cols="30"
          id="message"
          name="message"
          className="textarea"
        ></textarea>
        <div className="button-container">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;

{
  /* <div className="form-container">
    <div className="form">
        <span className="heading">Get in touch</span>
        <input placeholder="Name" type="text" className="input">
        <input placeholder="Email" id="mail" type="email" className="input">
        <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
        <div className="button-container">
        <div className="send-button">Send</div>
        <div className="reset-button-container">
            <div id="reset-btn" className="reset-button">Reset</div>
        </div>
    </div>
</div>
</div>
   */
}
