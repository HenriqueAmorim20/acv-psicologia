<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Video {
  titulo: string;
  desc: string;
  urlFrame: string;
  url: string;
}

const videos: Array<Video> = [
  {
    titulo: "Relacionamento Interpessoal/Amoroso",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet...",
    urlFrame: "https://www.youtube.com/embed/Hkb379_CnRk",
    url: "https://www.youtube.com/watch?v=Hkb379_CnRk",
  },
  {
    titulo: "Síndrome de Burnout",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing consectetur adipisicing consectetur adipisicing...",
    urlFrame: "https://www.youtube.com/embed/BRGt6H6fyIQ",
    url: "https://www.youtube.com/watch?v=BRGt6H6fyIQ",
  },
  {
    titulo: "Autoestima",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    urlFrame: "https://www.youtube.com/embed/pcdHjq1UOr8",
    url: "https://www.youtube.com/watch?v=pcdHjq1UOr8",
  },
];
</script>
<template>
  <div class="videos" id="videosSection">
    <Title
      title="meus vídeos"
      subtitle="confira meus principais vídeos do youtube" />
    <section>
      <div v-for="(item, index) in videos" :key="index" class="video">
        <iframe
          width="100%"
          style="aspect-ratio: 560/315"
          :src="item.urlFrame"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <div class="content">
          <h1>{{ item.titulo }}</h1>
          <p>{{ item.desc }}</p>
          <a :href="item.url" target="_blank">
            assistir no youtube
            <Icon class="icon" icon="akar-icons:chevron-right" />
          </a>
        </div>
      </div>
    </section>
    <a
      href="https://www.youtube.com/channel/UCFq-F11A86ShC4ha-Crt8Yg/videos"
      target="_blank"
      rel="noopener noreferrer"
      class="btn">
      ver todos
    </a>
  </div>
</template>

<style lang="scss" scoped>
.videos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary);
  color: var(--background);
  min-height: fit-content;
  padding: 5rem 0rem;

  section {
    max-width: 1400px;
    margin: 5rem auto;
    width: 100%;
    display: grid;
    gap: 1rem;
    padding: 0 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;

    .video {
      display: flex;
      flex-direction: column;
      background-color: var(--background);
      color: var(--secondary);
      border-radius: 5px;

      .content {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 1rem 1rem;
        height: 100%;

        h1 {
          font-size: 1.3rem;
          font-family: "WorkSansLight";
          margin-bottom: 0.5rem;
        }

        p {
          margin: 1rem 0 2rem;
          color: var(--ternary);
        }

        a {
          display: flex;
          align-items: center;
          color: var(--secondary);
          align-self: flex-end;
          margin-top: auto;
          text-decoration: none;

          .icon {
            margin-left: 0.3rem;
            transition: transform 0.3s ease-in-out;
          }
        }

        a:hover {
          text-decoration: underline;
          .icon {
            transform: translateX(20%);
          }
        }
      }
    }
  }
  .btn {
    border: 1px solid var(--background);
    color: var(--secondary);
    background-color: var(--background);
  }
  .btn:hover {
    background-color: var(--secondary);
    color: var(--background);
  }
}

@media only screen and (max-width: 1000px) {
  .videos {
    section {
      max-width: 600px;
      grid-template-columns: 1fr;
    }
  }
}
</style>
