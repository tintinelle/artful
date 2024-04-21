import style from "./styles.module.scss";
import Button from "../Button/Button";

const DebtsBanner = ({ displayModalForm }) => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper"]}>
        <h2 className={style["banner__title"]}>
          Спишите долги самостоятельно без суда!
        </h2>
        <p className={style["banner__description"]}>
          С 1 сентября 2020 года стало списать долги можно без суда
          через отделение МФЦ. Узнайте, подходит ли вам такая процедура?
        </p>
        <Button
          text="Узнать больше о внесудебном банкротстве"
          buttonClass="button_red"
          width="64.4%"
          handleClick={displayModalForm}
        />
      </div>
    </section>
  );
};

export default DebtsBanner;
