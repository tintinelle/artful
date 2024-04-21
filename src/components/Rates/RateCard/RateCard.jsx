import style from "./styles.module.scss";
import Button from "../../Button/Button";
import useWindowDimensions from "../../../services/useWindowDimensions";
import { useEffect, useState } from "react";

const RateCard = ({ item, displayModalForm }) => {
  const { width } = useWindowDimensions();
  const [buttonWidth, setButtonWidth] = useState("48.8%");

  useEffect(() => {
    if (width < 1075) setButtonWidth("100%");
  }, [width]);

  return (
    <div
      className={style["card"]}
      style={{ backgroundImage: `url(${item.background})` }}
    >
      <h3 className={style["card__title"]}>{item.title}</h3>
      <p className={style["card__description"]}>{item.description}</p>
      <Button
        text="Получить консультацию"
        buttonClass="button_red"
        width={buttonWidth}
        handleClick={displayModalForm}
      />
      <div className={style["card__hashtags"]}>
        {item.hashtags.map((item) => (
          <div className={style["card__hashtag"]}>#{item}</div>
        ))}
      </div>
    </div>
  );
};

export default RateCard;
