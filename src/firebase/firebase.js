import * as firebase from 'firebase';

// Required to connect with Firebase:
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// At this point we have a valid connection to firebase:
firebase.initializeApp(config);

// Dumping dummy data into Firebase to verify if connection was successful:
const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref('expenses')
// //   .once('value')
// //   .then(snapshot => {
// //     const expenses = [];

// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', snapshot => {
// //   const expenses = [];

// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });
// //   console.log(expenses);
// // });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'due end of month',
//   amount: 45000,
//   createdAt: 10003400,
// });

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python',
// // });

// // const firebaseNotes = {
// //   notes: {
// //     kscbdks: {
// //       title: 'First note!',
// //       body: 'This is my note',
// //     },
// //     dcbdkjbcdbckj: {
// //       title: 'Another note!',
// //       body: 'This is my note',
// //     },
// //   },
// // };

// // const notes = [
// //   {
// //     id: '12',
// //     title: 'First note!',
// //     body: 'This is my note',
// //   },
// //   {
// //     id: 'kucwqrbiq3',
// //     title: 'Another note!',
// //     body: 'This is my note',
// //   },
// // ];

// // database.ref('notes').set(notes);

// // fetching data from firebase database

// // using on: this means to set a subscription
// // database.ref().on(
// //   'value',
// //   snapshot => {
// //     const val = snapshot.val();
// //     console.log(
// //       `${val.name} is a ${val.job.title} and works at ${val.job.company}`,
// //     );
// //   },
// //   e => {
// //     console.log('Error with data fetching', e);
// //   },
// // );

// // Using once:
// // database
// //   .ref()
// //   .once('value')
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log('Data: ', val);
// //   })
// //   .catch(e => {
// //     console.log('Error fetching data', e);
// //   });

// // .set() returns a promise
// // database
// //   .ref()
// //   .set({
// //     name: 'Cesar Jimenez',
// //     age: 42,
// //     stressLevel: 6,
// //     job: {
// //       title: 'Software Developer',
// //       company: 'Google',
// //     },
// //     location: {
// //       city: 'Mexico City',
// //       country: 'Mexico',
// //     },
// //   })
// //   .then(() => {
// //     console.log('Data is saved!');
// //   })
// //   .catch(error => {
// //     console.log('error: ', error);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seatle',
// // });

// // const singleRef = database.ref();

// // singleRef
// //   .remove()
// //   .then(() => {
// //     console.log('All data was removed');
// //   })
// //   .catch(e => {
// //     console.log('Couldnt delete all data. Reason: ', e);
// //   });
