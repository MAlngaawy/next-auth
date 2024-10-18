import { Button, NumberInput, TextInput } from '@mantine/core';
import { create } from '../actions';
import { Notifications } from '@mantine/notifications';

const AddProductsForm = () => {
  return (
    <div className="">
      <Notifications />
      <form className="grid grid-cols-2 gap-2" action={create}>
        <TextInput name="title" placeholder="Title" />
        <TextInput name="description" placeholder="Description" />
        <TextInput name="category" placeholder="Category" />
        <NumberInput name="price" placeholder="Price" />
        <div className="col-span-2">
          <Button type="submit" className="!w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductsForm;
