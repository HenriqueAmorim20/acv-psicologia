<script setup lang="ts">
import { ref } from "vue";
let qtd: any = ref(4);
</script>

<template>
  <div class="consultorio" id="consultorioSection">
    <Title
      title="consultório"
      subtitle="SCN Quadra 2, Shopping Liberty Mall, Torre B, Sala 521"
      color="var(--secondary)" />
    <section class="photos">
      <img
        v-for="index in qtd"
        :key="index"
        :src="`/consultorio/${index}.jpeg`" />
    </section>
    <button class="btn" @click="qtd = qtd < 8 ? 8 : 4">
      {{ qtd < 8 ? "mostrar mais" : "mostrar menos" }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.consultorio {
  min-height: fit-content;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--secondary);
  padding: 5rem 2rem;
  .photos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 4rem 0;

    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      transition: transform 0.5s ease-in-out;
    }

    img:hover {
      transform: scale(1.05);
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

@media only screen and (max-width: 1000px) {
  .consultorio {
    .photos {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media only screen and (max-width: 600px) {
  .consultorio {
    padding: 2rem 1rem;
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 0.7rem;
    }

    .photos {
      margin: 2rem 0;
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
