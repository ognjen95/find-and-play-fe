import { FC } from 'react';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import Form from '../../components/form/Form';
import LocationSearch from '../../components/location-search/LocationSearch';
import Button from '../../ui-components/buttons/Button';
import ControlledInput from '../../ui-components/inputs/Input';
import { ICreateEventFormModel } from './useCreateEventForm';
import MultiSelect from '../../ui-components/inputs/MultiSelect';
import { SPORTS } from '../../common/constants';
import DateAndTimePicker from '../../ui-components/date-time-picker/DateTimePicker';

interface IFields {
  name:
    | 'name'
    | 'description'
    | 'sports'
    | 'startTime'
    | 'endTime'
    | 'location';
  label: string;
  type?: string;
  component?: JSX.Element;
  errorMsg?: string;
}

interface IProps {
  form: UseFormReturn<ICreateEventFormModel>;
  error: any;
  loading: boolean;
  onSubmit: SubmitHandler<ICreateEventFormModel>;
}

const CreateEventForm: FC<IProps> = ({ form, onSubmit, error, loading }) => {
  const fields: IFields[] = [
    {
      name: 'name',
      label: 'Event Name',
    },
    {
      name: 'description',
      label: 'Event Description',
    },
    {
      name: 'sports',
      label: 'Sports',
      component: (
        <div style={{ marginTop: '1rem' }}>
          <MultiSelect
            key="sports"
            name="sports"
            label="Sports"
            control={form.control}
            data={SPORTS}
            errorMsg={form.formState.errors.sports?.message}
          />
        </div>
      ),
    },
    {
      name: 'startTime',
      label: 'Start Time',
      component: (
        <>
          <DateAndTimePicker
            name="startTime"
            label="Start Time"
            control={form.control}
            errorMsg={form.formState?.errors?.startTime?.message}
          />
        </>
      ),
    },
    {
      name: 'endTime',
      label: 'End Time',
      component: (
        <>
          <DateAndTimePicker
            name="endTime"
            label="End Time"
            control={form.control}
            errorMsg={form.formState?.errors?.endTime?.message}
          />
        </>
      ),
    },
    {
      name: 'location',
      label: 'Event Location',
      component: (
        <>
          <LocationSearch
            control={form.control}
            name="location"
            getLocation={(data) => form.setValue('location', data)}
            type="text"
            fullWidth
            errorMsg={form.formState?.errors?.location?.city?.message}
          />
        </>
      ),
    },
  ];

  return (
    <Form<ICreateEventFormModel> form={form} onSubmit={onSubmit}>
      {({ control, formState: { errors } }) => (
        <div style={{ padding: '1rem' }}>
          {fields.map(({ name, label, component, type }) => {
            return (
              <span key={name}>
                {component ? (
                  component
                ) : (
                  <ControlledInput
                    sx={{ my: '.5rem' }}
                    fullWidth
                    key={name}
                    name={name}
                    label={label}
                    required={true}
                    control={control}
                    type={type}
                    errorMsg={errors[name]?.message}
                  />
                )}
              </span>
            );
          })}

          <FormHelperText sx={{ my: '.5rem' }} error>
            {error?.message}
          </FormHelperText>

          <Button
            disabled={loading}
            type="submit"
            sx={{ my: '1rem', float: 'right' }}
          >
            {loading ? 'Crating...' : 'Create'}
          </Button>
        </div>
      )}
    </Form>
  );
};
export default CreateEventForm;
