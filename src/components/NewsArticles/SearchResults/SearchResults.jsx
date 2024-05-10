import style from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination, Grid } from "swiper/modules";
import NewsArticlesData from "../../../constants/News/NewsArticles";
import { Link } from "react-router-dom";
import ArrowRight from "../../../images/icons/ArrowRight";
import Eye from "../../../images/icons/Eye";
import Like from "../../../images/icons/Like";

const SearchResults = () => {
  const pagination = {
    el: "#news-results-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class='${className} ${
        style["slider__pagination-bullet"]
      }'>${index + 1}</span>`;
    },
  };

  return (
    <div className={style["search-results"]}>
      <Swiper
        modules={[Navigation, Pagination, Grid]}
        spaceBetween={24}
        slidesPerView={1}
        grid={{
          rows: 6,
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
        {NewsArticlesData.map((item) => {
          return (
            <SwiperSlide key={item.id} className={style["slider__slide"]}>
              <div className={style["slider__wrapper"]}>
                <p className={style["slider__hashtag"]}>#{item.hashtag}</p>
                <Link
                  to="/news/article"
                  className={style["slider__button-more"]}
                  href="#"
                >
                  Читать статью
                  <ArrowRight color="#6E6868" size="20" />
                </Link>
                <Link to="/news/article" className={style["slider__title"]}>
                  Что такое упрощенное банкротство?
                </Link>
                <p className={style["slider__description"]}>
                  Расскажем о том, что такое финансирование инвестиций и
                  необходимо ли оно для бизнеса...
                </p>
                <div className={style["slider__additional-info"]}>
                  <p className={style["slider__text"]}>{item.date}</p>
                  <div className={style["slider__likes-wrapper"]}>
                    <div className={style["slider__text"]}>
                      <Eye /> {item.views}
                    </div>
                    <div className={style["slider__text"]}>
                      <Like /> {item.likes}
                    </div>
                  </div>
                </div>
              </div>
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
            id="news-results-pagination"
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
  );
};

export default SearchResults;
