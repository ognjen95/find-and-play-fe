import React, { FC } from 'react';
import SearchWithFilterForm from './SearchAndFilterForm';
import useSearchAndFilter, {
  ISearchAndFilterModel,
} from './useSearchAndFilter';

interface IProps {
  placeholder: string;
  fetchData: (data: ISearchAndFilterModel) => void;
}

const SearchAndFilterFeature: FC<IProps> = ({ placeholder, fetchData }) => {
  const { form, onSubmit } = useSearchAndFilter(fetchData);

  return (
    <SearchWithFilterForm
      form={form}
      placeholder={placeholder}
      onSubmit={onSubmit}
    />
  );
};

export default SearchAndFilterFeature;
