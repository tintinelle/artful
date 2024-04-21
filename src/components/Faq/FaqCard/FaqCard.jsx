import styles from "./styles.module.scss";
import ArrowDown from "../../../images/icons/ArrowDown";

function FaqCard({ item, handleClick }) {
  return (
    <li className={styles["faq-card"]}>
      <details
        open={item.active}
        onClick={(e) => {
          e.preventDefault();
          handleClick(item);
        }}
      >
        <summary className={styles["faq-card__header"]} onClick={() => {}}>
          <h4 className={styles["faq-card__title"]}>{item.title}</h4>
          <p
            className={`${styles["faq-card__icon"]} ${
              item.active ? styles["faq-card__icon_expanded"] : ""
            }`}
          >
            <ArrowDown color="#ABA6A6" size="24" />
          </p>
        </summary>
        <p className={styles["faq-card__description"]}>{item.description}</p>
      </details>
    </li>
  );
}

export default FaqCard;
