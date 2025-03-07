<script setup lang="ts">
import { Icon } from "@iconify/vue";
const emit = defineEmits(["close"]);
const article = useSelectedArticle();

const deleteArticle = async () => {
  console.log(`deletando`, article.value);
  await useFetch(`/api/publicacoes`, {
    method: "DELETE",
    body: JSON.stringify({ id: article.value.uuid }),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch(err => console.log(err));
  const data = await fetchArticles();
  const articles = useArticles();
  articles.value = data.articlesDefault;
  emit("close");
};
</script>

<template>
  <div class="modal-publicacao">
    <span>
      Tem certeza de que deseja deletar essa publicação? Essa ação não poderá ser desfeita.
    </span>
    <div class="actions">
      <button class="btn" @click="$emit('close')">Cancelar</button>
      <button class="btn delete" @click="deleteArticle()">Deletar</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-publicacao {
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
</style>
