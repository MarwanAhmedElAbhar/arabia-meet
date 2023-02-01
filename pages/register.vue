<script setup>
definePageMeta({
  layout: "authentication",
});
</script>

<template>
  <div class="h-full">
    <div class="h-1/2 flex flex-col justify-center items-center">
      <p class="text-2xl font-semibold">Sign up</p>
      <div class="mt-8">
        <div class="flex items-center px-5 py-2 bg-gray-100 cursor-pointer shadow-md rounded-[8px]"><img src="~/assets/google.svg" alt="" />
        <p class="text-black capitalize ml-3">continue with google</p></div>
        <div class="flex items-center px-5 py-2 bg-blue-950 cursor-pointer mt-2 shadow-md rounded-[8px]"><img src="~/assets/facebook.svg" alt="" />
        <p class="text-white capitalize ml-3">continue with facebook</p></div>
        <div class="flex items-center px-5 py-2 cursor-pointer bg-black mt-2 shadow-md rounded-[8px]"><img src="~/assets/apple.svg" alt="" />
        <p class="text-white capitalize ml-3">continue with apple</p></div>
      </div>
    </div>
    <div class="relative w-100">
      <div class="h-px bg-gray-400 w-full"></div>
      <p class="absolute px-3 left-[47%] -top-3 bg-white text-gray-400">or</p>
    </div>
    <div class="px-4 py-5 sm:p-6 mt-5 text-center">
      <form action="">
          <div class="">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email Address</label
            >
            <input
              type="text"
              name="email"
              id="email"
              autocomplete="email"
              class="
                mt-2
                shadow-sm
                w-1/2
                rounded
                border-gray-500 border border-solid
                focus:border-cyan-200
                sm:text-sm
                p-2
              "
            />
          </div>

          <div class="mt-5">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              class="
                mt-2
                shadow-sm
                w-1/2
                rounded
                border-gray-500 border border-solid
                focus:border-cyan-700
                sm:text-sm
                p-2
              "
            />
          </div>
          <div class="flex justify-center mt-6">
            <p class="bg-cyan-700 px-6 py-2 cursor-pointer font-bold text-white rounded-full">Register</p>
          </div>
      </form>
      <div class="flex justify-center mt-5">
        <p class="text-gray-500">Already have an account?</p>
       <NuxtLink v-slot="{navigate}" to="/"> <p @click="navigate" class="text-cyan-700 font-bold ml-2 cursor-pointer">Sign in</p></NuxtLink>
      </div>
  </div>
  </div>
</template>



