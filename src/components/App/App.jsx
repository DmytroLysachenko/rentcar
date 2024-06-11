import { useDispatch } from 'react-redux';
import { fetchPageThunk } from '../../redux/catalog/operations';
import { useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Favorites } from '../../pages/Favorites/Favorites';
import { Catalog } from '../../pages/Catalog/Catalog';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPageThunk(1));
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/catalog"
          element={<Catalog />}
        />
        <Route
          path="/favorites"
          element={<Favorites />}
        />
      </Routes>
    </Layout>
  );
};
