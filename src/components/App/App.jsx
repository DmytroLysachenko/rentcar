import { useDispatch } from 'react-redux';
import { fetchPageThunk } from '../../redux/catalog/operations';
import { useEffect, useState } from 'react';
import { Layout } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Favorites } from '../../pages/Favorites/Favorites';
import { Catalog } from '../../pages/Catalog/Catalog';
import Modal from '../Modal/Modal';
import { ModalCar } from '../ModalCar/ModalCar';

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPageThunk(1));
  }, [dispatch]);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalCar closeModal={closeModal} />
        </Modal>
      )}
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/catalog"
            element={<Catalog openModal={openModal} />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
        </Routes>
      </Layout>
    </>
  );
};
