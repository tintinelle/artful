import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import RateCard from "./RateCard/RateCard";
import data from "../../constants/Rates/Rates.js";
import { Link } from "react-router-dom";

const Rates = ({ displayModalForm }) => {
  return (
    <section className={style["rates"]}>
      <div className={style["rates__title-group"]}>
        <h2 className={style["rates__title"]}>
          <RedRectangle height="48" />
          Наши тарифы
        </h2>
        <p className={style["rates__description"]}>
          Ваш путь к юридической защите без лишних забот.
        </p>
      </div>
      <div className={style["rates__cards"]}>
        {data.map((item) => (
          <RateCard item={item} displayModalForm={displayModalForm} />
        ))}
      </div>
      <Link to="/services" className={style["rates__link"]}>
        Больше услуг компании
      </Link>
    </section>
  );
};

export default Rates;
