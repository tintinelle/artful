import style from "./styles.module.scss";
import Button from "../Button/Button";
import useWindowDimensions from "../../services/useWindowDimensions";
import { useEffect, useState } from "react";

const ButtonBanner = ({
  title,
  description,
  background,
  buttonText,
  displayModalForm,
  textWidth,
}) => {
  const { width } = useWindowDimensions();
  const [changedTextWidth, setChangedTextWidth] = useState(textWidth);

  useEffect(() => {
    if (width < 1150) setChangedTextWidth("85%");
  }, [width]);

  return (
    <section
      className={style["banner"]}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={style["banner__wrapper"]}>
        <h1 className={style["banner__title"]}>{title}</h1>
        <p
          className={style["banner__description"]}
          style={{ width: `${changedTextWidth}` }}
        >
          {description}
        </p>
        <Button
          buttonClass="button_red"
          text={buttonText}
          width="53.4%"
          handleClick={displayModalForm}
        />
      </div>
    </section>
  );
};

export default ButtonBanner;
