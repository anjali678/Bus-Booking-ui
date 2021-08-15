<template>
  <div>
  <div class="w-full invisible lg:visible mb-16 bg-scroll">
    <div class="mt-10 justify-center">
      <h1 class="text-center">Rear seats</h1><br>
    <div class="flex  bg-green-300 mx-16 px-8">
      <div class="flex-1 bg-green-400 text-center mx-8 my-6">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-4 w-4" checked><span class="ml-2 text-green-800">1</span>
        </label>
      </div>
      <div class="flex-1 bg-green-400 text-center mx-8 my-6 ">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-4 w-4" checked><span class="ml-2 text-green-800">2</span>
        </label>
      </div>
      <div class="flex-1 bg-green-400 text-center mx-8 my-6">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-4 w-4" checked><span class="ml-2 text-green-800">3</span>
        </label>
      </div>
      <div class="flex-1 bg-green-400 text-center mx-8 my-6">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-4 w-4" checked><span class="ml-2 text-green-800">4</span>
        </label>
      </div>
      <div class="flex-1 bg-green-400 text-center mx-8 my-6">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-4 w-4" checked><span class="ml-2 text-green-800">5</span>
        </label>
      </div>
      <div class="flex-1 bg-green-400 text-center mx-8 my-6">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-4 w-4" checked><span class="ml-2 text-green-800">6</span>
        </label>
      </div>
    </div>
    </div>
    <div class="flex mt-10 justify-center">
      <div class="flex-col mr-32 pr-32 w-full">
      <h1 class="text-center">Left Side Seats {{n}}</h1><br>
      <div v-for="n in 8" v-bind:key="n" class="inline-grid grid-cols-3 gap-x-4 bg-green-300 mx-16 w-full">
        <div class="flex-1 bg-green-400 text-center mx-6 my-6">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-4 w-4" checked>
          </label>
          <br><span class="ml-2 text-green-800">L {{n}}-1</span>
        </div>
        <div class="flex-1 bg-green-400 text-center mx-8 my-6 ">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-4 w-4" checked>
          </label>
          <br><span class="ml-2 text-green-800">L {{n}}-2</span>
        </div>
        <div class="flex-1 bg-green-400 text-center mx-8 my-6">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-4 w-4" checked>
          </label>
          <br><span class="ml-2 text-green-800">L {{n}}-3</span>
          </div>
      </div>
      </div>
      <div class="flex flex-col justify-end w-full">
      <h1 class="text-center">Right Side Seats</h1><br>
      <div v-for="n in 8" v-bind:key="n" class="inline-grid grid-cols-2 gap-x-4  bg-green-300 w-10/12">
        <div class="flex-1 bg-green-400 text-center mx-12 my-6">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-4 w-4" checked>
          </label>
          <br><span class="ml-2 text-green-800">R {{n}}-4</span>
        </div>
        <div class="flex-1 bg-green-400 text-center mx-12 my-6">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-4 w-4" checked>
          </label>
          <br><span class="ml-2 text-green-800">R {{n}}-5</span>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div>
    <div class="flex justify-center mb-10">
      <button class="bg-transparent hover:bg-green-500 text-green-700 hover:text-white py-2 px-16 border-2 border-green-500 hover:border-transparent rounded w-1/4 font-bold text-left"
              v-on:click="toggleModal()">
        <arrow-right-circle-icon size="1.5x" class="absolute animate-ping ml-32"></arrow-right-circle-icon>Continue
      </button>
    </div>
  </div>
    <FormBook
        v-if="showModal"
        :showModel = "showModal"
        @toggleModal = "toggleModal"
    ></FormBook>
  </div>
</template>

<script>
import { ArrowRightCircleIcon } from 'vue-feather-icons'
import FormBook from './bookingForm.vue'

export default {
  name: "sheetBooking",
  components: {
    ArrowRightCircleIcon,
    FormBook
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    async toggleModal () {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style scoped>

</style>
