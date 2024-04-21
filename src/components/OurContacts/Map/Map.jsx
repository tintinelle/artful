import style from "./styles.module.scss";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
  GeolocationControl,
} from "react-yandex-maps";
import Location from "../../../images/icons/Location";

const MapBlock = () => {
  return (
    <section className={style["map"]}>
      <p className={style["map__label"]}>
        <Location />
        Посмотреть на карте
      </p>
      <YMaps className={style["map__wrapper"]}>
        <Map
          width="100%"
          height="291px"
          defaultState={{ center: [55.708293, 37.643228], zoom: 16 }}
        >
          <Placemark geometry={[55.708293, 37.643228]} />
          <GeolocationControl options={{ float: "right" }} />
          <FullscreenControl options={{ float: "left" }} />
          <ZoomControl options={{ float: "left" }} />
        </Map>
      </YMaps>
    </section>
  );
};

export default MapBlock;

/* <div class="footer__map">
  <div style="position:relative;overflow:hidden;">
    <a
      href="https://yandex.ru/maps/org/vprave/95214957557/?utm_medium=mapframe&utm_source=maps"
      style="color:#eee;font-size:12px;position:absolute;top:0px;"
    >
      Вправе
    </a>
    <a
      href="https://yandex.ru/maps/213/moscow/category/legal_services/184105630/?utm_medium=mapframe&utm_source=maps"
      style="color:#eee;font-size:12px;position:absolute;top:14px;"
    >
      Юридические услуги в Москве
    </a>
    <a
      href="https://yandex.ru/maps/213/moscow/category/attorney/184105616/?utm_medium=mapframe&utm_source=maps"
      style="color:#eee;font-size:12px;position:absolute;top:28px;"
    >
      Адвокаты в Москве
    </a>
    <iframe
      src="https://yandex.ru/map-widget/v1/?ll=37.576007%2C55.772289&mode=search&oid=95214957557&ol=biz&z=16.33"
      width="560"
      height="400"
      frameborder="1"
      allowfullscreen="true"
      style="position:relative;"
      class="footer__map-item"
    ></iframe>
  </div>
</div>; */
