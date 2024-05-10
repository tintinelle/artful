import Header from "../components/Header/Header";
import PagesNavigation from "../components/PagesNavigation/PagesNavigation";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import ModalServices from "../components/ModalServices/ModalServices";
import ModalForm from "../components/ModalForm/ModalForm";
import ModalSuccess from "../components/ModalSuccess/ModalSuccess";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SingleArticle from "../components/SingleArticle/SingleArticle";

function NewsArticle() {
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
        <PagesNavigation
          location={"Новости / Что такое упрощенное банкротство"}
          margin="124px"
        />
        <SingleArticle displayModalForm={displayModalForm} />
        <Form onClick={() => setDisplayModalSuccess(true)} />
      </main>
      <Footer displayModalForm={displayModalForm} />
    </>
  );
}

export default NewsArticle;
