<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
//timestamp
import { serverTimestamp } from "firebase/firestore";
import getUser from '@/composables/GetUser'
import useCollection from '@/composables/UseCollection'

export default {
  setup()
  {
    const message = ref('')
    const { user } = getUser()
    const { error, addDocument } = useCollection('messages')

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: serverTimestamp()
      }
      await addDocument(chat)
      if(!error.value) {
        message.value = ''
      }
    }

    return { message, handleSubmit, error }
  }
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>