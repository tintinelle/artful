import style from "./styles.module.scss";
import { useState } from "react";
import FaqData from "../../constants/Faq/Faq";
import FaqCard from "./FaqCard/FaqCard";
import RedRectangle from "../../images/icons/RedRectangle";

const Faq = () => {
  const faqCardProps = FaqData.map((item) => {
    return { ...item, active: false };
  });
  const [questions, setQuestions] = useState(faqCardProps);
  const handleClick = (question) => {
    const newQuestionsState = questions.map((item) => {
      if (item.id === question.id) {
        return { ...question, active: !question.active };
      }
      return { ...item, active: false };
    });
    setQuestions(newQuestionsState);
  };

  return (
    <section className={style.faq}>
      <div className={style["faq__wrapper"]}>
        <div className={style["faq__title-group"]}>
          <h2 className={style["faq__title"]}>
            <RedRectangle height="81.29" />
            Часто задаваемые вопросы
          </h2>
          <p className={style["faq__description"]}>
            Лучше дважды спросить, чем один раз напутать.
          </p>
        </div>

        <ul className={style["faq__list"]}>
          {questions.map((item) => {
            return (
              <FaqCard key={item.id} item={item} handleClick={handleClick} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
