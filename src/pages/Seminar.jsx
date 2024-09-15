import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import FooterCTA from "../components/main/footerCTA/FooterCTA";
import PostCardsCont from "../components/main/postCardsCont/PostCardCont";

function Seminar() {
  return (
    <div className="page-seminar">
      <PostCardsCont
        title="Seminar"
        btnText="See the list of the seminars here"
        imgSrc="./news-img-3.jpg"
      />

      <FooterCTA />
      <HorizontalLine />
    </div>
  );
}

export default Seminar;
