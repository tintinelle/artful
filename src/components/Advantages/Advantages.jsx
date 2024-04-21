import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";

const Advantages = () => {
  return (
    <section className={style["advantages"]}>
      <div className={style["advantages__wrapper"]}>
        <div className={style["advantages__title-group"]}>
          <h2 className={style["advantages__title"]}>
            <RedRectangle height="78" />
            Наши преимущества
          </h2>
          <p className={style["advantages__description"]}>
            Почему многие обращаются к нам за помощью.
          </p>
        </div>
        <div className={style["advantages__cards-group"]}>
          <div
            className={`${style["advantages__card"]} ${style["advantages__card_first"]}`}
          >
            <h3 className={style["advantages__card-title"]}>Свобода</h3>
            <p className={style["advantages__card-description"]}>
              С момента признания гражданина банкротом судебные приставы
              приостанавливают исполнительные производства, взыскания, снимают
              все наложенные ограничения и аресты.
            </p>
          </div>
          <div
            className={`${style["advantages__card"]} ${style["advantages__card_second"]}`}
          >
            <h3 className={style["advantages__card-title"]}>
              Неприкосновенность жилья
            </h3>
            <p className={style["advantages__card-description"]}>
              Взыскание не может быть обращено на жилое помещение,
              если для гражданина-должника и членов его семьи, совместно
              проживающих в принадлежащем помещении, оно является единственным
              пригодным для постоянного проживания.
            </p>
          </div>
          <div
            className={`${style["advantages__card"]} ${style["advantages__card_third"]}`}
          >
            <h3 className={style["advantages__card-title"]}>Спокойствие</h3>
            <p className={style["advantages__card-description"]}>
              Не допускается непосредственное взаимодействие с должником
              коллекторскими агентствами и службами взыскания со дня признания
              гражданина банкротом.
            </p>
          </div>
          <div
            className={`${style["advantages__card"]} ${style["advantages__card_fourth"]}`}
          >
            <h3 className={style["advantages__card-title"]}>Списание долгов</h3>
            <p className={style["advantages__card-description"]}>
              После завершения процедуры банкротства гражданин освобождается от
              дальнейшего исполнения требований кредиторов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
