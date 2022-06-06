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

<style lang="scss">
.index {
  > * {
    min-height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
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
    font-family: "WorkSansThin";
  }
}
</style>
