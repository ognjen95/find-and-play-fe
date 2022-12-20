import RegisterUserForm from './RegisterUserForm';
import useRegisterUserForm from './useRegisterUserForm';

const RegisterUserFeature = () => {
  const { onSubmit, form, error, loading, handleLocation } = useRegisterUserForm();

  return (
    <RegisterUserForm
      form={form}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      handleLocation={handleLocation}
    />
  );
};

export default RegisterUserFeature;
