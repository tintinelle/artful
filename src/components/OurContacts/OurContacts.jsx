import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import Phone from "../../images/icons/Phone";
import Mail from "../../images/icons/Mail";
import MapBlock from "./Map/Map";

const OurContacts = () => {
  return (
    <section className={style["contacts"]}>
      <h2 className={style["contacts__title"]}>
        <RedRectangle height="58" />
        Наши контакты
      </h2>

      <div className={style["contacts__text-wrapper"]}>
        <div
          className={`${style["contacts__field"]} ${style["contacts__field_contacts"]}`}
        >
          <h4 className={style["contacts__label"]}>Контактная информация:</h4>
          <a href="tel:+79208030659" className={style["contacts__item"]}>
            <Phone />
            +7 (920) 803 06 59
          </a>
          <a
            href="mailto:a-logistic.help@yandex.ru"
            className={style["contacts__item"]}
          >
            <Mail />
            a-logistic.help@yandex.ru
          </a>
        </div>
        <div
          className={`${style["contacts__field"]} ${style["contacts__field_address"]}`}
        >
          <h4 className={style["contacts__label"]}>Адрес:</h4>
          <p className={style["contacts__item"]}>
            115114, Г.Москва, вн.тер.г. Муниципальный Округ Даниловский, наб
            Даниловская, д. 2, к. 1
          </p>
        </div>
        <div
          className={`${style["contacts__field"]} ${style["contacts__field_worktime"]}`}
        >
          <h4 className={style["contacts__label"]}>Режим работы:</h4>
          <p className={style["contacts__item"]}>
            с 09:00 до 18:00, суббота, воскресенье - выходные
          </p>
        </div>
        <div
          className={`${style["contacts__field"]} ${style["contacts__field_details"]}`}
        >
          <h4 className={style["contacts__label"]}>Реквизиты:</h4>
          <p className={style["contacts__item"]}>
            Полное наименование: Общество с ограниченной ответственностью «А
            ЛОГИСТИК»
          </p>
          <p className={style["contacts__item"]}>
            ИНН:
            <span
              className={`${style["contacts__item"]} ${style["contacts__item_thin"]}`}
            >
              9725035399
            </span>
          </p>
          <p className={style["contacts__item"]}>
            ОГРН:
            <span
              className={`${style["contacts__item"]} ${style["contacts__item_thin"]}`}
            >
              1207700308804
            </span>
          </p>
          <p className={style["contacts__item"]}>
            КПП:
            <span
              className={`${style["contacts__item"]} ${style["contacts__item_thin"]}`}
            >
              772501001
            </span>
          </p>
        </div>
      </div>

      <MapBlock />
    </section>
  );
};

export default OurContacts;
