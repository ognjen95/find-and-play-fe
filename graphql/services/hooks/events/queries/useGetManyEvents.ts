import { useQuery } from '@apollo/client';
import GET_MANY_EVENTS_QUERY from '../../../../queries/events/GetManyEventsQuery';

const useGetManyEventsQuery = (options = {}) => {
  const { data, error, loading, ...rest } = useQuery(GET_MANY_EVENTS_QUERY, options);

  return {
    data: data?.getManyEvents,
    error,
    loading,
    ...rest,
  };
};

export default useGetManyEventsQuery;
