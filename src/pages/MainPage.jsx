import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import BackgroundPromo from "../images/promo/main.webp";
import BackgroundBanner from "../images/buttonBanner/main.webp";
import Partners from "../components/Partners/Partners";
import Advantages from "../components/Advantages/Advantages";
import ButtonBanner from "../components/ButtonBanner/ButtonBanner";
import Stages from "../components/Stages/Stages";
import DebtsBanner from "../components/DebtsBanner/DebtsBanner";
import Rates from "../components/Rates/Rates";
import NumbersFacts from "../components/NumbersFacts/NumbersFacts";
import Faq from "../components/Faq/Faq";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import ModalServices from "../components/ModalServices/ModalServices";
import ModalForm from "../components/ModalForm/ModalForm";
import ModalSuccess from "../components/ModalSuccess/ModalSuccess";
import { useState, useEffect } from "react";
import useWindowDimensions from "../services/useWindowDimensions";
import { useLocation } from "react-router-dom";

function MainPage() {
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

  const { width } = useWindowDimensions();
  const [promoWidth, setPromoWidth] = useState("58.5%");
  useEffect(() => {
    if (width < 700) setPromoWidth("70%");
    if (width < 501) setPromoWidth("90%");
  }, [width]);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
          title="Ваши юридические вопросы - наши решения"
          description="Эффективно, профессионально, надежно."
          background={BackgroundPromo}
          buttons={true}
          buttonTextOne={"Получить консультацию"}
          buttonTextTwo={"Хочу списать долг"}
          displayModalForm={displayModalForm}
        />
        <Partners />
        <Advantages />
        <ButtonBanner
          title="Начните жизнь с чистого листа!"
          description="Получите консультацию юриста и узнайте сроки и стоимость списания вашего долга уже сегодня"
          background={BackgroundBanner}
          buttonText="Получить консультацию"
          displayModalForm={displayModalForm}
          textWidth="54%"
        />
        <Stages />
        <DebtsBanner displayModalForm={displayModalForm} />
        <Rates displayModalForm={displayModalForm} />
        <NumbersFacts />
        <Faq />
        <Form />
      </main>
      <Footer displayModalForm={displayModalForm} />
    </>
  );
}

export default MainPage;
