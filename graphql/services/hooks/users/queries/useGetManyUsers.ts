import { useQuery } from '@apollo/client';
import GET_MANY_USERS_QUERY from '../../../../queries/users/GetManyUsersQuery';

const useGetManyUsers = (options = {}) => {
  const { data, error, loading, ...rest } = useQuery(GET_MANY_USERS_QUERY, options);

  return {
    data: data?.getManyUsers,
    error,
    loading,
    ...rest,
  };
};

export default useGetManyUsers;
