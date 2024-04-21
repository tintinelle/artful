import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import ArrowDownPink from "../../images/icons/ArrowDownPink";
import step1 from "../../images/steps/1.svg";
import step2 from "../../images/steps/2.svg";
import step3 from "../../images/steps/3.svg";
import step4 from "../../images/steps/4.svg";

const Stages = () => {
  return (
    <section className={style["stages"]}>
      <div className={style["stages__title-group"]}>
        <h2 className={style["stages__title"]}>
          <RedRectangle height="48" />
          Этапы нашей работы
        </h2>
        <p className={style["stages__description"]}>
          Вы понимаете, какой должны сделать выбор, но несмотря на страх,
          движетесь вперёд. Это главное правило успеха.
        </p>
      </div>

      <div className={style["stages__steps"]}>
        <div
          className={`${style["stages__step"]} ${style["stages__step_first"]}`}
        >
          <div className={style["stages__text"]}>
            <h3 className={style["stages__step-title"]}>Онлайн-заявка</h3>
            <p className={style["stages__step-description"]}>
              Заполняете заявку на получение консультации и мы перезвоним
              Вам в ближайшее время.
            </p>
          </div>
          <img src={step1} alt="Этап 1" />
        </div>
        <ArrowDownPink />
        <div
          className={`${style["stages__step"]} ${style["stages__step_second"]}`}
        >
          <img src={step2} alt="Этап 2" />
          <div className={style["stages__text"]}>
            <h3 className={style["stages__step-title"]}>Подбор стратегии</h3>
            <p className={style["stages__step-description"]}>
              Собираем необходимые документы и подаём заявление на списание
              задолженности в Арбитражный суд.
            </p>
          </div>
        </div>
        <ArrowDownPink />
        <div
          className={`${style["stages__step"]} ${style["stages__step_third"]}`}
        >
          <div className={style["stages__text"]}>
            <h3 className={style["stages__step-title"]}>Встреча</h3>
            <p className={style["stages__step-description"]}>
              Личная встреча с юристом или онлайн-консультация с одним из наших
              специалистов
            </p>
          </div>
          <img src={step3} alt="Этап 3" />
        </div>
        <ArrowDownPink />
        <div
          className={`${style["stages__step"]} ${style["stages__step_fourth"]}`}
        >
          <img src={step4} alt="Этап 4" />
          <div className={style["stages__text"]}>
            <h3 className={style["stages__step-title"]}>Свобода</h3>
            <p className={style["stages__step-description"]}>
              Спокойная жизнь без долгов и звонков коллекторов!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stages;
