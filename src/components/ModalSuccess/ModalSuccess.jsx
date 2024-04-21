import style from "./styles.module.scss";
import CloseButton from "../../images/icons/CloseButton";

const ModalSuccess = ({ handleCloseClick }) => {
  return (
    <section className={style["modal"]}>
      <div className={style["modal__wrapper"]}>
        <h2 className={style["modal__title"]}>Спасибо за заявку!</h2>
        <button
          className={style["modal__close"]}
          onClick={() => {
            handleCloseClick();
          }}
        >
          <CloseButton color="#ABABAB" />
        </button>
        <p className={style["modal__description"]}>
          Ожидайте звонка нашего юриста в течение 3 минут с номера. Если Вы
          оставили заявку вне рабочее время, мы перезвоним Вам на следующий
          рабочий день.
        </p>
        <a className={style["modal__tel"]} href="tel:+79208030659">
          +7 (920) 803 06 59
        </a>
      </div>
    </section>
  );
};

export default ModalSuccess;
