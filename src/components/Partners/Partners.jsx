import style from "./styles.module.scss";
import forbesImage from "../../images/partners/forbes.svg";
import KommersantImage from "../../images/partners/kommersant.svg";
import PravoImage from "../../images/partners/pravo.svg";

const Partners = () => {
  return (
    <section className={style["partners"]}>
      <div className={style["partners__wrapper"]}>
        <p className={style["partners__text"]}>О нас говорят в:</p>
        <img src={forbesImage} alt="Форбс" />
        <img src={KommersantImage} alt="Коммерсант" />
        <img src={PravoImage} alt="Право 300" />
      </div>
    </section>
  );
};

export default Partners;
