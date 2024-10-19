import { Button, NumberInput, TextInput } from '@mantine/core';
import { create } from '../actions';
import { Notifications } from '@mantine/notifications';

const AddProductsForm = () => {
  return (
    <div className="p-10 border-2 border-black rounded-lg">
      <Notifications />
      <h2 className="my-2 text-xl font-medium">Add Product form</h2>
      <form className="grid grid-cols-2 gap-2" action={create}>
        <TextInput name="title" placeholder="Title" />
        <TextInput name="description" placeholder="Description" />
        <TextInput name="category" placeholder="Category" />
        <NumberInput name="price" placeholder="Price" />
        <div className="col-span-2">
          <Button type="submit" className="my-2">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductsForm;
