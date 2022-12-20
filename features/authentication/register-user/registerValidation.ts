import * as yup from 'yup';

export const registerValidation = yup.object().shape({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('This is not valid email')
    .required('This field is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('This field is required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('This field is required'),
  sports: yup.array().of(yup.string()).min(1, 'Must pick at least 1 sport'),
});
