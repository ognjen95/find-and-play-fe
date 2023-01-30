import { useMutation } from '@apollo/client';
import ACCEPT_EVENT_REQUEST from '../../../../mutations/events/AcceptEventRequest';

const useAcceptEventRequest = (options = {}) => {
  const hook = useMutation(ACCEPT_EVENT_REQUEST, options);

  return hook;
};

export default useAcceptEventRequest;
