<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { formatText, formatDate } from "@/composables/utils";

// Get user admin state
const user = useFirebaseUser();

// Fetch articles, get articles state and categories
const data = await fetchArticles();
const articles = useArticles();

const selectedArticle = useSelectedArticle();

const searchFilter = ref("");
const categoryFilter = ref("");
const filters = computed(() => {
  return {
    search: searchFilter.value,
    category: categoryFilter.value,
  };
});

watch(filters, async ({ search, category }) => {
  articles.value = data.articlesDefault;
  if (search.length > 0) {
    articles.value = articles.value.filter((a: any) =>
      a.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (category) {
    articles.value = articles.value.filter((a: any) => a.category === category);
  }
});

const isModalDeleteArticleOpen = ref(false);
const isModalEditAddArticleOpen = ref(false);

const openModalDeleteArticle = ({ uuid, title, desc, category, image, date }): void => {
  selectedArticle.value = { uuid, title, desc, category, image, date };
  isModalDeleteArticleOpen.value = true;
};

const openModalEditAddArticle = ({ uuid, title, desc, category, image, date }): void => {
  selectedArticle.value = uuid
    ? { uuid, title, desc, category, image, date }
    : { title, desc, category, image, date };
  isModalEditAddArticleOpen.value = true;
};
</script>

<template>
  <div class="publicacoes" id="publicacoesPage">
    <section class="bg-image">
      <Title
        title="publicações"
        subtitle="assuntos relevantes na psicoterapia"
        color="var(--secondary)" />
      <button
        v-if="user"
        @click="
          openModalEditAddArticle({
            uuid: null,
            title: null,
            desc: null,
            category: null,
            image: '/consultorio/2.jpeg',
            date: null,
          })
        "
        class="btn">
        adicionar publicação
      </button>
    </section>
    <section class="content">
      <client-only>
        <div class="filters">
          <div class="search">
            <input type="text" placeholder="Pesquisar..." v-model="searchFilter" />
            <Icon class="search-icon" icon="carbon:search" />
          </div>
          <div class="categories">
            <h1>Categorias</h1>
            <div class="category" v-for="(category, index) in data?.categories" :key="index">
              <span
                :class="categoryFilter === category ? 'active-category' : ''"
                @click="categoryFilter = categoryFilter === category ? '' : category">
                <span>{{ category }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="articles">
          <h3 v-if="!articles?.length" class="no-result">Nenhum resultado encontrado!</h3>
          <div v-else class="article" v-for="(article, index) in articles" :key="index">
            <img :src="article.image" alt="" />
            <div class="article-content">
              <button v-if="user" @click="openModalEditAddArticle(article)" class="edit-article">
                <Icon class="edit-icon" icon="ci:edit" />
              </button>
              <button v-if="user" @click="openModalDeleteArticle(article)" class="delete-article">
                <Icon class="delete-icon" icon="carbon:delete" />
              </button>
              <span class="date">
                {{ formatDate(article.date) }}
              </span>
              <h1>{{ formatText(article.title, 23) }}</h1>
              <p>{{ formatText(article.desc, 150) }}</p>
              <NuxtLink :to="`/publicacoes/${article.uuid}`" class="link">
                <span> Ler Mais </span>
                <Icon class="icon" icon="akar-icons:chevron-right" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </client-only>
    </section>
    <ModalFrame
      v-show="isModalDeleteArticleOpen"
      title="Excluir publicação"
      @close="isModalDeleteArticleOpen = false">
      <ModalArticleDelete @close="isModalDeleteArticleOpen = false" />
    </ModalFrame>
    <ModalFrame
      v-show="isModalEditAddArticleOpen"
      :title="selectedArticle?.uuid?.length ? 'Editar publicação' : 'Adicionar publicação'"
      @close="isModalEditAddArticleOpen = false">
      <ModalArticleEditAdd @close="isModalEditAddArticleOpen = false" />
    </ModalFrame>
  </div>
</template>

<style lang="scss" scoped>
.publicacoes {
  background-color: var(--secondary);
  .bg-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url("/publicacoes/bg.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    height: 300px;

    * {
      z-index: 2;
    }

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(255, 255, 255, 0.652);
    }
    .btn {
      margin: 1rem;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 0.9rem;
      letter-spacing: 3px;
      padding: 0.5rem 2rem;
      transition: 0.3s ease;
      font-family: "WorkSansLight";
      border: 1px solid var(--secondary);
      color: var(--background);
      background-color: var(--secondary);
    }
    .btn:hover {
      background-color: var(--background);
      color: var(--secondary);
    }
  }

  .content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;

    .filters {
      display: flex;
      flex-direction: column;
      width: 30%;
      padding: 2rem 1rem;

      .search {
        position: relative;
        input {
          width: 100%;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 1rem;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.128);

          &:focus {
            outline-color: var(--secondary);
          }
        }

        .search-icon {
          cursor: pointer;
          position: absolute;
          inset: auto 0.5rem auto auto;
          transform: translateY(40%);
          font-size: 1.2rem;
          background-color: #fff;
        }
      }

      .categories {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        width: 100%;
        background-color: #fff;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.128);
        margin-top: 2rem;
        padding: 1rem;

        h1 {
          text-transform: lowercase;
          font-family: "WorkSansRegular";
          color: var(--secondary);
          margin-bottom: 1.5rem;
        }

        .category {
          font-size: 1rem;
          text-transform: capitalize;
          transition: 0.4s ease;

          span {
            cursor: pointer;
          }
          &::after {
            content: "";
            display: block;
            width: 100%;
            border-top: 1px solid hsla(110, 7%, 33%, 0.124);
            margin: 0.5rem 0 1rem;
          }

          &:last-child {
            &::after {
              display: none;
            }
          }
        }

        .active-category {
          display: flex;
          align-items: center;
          color: var(--secondary);
          font-family: "WorkSansRegular";
        }

        .active-category::before {
          content: "";
          display: block;
          border-radius: 50%;
          background-color: var(--secondary);
          width: 10px;
          height: 10px;
          margin-right: 0.5rem;
        }
      }
    }
    .articles {
      width: 70%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 2rem;
      gap: 2rem;

      .no-result {
        color: var(--background);
      }

      .article {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.369);

        .edit-article,
        .delete-article {
          cursor: pointer;
          z-index: 2;
          position: absolute;
          padding: 0.3rem;
          font-size: 1.2rem;
        }
        .edit-article {
          inset: 0 auto auto 0;
          color: var(--secondary);
          background-color: #fff;
          box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.428);
        }

        .delete-article {
          inset: 0 0 auto auto;
          color: #fff;
          background-color: #df4759;
          box-shadow: -2px 2px 7px rgba(0, 0, 0, 0.428);
        }

        img {
          max-width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          border-radius: 5px 5px 0 0;
        }

        .article-content {
          display: flex;
          flex-direction: column;
          padding: 0.5rem 1rem;

          .date {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }

          h1 {
            font-size: 1.4rem;
            color: var(--secondary);
          }

          p {
            font-size: 1rem;
            color: var(--ternary);
            margin: 1rem 0 2rem;
          }

          .link {
            display: flex;
            align-items: center;
            color: var(--secondary);
            text-transform: capitalize;
            text-decoration: none;
            cursor: pointer;
            width: fit-content;

            .icon {
              margin-left: 0.5rem;
            }

            &:hover {
              text-decoration: underline;
              text-decoration-color: var(--secondary);
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1000px) {
  .publicacoes {
    .content {
      flex-direction: column;
      .filters,
      .articles {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .publicacoes {
    .bg-image {
      height: 200px;
    }
    .content {
      flex-direction: column;
      .filters,
      .articles {
        max-width: 600px;
        padding: 1rem;
        gap: 1rem;
      }

      .filters {
        .categories {
          margin-top: 1rem;
        }
      }

      .articles {
        .article {
          .article-content {
            h1 {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .publicacoes {
    .content {
      .articles {
        .article {
          .article-content {
            .date {
              font-size: 0.8rem;
            }
            h1 {
              font-size: 1.1rem;
            }

            p {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 550px) {
  .publicacoes {
    .content {
      .articles {
        grid-template-columns: 1fr;
        max-width: 400px;
      }
    }
  }
}
</style>
