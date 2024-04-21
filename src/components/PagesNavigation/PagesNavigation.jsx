import style from "./styles.module.scss";
import { Link } from "react-router-dom";

const PagesNavigation = ({ location }) => {
  return (
    <section className={style["pages-navigation"]}>
      <div className={style["pages-navigation__content"]}>
        <Link
          className={`${style["pages-navigation__text"]} ${style["pages-navigation__text_link"]}`}
          to="/"
        >
          Главная
        </Link>
        <span className={style["pages-navigation__text"]}> / </span>
        <span className={style["pages-navigation__text"]}>{location}</span>
      </div>
    </section>
  );
};

export default PagesNavigation;
