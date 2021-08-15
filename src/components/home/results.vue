<template>
  <div class="flex items-center justify-center">
    <!-- component -->
    <div class="container mr-12">
      <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 ml-8 mr-8">
        <thead class="w-0 text-black sm:visible invisible">
        <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">Date / Time</th>
          <th class="p-3 text-left">Route</th>
          <th class="p-3 text-left">Available Seats</th>
        </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none pl-1">
        <tr class="border-b-2 border-green-600  flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 hover:bg-gray-100 cursor-pointer">
          <td class="p-3">John Covv</td>
          <td class=" p-3 truncate">contato@johncovv.com</td>
          <td class="p-3 text-red-400 hover:text-red-600 hover:font-medium ">Delete</td>
        </tr>
        <tr class="border-b-2 border-green-600  flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 hover:bg-gray-100 cursor-pointer">
          <td class="p-3">John Covv</td>
          <td class=" p-3 truncate">contato@johncovv.com</td>
          <td class="p-3 text-red-400 hover:text-red-600 hover:font-medium ">Delete</td>
        </tr>
        <tr class="border-b-2 border-green-600  flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 hover:bg-gray-100 cursor-pointer">
          <td class="p-3">John Covv</td>
          <td class=" p-3 truncate">contato@johncovv.com</td>
          <td class="p-3 text-red-400 hover:text-red-600 hover:font-medium ">Delete</td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'results.vue'
}
</script>

<style scoped>
.container {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, .1);
}
</style>
