import fs from 'fs';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  firestoreDatabaseId: process.env.VITE_FIREBASE_FIRESTORE_DATABASE_ID
};

console.log('Syncing secrets to firebase-applet-config.json...');
console.log('Project ID detected:', !!firebaseConfig.projectId);

fs.writeFileSync('firebase-applet-config.json', JSON.stringify(firebaseConfig, null, 2));
console.log('Done.');
