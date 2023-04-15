import { collection, addDoc, getFirestore } from 'firebase/firestore';

import { app } from '../config';

// add a function that will verify and add an email to the database

export default async function addEmail(email: string) {
  const db = getFirestore(app);
  console.log('adding email: ', email, db);

  try {
    const docRef = await addDoc(collection(db, 'emails'), {
      email,
    });
    console.log('Document written with ID: ', docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
