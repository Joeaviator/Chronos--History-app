import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { initializeFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, query, where, onSnapshot, getDocs, getDocFromServer, increment } from 'firebase/firestore';
import firebaseConfigData from '../firebase-applet-config.json';

// Use environment variables if available, otherwise fallback to config file
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfigData.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || firebaseConfigData.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || firebaseConfigData.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || firebaseConfigData.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || firebaseConfigData.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || firebaseConfigData.appId,
  firestoreDatabaseId: import.meta.env.VITE_FIREBASE_FIRESTORE_DATABASE_ID || (firebaseConfigData as any).firestoreDatabaseId
};

// Debug environment variable detection - This will show in the browser console
console.log('Firebase Config Debug:', {
  apiKeyDetected: !!import.meta.env.VITE_FIREBASE_API_KEY && !import.meta.env.VITE_FIREBASE_API_KEY.includes('REPLACE_WITH'),
  apiKeyLength: import.meta.env.VITE_FIREBASE_API_KEY?.length || 0,
  isPlaceholder: !!firebaseConfig.apiKey?.includes('REPLACE_WITH'),
  isDevelopment: import.meta.env.DEV
});

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Check if we are using placeholders
if (firebaseConfig.apiKey?.includes('REPLACE_WITH')) {
  console.warn('Firebase is using placeholder configuration. Please set your VITE_FIREBASE_* secrets in the AI Studio Settings panel.');
}

// Initialize Firestore with specific database ID and settings
const databaseId = firebaseConfig.firestoreDatabaseId;
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
}, databaseId && databaseId !== '(default)' ? databaseId : undefined);

export const googleProvider = new GoogleAuthProvider();

// Error Handling for Firestore
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test Connection
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firebase connection successful.");
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('the client is offline')) {
        console.error("Firebase Connection Error: The client is offline. This usually means the Project ID or API Key in firebase-applet-config.json is incorrect, or Firestore has not been enabled in the Firebase Console.");
      } else {
        console.error("Firebase Connection Error:", error.message);
      }
    }
  }
}
testConnection();

export { doc, getDoc, setDoc, updateDoc, deleteDoc, collection, query, where, onSnapshot, getDocs, signInWithPopup, signOut, onAuthStateChanged, increment, firebaseConfig };
export type { User };
