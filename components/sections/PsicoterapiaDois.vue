<script setup lang="ts">
reveal(".psicoterapia section p", 2500, 30, "left", 200, 150);
</script>

<template>
  <div class="psicoterapia" id="psicoterapiaSection">
    <section>
      <p>
        Para isso, eu avalio cuidadosamente as contingências de reforçamento presentes na vida do
        cliente, ou seja, os eventos antecedentes e as consequências que influenciam seus
        pensamentos, sentimentos e comportamentos. Essa análise me permite compreender como
        experiências passadas e contextos atuais moldaram e mantêm as dificuldades enfrentadas, bem
        como identificar estratégias para promover mudanças positivas. Assim, os objetivos do
        processo psicoterapêutico são personalizados e alinhados às necessidades, valores e
        expectativas de cada pessoa, sempre com uma abordagem abrangente e integrada.
      </p>
      <p>
        Em alguns casos, pode ser necessário o encaminhamento para avaliação psiquiátrica, a fim de
        verificar a necessidade de introdução de medicação, ou para neuropsicólogos, quando há a
        necessidade de uma avaliação mais detalhada das funções cognitivas. Esses encaminhamentos
        são realizados de forma cuidadosa, respeitando as possibilidades e as condições de cada
        pessoa, sempre com o objetivo de garantir um cuidado integral e eficaz.
      </p>
      <p>
        O tempo de duração do processo terapêutico na ACV Psicologia também varia de acordo com cada
        caso. A complexidade das demandas, os objetivos estabelecidos e o ritmo de cada pessoa
        influenciam diretamente o tempo necessário para alcançar as mudanças desejadas. Não existe
        uma duração fixa ou padrão: algumas pessoas podem atingir resultados significativos em um
        período mais curto, enquanto outras necessitam de acompanhamento mais prolongado.
      </p>
      <p>
        O foco principal do trabalho realizado na ACV Psicologia é promover maior autonomia,
        bem-estar e adaptação às demandas da vida. Por meio de uma análise profunda e integrada da
        vida como um todo, respeitando a singularidade de cada cliente, é oferecido um espaço
        acolhedor e direcionado para promover mudanças duradouras em pensamentos, sentimentos e
        comportamentos.
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
