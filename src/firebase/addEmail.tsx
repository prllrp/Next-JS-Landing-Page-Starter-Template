import { collection, addDoc, getFirestore } from 'firebase/firestore';

import { app } from '../config';

// add a function that will verify and add an email to the database

export default async function addEmail(email: string) {
  const db = getFirestore(app);

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // verify that it is a valid email
  // add the email to the database

  if (!email.match(validRegex)) {
    alert('Please enter a valid email address');
  } else {
    try {
      const docRef = await addDoc(collection(db, 'emails'), {
        email,
      });
      console.log('Document written with ID: ', docRef);
      alert('Thank you for your interest! We will be in touch soon!');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}
