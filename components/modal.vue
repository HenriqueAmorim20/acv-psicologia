<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
});

const updateVideo = async () => {
  await useFetch(`/api/videos`, {
    method: "PATCH",
    body: JSON.stringify({ id: props.video.uuid, url: props.video.url }),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch(err => console.log(err));
};
</script>

<template>
  <div class="vue-modal">
    <div class="vue-modal-inner">
      <div class="vue-modal-header">
        <h2>Editar vídeo</h2>
        <Icon class="icon" icon="clarity:close-line" @click="$emit('close')" />
      </div>
      <form
        @submit.prevent="
          updateVideo();
          $emit('close');
        "
        class="vue-modal-content">
        <div class="form-group">
          <label for="url"> url do vídeo</label>
          <input
            type="text"
            id="url"
            v-model="video.url"
            placeholder="https://www.youtube.com/embed/pcdHjq1UOr8" />
        </div>
        <button type="submit" class="btn">salvar</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vue-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;

  .vue-modal-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 0 0.5rem;
    padding: 1rem;
    color: var(--primary);
    background-color: var(--background);
    border-radius: 5px;

    .vue-modal-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--secondary);
      padding-bottom: 1rem;
      border-bottom: 1px solid rgb(193, 193, 193);

      .icon {
        cursor: pointer;
        font-size: 2rem;
      }
    }

    .vue-modal-content {
      display: flex;
      flex-direction: column;
      position: relative;
      background-clip: padding-box;
      border-radius: 0.3rem;
      padding: 1rem 0;
      .form-group {
        margin: 1rem 0 2rem;
        input {
          width: 100%;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-size: 1rem;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.128);

          &:focus {
            outline-color: var(--secondary);
          }
        }
      }
      button {
        align-self: flex-end;
        width: fit-content;
        border: 1px solid var(--secondary);
        background-color: var(--secondary);
        color: var(--background);
        border-radius: 5px;

        &:hover {
          background-color: var(--background);
          color: var(--secondary);
        }
      }
    }
  }
}
</style>
