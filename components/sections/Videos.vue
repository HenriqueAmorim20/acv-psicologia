<script setup>
import { Icon } from "@iconify/vue";
const admin = useFirebaseUser();

const isOpen = ref(false);
const selectedVideo = ref({});

const { data } = await useFetch("/api/videos").catch(err => console.log(err));

const openModal = video => {
  selectedVideo.value = video;
  isOpen.value = true;
};
</script>
<template>
  <div class="videos" id="videosSection">
    <Title
      title="meus vídeos"
      subtitle="confira meus principais vídeos do youtube" />
    <section>
      <div class="video" v-for="(video, index) in data" :key="index">
        <iframe
          width="100%"
          style="aspect-ratio: 560/315"
          :src="video.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <button v-if="admin" @click="openModal(video)" class="edit-video">
          <Icon class="edit-icon" icon="ci:edit" />
        </button>
      </div>
    </section>
    <a
      href="https://www.youtube.com/channel/UCFq-F11A86ShC4ha-Crt8Yg/videos"
      target="_blank"
      rel="noopener noreferrer"
      class="btn">
      ver todos
    </a>
    <Modal v-show="isOpen" :video="selectedVideo" @close="isOpen = false" />
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
  padding: 3rem 0rem;

  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    max-width: 1920px;
    margin: 4rem auto;

    .video {
      position: relative;

      &::before {
        position: absolute;
        inset: 0;
        content: "";
        display: block;
        background-color: hsla(110, 7%, 33%, 0.281);
      }

      &:hover {
        &::before {
          display: none;
        }
      }

      .edit-video {
        z-index: 2;
        position: absolute;
        color: #fff;
        font-size: 1.2rem;
        padding: 0.3rem;
        cursor: pointer;
      }

      .edit-video {
        inset: 0 0 auto auto;
        background-color: var(--secondary);
        border-radius: 5px 0 5px 0;
        box-shadow: 2px 2px 7px black;
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
