<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="sobre" id="sobreSection">
    <Title
      title="sobre mim"
      subtitle="um pouco da minha história"
      color="var(--secondary)"
      style="z-index: 2" />
    <div class="sobre-content">
      <div class="image" />
      <aside>
        <h1 class="name">Ana Carolina Villaça</h1>
        <b class="crp">CRP: 01/12930</b>
        <span class="desc">
          Especialista em bla bla bla bla bla. Profissional de psicoterapia com
          x anos de experiência.
        </span>
        <span class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <span class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <span class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </span>
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
          <button class="btn">baixar currículo</button>
        </div>
      </aside>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sobre {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/sobre/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .sobre-content {
    display: flex;
    padding: 3rem 1rem;
    z-index: 2;

    aside {
      margin: 0 3rem;
      max-width: 500px;
      display: flex;
      flex-direction: column;

      .name {
        font-size: 3rem;
        font-family: "WorkSansThin";
        font-weight: 200;
        margin-bottom: 1rem;
      }

      .crp {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }

      .desc {
        font-family: "WorkSansThin";
        font-size: 1.3rem;
        font-weight: 400;
        margin-bottom: 1.4rem;
      }

      .social-media {
        display: flex;
        align-items: center;
        width: 100%;
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

        button {
          background-color: var(--secondary);
          color: var(--background);
          border: 1px solid var(--secondary);
          border-radius: 20px;
        }

        button:hover {
          background-color: var(--background);
          color: var(--secondary);
        }
      }
    }
    .image {
      position: relative;
      min-width: 300px;
      width: 350px;
      aspect-ratio: 1;
      background-image: url("/sobre/perfil.jpg");
      background-size: cover;
      background-position: center;
      border-radius: 5px;
      box-shadow: 3px 3px 3px lightgray;
    }
  }
}

.sobre::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.5);
}

@media only screen and (max-width: 870px) {
  .sobre {
    background-size: contain;
    background-position: bottom;
    background-color: #e2dedc;
    .sobre-content {
      flex-direction: column;
      align-items: center;

      aside {
        max-width: 450px;
        margin: 2rem 0;
      }
      .image {
        max-width: 320px;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .sobre {
    .sobre-content {
      aside {
        padding: 0 0.5rem;
        .name {
          font-size: 2rem;
        }

        .crp {
          font-size: 1rem;
          font-family: "WorkSansRegular";
          font-weight: normal;
        }

        .desc {
          font-size: 1rem;
          font-family: "WorkSansLight";
          color: var(--secondary);
        }

        .social-media {
          flex-wrap: wrap;

          .link {
            font-size: 1.2rem;
          }

          button {
            margin-top: 1rem;
            font-size: 0.7rem;
          }
        }
      }
    }

    .image {
      max-width: 300px !important;
    }
  }
}
</style>
