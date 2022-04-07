import { ref } from 'vue'
import { auth, db } from '../firebase/config'
import { collection, query, limit, getDocs, addDoc } from "firebase/firestore"


const useCollection = (collect) => {
  const error = ref(null)

  const addDocument = async (doc) => {
    error.value = null

    try {
      await addDoc(collection(db, collect), doc);
    }
    catch(err) {
      console.log(err)
      error.value="could not send the message"
    }
  }
  return { error, addDocument }
}

export default useCollection