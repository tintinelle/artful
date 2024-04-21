import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import MilestoneCard from "./MilestoneCard/MilestoneCard";
import img2002 from "./../../images/aboutCompany/2002.svg";
import img2005 from "./../../images/aboutCompany/2005.svg";
import img2006 from "./../../images/aboutCompany/2006.svg";
import img2010 from "./../../images/aboutCompany/2010.svg";
import img2015 from "./../../images/aboutCompany/2015.svg";
import img2024 from "./../../images/aboutCompany/2024.svg";
import LineMilestoneStart from "./../../images/icons/LineMilestoneStart";
import LineMilestoneMiddle from "./../../images/icons/LineMilestoneMiddle";
import LineMilestoneEnd from "./../../images/icons/LineMilestoneEnd";

const AboutCompany = () => {
  return (
    <section className={style["about"]}>
      <div className={style["about__title-group"]}>
        <h2 className={style["about__title"]}>
          <RedRectangle height="48" />О компании
        </h2>
        <p className={style["about__description"]}>
          Собраться вместе есть начало. Держаться вместе есть прогресс. Работать
          вместе есть успех.
        </p>
      </div>

      <div className={style["about__text"]}>
        <p className={style["about__text-item"]}>
          Мы начали свою деятельность{" "}
          <span className={style["about__text-item_bold"]}>в 2002 году</span> с
          сопровождения процедуры банкротства юридических лиц. За время нашей
          работы{" "}
          <span className={style["about__text-item_bold"]}>
            мы завоевали доверие многих клиентов,
          </span>{" "}
          став надежным партнером в юридических вопросах.
        </p>
        <p className={style["about__text-item"]}>
          С 2010 года мы значительно{" "}
          <span className={style["about__text-item_bold"]}>
            расширили спектр наших услуг,
          </span>{" "}
          предлагая нашим клиентам полный комплекс юридических услуг
          по различным направлениям. Мы 
          <span className={style["about__text-item_bold"]}>
            успешно решаем вопросы в области корпоративного права, недвижимости,
            семейного, трудового, административного и уголовного права.
          </span>
        </p>
        <p className={style["about__text-item"]}>
          <span className={style["about__text-item_bold"]}>В 2015 году</span> мы
          добавили в список своих услуг и юридические вопросы, связанные с
          физическими лицами. Мы помогаем в решении вопросов банкротства
          физических лиц, а также ведем уголовные, гражданские и
          административные дела.
        </p>
        <p className={style["about__text-item"]}>
          Наши специалисты{" "}
          <span className={style["about__text-item_bold"]}>
            постоянно совершенствуются
          </span>{" "}
          и повышают свою квалификацию, чтобы быть в курсе последних изменений
          законодательства и уметь предложить нашим клиентам наиболее
          оптимальные решения их проблем.{" "}
          <span className={style["about__text-item_bold"]}>
            Мы ценим каждого клиента
          </span>{" "}
          и стараемся найти индивидуальный подход к каждому, учитывая
          его потребности и особенности ситуации.{" "}
          <span className={style["about__text-item_bold"]}>Наша цель</span> —
          помочь людям в решении их юридических вопросов, обеспечив им надёжную
          защиту и поддержку.
        </p>
        <p className={style["about__text-item"]}>
          За время своей работы наша компания завоевала репутацию надежного
          партнера, который всегда готов помочь в самых сложных юридических
          ситуациях.
        </p>
      </div>

      <div className={style["about__history"]}>
        <h3 className={style["about__subtitle"]}>История компании в годах</h3>
        <MilestoneCard
          src={img2002}
          alt="2002 год"
          title="Начало пути"
          description="Специализируемся на сопровождении процедуры банкротства юридических лиц."
        />
        <LineMilestoneStart />
        <MilestoneCard
          src={img2005}
          alt="2005 год"
          title="Юридическая компания"
          description="Мы начали заниматься общими вопросами"
        />
        <LineMilestoneMiddle />
        <MilestoneCard
          src={img2006}
          alt="2006 год"
          title="Корпоративные споры"
          description="Спектр услуг стал больше, мы стали помогать в корпоративных спорах и урегулировании конфликтов."
        />
        <LineMilestoneMiddle />
        <MilestoneCard
          src={img2010}
          alt="2010 год"
          title="Юридические лица"
          description="Значительно расширили спектр наших услуг, началась работа с юр.лицами."
        />
        <LineMilestoneMiddle />
        <MilestoneCard
          src={img2015}
          alt="2015 год"
          title="Физические лица"
          description="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <LineMilestoneEnd />
        <MilestoneCard
          src={img2024}
          alt="2024 год"
          title="Коллегия"
          description="Создаем коллегию адвокатов. Мы стремимся к эффективным решениям, направленным на защиту интересов наших клиентов и достижение желаемых результатов"
        />
      </div>
    </section>
  );
};

export default AboutCompany;
