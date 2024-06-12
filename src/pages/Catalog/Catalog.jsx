import { SearchBar } from '../../components/SearchBar/SearchBar';
import { List } from '../../components/List/List';

import { LoadMore } from '../../components/LoadMore/LoadMore';

export const Catalog = ({ openModal, cars }) => {
  return (
    <>
      <SearchBar />
      <List
        openModal={openModal}
        cars={cars}
      />
      {cars.length === 12 && <LoadMore />}
    </>
  );
};
