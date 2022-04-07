  import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"


const getCollection = (collect) => {
  const documents = ref(null)
  const error = ref(null)
  const q = query(collection(db, collect), orderBy("createdAt"));
  try {
  const realtimeData = onSnapshot(q, (querySnapshot) => {
    let results = []
    querySnapshot.forEach((doc) => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
    error.value = null
  })
  } catch(err) {
    console.log(err.message)
    documents.value = null
    error.value = "could not fetch data"
  }

  return { error, documents }
}

export default getCollection