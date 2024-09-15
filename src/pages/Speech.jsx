import PageHero from "../components/pageHero/PageHero";
import PageIntro from "../components/pageIntro/PageIntro";
import PageFeatures from "../components/pageFeatures/PageFeatures";
import InquiryArea from "../components/InquiryArea/InquiryArea";

import "./Speech.css";

function Speech() {
  return (
    <section className="speech">
      <PageHero
        pageSubTxt="High-precision Automated Minutes Sytem by AI"
        pageTxt="A fully Automated Ai meeting minutes system"
        pageMainTxt="Speech"
      />
      <PageIntro />
      <PageFeatures />
      <InquiryArea />
    </section>
  );
}

export default Speech;
