<script setup lang="ts">
import { Icon } from "@iconify/vue";
const emit = defineEmits(["close"]);
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const deleteArticle = async () => {
  await useFetch(`/api/publicacoes`, {
    method: "DELETE",
    body: JSON.stringify({ id: props.article.uuid }),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch(err => console.log(err));
  emit("close");
  window.location.reload();
};
</script>

<template>
  <div class="vue-modal">
    <div class="vue-modal-inner">
      <div class="vue-modal-header">
        <h2>Deletar publicação</h2>
        <Icon class="icon" icon="clarity:close-line" @click="$emit('close')" />
      </div>
      <div class="vue-modal-content">
        <span>
          Tem certeza de que deseja deletar essa publicação? Essa ação não
          poderá ser desfeita.
        </span>
        <div class="actions">
          <button class="btn" @click="$emit('close')">Cancelar</button>
          <button class="btn delete" @click="deleteArticle()">Deletar</button>
        </div>
      </div>
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
      padding: 1rem 0 0;

      .actions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 2rem;

        .btn {
          cursor: pointer;
          text-transform: uppercase;
          text-decoration: none;
          font-size: 0.8rem;
          letter-spacing: 3px;
          padding: 0.3rem 1.5rem;
          transition: 0.3s ease;
          font-family: "WorkSansLight";
          width: fit-content;
          border: 1px solid var(--secondary);
          background-color: var(--secondary);
          color: var(--background);
          margin-left: 1rem;

          &:hover {
            background-color: var(--background);
            color: var(--secondary);
          }
        }

        .delete {
          border: 1px solid #df4759;
          background-color: #df4759;
          color: var(--background);

          &:hover {
            background-color: var(--background);
            color: #df4759;
          }
        }
      }
    }
  }
}
</style>
