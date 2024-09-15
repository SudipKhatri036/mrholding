import Faq from "../components/faq/Faq";
import InquiryArea from "../components/InquiryArea/InquiryArea";
import SpeechFeatures from "../components/pageFeatures/PageFeatures";
import PageHero from "../components/pageHero/PageHero";
import PageIntro from "../components/pageIntro/PageIntro";

import "./Marketing.css";

function Marketing() {
  return (
    <section className="marketing">
      <PageHero
        pageSubTxt="Maximize marketing efficiency with AI"
        pageMainTxt="Marketing"
      />
      <PageIntro />
      <SpeechFeatures />
      <InquiryArea />
      <Faq />
    </section>
  );
}

export default Marketing;
