import style from "./styles.module.scss";
import { Link } from "react-router-dom";

const SearchFail = () => {
  return (
    <div className={style["search-fail"]}>
      <h3 className={style["search-fail__title"]}>
        К сожалению, по вашему запросу ничего не найдено :(
      </h3>
      <p className={style["search-fail__description"]}>
        Введите другой запрос или ознакомьтесь со статьями на странице{" "}
        <Link to="/news" className={style["search-fail__link"]}>
          Новости
        </Link>
      </p>
    </div>
  );
};

export default SearchFail;
