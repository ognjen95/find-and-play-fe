import { useMutation } from '@apollo/client';
import CREATE_USER_MUTATION from '../../../../mutations/users/RegisterUserMutation';

const useRegisterUserMutation = () => {
  const mutation = useMutation(CREATE_USER_MUTATION);
  return mutation;
};

export default useRegisterUserMutation;
