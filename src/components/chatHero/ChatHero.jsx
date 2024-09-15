import ButtonArrow from "../buttonArrow/ButtonArrow";

import "./ChatHero.css";

function ChatHero() {
  return (
    <div className="chat__hero">
      <div className="chat__hero-content">
        <h2 className="chat__hero-title">
          AI customized for your company dramatically improves business
          efficiency
        </h2>
        <div className="circle-img-cont">
          <img src="./chat-circle.svg" alt="Circle Svg" />
          <img src="./chat-circle.svg" alt="Circle Svg" />
          <img src="./chat-circle.svg" alt="Circle Svg" />
        </div>
        <p className="chat__hero-subtitle">
          A personal assistant with the same level of skill as a veteran
          employee, trained using in-house data
        </p>
        <div className="chat__btn-cont">
          <ButtonArrow btnTxt="Download Documents" styleClass="btn--chat-btn" />
          <ButtonArrow btnTxt="inquiry" styleClass="btn--chat-btn" />
        </div>
      </div>
      <div className="chat__hero-laptop">
        <div className="img-mac"></div>
        <div className="mac-screen"></div>
      </div>
    </div>
  );
}

export default ChatHero;
