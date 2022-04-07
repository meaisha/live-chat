import { signOut } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '../firebase/config'
import getUser from '@/composables/GetUser'

const error = ref(null)

const logout = () => {
  error.value = null
  const { user } = getUser()
  // try {
  //   const res = await signOut(auth)
  //   console.log(res)
  // } catch (err) {
  //   console.log(err.message)
  //   error.value = err.message
  // }

  signOut(auth).then(() => {
    console.log('signed out successfully')
    user.value = null
  }).catch((error) => {
    // An error happened.
    console.log(err.message)
    error.value = err.message
  });
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout