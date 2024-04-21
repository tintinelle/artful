import style from "./styles.module.scss";
import CloseButton from "../../images/icons/CloseButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormSchema from "../../constants/ModalForm/ModalFormSchema";

const ModalForm = ({ handleCloseClick }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      mail: "",
      city: "",
    },
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });
  const { errors, isValid } = formState;

  return (
    <section className={style["modal"]}>
      <div className={style["modal__wrapper"]}>
        <h2 className={style["modal__title"]}>
          Укажите ваши данные для связи и получите консультацию юриста
        </h2>
        <button
          className={style["modal__close"]}
          onClick={() => {
            handleCloseClick();
          }}
        >
          <CloseButton color="#ABABAB" />
        </button>
        <form
          className={style["form"]}
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className={style["form__input-wrapper"]}>
            <label
              className={`${style["form__label"]} ${
                errors.name && style["form__label_error"]
              }`}
              for="formName"
            >
              Введите имя
            </label>
            <input
              {...register("name")}
              type="text"
              id="formName"
              className={`${style["form__input"]} ${
                errors.name && style["form__input_error"]
              }`}
              placeholder="Имя"
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
            <label className={style["form__label"]} for="formCity">
              Из какого Вы города
            </label>
            <input
              {...register("city")}
              type="text"
              id="formCity"
              className={`${style["form__input"]} ${
                errors.city && style["form__input_error"]
              }`}
              placeholder="Город"
            />
            <span className={style["form__error"]}>{errors.city?.message}</span>
          </div>

          <button
            type="submit"
            className={`${style["form__button"]} ${
              !isValid && style["form__button_disabled"]
            }`}
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default ModalForm;
