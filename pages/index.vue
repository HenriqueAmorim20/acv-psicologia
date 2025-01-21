<script setup lang="ts">
onBeforeMount(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="index" id="indexPage">
    <SectionsHome />
    <SectionsSobre />
    <SectionsPsicoterapia />
    <SectionsPsicoterapiaDois />
    <SectionsConsultorio />
    <SectionsVideos />
    <SectionsPublicacoes />
  </div>
</template>

<style lang="scss">
.index {
  > * {
    min-height: 90vh;
    overflow: hidden;
    padding: 2rem 1rem;
  }

  .btn {
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 3px;
    padding: 0.5rem 2rem;
    transition: 0.3s ease;
    font-family: "WorkSansLight";
  }
}
</style>
