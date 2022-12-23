import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import useDebounce from '../../hooks/useDebounce';
import SearchWithFilterForm from './SearchAndFilterForm';

export interface ISearchAndFilterModel {
  search: string;
}

interface IProps {
  placeholder: string;
  fetchData: (data: ISearchAndFilterModel) => void;
}

const SearchAndFilterFeature: FC<IProps> = ({ placeholder, fetchData }) => {
  const form = useForm<ISearchAndFilterModel>({
    defaultValues: {
      search: '',
    },
  });
  const search = form.watch('search');
  const onSubmit = (data: ISearchAndFilterModel) => {
    fetchData(data);
  };

  useDebounce(() => {
    fetchData({ search });
  }, [search]);

  return (
    <SearchWithFilterForm
      form={form}
      placeholder={placeholder}
      onSubmit={onSubmit}
    />
  );
};

export default SearchAndFilterFeature;
