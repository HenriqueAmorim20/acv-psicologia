<script setup lang="ts">
import { Icon } from "@iconify/vue";

let searchFilter = ref("");
let categoryFilter = ref("");

const user = useFirebaseUser();

const isOpen = ref(false);
const selectedArticle = ref({});

const articles = useArticles();

const articlesData = ref(articles.value);

const categories = [
  ...new Set(articles.value.map((a: any) => a.category)),
].sort();

const setCategory = (category: any): void => {
  categoryFilter.value =
    categoryFilter.value === category ? "" : category.toString();
};

const filterArticles = (): void => {
  articlesData.value = articles.value;
  if (searchFilter.value.length > 0) {
    articlesData.value = articlesData.value.filter((a: any) =>
      a.title.toLowerCase().includes(searchFilter.value.toLowerCase())
    );
  }
  if (categoryFilter.value) {
    articlesData.value = articlesData.value.filter(
      (a: any) => a.category === categoryFilter.value
    );
  }
};

watchEffect(() => filterArticles());

const callFormatDate = (articleDate: number): string => formatDate(articleDate);
const callFormatText = (text: string, length: number): string =>
  formatText(text, length);

const openModal = article => {
  selectedArticle.value = article;
  isOpen.value = true;
};
</script>

<template>
  <div class="publicacoes" id="publicacoesPage">
    <section class="bg-image">
      <Title
        title="publicações"
        subtitle="assuntos relevantes na psicoterapia"
        color="var(--secondary)" />
      <button v-if="user" class="btn">adicionar publicação</button>
    </section>
    <section class="content">
      <div class="filters">
        <div class="search">
          <input
            type="text"
            placeholder="Pesquisar..."
            v-model="searchFilter" />
          <Icon class="search-icon" icon="carbon:search" />
        </div>
        <div class="categories">
          <h1>Categorias</h1>
          <div
            class="category"
            v-for="(category, index) in categories"
            :key="index">
            <span
              :class="categoryFilter === category ? 'active-category' : ''"
              @click="setCategory(category)">
              {{ category }}
            </span>
          </div>
        </div>
      </div>
      <div class="articles">
        <h3 v-if="!articlesData.length" class="no-result">
          Nenhum resultado encontrado!
        </h3>
        <div
          class="article"
          v-for="(article, index) in articlesData"
          :key="index">
          <img :src="article.image" alt="" />
          <div class="article-content">
            <button class="edit-article">
              <Icon class="edit-icon" icon="ci:edit" />
            </button>
            <button @click="openModal(article)" class="delete-article">
              <Icon class="delete-icon" icon="carbon:delete" />
            </button>
            <span class="date">
              {{ callFormatDate(article.date["_seconds"]) }}
            </span>
            <h1>{{ callFormatText(article.title, 23) }}</h1>
            <p>{{ callFormatText(article.desc, 150) }}</p>
            <div class="link">
              <NuxtLink :to="`/publicacoes/${article.uuid}`" class="text">
                Ler Mais
              </NuxtLink>
              <Icon class="icon" icon="akar-icons:chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalDelete
      v-show="isOpen"
      :article="selectedArticle"
      @close="isOpen = false" />
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
          cursor: pointer;
          font-size: 1rem;
          text-transform: capitalize;
          transition: 0.4s ease;
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
          position: absolute;
          color: #fff;
          font-size: 1.2rem;
          padding: 0.3rem;
          cursor: pointer;
        }

        .edit-article {
          inset: 0 auto auto 0;
          background-color: var(--secondary);
          border-radius: 5px 0 5px 0;
          box-shadow: 2px 2px 7px black;
        }

        .delete-article {
          inset: 0 0 auto auto;
          background-color: #df4759;
          border-radius: 0 5px 0 5px;
          box-shadow: -2px 2px 7px black;
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
            cursor: pointer;
            width: fit-content;

            .text {
              color: var(--secondary);
              text-decoration: none;
            }

            .icon {
              margin-left: 0.5rem;
            }
          }

          .link:hover {
            text-decoration: underline;
            text-decoration-color: var(--secondary);
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
