<template>
  <div class="grid md:grid-cols-2 grid-cols-1 h-screen">
    <div
      class="hidden md:flex bg-cover bg-no-repeat justify-center items-center background-image bg-left"
    >
      <img class="w-8/12" src="~/assets/arabiameet-logo.png" alt="" />
    </div>
    <div class="bg-white h-full overflow-auto p-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.background-image::after {
  content: "";
  background-image: url("~/assets/group-talking.jpg");
  background-size: cover;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>