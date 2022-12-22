import { useMutation } from '@apollo/client';
import CREATE_EVENT_MUTATION from '../../../../mutations/events/CreateNewEventMutation';

const useCreateEventMutation = (options = {}) => {
  const hook = useMutation(CREATE_EVENT_MUTATION, options);

  return hook;
};

export default useCreateEventMutation;
