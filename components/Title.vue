<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#fff",
  },
});
</script>

<template>
  <header :style="`--dynamic-color: ${props.color}`">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subtitle }}</h2>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  --dynamic-color: #fff;
  color: var(--dynamic-color);
  h1 {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    width: fit-content;
    font-family: "WorkSansLight";
    font-weight: 200;
    letter-spacing: 10px;
    font-size: 2rem;
  }

  h1::after {
    display: block;
    content: "";
    margin-top: 0.2rem;
    width: 60px;
    border-bottom: 1px solid var(--dynamic-color);
  }

  h2 {
    text-align: center;
    font-size: 1rem;
    max-width: 450px;
    margin-top: 0.5rem;
  }
}
</style>
