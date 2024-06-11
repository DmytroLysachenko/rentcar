import { useEffect, useState } from 'react';
import { Layout } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Favorites } from '../../pages/Favorites/Favorites';
import { Catalog } from '../../pages/Catalog/Catalog';
import Modal from '../Modal/Modal';
import { ModalCar } from '../ModalCar/ModalCar';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/catalog/selectors';
import { fetchPageThunk } from '../../redux/catalog/operations';
import { mockAPI } from '../../helpers/mockAPI';

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);
  const cars = useSelector(selectCatalog);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const pageCheck = async (page) => {
    const { data } = await mockAPI.get('/adverts', {
      params: { p: page, l: 12 },
    });
    const nextPage = !(data.length > 0);
    setLastPage(nextPage);
  };

  useEffect(() => {
    dispatch(fetchPageThunk(currentPage));
    pageCheck(currentPage + 1);
  }, [currentPage, dispatch]);

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
                isLastPage={isLastPage}
                nextPage={nextPage}
                openModal={openModal}
                setLastPage={setLastPage}
              />
            }
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
