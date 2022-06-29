<script setup lang="ts">
import { Icon } from "@iconify/vue";
const emit = defineEmits(["close"]);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="modal-background">
    <div class="modal">
      <header>
        <h1>{{ props.title }}</h1>
        <Icon
          class="close-icon"
          icon="clarity:close-line"
          @click="emit('close')" />
      </header>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-background {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  .modal {
    width: clamp(300px, 100%, 600px);
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem;
    margin: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--secondary);
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid rgb(193, 193, 193);
      h1 {
        font-size: 1.5rem;
      }
      .close-icon {
        cursor: pointer;
        font-size: 2rem;
      }
    }
  }
}
</style>
