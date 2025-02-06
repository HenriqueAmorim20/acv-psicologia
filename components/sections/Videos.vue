<script setup lang="ts">
import { Icon } from "@iconify/vue";
// Admin user
const admin = useFirebaseUser();

// Fetch videos and get videos state
fetchVideos();
const videos = useVideos();

// Get selected video state
const selectedVideo = useSelectedVideo();

const isModalEditVideoOpen = ref(false);

const openModalEditVideo = ({ uuid, url }): void => {
  selectedVideo.value = { uuid, url };
  isModalEditVideoOpen.value = true;
};

reveal(".videos .btn", 2500, 0, "top", 200);
</script>
<template>
  <div class="videos" id="videosSection">
    <PageTitle title="meus vídeos" subtitle="confira meus principais vídeos do youtube" />
    <section>
      <div class="video" v-for="(video, index) in videos" :key="index">
        <iframe
          width="100%"
          style="aspect-ratio: 560/315"
          :src="video.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <button v-if="admin" @click="openModalEditVideo(video)" class="edit-video">
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
    <ModalFrame
      v-show="isModalEditVideoOpen"
      title="Editar vídeo"
      @close="isModalEditVideoOpen = false">
      <ModalVideoEdit @close="isModalEditVideoOpen = false" />
    </ModalFrame>
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
        color: var(--secondary);
        font-size: 1.2rem;
        padding: 0.3rem;
        cursor: pointer;
        inset: 0 0 auto auto;
        background-color: #fff;
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.428);
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
