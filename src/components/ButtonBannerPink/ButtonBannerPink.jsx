import style from "./styles.module.scss";
import Button from "../Button/Button";

const ButtonBannerPink = ({ displayModalForm }) => {
  return (
    <section className={style["card"]}>
      <h3 className={style["card__title"]}>
        Получите консультацию юриста по вашей проблеме
      </h3>
      <p className={style["card__description"]}>
        Оставьте заявку и наш юрист вас проконсультирует в течение 10 минут
      </p>
      <Button
        buttonClass="button_red"
        text="Хочу списать долг"
        width="80%"
        handleClick={displayModalForm}
      />
    </section>
  );
};

export default ButtonBannerPink;
