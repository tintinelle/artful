import style from "./styles.module.scss";
import ArrowDown from "../../../images/icons/ArrowDown";
import { useState } from "react";
import MyLink from "./Link/Link";
import { Link } from "react-router-dom";

const Category = ({ title, services, path }) => {
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(false);

  const handleMouseEnter = (link) => {
    services.forEach((element) => {
      if (element.id === link.id) {
        console.log(description);
        setDescription(link.description);
      }
    });
  };
  const handleMouseLeave = () => {
    setDescription("");
  };

  return (
    <article
      className={style["category"]}
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <div className={style["category__title-group"]}>
        <Link
          to={{ pathname: `/services/${path}` }}
          className={`${style["category__title"]} ${
            active && style["category__title_active"]
          }`}
        >
          {title}
        </Link>
        <button
          className={`${style["category__button"]} ${
            active && style["category__button_active"]
          }`}
        >
          {active ? (
            <ArrowDown color="#AC0808" size="20" />
          ) : (
            <ArrowDown color="#6E6868" size="20" />
          )}
        </button>
      </div>
      {active && (
        <div className={style["category__links"]}>
          {services.map((item) => {
            return (
              <MyLink
                key={item.id}
                item={item}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
      )}
      {description && (
        <div className={style["category__link-description"]}>{description}</div>
      )}
    </article>
  );
};

export default Category;
