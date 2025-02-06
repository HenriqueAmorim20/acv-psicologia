<script setup lang="ts">
reveal(".psicoterapia section p", 2500, 30, "left", 200, 150);
</script>

<template>
  <div class="psicoterapia" id="psicoterapiaSection">
    <section>
      <p>
        A análise cuidadosa das contingências de reforçamento permite entender como experiências
        passadas e contextos atuais influenciam dificuldades e comportamentos, orientando
        estratégias de mudança alinhadas às necessidades e valores de cada pessoa.
      </p>
      <p>
        Quando necessário, são feitos encaminhamentos para avaliação psiquiátrica ou
        neuropsicológica, sempre com foco no cuidado integral. A duração da terapia varia conforme a
        complexidade das demandas e o ritmo de cada cliente, sem um tempo fixo. O objetivo é
        proporcionar autonomia, bem-estar e adaptação às diversas situações da vida, em um espaço
        acolhedor e direcionado para mudanças reais e duradouras.
      </p>
    </section>
    <aside></aside>
  </div>
</template>

<style lang="scss" scoped>
.psicoterapia {
  min-height: fit-content;
  display: flex;
  flex-direction: row-reverse;
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

    p::after {
      content: "";
      display: block;
      border-left: 5px solid var(--background);
      margin-left: 1.5rem;
    }

    p:first-of-type {
      margin-top: 4rem;
    }
  }

  aside {
    width: 35%;
    background-image: url("/psicoterapia/dente-de-leao.jpeg");
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
      p::after {
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
