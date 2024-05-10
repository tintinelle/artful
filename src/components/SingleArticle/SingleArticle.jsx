import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import ButtonCard from "../ButtonBannerPink/ButtonBannerPink";
import NewsBanner from "../NewsBanner/NewsBanner";
import OtherArticles from "./OtherArticles/OtherArticles";

const SingleArticle = ({ displayModalForm }) => {
  return (
    <section className={style["article"]}>
      <h2 className={style["article__title"]}>
        <RedRectangle height="58" />
        Что такое упрощенное банкротство
      </h2>

      <div className={style["article__content-wrapper"]}>
        <div className={style["article__central-content-wrapper"]}>
          <ul className={style["article__contents"]}>
            <h3 className={style["article__subtitle"]}>Содержание</h3>
            <li>
              <a href="#order" className={style["article__list-item"]}>
                Порядок, сроки и требования упрощенного внесудебного банкротства
              </a>
            </li>
            <li>
              <a href="#" className={style["article__list-item"]}>
                Процесс упрощенного банкротства без суда
              </a>
              <ul className={style["article__list"]}>
                <li>
                  <a
                    href="#"
                    className={`${style["article__list-item"]} ${style["article__list-item_smaller"]}`}
                  >
                    Приставы закрыли исп. производства
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${style["article__list-item"]} ${style["article__list-item_smaller"]}`}
                  >
                    Заявление в МФЦ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${style["article__list-item"]} ${style["article__list-item_smaller"]}`}
                  >
                    Проверка и публикация на ЕФРСБ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${style["article__list-item"]} ${style["article__list-item_smaller"]}`}
                  >
                    Полгода на возражения кредиторов
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${style["article__list-item"]} ${style["article__list-item_smaller"]}`}
                  >
                    Признание банкротом, списание долгов
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${style["article__list-item"]} ${style["article__list-item_smaller"]}`}
                  >
                    Какие требуются документы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${style["article__list-item"]} ${style["article__list-item_smaller"]}`}
                  >
                    Нужен ли арбитражный управляющий
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className={style["article__list-item"]}>
                Стоимость банкротства: бесплатно — это сколько?
              </a>
            </li>
            <li>
              <a href="#" className={style["article__list-item"]}>
                Оценка экспертов
              </a>
            </li>
            <li>
              <a href="#" className={style["article__list-item"]}>
                Почему упрощенное банкротство на деле пробуксовывает?
              </a>
            </li>
            <li>
              <a href="#" className={style["article__list-item"]}>
                Отказ в момент подачи заявления
              </a>
            </li>
            <li>
              <a href="#" className={style["article__list-item"]}>
                Отказ во время 6 месяцев, отпущенных на внесудебку
              </a>
            </li>
          </ul>
          <div>
            <div className={style["article__text-wrapper"]}>
              <p className={style["article__paragraph"]}>
                С сентября 2020 года в МФЦ появилась новая услуга — бесплатное
                банкротство. В законе упрощённое банкротство назвали
                внесудебным, что отражает его отличие от платной процедуры —
                упрощённое списание долгов проходит вне суда, в административном
                порядке — путём подачи заявления в МФЦ. Закон вступил в силу
                с 01 сентября 2020 года.
              </p>
              <p className={style["article__paragraph"]}>
                Рассмотрим, что даёт новый закон, и кому подходит вариант
                бесплатного банкротства.
              </p>
              <h3
                className={`${style["article__subtitle"]} ${style["article__subtitle_red"]}`}
                id="order"
              >
                Порядок, сроки и требования упрощенного внесудебного банкротства
              </h3>
              <p className={style["article__paragraph"]}>
                Возможность признать себя несостоятельным появилась у людей
                с 1 октября 2015 года, но пока бедные должники не торопятся
                в суд. Кто может пройти внесудебное (упрощённое) банкротство
                физических лиц бесплатно?
              </p>
              <p className={style["article__paragraph"]}>
                Закон о внесудебном банкротстве физических лиц решает вопрос
                сроков и цены списания долгов для людей, у которых
                нет имущества. Ниже мы представляем основные моменты закона.
              </p>
              <p className={style["article__paragraph"]}>
                Внесудебный порядок признания несостоятельности. Процедура
                построена на том, что сначала взысканием занимаются судебные
                приставы. Если ФССП окончила исполнительное производство
                по ч.1 п.4. ст. 46 ФЗ № 229, гражданин подаёт заявление в МФЦ,
                чтобы списать долги без суда.
              </p>
              <p className={style["article__paragraph"]}>
                Пристав уже провёл розыск и сделал вывод об отсутствии имущества
                и денег для оплаты долга.
              </p>
              <p className={style["article__paragraph"]}>
                Объявление о банкротстве физ. лица опубликуют в ЕФРСБ, и если
                в течение 6 месяцев кредиторы не представят возражения, долги
                будут признаны безнадёжными и списаны.
              </p>
              <p className={style["article__paragraph"]}>
                Процедура бесплатна для должников. Расходы берет на себя
                государство: оплату публикаций на Федресурсе и услуг МФЦ,
                накладных расходов в процедуре нет.
              </p>
              <p className={style["article__paragraph"]}>
                По новым правилам срок ограничен — 6 месяцев с подачи заявления
                в МФЦ. Поменялись и требования к должникам.
              </p>
              <p className={style["article__paragraph"]}>
                Ниже представлены условия внесудебного банкротства.
              </p>
              <p
                className={`${style["article__paragraph"]} ${style["article__paragraph_bold"]}`}
              >
                Размер задолженности 50 тыс. — 500 тысяч рублей.
              </p>
              <p className={style["article__paragraph"]}>
                Исполнительные производства окончены по п.4.
                ч.1 ст. 46 ФЗ № 229 — у должника нет имущества и доходов выше
                прожиточного минимума. Новых производств приставы не возбуждали.
                Важно, что дела в ФССП именно окончены, а не прекращены
                или приостановлены.
              </p>
              <p className={style["article__paragraph"]}>
                В заявлении на банкротство должник обязан указать всех своих
                кредиторов. Если он перечислит не всех, то долги в отношении
                «забытых» кредиторов не спишут.
              </p>
              <p className={style["article__paragraph"]}>
                Если специалисты МФЦ обнаружит, что сумма долгов больше суммы
                в 500 тысяч, или что есть имущество, за счёт которого можно
                частично погасить долги — кредиторы вправе подать возражения
                в Арбитражный суд. Тогда внесудебное банкротство прекращается,
                и начинается судебное — вводится процедура реструктуризации
                долга.
              </p>
            </div>
          </div>
          <OtherArticles />
        </div>

        <div className={style["article__aside"]}>
          <NewsBanner />
          <ButtonCard displayModalForm={displayModalForm} />
        </div>
      </div>
    </section>
  );
};

export default SingleArticle;
