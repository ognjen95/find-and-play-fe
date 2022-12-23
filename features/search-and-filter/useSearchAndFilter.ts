import useDebounce from '../../hooks/useDebounce';
import { useForm } from 'react-hook-form';
import { AsyncHook } from 'async_hooks';

export interface ISearchAndFilterModel {
  search: string;
}

type fetchDataType = (data: ISearchAndFilterModel) => void;

const useSearchAndFilter = (fetchData: fetchDataType) => {
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

  return {
    form,
    onSubmit,
  };
};

export default useSearchAndFilter;
