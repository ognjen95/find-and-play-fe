import { ReactElement } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

type FormProps<TFormValues extends FieldValues = FieldValues> = {
  formName?: string;
  form: UseFormReturn<TFormValues>;
  onSubmit?: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => ReactElement;
};

const Form = <TFormValues extends FieldValues = FieldValues>({
  formName,
  form,
  onSubmit = () => {},
  children,
}: FormProps<TFormValues>) => {
  return (
    <form id={formName} onSubmit={form.handleSubmit(onSubmit)}>
      {children(form)}
    </form>
  );
};

export default Form;
