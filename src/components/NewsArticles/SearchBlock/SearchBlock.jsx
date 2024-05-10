import style from "./styles.module.scss";
import Button from "../../Button/Button";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../../services/useWindowDimensions";

const SearchBlock = ({ onClick }) => {
  const { width } = useWindowDimensions();
  const [buttonWidth, setButtonWidth] = useState("22%");
  useEffect(() => {
    if (width < 600) {
      setButtonWidth("100%");
    }
  }, [width]);

  return (
    <div className={style["search-block"]}>
      <select className={style["search-block__select"]} name="Category">
        <option value="Category1">Категория</option>
        <option value="Category2">Категория 2</option>
      </select>
      <input
        name="Search"
        className={style["search-block__input"]}
        type="text"
        placeholder="      Введите ваш запрос"
      />

      <Button
        buttonClass="button_clear-red"
        text="Найти"
        width={buttonWidth}
        handleClick={onClick}
      />
    </div>
  );
};

export default SearchBlock;
