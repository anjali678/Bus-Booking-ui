<template>
  <div class="md:flex md:flex-row md:min-h-screen w-full">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '../../components/users/navbar';

export default {
  name: "main.vue",
  components: {
    'navbar': navbar,
  }
}
</script>

<style scoped>

</style>
