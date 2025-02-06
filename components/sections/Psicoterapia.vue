<script setup lang="ts">
reveal(".psicoterapia section p", 2500, 30, "left", 200, 150);
</script>

<template>
  <div class="psicoterapia" id="psicoterapiaSection">
    <section>
      <Title title="psicoterapia" subtitle="O Processo Psicoterapêutico na ACV Psicologia" />
      <p>
        Na Ana Carolina Villaça Psicologia, o processo psicoterapêutico, conduzido pela Psicóloga
        Ana Carolina Villaça, baseia-se na análise do comportamento para compreender e promover
        mudanças individualizadas nos padrões comportamentais. Os objetivos não são genéricos, mas
        construídos a partir da história, relações e contexto de cada pessoa.
      </p>
      <p>
        O atendimento não se limita à queixa imediata, mas busca identificar as origens dos
        problemas e as contingências que mantêm os padrões de comportamento. Pensamentos e
        sentimentos também são considerados eventos comportamentais influenciados pelo contexto de
        vida. O foco não é apenas solucionar questões pontuais, mas promover mudanças significativas
        e duradouras.
      </p>
    </section>
    <aside></aside>
  </div>
</template>

<style lang="scss" scoped>
.psicoterapia {
  min-height: fit-content;
  display: flex;
  background-color: var(--secondary);
  color: var(--background);
  padding: 0;

  section {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem 5rem;

    p {
      display: flex;
      font-family: "WorkSansLight";
      font-size: clamp(1rem, 1.5vw, 1.1rem);
      text-indent: 2rem;
      margin: 0.5rem 0;
      line-height: clamp(1.5rem, 2.5vw, 2rem);
    }

    p::before {
      content: "";
      display: block;
      border-left: 5px solid var(--background);
      margin-right: 1.5rem;
    }

    p:first-of-type {
      margin-top: 3rem;
    }
  }

  aside {
    width: 35%;
    background-image: url("/psicoterapia/abacaxi.jpeg");
    background-size: cover;
    background-position: center;
  }
}

@media only screen and (max-width: 800px) {
  .psicoterapia {
    flex-direction: column;
    align-items: center;
    section {
      width: 100%;
      padding-bottom: 0;
      padding: 4rem 1rem 5rem;
      p::before {
        display: none;
      }
    }

    aside {
      margin: 1rem;
      width: 100%;
      max-width: 300px;
      border-radius: 5px;
      aspect-ratio: 7/8;
      margin-top: 2rem;
    }
  }
}
</style>
