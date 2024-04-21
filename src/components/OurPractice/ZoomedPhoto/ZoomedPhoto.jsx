import style from "./styles.module.scss";
import CloseButton from "../../../images/icons/CloseButton";

const ZoomedPhoto = ({ photo, handleClick }) => {
  return (
    <div className={style["modal"]}>
      <div className={style["modal__wrapper"]}>
        <img src={photo} alt="" className={style["modal__image"]} />
        <button className={style["modal__close"]} onClick={() => handleClick()}>
          <CloseButton color="#313239" />
        </button>
      </div>
    </div>
  );
};

export default ZoomedPhoto;
