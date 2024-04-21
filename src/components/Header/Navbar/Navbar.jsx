import style from "./styles.module.scss";
import ArrowDown from "../../../images/icons/ArrowDown";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({
  handleServicesButtonHover,
  openModalServices,
  isBurgerOpen,
}) => {
  const location = useLocation();

  return (
    <nav
      className={`${style["navbar"]} ${isBurgerOpen && style["navbar_active"]}`}
    >
      <ul className={style["navbar__links"]}>
        <li>
          <Link
            to="/services"
            className={`${style["navbar__button-list"]} ${
              openModalServices && style["navbar__button-list_active"]
            }`}
            onMouseOver={() => handleServicesButtonHover()}
          >
            Все услуги
            <ArrowDown color="#C53030" size="20" />
          </Link>
        </li>
        <li>
          <Link
            className={`${style["navbar__link"]} ${
              location.pathname === "/about" && style["navbar__link_active"]
            }`}
            to="/about"
          >
            О компании
          </Link>
        </li>
        <li>
          <Link
            className={`${style["navbar__link"]} ${
              location.pathname === "/practice" && style["navbar__link_active"]
            }`}
            to="/practice"
          >
            Практика
          </Link>
        </li>
        <li>
          <Link
            className={`${style["navbar__link"]} ${
              location.pathname === "/feedbacks" && style["navbar__link_active"]
            }`}
            to="/feedbacks"
          >
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            className={`${style["navbar__link"]} ${
              location.pathname === "/news" && style["navbar__link_active"]
            }`}
            to="/news"
          >
            Новости
          </Link>
        </li>
        <li>
          <Link
            className={`${style["navbar__link"]} ${
              location.pathname === "/contacts" && style["navbar__link_active"]
            }`}
            to="/contacts"
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
