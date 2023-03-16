<script setup>
const props = defineProps({
    message: String,
})

</script>

 <template>
 <div>
  <span class="bg-rose-100 shadow-md rounded px-4 py-2 text-red-600">{{ message }}</span>
  </div>
</template>



