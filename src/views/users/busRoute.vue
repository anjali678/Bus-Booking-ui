<template>

    <div class="mt-10 w-full mr-4">
      <div class="">
        <search-bar></search-bar>
        <results-table></results-table>
      </div>
    </div>

</template>

<script>
import search from '../../components/home/search'
import results from '../../components/home/results'

export default {
  name: "busRoute.vue",
  components: {
    'search-bar': search,
    'results-table': results
  }
}
</script>

<style scoped>

</style>
