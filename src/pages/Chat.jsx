import Faq from "../components/faq/Faq";
import ChatHero from "../components/chatHero/ChatHero";
import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import InquiryArea from "../components/InquiryArea/InquiryArea";
import PageIntro from "../components/pageIntro/PageIntro";
import PageFeaturesCard from "../components/pageFeaturesCard/PageFeaturesCard";

import "./Chat.css";

function Chat() {
  return (
    <section className="chat">
      <ChatHero />
      <PageIntro />
      <div className="advantage">
        <h2 className="page-heading">4 advantage over ChatGPT</h2>
        <HorizontalLine />
        <PageFeaturesCard imgSrc="./content_col1.png" />
        <PageFeaturesCard imgSrc="./content_col1.png" />
        <PageFeaturesCard imgSrc="./content_col1.png" />
        <PageFeaturesCard imgSrc="./content_col1.png" />
      </div>

      <InquiryArea />
      <Faq />
    </section>
  );
}

export default Chat;
