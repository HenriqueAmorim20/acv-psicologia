<script setup lang="ts">
import { onMounted } from "vue";
const route = useRoute();
onMounted(onInit);

function onInit() {
  console.log(route.params.id);
}
</script>

<template>
  <div class="publicacao">publicacao works!</div>
</template>

<style lang="scss" scoped></style>
