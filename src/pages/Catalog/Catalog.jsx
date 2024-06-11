import { SearchBar } from '../../components/SearchBar/SearchBar';
import { List } from '../../components/List/List';
import { useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/catalog/selectors';

import { LoadMore } from '../../components/LoadMore/LoadMore';
export const Catalog = ({ openModal }) => {
  const cars = useSelector(selectCatalog);
  return (
    <>
      <SearchBar />
      <List
        openModal={openModal}
        cars={cars}
      />
      <LoadMore />
    </>
  );
};
