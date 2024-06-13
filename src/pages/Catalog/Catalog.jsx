import { SearchBar } from '../../components/SearchBar/SearchBar';
import { List } from '../../components/List/List';

import { LoadMore } from '../../components/LoadMore/LoadMore';
import { useDispatch, useSelector } from 'react-redux';
import { selectLastPage, selectLoading } from '../../redux/catalog/selectors';
import { Loader } from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchAllThunk, fetchPageThunk } from '../../redux/catalog/operations';
import { selectFilter } from '../../redux/filter/selectors';
import { motion } from 'framer-motion';

const Catalog = ({ openModal, cars }) => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const lastPage = useSelector(selectLastPage);
  const filterValues = useSelector(selectFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (!lastPage && !Object.values(filterValues).length) {
      dispatch(fetchPageThunk(currentPage));
    }
  }, [currentPage, dispatch, lastPage]);

  useEffect(() => {
    if (Object.values(filterValues).length > 0) {
      dispatch(fetchAllThunk());
    }
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      {loading ? (
        <>
          <List
            openModal={openModal}
            cars={cars}
          />
          <Loader />
        </>
      ) : (
        <List
          openModal={openModal}
          cars={cars}
        />
      )}
      {!loading && !lastPage && <LoadMore nextPage={nextPage} />}
    </>
  );
};

export default Catalog;
