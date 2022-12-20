import { useQuery } from '@apollo/client';
import { IBaseApolloReturn } from '../../../../../common/types';
import { IUser } from '../../../../../common/user.types';
import GET_MANY_USERS_QUERY from '../../../../queries/users/GetManyUsers';

const useGetManyUsers = (): IBaseApolloReturn<IUser[]> => {
  const { data, error, loading } = useQuery(GET_MANY_USERS_QUERY);

  return {
    data: data?.getManyUsers,
    error,
    loading,
  };
};

export default useGetManyUsers;
