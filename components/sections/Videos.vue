<script setup lang="ts">
interface Video {
  titulo: string;
  categoria: string;
  url: string;
}

const videos: Array<Video> = [
  {
    titulo: "Relacionamento Interpessoal/Amoroso",
    categoria: "Relacionamentos",
    url: "https://www.youtube.com/embed/Hkb379_CnRk",
  },
  {
    titulo: "Síndrome de Burnout",
    categoria: "Trabalho",
    url: "https://www.youtube.com/embed/BRGt6H6fyIQ",
  },
  {
    titulo: "Autoestima",
    categoria: "Interpessoal",
    url: "https://www.youtube.com/embed/pcdHjq1UOr8",
  },
];
</script>
<template>
  <div class="videos" id="videosSection">
    <Title
      title="vídeos"
      subtitle="confira alguns dos meus principais vídeos e também meu canal no youtube" />
    <section>
      <iframe
        v-for="(item, index) in videos"
        :key="index"
        width="100%"
        style="aspect-ratio: 560/315"
        :src="item.url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
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
    margin: 5rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .btn {
    border: 1px solid var(--background);
    background-color: var(--background);
    color: var(--secondary);
  }

  .btn:hover {
    background-color: var(--secondary);
    color: var(--background);
  }
}

@media only screen and (max-width: 850px) {
  .videos {
    section {
      grid-template-columns: 1fr;
    }
  }
}
</style>
