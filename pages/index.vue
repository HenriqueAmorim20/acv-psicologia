<script setup lang="ts"></script>

<template>
  <div class="index" id="indexPage">
    <SectionsHome />
    <SectionsPsicoterapia />
    <SectionsConsultorio />
    <SectionsVideos />
    <SectionsAgendar />
  </div>
</template>

<style lang="scss" scoped>
.index {
  > * {
    min-height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 1rem;
  }
}
</style>
