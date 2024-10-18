'use server';
import { revalidateTag } from 'next/cache';

export const create = (formData: FormData) => {
  // Convert FormData to JSON object
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

  revalidateTag('/products');
};
