import * as yup from 'yup';
import parse from 'date-fns/parse';

export const createEventValidation = yup.object().shape({
  name: yup.string().required('This field is required'),
  description: yup.string().required('This field is required'),
  location: yup
    .object()
    .required()
    .shape({
      city: yup.string().required('Location is required field'),
      state: yup.string().required(),
      lat: yup.number().required(),
      lng: yup.number().required(),
    }),
  startTime: yup
    .date()
    .typeError('Please Enter valid date')
    .required('This field is required'),
  endTime: yup
    .date()
    .typeError('Please Enter valid date')
    .required('This field is required'),
  sports: yup.array().of(yup.string()).min(1, 'Must pick at least 1 sport'),
});
