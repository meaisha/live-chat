<template>
  <nav v-if="user">
    <div>
      <p>hey there.. {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '@/composables/UseLogout'
import getUser from '@/composables/GetUser'

export default {
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      //if( !error.value )
        //console.log("user logged out")
    }

    return { handleClick, user }
  }
}
</script>

<style>

</style>