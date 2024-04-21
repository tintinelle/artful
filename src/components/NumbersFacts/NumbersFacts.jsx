import style from "./styles.module.scss";
import image780 from "../../images/numbersFacts/780.svg";
import image1000 from "../../images/numbersFacts/1000.svg";
import image20 from "../../images/numbersFacts/20.svg";
import image100 from "../../images/numbersFacts/100.svg";

const NumbersFacts = () => {
  return (
    <section className={style["facts"]}>
      <div className={style["facts__item"]}>
        <img src={image780} alt="Более семисот восьмидесяти" />
        <p>выигранных дел</p>
      </div>
      <div className={style["facts__item"]}>
        <img src={image1000} alt="Более тысячи" />
        <p>довольных клиентов</p>
      </div>
      <div className={style["facts__item"]}>
        <img src={image20} alt="Более двадцати" />
        <p>лет опыта работы</p>
      </div>
      <div className={style["facts__item"]}>
        <img src={image100} alt="Сто процентов" />
        <p>Без переплат</p>
      </div>
    </section>
  );
};

export default NumbersFacts;
