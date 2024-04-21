import style from "./styles.module.scss";
import Category from "./Category/Category";
import Services from "../../constants/Services/Services";

const ModalServices = ({ closeModal }) => {
  return (
    <section className={style["modal"]} onMouseLeave={() => closeModal()}>
      <div className={style["modal__wrapper"]}>
        <Category
          title="Для частных лиц"
          services={Services}
          path="individuals"
        />
        <Category
          title="Для юридических лиц"
          services={Services}
          path="companies"
        />
      </div>
    </section>
  );
};

export default ModalServices;
