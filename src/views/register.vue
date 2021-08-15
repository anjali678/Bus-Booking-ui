<template>
  <div>
    <div class="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <div
          class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md border border-green-400">
        <div class="font-medium self-center text-xl sm:text-2xl uppercase text-green-800">Register</div>
        <div class="mt-10">
          <form action="#">
            <div class="flex -mx-3">
              <div class="w-1/2 px-3 mb-5">
                <label for="" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">First name:</label>
                <div class="relative ml-10 w-full">
                  <div class="inline-flex items-center justify-center absolute -left-10 top-0 h-full w-10 text-green-400">
                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input type="text"
                         class="w-full -ml-10 pl-10 pr-3 py-2 placeholder-gray-500 rounded-lg border border-green-400 outline-none focus:border-green-800"
                         placeholder="John">
                </div>
              </div>
              <div class="w-1/2 px-3 mb-5">
                <label for="" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Last name:</label>
                <div class="relative ml-10 w-full">
                  <div class="inline-flex items-center justify-center absolute -left-10 top-0 h-full w-10 text-green-400">
                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input type="text"
                         class="w-full -ml-10 pl-10 pr-3 py-2 placeholder-gray-500 rounded-lg border border-green-400 outline-none focus:border-green-800"
                         placeholder="Smith">
                </div>
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-green-400">
                  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                  </svg>
                </div>

                <input id="email" type="email" name="email"
                       class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-green-400 w-full py-2 focus:outline-none focus:border-green-800"
                       placeholder="E-Mail Address"/>
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-green-400">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </span>
                </div>

                <input id="password" type="password" name="password"
                       class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-green-400 w-full py-2 focus:outline-none focus:border-green-800"
                       placeholder="Password"/>
              </div>
            </div>
              <div class="flex flex-col mb-6">
                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Confirm Password:</label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-green-400">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </span>
                  </div>

                  <input id="confirm_password" type="password" name="password"
                         class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-green-400 w-full py-2 focus:outline-none focus:border-green-800"
                         placeholder="Confirm Password"/>
                </div>
            </div>

            <div class="flex w-full">
              <button type="submit"
                      class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-green-600 hover:bg-green-700 rounded py-2 w-full transition duration-150 ease-in">
                <span class="mr-2 uppercase">register now</span>

              </button>
            </div>
          </form>
        </div>
        <div class="flex justify-center items-center mt-6">
          <a href="#" target="_blank"
             class="inline-flex items-center font-bold  text-xs text-center">

            <span class="ml-2">Already have an account? <span class="text-green-500 hover:text-green-700">Sign in</span></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register.vue"
}
</script>

<style scoped>

</style>
