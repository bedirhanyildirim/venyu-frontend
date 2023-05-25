import { getDocs, query, where } from "firebase/firestore"
import { sourcesCollection } from "../firebase/firebase.config"

const getSharedSources = async () => {
  const sources = []
  const q = query(sourcesCollection, where('sharedUsage', '==', true))
  const docSnap = await getDocs(q)
  docSnap.forEach((doc) => {
    sources.push(doc.data())
  })
  return sources
}

const getMySources = async (uid) => {
  const mySources = []
  const q = query(sourcesCollection, where('uid', '==', uid))
  const snap = await getDocs(q)
  snap.forEach((doc) => {
    mySources.push(doc.data())
  })
  return mySources
}

export {
  getMySources,
  getSharedSources
}