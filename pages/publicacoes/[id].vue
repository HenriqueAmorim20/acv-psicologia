<script setup lang="ts">
import { Icon } from "@iconify/vue";

const route = useRoute();
const articles = useArticles();
const paragraph = ref(null);
const id = route.params.id;

const article = articles.value.filter(item => item.uuid === id)[0];

onMounted(() => {
  window.scrollTo(0, 0);
  paragraph.value.innerHTML = article.desc;
});

const callFormatDate = (articleDate: number): string => formatDate(articleDate);
</script>

<template>
  <div class="publicacao" v-if="article">
    <section
      class="bg-image"
      :style="`background-image: url(${article.image})`">
      <Title
        :title="article.title"
        color="var(--secondary)"
        :subtitle="article.category" />
    </section>
    <section class="content">
      <span class="date">{{ callFormatDate(article.date["_seconds"]) }}</span>
      <p class="desc" ref="paragraph"></p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.publicacao {
  background-color: var(--secondary);
  .bg-image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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
    max-width: 900px;
    background-color: #fff;
    padding: 1.5rem;
    margin: 0rem auto;
    display: flex;
    flex-direction: column;

    .date {
      color: var(--secondary);
      font-family: "WorkSansRegular";
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }

    .desc {
      text-indent: 2rem;
      line-height: 2rem;
      font-size: 1.3rem;
      font-family: "WorkSansThin";
    }
  }
}

@media only screen and (max-width: 500px) {
  .publicacao {
    .content {
      .date {
        font-size: 1.1rem;
      }

      .desc {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
