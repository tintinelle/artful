import style from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo/Artful&Genius.svg";
import Navbar from "./Navbar/Navbar";
import Burger from "../../images/icons/Burger";
import CloseButton from "../../images/icons/CloseButton";

const Header = ({
  handleServicesButtonHover,
  displayModalForm,
  openModalServices,
}) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className={style["header"]}>
      <button
        className={style["header__button-burger"]}
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      >
        {isBurgerOpen ? <CloseButton color="#313239" /> : <Burger />}
      </button>

      <Link className={style["header__logo"]} to="/">
        <img
          src={logo}
          alt="Логотип Artful and Genius"
          className={style["header__logo"]}
        />
      </Link>

      <Navbar
        handleServicesButtonHover={handleServicesButtonHover}
        openModalServices={openModalServices}
        isBurgerOpen={isBurgerOpen}
      />

      <div className={style["header__contacts"]}>
        <a href="tel:+79208030659">+7 (920) 803 06 59</a>
        <button
          className={style["header__button-call"]}
          onClick={() => displayModalForm()}
        >
          Заказать обратный звонок
        </button>
      </div>
    </header>
  );
};

export default Header;
