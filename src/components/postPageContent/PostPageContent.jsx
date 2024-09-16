import HorizontalLine from "../horizontalLine/HorizontalLine";
import "./PostPageContent.css";

function PostPageContent() {
  return (
    <article className="article">
      <div className="article-detail">
        <p className="article__cat">Case Studies</p>
        <time>2024.09.12</time>
      </div>

      <div className="article__img-cont">
        <img src="./news-img-1.jpg" alt="News Img" />
      </div>

      <div className="article__content">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
          eligendi repellendus quas sequi rerum commodi aliquam libero
          praesentium assumenda. Perferendis recusandae dolores quidem tenetur.
          Debitis et perferendis voluptatum magni.
        </p>
      </div>

      <div className="article__content">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
          eligendi repellendus quas sequi rerum commodi aliquam libero
          praesentium assumenda. Perferendis recusandae dolores quidem tenetur.
          Debitis et perferendis voluptatum magni.
        </p>
      </div>

      <div className="article__content">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
          eligendi repellendus quas sequi rerum commodi aliquam libero
          praesentium assumenda. Perferendis recusandae dolores quidem tenetur.
          Debitis et perferendis voluptatum magni.
        </p>
      </div>
      <HorizontalLine />
    </article>
  );
}

export default PostPageContent;
