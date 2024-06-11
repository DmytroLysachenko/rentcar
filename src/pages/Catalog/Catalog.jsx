import { SearchBar } from '../../components/SearchBar/SearchBar';
import { List } from '../../components/List/List';

import { LoadMore } from '../../components/LoadMore/LoadMore';

export const Catalog = ({
  openModal,
  nextPage,
  cars,
  isLastPage,
  setLastPage,
}) => {
  return (
    <>
      <SearchBar setLastPage={setLastPage} />
      <List
        openModal={openModal}
        cars={cars}
      />
      {!isLastPage && <LoadMore nextPage={nextPage} />}
    </>
  );
};
