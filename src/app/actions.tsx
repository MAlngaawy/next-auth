'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
const schema = z.object({
  title: z.string({ invalid_type_error: 'Invalid Title' }),
  description: z.string({ invalid_type_error: 'Invalid string' }),
  category: z.string({ invalid_type_error: 'Invalid String' }),
  price: z.number({ invalid_type_error: 'Invalid Number' }),
});

export const create = (formData: FormData) => {
  const validatedFields = schema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    price: formData.get('price'),
  });

  if (!validatedFields.success) {
    console.log('ERROR');
    // errors: validatedFields.error.flatten().fieldErrors,
  } else {
    const formDataObj: any = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify JSON content
      },
      body: JSON.stringify(formDataObj), // Convert formDataObj to JSON string
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('DATAAAA', data);
      })
      .catch((err) => {
        console.error('Error:', err); // Handle any errors
      });
    revalidatePath('/', 'layout');
  }
};
