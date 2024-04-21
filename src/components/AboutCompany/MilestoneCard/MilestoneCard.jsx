import style from "./styles.module.scss";

const MilestoneCard = ({ src, alt, title, description }) => {
  return (
    <div className={style["milestone"]}>
      <img className={style["milestone__image"]} src={src} alt={alt} />
      <div className={style["milestone__card"]}>
        <h4 className={style["milestone__title"]}>{title}</h4>
        <p className={style["milestone__description"]}>{description}</p>
      </div>
    </div>
  );
};

export default MilestoneCard;
