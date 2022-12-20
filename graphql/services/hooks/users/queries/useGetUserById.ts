import { useQuery } from '@apollo/client';
import GET_USER_BY_ID from '../../../../queries/users/GetUserById';

const useGetUserByIdQuery = (id: string) => {
  const query = useQuery(GET_USER_BY_ID, { variables: { id }, skip: !id });
  return { ...query, data: query.data?.getUserById };
};

export default useGetUserByIdQuery;
