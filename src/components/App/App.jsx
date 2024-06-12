import { useEffect, useState } from 'react';
import { Layout } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Favorites } from '../../pages/Favorites/Favorites';
import { Catalog } from '../../pages/Catalog/Catalog';
import Modal from '../Modal/Modal';
import { ModalCar } from '../ModalCar/ModalCar';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredCars } from '../../redux/catalog/selectors';
import { fetchPageThunk } from '../../redux/catalog/operations';
import { NotFound } from '../../pages/NotFound/NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    dispatch(fetchPageThunk(1));
  }, []);

  const cars = useSelector(selectFilteredCars);

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
            element={
              <Catalog
                cars={cars}
                openModal={openModal}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites openModal={openModal} />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Layout>
    </>
  );
};
