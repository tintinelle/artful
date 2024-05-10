import style from "./styles.module.scss";
import QuestionMark from "../../../../images/icons/QuestionMark";
import { useState } from "react";
import { Link } from "react-router-dom";

const LinkToService = ({ item, handleMouseEnter, handleMouseLeave }) => {
  const [activeLink, setActiveLink] = useState(false);

  return (
    <Link
      to="/services/service"
      className={`${style["link"]} ${activeLink && style["link_active"]}`}
      href="#"
      onMouseEnter={() => {
        handleMouseEnter(item);
        setActiveLink(!activeLink);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setActiveLink(!activeLink);
      }}
    >
      {item.title}
      {activeLink ? (
        <QuestionMark color="#2D2D2D" />
      ) : (
        <QuestionMark color="#948E8E" />
      )}
    </Link>
  );
};

export default LinkToService;
