

import { useSetting } from './useSetting';
import Spinner from '../../ui/Spinner';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Row from '../../ui/Row';
import { FormRow, Label } from '../cabins/CreateCabinForm';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      
      breakfastPrice,
    } = {},
    isLoading,
  } = useSetting();
  const { mutate: updateSetting, isLoading: isUpdating } = useUpdateSetting();

  // return <Spinner />;
  if (isLoading) return <Spinner />;

  function handleBlur(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow>
      <Label htmlFor="min-nights">Minimum nights/booking</Label>
        <Input
          type='number'
          defaultValue={minBookingLength}
          onBlur={(e) => handleBlur(e, 'minBookingLength')}
          disabled={isUpdating}
          id='min-nights'
        />
      </FormRow>
      <FormRow >
      <Label htmlFor="max-nights">Maximum nights/booking</Label>
        <Input
          type='number'
          defaultValue={maxBookingLength}
          onBlur={(e) => handleBlur(e, 'maxBookingLength')}
          disabled={isUpdating}
          id='max-nights'
        />
      </FormRow>
      <FormRow >
      <Label htmlFor="max-guests">Maximum guests/booking</Label>
        <Input
          type='number'
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleBlur(e, 'maxGuestsPerBooking')}
          disabled={isUpdating}
          id='max-guests'
        />
      </FormRow>
      <FormRow >
      <Label htmlFor="breakfast-price">Breakfast price</Label>
        <Input
          type='number'
          defaultValue={breakfastPrice}
          onBlur={(e) => handleBlur(e, 'breakfastPrice')}
          disabled={isUpdating}
          id='breakfast-price'
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
