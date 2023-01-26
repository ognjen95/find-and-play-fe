import { useMutation } from '@apollo/client';
import CREATE_JOIN_EVENT_MUTATION from '../../../../mutations/events/CreateJoinEventMutation';

const useJoinEventMutation = (options = {}) => {
  const hook = useMutation(CREATE_JOIN_EVENT_MUTATION, options);

  return hook;
};

export default useJoinEventMutation;
