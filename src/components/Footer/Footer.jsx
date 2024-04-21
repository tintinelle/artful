import style from "./styles.module.scss";
import ButtonArrowUp from "../../images/icons/ButtonArrowUp";
import Vk from "../../images/icons/Vk";
import Telegram from "../../images/icons/Telegram";
import Instagram from "../../images/icons/Instagram";
import useWindowDimensions from "../../services/useWindowDimensions";
import logo from "../../images/logo/Artful&Genius.svg";

const Footer = ({ displayModalForm }) => {
  const { width } = useWindowDimensions();

  return (
    <section className={style["footer"]}>
      <div className={style["footer__wrapper"]}>
        <img
          src={logo}
          alt="Логотип Artful and Genius"
          className={style["footer__logo"]}
        />
        <div className={style["footer__contacts-group"]}>
          <a className={style["footer__tel"]} href="tel:+79208030659">
            +7 (920) 803 06 59
          </a>
          <button
            className={style["footer__button"]}
            onClick={() => displayModalForm()}
          >
            Заказать обратный звонок
          </button>
        </div>

        <div className={style["footer__contacts-group"]}>
          <p className={style["footer__subtitle"]}>Электронная почта:</p>
          <a
            className={style["footer__text"]}
            href="mailto:a-logistic.help@yandex.ru"
          >
            a-logistic.help@yandex.ru
          </a>
        </div>

        <div className={style["footer__contacts-group"]}>
          <p className={style["footer__subtitle"]}>Адрес:</p>
          <p className={style["footer__text"]}>
            115114, Г.Москва, вн.тер.г. Муниципальный Округ Даниловский, наб
            Даниловская, д. 2, к. 1
          </p>
        </div>

        <div className={style["footer__contacts-group"]}>
          <p className={style["footer__subtitle"]}>Реквизиты:</p>
          <p className={style["footer__text"]}>ООО «А ЛОГИСТИК»</p>
          <p className={style["footer__text"]}>ИНН 9725035399</p>
          <p className={style["footer__text"]}>КПП 772501001</p>
          <p className={style["footer__text"]}>ОГРН 1207700308804</p>
        </div>

        <div className={style["footer__links"]}>
          <p className={style["footer__info-text"]}>
            ©Все права защищены. 2024
          </p>

          <div className={style["footer__social-media"]}>
            <a target="blank" href="https://vk.com/">
              <Vk />
            </a>
            <a target="blank" href="https://telegram.org/">
              <Telegram />
            </a>
            <a target="blank" href="https://www.instagram.com/">
              <Instagram />
            </a>
          </div>

          <a className={style["footer__link"]} target="blank" href="#">
            Политика обработки персональных данных
          </a>
        </div>
        <button className={style["footer__return"]}>
          {width > 700 ? (
            <a href="#">
              Вернуться наверх <ButtonArrowUp />
            </a>
          ) : (
            <a href="#">
              <ButtonArrowUp />
            </a>
          )}
        </button>
      </div>
    </section>
  );
};

export default Footer;
