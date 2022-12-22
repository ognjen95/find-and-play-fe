import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { registerValidation } from './registerValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import useRegisterUserMutation from '../../../graphql/services/hooks/users/mutations/useRegisterUser';
import { useRouter } from 'next/router';
import { ILocation } from '../../../components/location-search/LocationSearch';
import { toast } from 'react-toastify';

export interface IRegisterFormModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  sports: string[];
  location: ILocation;
}

const defaultValues: IRegisterFormModel = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  sports: [],
  location: {
    city: '',
    state: '',
    lat: 0,
    lng: 0,
  },
};

const useRegisterUserForm = () => {
  const { push } = useRouter();

  const [createUser, { data, error, loading }] = useRegisterUserMutation();

  const form = useForm<IRegisterFormModel>({
    defaultValues,
    resolver: yupResolver(registerValidation),
    shouldUseNativeValidation: false,
  });

  useMemo(() => {
    const user = data?.createUser;

    if (user?.id) {
      localStorage.setItem('user', JSON.stringify(user));
      push('/');
    }
  }, [data?.createUser, push]);

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password,
    sports,
    location,
  }: IRegisterFormModel) => {
    const doesPasswordMatch =
      form.watch('password')! === form.watch('confirmPassword');

    if (!doesPasswordMatch) {
      form.setError('confirmPassword', { message: 'Passwords do not match' });
      return;
    }

    const { data } = await createUser({
      variables: {
        CreateUserInput: {
          firstName,
          lastName,
          description: '',
          email,
          sports,
          password,
          location,
        },
      },
      onError: () => {
        return;
      },
    });

    if (data) {
      toast.success('User Registered');
      localStorage.setItem('user', JSON.stringify(data.createUser));
      form.reset();

      push('/');
    }
  };

  return {
    onSubmit,
    form,
    error,
    loading,
  };
};

export default useRegisterUserForm;
