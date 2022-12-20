import { useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { registerValidation } from './registerValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import useRegisterUserMutation from '../../../graphql/services/hooks/users/mutations/useRegisterUser';
import { useRouter } from 'next/router';
import { ILocation } from '../../../components/location-search/LocationSearch';

export interface IRegisterFormModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  sports: string[];
}

const defaultValues: IRegisterFormModel = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  sports: [],
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

  const location: any = useRef({});

  const handleLocation = (data: ILocation) => (location.current = data);

  const onSubmit = ({
    firstName,
    lastName,
    email,
    password,
    sports,
  }: IRegisterFormModel) => {
    const doesPasswordMatch =
      form.watch('password')! === form.watch('confirmPassword');
    const isLocationSelected = location?.current?.lng;

    if (!doesPasswordMatch) {
      form.setError('confirmPassword', { message: 'Passwords do not match' });
      return;
    }

    if (!isLocationSelected) {
      form.setError('confirmPassword', { message: 'Pick Location' });
      return;
    }
    console.log('create');
    createUser({
      variables: {
        CreateUserInput: {
          firstName,
          lastName,
          description: '',
          email,
          sports,
          password,
          location: location.current,
        },
      },
      onError: () => {
        return;
      },
    });
  };

  return {
    onSubmit,
    handleLocation,
    form,
    error,
    loading,
  };
};

export default useRegisterUserForm;
