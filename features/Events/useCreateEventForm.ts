import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILocation } from '../../components/location-search/LocationSearch';
import useCreateEventMutation from '../../graphql/services/hooks/events/mutations/useCreateEvent';
import { createEventValidation } from './createEventValidation';
import { toast } from 'react-toastify';
import useToggleDialog from '../../hooks/useToggleDialog';

export interface ICreateEventFormModel {
  name: string;
  description: string;
  sports: string[];
  startTime: Date | undefined;
  endTime: Date | undefined;
  location: ILocation;
}

const defaultValues: ICreateEventFormModel = {
  name: '',
  description: '',
  startTime: new Date(),
  endTime: new Date(),
  location: {
    city: '',
    state: '',
    lat: 0,
    lng: 0,
  },
  sports: [],
};

const useCreateEventForm = () => {
  const dialog = useToggleDialog();
  const [createEvent, { error, loading }] = useCreateEventMutation();

  const form = useForm<ICreateEventFormModel>({
    defaultValues,
    // TODO: Fix date validation
    resolver: yupResolver(createEventValidation),
    shouldUseNativeValidation: false,
  });

  const onSubmit = async ({
    name,
    description,
    startTime,
    endTime,
    location,
    sports,
  }: ICreateEventFormModel) => {
    const CreateEventInput = {
      name,
      description,
      startTime,
      endTime,
      location,
      sports,
    };

    const { data } = await createEvent({
      variables: {
        CreateEventInput,
      },
    });

    if (data) {
      toast.success('Event Created');
      dialog.handleClose();
      form.reset();
    }
  };

  return {
    onSubmit,
    form,
    error,
    loading,
    dialog,
  };
};

export default useCreateEventForm;
