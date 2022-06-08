<script setup lang="ts"></script>

<template>
  <div class="sobre" id="sobreSection">
    <Title
      title="sobre mim"
      subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
      color="var(--secondary)"
      style="z-index: 1" />
    <section class="top">
      <img src="/sobre/perfil.png" alt="" />
      <div class="top-info">
        <h1>Ana Carolina Villaça</h1>
        <p>
          25 year old Digital Designer from Denmark. Former Digital Designer at
          Y7K & Spring/Summer Copenhagen. Currently looking for a Full-time
          Position.Y7K & Spring/Summer Copenhagen. Currently looking for a
          Full-time Position.
        </p>
      </div>
    </section>
    <section class="bottom">
      <div>
        <h1>CRP</h1>
        <span>01/12930</span>
      </div>
      <div>
        <h1>instagram</h1>
        <span>@psicologa_anacarolinavillaca</span>
      </div>
      <div>
        <h1>whatsapp</h1>
        <span>(61) 98117-0400</span>
      </div>
      <div>
        <h1>email</h1>
        <span>lalalla@gmail.com</span>
      </div>
      <div>
        <h1>youtube</h1>
        <span>/acvpsicologia</span>
      </div>
      <div>
        <h1>experiência</h1>
        <span>baixar currículo</span>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.sobre {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/sobre/bg.jpg");
  background-size: cover;
  background-position: center;
  color: var(--secondary);
  min-height: fit-content;
  padding: 3rem 0 10rem;

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 850px;
    text-align: center;
    z-index: 1;
    margin-top: 4rem;

    img {
      border-radius: 50%;
      width: 300px;
      aspect-ratio: 1;
      object-fit: cover;
      object-position: top;
      margin-right: 4rem;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.396);
    }

    .top-info {
      h1 {
        font-size: 3.5rem;
        margin: 1rem 0;
        font-weight: normal;
      }

      p {
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
  }

  .bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    z-index: 1;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      h1 {
        font-size: 1.4rem;
      }

      span {
        font-size: 1.2rem;
      }
    }

    div:hover h1 {
      color: var(--secondary);
    }
  }
}

.sobre::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(241, 241, 241, 0.5);
  z-index: 0;
}
</style>
