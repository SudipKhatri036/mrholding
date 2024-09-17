import ButtonArrow from "../components/buttonArrow/ButtonArrow";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p className="page__warn">Page Not Found !</p>
      <p className="page__warn-small">
        The page you are looking for might have been removed had it's name
        changed or is temporarily unavailable
      </p>
      <ButtonArrow
        btnTxt="Go Back Home"
        linkto="/"
        styleClass="btn--not-found"
      />
    </div>
  );
}

export default PageNotFound;
