import PostCard from "../postCard.jsx/postCard";
import "./PostCardCont.css";
import ButtonArrow from "../../buttonArrow/ButtonArrow";

function PostCardsCont({ title, btnText, imgSrc }) {
  return (
    <section className="posts">
      <h2 className="section-heading">{title}</h2>
      <div className="posts__post-card-cont">
        <PostCard imgSrc={imgSrc} />
        <PostCard imgSrc={imgSrc} />
        <PostCard imgSrc={imgSrc} />
        <PostCard imgSrc={imgSrc} />
        <PostCard imgSrc={imgSrc} />
        <PostCard imgSrc={imgSrc} />
      </div>

      <ButtonArrow btnTxt={btnText} styleClass="btn--gotoBtn" />
    </section>
  );
}

export default PostCardsCont;
