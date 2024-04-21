import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import BackgroundPromo from "../images/promo/service.webp";
import Footer from "../components/Footer/Footer";
import PagesNavigation from "../components/PagesNavigation/PagesNavigation";
import ModalServices from "../components/ModalServices/ModalServices";
import ModalForm from "../components/ModalForm/ModalForm";
import Form from "../components/Form/Form";
import ServiceArticle from "../components/ServiceArticle/ServiceArticle";
import ModalSuccess from "../components/ModalSuccess/ModalSuccess";
import useWindowDimensions from "../services/useWindowDimensions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ServiceSingle() {
  const [openModalServices, setOpenModalServices] = useState(false);
  const handleServicesButtonHover = () => {
    setOpenModalServices(!openModalServices);
  };

  const [closeModal, setCloseModal] = useState(false);
  const handleCloseModal = () => {
    setCloseModal(true);
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
  const [promoWidth, setPromoWidth] = useState("46%");
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
        <ModalForm handleCloseClick={handleCloseModal} />
      )}

      <main>
        {/* {!closeModal && <ModalSuccess handleCloseClick={handleCloseModal} />} */}
        <Promo
          contentWidth={promoWidth}
          title="Семейные и наследственные споры"
          description="Расторжение брака, взыскание алиментов, раздел имущества, порядок общения с детьми, восстановление срока принятия наследства, оспаривание наследства по завещанию и пр."
          background={BackgroundPromo}
          buttons={true}
          buttonTextOne={"Запись на консультацию"}
          buttonTextTwo={"Получить КП"}
          displayModalForm={displayModalForm}
        />
        <PagesNavigation
          location={"Услуги / Семейные и наследственные споры"}
        />
        <ServiceArticle displayModalForm={displayModalForm} />
        <Form />
      </main>
      <Footer displayModalForm={displayModalForm} />
    </>
  );
}

export default ServiceSingle;
