<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});

let searchFilter = ref("");
let categoryFilter = ref([]);

interface Article {
  id: number;
  date: Date;
  image: string;
  title: string;
  desc: string;
  category: string;
}

const articles: Array<Article> = [
  {
    id: 1,
    date: new Date(2020, 6, 1),
    image: "/consultorio/1.jpeg",
    title: "O impacto da ansiedade",
    desc: "Lorem ipsum dolor sit amet bla bla bla bla, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e.",
    category: "Ansiedade",
  },
  {
    id: 2,
    date: new Date(2020, 6, 2),
    image: "/consultorio/2.jpeg",
    title: "Lorem ipsum dolor sit amet bla bla bla bla",
    desc: "Lorem ipsum dolor sit amet bla bla bla bla, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e.",
    category: "Relacionamento",
  },
  {
    id: 3,
    date: new Date(2020, 6, 3),
    image: "/consultorio/3.jpeg",
    title: "Síndrome de Burnout",
    desc: "Lorem ipsum dolor sit amet bla bla bla bla, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e.",
    category: "Trabalho",
  },
  {
    id: 4,
    date: new Date(2020, 6, 4),
    image: "/consultorio/4.jpeg",
    title: "Lorem ipsum dolor sit amet bla bla bla bla",
    desc: "Lorem ipsum dolor sit amet bla bla bla bla, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e.",
    category: "Relacionamento",
  },
  {
    id: 5,
    date: new Date(2020, 6, 5),
    image: "/consultorio/5.jpeg",
    title: "Lorem ipsum dolor sit amet bla bla bla bla",
    desc: "Lorem ipsum dolor sit amet bla bla bla bla, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e.",
    category: "familia",
  },
  {
    id: 6,
    date: new Date(2020, 6, 6),
    image: "/consultorio/5.jpeg",
    title: "Lorem ipsum dolor sit amet bla bla bla bla",
    desc: "Lorem ipsum dolor sit amet bla bla bla bla, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc eget lorem. Donec euismod, nisi vel consectetur interdum, nisl nunc e.",
    category: "amizades",
  },
];

const categories: Array<String> = [
  "relacionamentos",
  "trabalho",
  "familia",
  "amizades",
  "saúde mental",
];

function formatText(text: string, length: number) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

function setCategory(category: String) {
  if (categoryFilter.value.includes(category)) {
    categoryFilter.value.splice(categoryFilter.value.indexOf(category), 1);
  } else {
    categoryFilter.value.push(category);
  }

  filterCategories();
}

function filterCategories() {
  console.log(
    `busca: ${searchFilter.value} categoria: ${categoryFilter.value}`
  );
}
</script>

<template>
  <div class="publicacoes" id="publicacoesPage">
    <section class="bg-image">
      <Title
        title="publicações"
        subtitle="assuntos relevantes na psicoterapia"
        color="var(--secondary)" />
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
            :key="index"
            @click="setCategory(category)"
            :class="categoryFilter.includes(category) ? 'active-category' : ''">
            {{ category }}
          </div>
        </div>
      </div>
      <div class="articles">
        <div class="article" v-for="(article, index) in articles" :key="index">
          <img :src="article.image" alt="" />
          <div class="article-content">
            <span class="date">
              {{
                article.date.toLocaleDateString("pt-BR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </span>
            <h1>{{ formatText(article.title, 23) }}</h1>
            <p>{{ formatText(article.desc, 150) }}</p>
            <div class="link">
              <NuxtLink :to="`/publicacoes/${article.id}`" class="text">
                Ler Mais
              </NuxtLink>
              <Icon class="icon" icon="akar-icons:chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.publicacoes {
  background-color: var(--secondary);
  .bg-image {
    display: flex;
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
          transform: translateY(30%);
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
          color: var(--secondary);
          font-family: "WorkSansRegular";
        }
      }
    }
    .articles {
      width: 70%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 2rem;
      gap: 2rem;

      .article {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.369);

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
