import ArrowRight from "../../../images/icons/ArrowRight";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";

const OtherArticles = () => {
  return (
    <section className={style["articles"]}>
      <h2 className={style["articles__title"]}>Статьи по теме</h2>
      <div className={style["articles__links"]}>
        <Link to="/news/article" className={style["articles__link"]}>
          <ArrowRight size={20} color="#CF5555" />
          Банкротство с ипотекой
        </Link>
        <Link to="/news/article" className={style["articles__link"]}>
          <ArrowRight size={20} color="#CF5555" />
          Собираем документы для упрощенного бакнротства
        </Link>
        <Link to="/news/article" className={style["articles__link"]}>
          <ArrowRight size={20} color="#CF5555" />
          Списание микрозаймов
        </Link>
        <Link to="/news/article" className={style["articles__link"]}>
          <ArrowRight size={20} color="#CF5555" />
          Как сохранить имущество
        </Link>
      </div>
    </section>
  );
};

export default OtherArticles;
