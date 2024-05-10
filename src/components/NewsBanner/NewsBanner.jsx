import style from "./styles.module.scss";
import NewsData from "../../constants/News/News";
import { Link } from "react-router-dom";

const NewsBanner = () => {
  return (
    <section className={style["news"]}>
      <h3 className={style["news__title"]}>Новости за неделю</h3>
      <div className={style["news__list"]}>
        {NewsData.map((item) => {
          return (
            <Link
              to="/news/article"
              key={item.id}
              href="#"
              className={style["news__item"]}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default NewsBanner;
