import React, { FC } from 'react';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography/Typography';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { SPORTS } from '../../../common/constants';
import Form from '../../../components/form/Form';
import LocationSearch, {
  ILocation,
} from '../../../components/location-search/LocationSearch';
import Button from '../../../ui-components/buttons/Button';
import ControlledInput from '../../../ui-components/inputs/Input';
import MultiSelect from '../../../ui-components/inputs/MultiSelect';
import { IRegisterFormModel } from './useRegisterUserForm';

interface IFields {
  name:
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'confirmPassword'
    | 'sports';
  label: string;
  type?: string;
  component?: JSX.Element;
  errorMsg?: string;
}
[];

const FormWrapper = styled('div')`
  border-radius: 20px;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  flex-direction: column;

  button {
    margin: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
  }
`;

interface IProps {
  form: UseFormReturn<IRegisterFormModel>;
  error: any;
  loading: boolean;
  onSubmit: SubmitHandler<IRegisterFormModel>;
  handleLocation: (location: ILocation) => void;
}

const RegisterUserForm: FC<IProps> = ({
  form,
  onSubmit,
  error,
  loading,
  handleLocation,
}) => {
  const fields: IFields[] = [
    {
      name: 'firstName',
      label: 'First Name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
    },
    {
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
    },
    {
      name: 'sports',
      label: 'Sports',
      component: (
        <div style={{ marginTop: '1rem' }}>
          <MultiSelect
            key="sports"
            name="sports"
            label="Sport Interests"
            control={form.control}
            data={SPORTS}
            errorMsg={form.formState.errors.sports?.message}
          />
        </div>
      ),
    },
  ];

  return (
    <Form<IRegisterFormModel> form={form} onSubmit={onSubmit}>
      {({ control, formState: { errors } }) => (
        <FormWrapper>
          <Typography variant="h3">Register</Typography>

          {fields.map(({ name, label, component, type }) => {
            return (
              <>
                {component ? (
                  component
                ) : (
                  <ControlledInput
                    key={name}
                    name={name}
                    label={label}
                    required={true}
                    control={control}
                    type={type}
                    errorMsg={errors[name]?.message}
                  />
                )}
              </>
            );
          })}

          <LocationSearch getLocation={handleLocation} />

          <FormHelperText error>{error?.message}</FormHelperText>

          <Button disabled={loading} type="submit">
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </FormWrapper>
      )}
    </Form>
  );
};

export default RegisterUserForm;
