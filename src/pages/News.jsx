import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import BackgroundPromo from "../images/promo/news.webp";
import PagesNavigation from "../components/PagesNavigation/PagesNavigation";
import Footer from "../components/Footer/Footer";
import ModalServices from "../components/ModalServices/ModalServices";
import ModalForm from "../components/ModalForm/ModalForm";
import ModalSuccess from "../components/ModalSuccess/ModalSuccess";
import ButtonBanner from "../components/ButtonBanner/ButtonBanner";
import BackgroundBanner from "../images/buttonBanner/news.webp";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../services/useWindowDimensions";
import NewsArticles from "../components/NewsArticles/NewsArticles";

function News() {
  const [openModalServices, setOpenModalServices] = useState(false);
  const handleServicesButtonHover = () => {
    setOpenModalServices(!openModalServices);
  };

  const [closeModal, setCloseModal] = useState(false);
  const handleCloseModal = () => {
    setCloseModal(true);
  };

  const [displayModalSuccess, setDisplayModalSuccess] = useState(false);
  const [closeModalSuccess, setCloseModalSuccess] = useState(false);
  const handleCloseModalSuccess = () => {
    setCloseModalSuccess(true);
  };

  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const displayModalForm = () => {
    setIsModalFormOpen(true);
    setCloseModal(false);
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { width } = useWindowDimensions();
  const [promoWidth, setPromoWidth] = useState("43%");
  useEffect(() => {
    if (width < 501) setPromoWidth("90%");
  }, [width]);

  return (
    <>
      <Header
        handleServicesButtonHover={handleServicesButtonHover}
        displayModalForm={displayModalForm}
        openModalServices={openModalServices}
      />
      {openModalServices && (
        <ModalServices closeModal={handleServicesButtonHover} />
      )}
      {isModalFormOpen && !closeModal && (
        <ModalForm
          handleCloseClick={handleCloseModal}
          onClick={() => setDisplayModalSuccess(true)}
        />
      )}

      <main>
        {displayModalSuccess && !closeModalSuccess && (
          <ModalSuccess handleCloseClick={handleCloseModalSuccess} />
        )}
        <Promo
          contentWidth={promoWidth}
          title="Интересные статьи и полезные новости"
          background={BackgroundPromo}
          buttons={false}
        />
        <PagesNavigation location={"Новости"} />
        <NewsArticles displayModalForm={displayModalForm} />
        <ButtonBanner
          title="Подпишитесь на рассылку"
          description="Нашим читателям нравятся лёгкий стиль изложения, отсутствие спама и возможность отказаться от рассылки в любой момент. Присоединяйтесь!"
          background={BackgroundBanner}
          buttonText="Подписаться"
          displayModalForm={displayModalForm}
          textWidth="85%"
        />
      </main>
      <Footer displayModalForm={displayModalForm} />
    </>
  );
}

export default News;
