import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const activitiesCollection = collection(db, 'activities')
export const companiesCollection = collection(db, 'companies')
export const sourcesCollection = collection(db, 'sources')
export const auth = getAuth(app)
export default app