<script setup>
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref } from "vue";
definePageMeta({
  layout: "authentication",
});

const email = ref("");
const password = ref("");


const { $auth } = useNuxtApp();
const { $db } = useNuxtApp();

const login = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      $auth,
      email.value,
      password.value
    );
console.log(user)
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <div class="flex flex-col justify-center items-center mt-9">
      <img
        class="md:hidden mb-5 w-[120px]"
        src="~/assets/arabiameet-logo.png"
        alt=""
      />
      <p class="text-2xl font-semibold">Sign in</p>
      <div class="mt-[50px]">
        <div
          class="flex items-center px-5 py-2 bg-gray-100 cursor-pointer shadow-md rounded-[8px]"
        >
          <img src="~/assets/google.svg" alt="" />
          <p class="text-black capitalize ml-3">continue with google</p>
        </div>
        <div
          class="flex items-center px-5 py-2 bg-blue-950 cursor-pointer mt-2 shadow-md rounded-[8px]"
        >
          <img src="~/assets/facebook.svg" alt="" />
          <p class="text-white capitalize ml-3">continue with facebook</p>
        </div>
        <div
          class="flex items-center px-5 py-2 cursor-pointer bg-black mt-2 shadow-md rounded-[8px]"
        >
          <img src="~/assets/apple.svg" alt="" />
          <p class="text-white capitalize ml-3">continue with apple</p>
        </div>
      </div>
    </div>
    <div class="relative w-100 mt-10">
      <div class="h-px bg-gray-400 w-full"></div>
      <p class="absolute px-3 left-[47%] -top-3 bg-white text-gray-400">or</p>
    </div>
    <div class="px-4 py-5 sm:p-6 mt-8 text-center">
      <form action="">
        <div class="">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email Address</label
          >
          <input
          v-model="email"
            type="text"
            name="email"
            id="email"
            autocomplete="email"
            class="mt-2 shadow-sm w-1/2 rounded border-gray-500 border border-solid focus:border-cyan-200 sm:text-sm p-2"
          />
        </div>

        <div class="mt-5">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
          v-model="password"
            type="password"
            name="password"
            id="password"
            class="mt-2 shadow-sm w-1/2 rounded border-gray-500 border border-solid focus:border-cyan-700 sm:text-sm p-2"
          />
        </div>
        <div @click="login" class="flex justify-center mt-6">
          <p
            class="bg-cyan-700 px-6 py-2 cursor-pointer font-bold text-white rounded-full"
          >
            Login
          </p>
        </div>
      </form>
      <div class="flex justify-center mt-5">
        <p class="text-gray-500">Don't have an account?</p>
        <NuxtLink v-slot="{ navigate }" to="/register">
          <p
            @click="navigate"
            class="text-cyan-700 font-bold ml-2 cursor-pointer"
          >
            Sign up
          </p></NuxtLink
        >
      </div>
    </div>
  </div>
</template>



