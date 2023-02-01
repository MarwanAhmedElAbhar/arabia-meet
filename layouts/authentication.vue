<template>
  <div class="flex min-h-screen">
    <div
      class="
        w-1/2
        bg-cover
        bg-no-repeat
        justify-center
        items-center
        background-image
        hidden
        bg-left
        md:flex
      "
    >
      <img class="w-8/12" src="~/assets/arabiameet-logo.png" alt="" />
    </div>
    <div class="bg-white w-full md:w-1/2">
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