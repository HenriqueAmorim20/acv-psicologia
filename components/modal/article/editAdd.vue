<script setup lang="ts">
import { Icon } from "@iconify/vue";
const emit = defineEmits(["close", "fileChange", "fileUploading"]);
const article = useSelectedArticle();

const handleArticle = async () => {
  if (
    !article.value.title?.length ||
    !article.value.category?.length ||
    !article.value.desc?.length ||
    !article.value.date ||
    !article.value.image.result
  )
    return;
  if (article.value.uuid?.length) await editArticle();
  else await addArticle();
  fetchArticles();
  emit("close");
};

const addArticle = async () => {
  try {
    article.value.image = await uploadFileToBucket();
    await useFetch(`/api/publicacoes`, {
      method: "POST",
      body: JSON.stringify(article.value),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const editArticle = async () => {
  try {
    article.value.image = await uploadFileToBucket();
    await useFetch(`/api/publicacoes`, {
      method: "PATCH",
      body: JSON.stringify({
        id: article.value.uuid,
        publicacao: {
          title: article.value.title,
          desc: article.value.desc,
          category: article.value.category,
          image: article.value.image,
          date: article.value.date,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const uploadFileToBucket = async () => {
  console.log("debug upload", article.value.image.file);
  console.log("debug upload", article.value.image.result);
  const { snapshot, downloadUrl, metadata } = await saveFile(
    "publicacoes/" + article.value.image?.file?.name,
    article.value.image?.result
  ).catch(err => {
    throw "não foi possível salvar o arquivo" + err;
  });
  if (snapshot) return downloadUrl;
};

const onFileChange = async e => {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  console.log("debug file change", files[0]);
  article.value.image = await uploadFile(files[0]);
};
</script>

<template>
  <div class="modal-edit-add">
    <div class="form" v-if="article">
      <div class="form-group">
        <label for="title">Título</label>
        <input type="text" id="title" v-model="article.title" placeholder="Título" required />
      </div>
      <div class="form-group">
        <label for="category">Categoria</label>
        <input
          type="text"
          id="category"
          v-model="article.category"
          placeholder="Categoria"
          required />
      </div>
      <div class="form-group">
        <label for="desc">Descrição</label>
        <textarea
          id="desc"
          v-model="article.desc"
          placeholder="Descrição"
          rows="10"
          required></textarea>
      </div>
      <div class="form-group">
        <label for="date">Data</label>
        <input type="date" id="date" v-model="article.date" placeholder="Data" required />
      </div>
      <div class="form-group">
        <label for="date">Imagem</label>
        <input type="file" @change="onFileChange" placeholder="Data" required />
      </div>
    </div>
    <div class="actions">
      <button class="btn delete" @click="$emit('close')">Cancelar</button>
      <button class="btn" @click="handleArticle()">Salvar</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-edit-add {
  display: flex;
  flex-direction: column;
  position: relative;
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem 0 0;

  .form {
    display: flex;
    flex-direction: column;

    .form-group {
      display: flex;
      flex-direction: column;

      #title,
      #category,
      #desc,
      #date {
        margin: 0.5rem 0 1.5rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1rem;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.128);

        &:focus {
          outline-color: var(--secondary);
        }
      }

      #date {
        width: fit-content;
      }
    }
  }

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
