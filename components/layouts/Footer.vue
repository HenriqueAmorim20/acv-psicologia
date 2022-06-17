<script setup lang="ts">
import { Icon } from "@iconify/vue";

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <footer>
    <section class="left">
      <h1 class="name">ana carolina villaça</h1>
      <span class="description">
        Especialista em bla bla bla bla bla. Profissional de psicoterapia com x
        anos de experiência.
      </span>
      <b class="crp">CPR: 01/12930</b>
      <div class="social-media">
        <a
          class="link"
          href="https://wa.me/5561981170400"
          target="_blank"
          rel="noopener noreferrer">
          <Icon class="link-icon" icon="akar-icons:whatsapp-fill" />
        </a>
        <a
          class="link"
          href="https://www.instagram.com/psicologa_anacarolinavillaca/"
          target="_blank"
          rel="noopener noreferrer">
          <Icon class="link-icon" icon="akar-icons:instagram-fill" />
        </a>
        <a
          class="link"
          href="https://www.youtube.com/channel/UCFq-F11A86ShC4ha-Crt8Yg"
          target="_blank">
          <Icon class="link-icon" icon="ant-design:youtube-outlined" />
        </a>
        <span style="flex: 1 1 auto"></span>
      </div>
    </section>
    <img src="/logos/logo.png" alt="" />
    <section class="right">
      <span class="scrollTop" @click="scrollTop()">
        Ir para o topo <Icon class="scroll-icon" icon="akar-icons:chevron-up" />
      </span>
      <span class="rights">
        Todos os direitos reservados a Ana Carolina Villaça &copy;
        {{ new Date().getFullYear() }}
      </span>
      <span class="creator">
        Criado por:
        <a
          href="http://melohenrique.com"
          target="_blank"
          rel="noopener noreferrer">
          Henrique Melo
        </a>
      </span>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  padding: 3rem 1rem;
  max-width: 1300px;
  margin: 4rem auto 0;
  border-top: 1px solid lightgray;

  .left {
    display: flex;
    flex-direction: column;
    .name {
      font-family: "WorkSansThin";
      text-transform: capitalize;
      font-size: 2rem;
    }

    .description {
      font-family: "WorkSansThinItalic";
      font-size: 1rem;
      max-width: 400px;
      margin: 1rem 0;
    }

    .social-media {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      .link {
        display: flex;
        align-items: center;
        background-color: var(--secondary);
        color: var(--background);
        font-size: 1.4rem;
        border-radius: 100%;
        aspect-ratio: 1;
        padding: 0.6rem;
        margin-right: 1rem;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.319);
      }

      .link:hover {
        opacity: 0.8;
      }
    }
  }

  img {
    width: 200px;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    .scrollTop {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-family: "WorkSansRegular";
      .scroll-icon {
        margin-left: 0.5rem;
      }
    }

    .scrollTop:hover {
      color: var(--secondary);
    }

    .rights {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      font-size: 1rem;
      text-align: right;
      font-family: "WorkSansThin";
    }

    .creator {
      a {
        color: var(--primary);
        margin-left: 0.5rem;
      }
      a:hover {
        color: var(--secondary);
      }
    }
  }
}

@media only screen and (max-width: 780px) {
  footer {
    grid-template-columns: 1fr;
    gap: 2rem;

    .left {
      align-items: center;

      .description {
        text-align: center;
      }
    }

    .right {
      align-items: center;

      .rights {
        text-align: center;
      }
    }
    img {
      margin: 0 auto;
    }
  }
}
</style>
