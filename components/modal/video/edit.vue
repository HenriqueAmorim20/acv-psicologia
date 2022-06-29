<script setup lang="ts">
const emit = defineEmits(["close"]);
const video = useSelectedVideo();

const handleUpdateVideo = async () => {
  if (!video.value.url?.length) return;
  await updateVideo(video.value.uuid, video.value.url); // update the video
  fetchVideos(); // refresh the videos data
  emit("close"); //close modal
};
</script>

<template>
  <div class="modal-video" v-if="video">
    <iframe
      width="100%"
      style="aspect-ratio: 560/315"
      :src="video.url"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="form-group">
      <label for="url"> url do vídeo</label>
      <input
        v-model="video.url"
        type="text"
        placeholder="https://www.youtube.com/embed/pcdHjq1UOr8" />
    </div>
    <button @click="handleUpdateVideo()" class="btn btn-edit">salvar</button>
  </div>
</template>

<style lang="scss" scoped>
.modal-video {
  display: flex;
  flex-direction: column;
  .form-group {
    margin: 1rem 0 2rem;
    color: #000;
    input {
      width: 100%;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-size: 1rem;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.128);
      margin-top: 0.5rem;
    }
  }

  .btn-edit {
    align-self: flex-end;
    border: 1px solid var(--secondary);
    color: var(--background);
    background-color: var(--secondary);
    &:hover {
      background-color: var(--background);
      color: var(--secondary);
    }
  }
}
</style>
