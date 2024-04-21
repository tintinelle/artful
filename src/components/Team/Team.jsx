import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import TeamData from "../../constants/Team/Team";
import ArrowLeft from "../../images/icons/ArrowLeft";
import ArrowRight from "../../images/icons/ArrowRight";

const Team = () => {
  return (
    <section className={style["team"]}>
      <div className={style["team__title-group"]}>
        <h2 className={style["team__title"]}>
          <RedRectangle height="48" />
          Наш коллектив
        </h2>
        <p className={style["team__description"]}>
          Какая-нибудь цитата или емкий комментарий может.......
        </p>
      </div>

      <div className={style["team__slider-wrapper"]}>
        <button
          id="swiper-back"
          className={`${style["team__slider-button"]} ${style["team__slider-button_prev"]}`}
        >
          <ArrowLeft size="24" color="#FFFFFF" />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },
            650: {
              slidesPerView: 2,
            },
          }}
          className={style["slider"]}
          navigation={{
            nextEl: "#swiper-forward",
            prevEl: "#swiper-back",
          }}
          rewind
        >
          {TeamData.map((item) => {
            return (
              <SwiperSlide key={item.id} className={style["slider__slide"]}>
                <img
                  src={item.photo}
                  alt="Фото сотрудника"
                  className={style["slider__photo"]}
                />
                <h3 className={style["slider__subtitle"]}>{item.name}</h3>
                <p className={style["slider__position"]}>{item.position}</p>
                <p className={style["slider__description"]}>
                  {item.description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          id="swiper-forward"
          className={`${style["team__slider-button"]} ${style["team__slider-button_next"]}`}
        >
          <ArrowRight size="24" color="#FFFFFF" />
        </button>
      </div>
    </section>
  );
};

export default Team;
