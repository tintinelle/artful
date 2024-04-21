import style from "./styles.module.scss";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../services/useWindowDimensions";

const Promo = ({
  contentWidth,
  title,
  description,
  background,
  buttons,
  buttonTextOne,
  buttonTextTwo,
  displayModalForm,
}) => {
  const { width } = useWindowDimensions();
  const [buttonWidthOne, setButtonWidthOne] = useState("35.5%");
  const [buttonWidthTwo, setButtonWidthTwo] = useState("28.4%");
  useEffect(() => {
    if (width < 1400) {
      setButtonWidthOne("48%");
      setButtonWidthTwo("48%");
    }
    if (width < 600) {
      setButtonWidthOne("100%");
      setButtonWidthTwo("100%");
    }
  }, [width]);

  return (
    <section
      className={style["promo"]}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className={style["promo__info-group"]}
        style={{ width: `${contentWidth}` }}
      >
        <h1 className={style["promo__title"]}>{title}</h1>
        {description && (
          <p className={style["promo__description"]}>{description}</p>
        )}
        {buttons && (
          <div className={style["promo__buttons"]}>
            <Button
              buttonClass="button_red"
              text={buttonTextOne}
              width={buttonWidthOne}
              handleClick={displayModalForm}
            />
            <Button
              buttonClass="button_clear"
              text={buttonTextTwo}
              width={buttonWidthTwo}
              handleClick={displayModalForm}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Promo;
