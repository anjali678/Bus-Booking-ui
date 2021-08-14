<template>
  <div>
    <div>
<!--      <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">-->
<!--        Open large modal-->
<!--      </button>-->
      <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
          <!--content-->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!--header-->
            <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 class="text-3xl font-semibold">
                Book your seats
              </h3>
              <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
              </button>
            </div>
            <!--body-->
            <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full">

<!--              <div class="text-3xl mb-6 text-center ">-->
<!--                Ready to build your website?-->
<!--              </div>-->

              <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">

                <div class="col-span-2 lg:col-span-1">
                  <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Name"/>
                </div>

                <div class="col-span-2 lg:col-span-1">
                  <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Email Address"/>
                </div>

                <div class="col-span-2">
                  <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Message"></textarea>
                </div>

              </div>
            </div>
            <!--footer-->
            <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                      v-on:click="closeModel()">
                Close
              </button>
              <button class="hover:text-green-500 hover:bg-transparent border border-solid border-green-500 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                      >
                Save Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookingForm",
  data() {
    return {
    }
  },
  props: {
    showModal: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModel () {
      this.$emit('toggleModal')
    }
  }
}
</script>

<style scoped>

</style>
