import { ListItem } from './CatalogItem';
import { Filter } from 'components/Filter/Filter';
import { CatalogList } from 'components/Catalog/Catalog.styled';
import { LoadMore } from 'components/Buttons/LoadMore/LoadMore';
export const Catalog = ({ advertsCars }) => {
  return (
    <>
      <Filter />
      <CatalogList>
        {advertsCars.map(item => {
          return <ListItem key={item.id} {...item} />;
        })}
      </CatalogList>
      <LoadMore />
    </>
  );
};
