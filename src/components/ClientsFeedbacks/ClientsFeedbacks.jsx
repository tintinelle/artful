import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination, Grid } from "swiper/modules";
import FeedbacksData from "../../constants/Feedbacks/Feedbacks";
import ButtonCard from "../ButtonBannerPink/ButtonBannerPink";
import NewsBanner from "../NewsBanner/NewsBanner";

const ClientsFeedbacks = ({ displayModalForm }) => {
  const pagination = {
    el: "#practice-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class='${className} ${
        style["slider__pagination-bullet"]
      }'>${index + 1}</span>`;
    },
  };

  return (
    <section className={style["feedbacks"]}>
      <div className={style["feedbacks__title-group"]}>
        <h2 className={style["feedbacks__title"]}>
          <RedRectangle height="48" />
          Отзывы клиентов
        </h2>
        <p className={style["feedbacks__description"]}>
          Какая-нибудь цитата или емкий комментарий может.......
        </p>
      </div>

      <div className={style["feedbacks__content-wrapper"]}>
        <div className={style["feedbacks__slider-wrapper"]}>
          <Swiper
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={24}
            slidesPerView={1}
            grid={{
              rows: 3,
              fill: "row",
            }}
            className={style["slider"]}
            navigation={{
              nextEl: "#swiper-forward",
              prevEl: "#swiper-back",
            }}
            pagination={pagination}
            rewind
          >
            {FeedbacksData.map((item) => {
              return (
                <SwiperSlide key={item.id} className={style["slider__slide"]}>
                  <h3 className={style["slider__name"]}>{item.name}</h3>
                  {item.media && (
                    <img
                      src={item.media}
                      alt="Отзыв"
                      className={style["slider__image"]}
                    />
                  )}
                  <div className={style["slider__text-wrapper"]}>
                    <div className={style["slider__text-row"]}>
                      <span className={style["slider__text-label"]}>
                        Дата завершения:
                      </span>
                      <span className={style["slider__text-data"]}>
                        {item.date}
                      </span>
                    </div>
                    <div className={style["slider__text-row"]}>
                      <span className={style["slider__text-label"]}>
                        Списанная задолженность:
                      </span>
                      <span className={style["slider__text-data"]}>
                        {item.debt}
                      </span>
                    </div>
                    <div className={style["slider__text-row"]}>
                      <span className={style["slider__text-label"]}>
                        Решение по делу:
                      </span>
                      <span className={style["slider__text-data"]}>
                        {item.decision}
                      </span>
                    </div>
                    <div className={style["slider__text-row"]}>
                      <span className={style["slider__text-label"]}>
                        Номер дела:
                      </span>
                      <span className={style["slider__text-data"]}>
                        {item.case}
                      </span>
                    </div>
                    <div className={style["slider__text-row"]}>
                      <span className={style["slider__text-label"]}>
                        Регион:
                      </span>
                      <span className={style["slider__text-data"]}>
                        {item.place}
                      </span>
                    </div>
                  </div>
                  {item.feedback && (
                    <div className={style["slider__feedback"]}>
                      {item.feedback}
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
            <div className={style["slider__navigation"]}>
              <button
                id="swiper-back"
                className={`${style["slider__button"]} ${style["slider__button_prev"]}`}
              >
                Пред.
              </button>
              <div
                id="practice-pagination"
                className={style["slider__pagination"]}
              />
              <button
                id="swiper-forward"
                className={`${style["slider__button"]} ${style["slider__button_next"]}`}
              >
                След.
              </button>
            </div>
          </Swiper>
        </div>

        <div className={style["feedbacks__aside"]}>
          <NewsBanner />
          <ButtonCard displayModalForm={displayModalForm} />
        </div>
      </div>
    </section>
  );
};

export default ClientsFeedbacks;
