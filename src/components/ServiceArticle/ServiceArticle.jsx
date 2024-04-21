import style from "./styles.module.scss";
// import FeedbacksData from "../../constants/Feedbacks/Feedbacks";
import NewsBanner from "../NewsBanner/NewsBanner";
import ServiceArticleData from "../../constants/Services/ServiceArticle";
import Button from "../Button/Button";

const ServiceArticle = ({ displayModalForm }) => {
  return (
    <section className={style["service"]}>
      <div className={style["service__content-wrapper"]}>
        <article className={style["service__article"]}>
          <h2 className={style["service__title"]}>
            Семейные и наследственные споры: борьба за справедливость и гармонию
          </h2>
          <p className={style["service__text"]}>
            В современном мире, где семейные и наследственные отношения могут
            быть сложными и многослойными, важно иметь квалифицированную
            юридическую поддержку для защиты своих прав и интересов.
            Профессиональные адвокаты нашей компании помогут вам преодолеть
            трудности и добиться справедливого решения в любой ситуации.
          </p>
          <p className={style["service__text"]}>
            <span
              className={`${style["service__text"]} ${style["service__text_red"]}`}
            >
              Семейные и наследственные споры 
            </span>
            — это частые вызовы, с которыми сталкиваются люди в различных
            жизненных ситуациях. Они могут возникнуть в самых неожиданных
            моментах и потребовать комплексного правового подхода
            для разрешения.
          </p>
          {ServiceArticleData.map((item) => {
            return (
              <div>
                <h3 className={style["service__subtitle"]}>{item.title}</h3>
                <p className={style["service__text"]}>
                  <span
                    className={`${style["service__text"]} ${style["service__text_red"]}`}
                  >
                    {item.keyphrase}
                  </span>{" "}
                  — {item.description}
                </p>
              </div>
            );
          })}
          <p className={style["service__keyphrase"]}>
            Для получения подробной консультации и индивидуального анализа вашей
            ситуации, вы можете записаться на встречу с нашими опытными
            адвокатами. Обращайтесь к профессионалам и обеспечьте защиту своих
            прав и интересов уже сегодня.
          </p>
          <div className={style["service__buttons"]}>
            <Button
              buttonClass="button_red"
              text="Запись на консультацию"
              width="34.5%"
              handleClick={displayModalForm}
            />
            <Button
              buttonClass="button_clear-red"
              text="Получить КП"
              width="20%"
              handleClick={displayModalForm}
            />
          </div>
        </article>
        <div className={style["feedbacks__aside"]}>
          <NewsBanner />
        </div>
      </div>
    </section>
  );
};

export default ServiceArticle;
