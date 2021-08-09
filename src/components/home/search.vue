<template>
  <div>
    <div class="p-4 flex mt-10 justify-center">
      <input class="w-96 border rounded p-2 pl-5 ml-12"
             type="text"
             placeholder=" Bus Route" >
      <button class="bg-red-light hover:bg-red-lighter rounded text-white p-2 pl-4 pr-4" style="color: #42b983">
        <p class="font-sans text-xl">Search</p>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'search.vue',
  components: {
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>
  input {
    border: solid 2px #42b983;
  }
</style>
