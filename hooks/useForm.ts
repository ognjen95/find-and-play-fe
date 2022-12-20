import {
  DeepPartial,
  FieldValues,
  useForm as useReactHookForm,
  UseFormReturn,
} from 'react-hook-form';
import { SchemaOf } from 'yup';

type UseFormOptions<TFormValues extends FieldValues = FieldValues> = {
  defaultValues?: DeepPartial<TFormValues>;
  formValidation?: SchemaOf<TFormValues>;
};

const useForm = <TFormValues extends FieldValues = FieldValues>({
  defaultValues,
  formValidation,
}: UseFormOptions<TFormValues> = {}): UseFormReturn<TFormValues> => {
  const form = useReactHookForm<TFormValues>({
    mode: 'all',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    defaultValues,
    // resolver: formValidation ? {} : undefined,
  });

  return form;
};

export default useForm;
