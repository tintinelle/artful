import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle.jsx";
import RateCard from "../Rates/RateCard/RateCard.jsx";
import data from "../../constants/Rates/Rates.js";
import { Link, useParams } from "react-router-dom";

const AllServices = ({ displayModalForm, location }) => {
  const { category } = useParams();

  return (
    <section className={style["rates"]}>
      <div className={style["rates__title-group"]}>
        <h2 className={style["rates__title"]}>
          <RedRectangle height="48" />
          Все услуги
        </h2>
      </div>
      <div className={style["rates__categories"]}>
        <Link
          to="/services/individuals"
          className={`${style["rates__category"]} ${
            category === "individuals" && style["rates__category_active"]
          }`}
        >
          Для частных лиц
        </Link>
        <Link
          to="/services/companies"
          className={`${style["rates__category"]} ${
            category === "companies" && style["rates__category_active"]
          }`}
        >
          Для юридических лиц
        </Link>
      </div>
      <div className={style["rates__cards"]}>
        {data.map((item) => (
          <RateCard item={item} displayModalForm={displayModalForm} />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
