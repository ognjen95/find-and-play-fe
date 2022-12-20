import { useQuery } from '@apollo/client';
import GET_USER_BY_EMAIL from '../../../../queries/users/GetUserByEmail';

const useGetUserByEmailQuery = (email: string) => {
  const query = useQuery(GET_USER_BY_EMAIL, { variables: { email } });
  return { ...query, data: query.data?.getUserByEmail };
};

export default useGetUserByEmailQuery;
