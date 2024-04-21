import style from "./styles.module.scss";
import RedRectangle from "../../images/icons/RedRectangle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination, Grid } from "swiper/modules";
import ButtonCard from "../ButtonBannerPink/ButtonBannerPink";
import NewsBanner from "../NewsBanner/NewsBanner";
import NewsArticlesData from "../../constants/News/NewsArticles";
import Eye from "../../images/icons/Eye";
import Like from "../../images/icons/Like";
import SearchBlock from "./SearchBlock/SearchBlock";

const NewsArticles = ({ displayModalForm }) => {
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
    <section className={style["news"]}>
      <div className={style["news__title-group"]}>
        <h2 className={style["news__title"]}>
          <RedRectangle height="86" />
          Статьи по списанию кредитов и долгов
        </h2>
        <p className={style["news__description"]}>
          Какая-нибудь цитата или емкий комментарий может.......
        </p>
      </div>

      <div className={style["news__content-wrapper"]}>
        <div className={style["news__central-content-wrapper"]}>
          <SearchBlock />
          <div className={style["news__promo"]}>
            <h3 className={style["news__promo-title"]}>
              Долги и банкротство физлица: что спишется, а что останется на
              счетах?
            </h3>
            <p className={style["news__promo-text"]}>
              Какие долги не могут быть списаны после банкротства
            </p>
            <div className={style["news__promo-info-wrapper"]}>
              <div className={style["news__promo-info"]}>29.07.2021</div>
              <div className={style["news__promo-info"]}>
                <Eye /> 455
              </div>
              <div className={style["news__promo-info"]}>#Погашение долга</div>
              <div className={style["news__promo-info"]}>#Банкротство</div>
              <div className={style["news__promo-info"]}>#Списание</div>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              550: {
                slidesPerView: 2,
              },
            }}
            grid={{
              rows: 4,
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
                    <h3 className={style["slider__title"]}>{item.title}</h3>
                    <p className={style["slider__description"]}>
                      {item.description}
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

        <div className={style["news__aside"]}>
          <NewsBanner />
          <ButtonCard displayModalForm={displayModalForm} />
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
