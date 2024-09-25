import { useRef } from "react";

import CompanyProfile from "./companyProfile/CompanyProfile";
import FooterCTA from "./footerCTA/FooterCTA";
import Hero from "./hero/Hero";
import HorizontalLine from "../horizontalLine/HorizontalLine";
import Overview from "./overview/Overview";
import PostCardsCont from "./postCardsCont/PostCardCont";
import Product from "./product/Product";
import Portfolio from "./portfolio/Portfolio";
import TextScroller from "./textScroller/TextScroller";

import "./Main.css";

function Main() {
  const overviewRef = useRef(null);

  function handleGoToOverview() {
    overviewRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "start",
    });
  }
  return (
    <div className="main">
      <Hero onGoToOverview={handleGoToOverview} />
      <Overview overviewRef={overviewRef} />
      <Product />
      <PostCardsCont
        title="News"
        btnText="Click here for the list of news"
        imgSrc="./news-img.jpg"
        linkto="/news"
      />
      <PostCardsCont
        title="Seminar"
        btnText="See the list of the seminars here"
        imgSrc="./news-img.jpg"
        linkto="/seminar"
      />

      <TextScroller />
      <Portfolio />
      <CompanyProfile />
      <FooterCTA />
      <HorizontalLine />
    </div>
  );
}

export default Main;
