<script setup lang="ts"></script>

<template>
  <div class="sobre" id="sobrePage">
    <section class="perfil">
      <img src="/sobre/perfil.png" alt="" />
    </section>
    <section class="top">
      <h1>Ana Carolina Villaça</h1>
      <p>
        25 year old Digital Designer from Denmark. Former Digital Designer at
        Y7K & Spring/Summer Copenhagen. Currently looking for a Full-time
        Position.
      </p>
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
  background-color: #dadada63;
  min-height: 100vh;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  .perfil {
    img {
      border-radius: 50%;
      width: 250px;
      aspect-ratio: 1;
      object-fit: cover;
      object-position: top;
    }
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    text-align: center;

    h1 {
      font-size: 3rem;
      margin: 1rem 0;
      font-weight: normal;
    }

    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }

  .bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      h1 {
        font-size: 1.2rem;
      }

      span {
        font-size: 1rem;
      }
    }

    div:hover h1 {
      color: var(--secondary);
    }
  }
}

@media only screen and (max-width: 650px) {
  .sobre {
    padding: 3rem 1rem;
    .bottom {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media only screen and (max-width: 450px) {
  .sobre {
    padding: 4rem 1rem;
    .top {
      h1 {
        font-size: 1.9rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
    .bottom {
      margin-top: 2rem;
      grid-template-columns: 1fr;
    }
  }
}
</style>
