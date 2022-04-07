<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import getUser from '@/composables/GetUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase/config'
import NewChatForm from '@/components/NewChatForm'
import ChatWindow from '@/components/ChatWindow.vue'

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    // if the user value is ever null, redirect to welcome screen
    watch(user, () => {
      console.log("watch", user.value)
      if (!auth.currentUser) {
        router.push({ name: 'welcome' })
      }
    })

  }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>