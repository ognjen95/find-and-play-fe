import { useQuery } from '@apollo/client';
import GET_USER_EVENTS_QUERY from '../../../../queries/events/GetUserEventsQuery';

const useGetUserEventsQuery = (options = {}) => {
  const query = useQuery(GET_USER_EVENTS_QUERY, options);

  return query;
};

export default useGetUserEventsQuery;
