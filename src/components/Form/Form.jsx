import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormSchema from "../../constants/Form/FormSchema";
import manImage from "../../images/form/man.webp";

const Form = ({ onClick }) => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      name: "",
      mail: "",
      message: "",
    },
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });
  const { errors, isValid } = formState;
  const watchMessage = watch("message");

  return (
    <section className={style["form-section"]}>
      <div className={style["form-section__wrapper"]}>
        <div className={style["form-section__title-group"]}>
          <h2 className={style["form-section__title"]}>
            <RedRectangle height="81.29" />
            Остались вопросы? мы Ответим!
          </h2>
          <p className={style["form-section__description"]}>
            Не так страшен закон, как его толкуют.
          </p>
        </div>

        <form
          className={style["form"]}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            onClick();
          })}
        >
          <div className={style["form__input-wrapper"]}>
            <label
              className={`${style["form__label"]} ${
                errors.name && style["form__label_error"]
              }`}
              for="formName"
            >
              Ваше имя
            </label>
            <input
              {...register("name")}
              type="text"
              id="formName"
              className={`${style["form__input"]} ${
                errors.name && style["form__input_error"]
              }`}
              placeholder="Введите имя"
            />
            <span className={style["form__error"]}>{errors.name?.message}</span>
          </div>
          <div className={style["form__input-wrapper"]}>
            <label
              className={`${style["form__label"]} ${
                errors.mail && style["form__label_error"]
              }`}
              for="formMail"
            >
              Введите почту
            </label>
            <input
              {...register("mail")}
              type="email"
              id="formMail"
              className={`${style["form__input"]} ${
                errors.mail && style["form__input_error"]
              }`}
              placeholder="E-mail"
            />
            <span className={style["form__error"]}>{errors.mail?.message}</span>
          </div>
          <div className={style["form__input-wrapper"]}>
            <label className={style["form__label"]} for="formMessage">
              Ваш вопрос
            </label>
            <span className={style["form__additional-info"]}>
              {watchMessage.length}/300
            </span>
            <textarea
              {...register("message")}
              rows="7"
              type="text"
              id="formMessage"
              className={style["form__input"]}
              placeholder="Расскажите о своей проблеме"
              maxlength="300"
            ></textarea>
            <span className={style["form__error"]}>
              {errors.message?.message}
            </span>
          </div>
          <p className={style["form__error-message"]}></p>

          <button
            type="submit"
            className={`${style["form__button"]} ${
              !isValid && style["form__button_disabled"]
            }`}
          >
            Отправить
          </button>

          <p className={style["form__button-info"]}>
            Нажимая на кнопку, Вы даете свое согласие на обработку{" "}
            <a href="http://">персональных данных.</a>
          </p>
        </form>

        <img
          className={style["form-section__image"]}
          src={manImage}
          alt="Мужчина в костюме"
        />
      </div>
    </section>
  );
};

export default Form;
