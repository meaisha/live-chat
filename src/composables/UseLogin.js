import { ref } from 'vue'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword, updateProfile  } from "firebase/auth";

const error = ref(null)

const login = async (email, password) => {
  error.value = null
  try {
    const res = await signInWithEmailAndPassword( auth, email, password )
    error.value = null
    console.log(res)
    return res
  } catch(err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin