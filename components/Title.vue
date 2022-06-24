<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: "",
  },
  color: {
    type: String,
    default: "#fff",
  },
});
</script>

<template>
  <header :style="`--dynamic-color: ${props.color}`">
    <div class="icon">
      <Icon icon="icon-park-outline:pineapple" />
    </div>
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subtitle }}</h2>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  --dynamic-color: #fff;
  color: var(--dynamic-color);
  margin: 0 0.5rem;
  h1 {
    display: flex;
    flex-direction: column;
    width: fit-content;
    font-family: "WorkSansRegular";
    text-align: center;
    font-weight: 200;
    font-size: 2rem;
  }

  h2 {
    text-align: center;
    font-size: 1.1rem;
    max-width: 450px;
    margin-top: 0.5rem;
    font-family: "WorkSansLight";
    font-weight: normal;
    opacity: 0.7;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--dynamic-color);
  }

  .icon::after,
  .icon::before {
    display: block;
    content: "";
    width: 50px;
    border-bottom: 1px solid var(--dynamic-color);
    margin: 0 0.5rem;
  }
}

@media only screen and (max-width: 500px) {
  header {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 0.9rem;
    }
  }
}
</style>
