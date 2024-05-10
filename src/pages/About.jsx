import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import BackgroundPromo from "../images/promo/about.webp";
import PagesNavigation from "../components/PagesNavigation/PagesNavigation";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import BackgroundBanner from "../images/buttonBanner/main.webp";
import ButtonBanner from "../components/ButtonBanner/ButtonBanner";
import Team from "../components/Team/Team";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import ModalServices from "../components/ModalServices/ModalServices";
import ModalForm from "../components/ModalForm/ModalForm";
import ModalSuccess from "../components/ModalSuccess/ModalSuccess";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../services/useWindowDimensions";

function About() {
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
          title="Несколько слов о нашей компании"
          background={BackgroundPromo}
          buttons={false}
        />
        <PagesNavigation location={"О компании"} />
        <AboutCompany />
        <ButtonBanner
          title="Начните жизнь с чистого листа!"
          description="Получите консультацию юриста и узнайте сроки и стоимость списания вашего долга уже сегодня"
          background={BackgroundBanner}
          buttonText="Получить консультацию"
          displayModalForm={displayModalForm}
          textWidth="54%"
        />
        <Team />
        <Form onClick={() => setDisplayModalSuccess(true)} />
      </main>
      <Footer displayModalForm={displayModalForm} />
    </>
  );
}

export default About;
