import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination, Grid } from "swiper/modules";
import PracticeData from "../../constants/Practice/Practice";
import MagnifyingGlass from "../../images/icons/MagnifyingGlass";
import ButtonCard from "../ButtonBannerPink/ButtonBannerPink";
import NewsBanner from "../NewsBanner/NewsBanner";
import { useState } from "react";
import ZoomedPhoto from "./ZoomedPhoto/ZoomedPhoto";

const OurPractice = ({ displayModalForm }) => {
  const pagination = {
    el: "#practice-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class='${className} ${
        style["slider__pagination-bullet"]
      }'>${index + 1}</span>`;
    },
  };

  const [zoomedPhoto, setZoomedPhoto] = useState();
  const [zoom, setZoom] = useState(false);
  const handleZoom = (photo) => {
    setZoomedPhoto(photo);
    setZoom(true);
  };

  const handleClickCloseZoom = () => {
    setZoom(false);
  };

  return (
    <section className={style["practice"]}>
      <div className={style["practice__title-group"]}>
        <h2 className={style["practice__title"]}>
          <RedRectangle height="48" />
          Наша практика
        </h2>
        <p className={style["practice__description"]}>
          Какая-нибудь цитата или емкий комментарий может.......
        </p>
      </div>

      <div className={style["practice__content-wrapper"]}>
        {zoom && (
          <ZoomedPhoto photo={zoomedPhoto} handleClick={handleClickCloseZoom} />
        )}
        <div className={style["practice__slider-wrapper"]}>
          <Swiper
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={24}
            breakpoints={{
              1080: {
                slidesPerView: 3,
              },
              650: {
                slidesPerView: 2,
              },
            }}
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
            {PracticeData.map((item) => {
              return (
                <SwiperSlide key={item.id} className={style["slider__slide"]}>
                  <button
                    className={style["slider__zoom-button"]}
                    onClick={() => handleZoom(item.photo)}
                  >
                    <MagnifyingGlass />
                  </button>
                  <img
                    src={item.photo}
                    alt="Фото документов по делу"
                    className={style["slider__image"]}
                  />
                  <p className={style["slider__text"]}>
                    Сумма долгов:
                    <span
                      className={`${style["slider__text"]} ${style["slider__text_red"]}`}
                    >
                      {item.sum}
                    </span>
                  </p>
                  <p className={style["slider__text"]}>
                    Номер дела:
                    <span
                      className={`${style["slider__text"]} ${style["slider__text_black"]}`}
                    >
                      {item.case}
                    </span>
                  </p>
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

        <div className={style["practice__aside"]}>
          <NewsBanner />
          <ButtonCard displayModalForm={displayModalForm} />
        </div>
      </div>
    </section>
  );
};

export default OurPractice;
