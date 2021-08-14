<template>
  <div>
    <nav-bar></nav-bar>
        <div class="object-left"></div>
        <div class="">
          <div class="lg:w-1/2 object-right">
          <search-bar></search-bar>
          <results-table></results-table>
        </div>
        </div>
  </div>
</template>

<script>
import navbar from '../components/home/navbar'
import search from '../components/home/search'
import results from '../components/home/results'

export default {
  name: 'home.vue',
  components: {
    'nav-bar': navbar,
    'search-bar': search,
    'results-table': results
  }
}
</script>

<style>
  @media (min-width: 1020px) {
    body {
      background-image: url('../../src/assets/home.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
  }

</style>

