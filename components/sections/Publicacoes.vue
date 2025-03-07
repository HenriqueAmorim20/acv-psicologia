<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { formatText, formatDate } from "@/composables/utils";

// Fetch articles and get articles state
const data = await fetchArticles();
const articles = useArticles();
articles.value = data.articlesDefault;

reveal(".publicacoes .btn", 2500, 0, "top", 200);
reveal(".article-content", 2500, 0, "top", 400);
</script>

<template>
  <div class="publicacoes" id="publicacoesSection">
    <PageTitle
      title="publicações"
      subtitle="assuntos relevantes na psicoterapia"
      color="var(--secondary)" />
    <div class="articles" v-if="articles">
      <div class="article" v-for="(article, index) in articles.slice(0, 5)" :key="index">
        <span class="date">
          {{ formatDate(article.date) }}
        </span>
        <img :src="article.image" alt="" />
        <div class="article-content">
          <h1>{{ formatText(article.title, 40) }}</h1>
          <p>{{ formatText(article.desc, 170) }}</p>
          <NuxtLink :to="`/publicacoes/${article.uuid}`" class="link">
            <span> Ler Mais </span>
            <Icon class="icon" icon="akar-icons:chevron-right" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <NuxtLink to="/publicacoes">
      <button class="btn">ver todas</button>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.publicacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  color: var(--secondary);
  .articles {
    max-width: 1200px;
    margin: 3rem auto;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-areas:
      " first first second second third third third"
      " first first second second fourth fourth fourth"
      " first first second second fifth fifth fifth";
    gap: 1rem;

    .article {
      position: relative;
      background-color: var(--background);
      color: var(--secondary);
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.262);
      border-radius: 5px;
      .date {
        position: absolute;
        inset: 0;
        font-size: 0.8rem;
        color: var(--background);
        background-color: var(--secondary);
        height: fit-content;
        width: 50%;
        text-align: center;
        padding: 0.3rem 0.7rem;
        border-radius: 5px 0 0 0;
      }

      img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 4/3;
        border-radius: 5px 5px 0 0;
      }

      .article-content {
        display: flex;
        flex-direction: column;
        padding: 1rem;

        h1 {
          font-size: 1.3rem;
        }

        p {
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

    .article:nth-child(3),
    .article:nth-child(4),
    .article:nth-child(5) {
      display: flex;

      .date {
        width: 35%;
      }

      img {
        width: 35%;
        aspect-ratio: 6/5;
        border-radius: 5px 0 0 5px;
      }
      .article-content {
        padding: 0.5rem 0.7rem;
        h1 {
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
          margin: 0.5rem 0 0.8rem;
        }

        .link {
          font-size: 0.8rem;
        }
      }
    }

    .article:nth-child(1) {
      grid-area: first;
    }

    .article:nth-child(2) {
      grid-area: second;
    }

    .article:nth-child(3) {
      grid-area: third;
    }

    .article:nth-child(4) {
      grid-area: fourth;
    }

    .article:nth-child(5) {
      grid-area: fifth;
    }
  }

  .btn {
    border: 1px solid var(--secondary);
    background-color: var(--secondary);
    color: var(--background);
  }

  .btn:hover {
    background-color: var(--background);
    color: var(--secondary);
  }
}

@media only screen and (max-width: 1200px) {
  .publicacoes {
    .articles {
      max-width: 700px;
      grid-template-areas:
        "first second"
        "third third"
        "fourth fourth"
        "fifth fifth";

      .article:nth-child(3),
      .article:nth-child(4),
      .article:nth-child(5) {
        .article-content {
          padding: 1rem;
          h1 {
            font-size: 1.3rem;
          }

          p {
            font-size: 1rem;
            margin: 1rem 0 2rem;
          }

          .link {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .publicacoes {
    .articles {
      max-width: 350px;
      grid-template-areas:
        "first"
        "second"
        "third"
        "fourth"
        "fifth";

      .article:nth-child(3),
      .article:nth-child(4),
      .article:nth-child(5) {
        display: unset;

        .date {
          width: 40%;
        }
        img {
          width: 100%;
          border-radius: 5px 5px 0 0;
        }
      }
    }
  }
}
</style>
