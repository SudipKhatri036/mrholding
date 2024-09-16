import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import FooterCTA from "../components/main/footerCTA/FooterCTA";
import PostCardsCont from "../components/main/postCardsCont/PostCardCont";

function News() {
  return (
    <div className="page-seminar">
      <PostCardsCont
        title="News"
        btnText="Click here for the list of news"
        imgSrc="./news-img-1.jpg"
      />
      <FooterCTA />
      <HorizontalLine />
    </div>
  );
}

export default News;
