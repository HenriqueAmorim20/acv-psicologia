<script setup lang="ts">
import { Icon } from "@iconify/vue";
reveal("#homeName", 2500, 40, "left", 0);
reveal("#homeRole", 2500, 40, "left", 200);
reveal("#homePhrase", 2500, 40, "left", 400);
reveal("#homeSocial", 2500, 40, "bottom", 0);
</script>

<template>
  <div class="homeSection" id="homeSection">
    <div class="introduction">
      <h1 class="name" id="homeName">Ana Carolina Villaça</h1>
      <h2 class="role" id="homeRole">Psicóloga Clínica</h2>
      <p class="phrase" id="homePhrase">
        "Um pássaro não canta por estar feliz, ele está feliz porque canta."
      </p>
    </div>

    <aside class="social-media" id="homeSocial">
      <a class="link" href="https://wa.me/5561981170400" target="_blank" rel="noopener noreferrer">
        <Icon class="link-icon" icon="ri:whatsapp-fill" />
      </a>
      <a
        class="link"
        href="https://www.instagram.com/psicologa_anacarolinavillaca/"
        target="_blank"
        rel="noopener noreferrer">
        <Icon class="link-icon" icon="ant-design:instagram-filled" />
      </a>
      <a
        class="link"
        href="https://www.youtube.com/channel/UCFq-F11A86ShC4ha-Crt8Yg"
        target="_blank">
        <Icon class="link-icon" icon="ant-design:youtube-filled" />
      </a>
      <a class="link" href="https://www.tiktok.com/@acvpsicologia" target="_blank">
        <Icon class="link-icon" icon="logos:tiktok-icon" />
      </a>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.homeSection {
  min-height: 100vh;
  background-image: url("/backgrounds/background.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  .introduction {
    font-family: "WorkSansThin";
    padding: 0 0 0 6%;
    .name {
      font-size: 4rem;
      font-weight: normal;
    }
    .role {
      font-size: 3rem;
      font-weight: normal;
      margin: 0.5rem 0 1rem;
    }
    .phrase {
      font-size: 1.5rem;
      max-width: 75%;
    }
  }

  .social-media {
    position: absolute;
    inset: auto 1rem 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.7rem;
    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 0.4rem 0;
      color: var(--primary);
      :hover {
        color: var(--secondary) !important;
      }
    }
  }

  .social-media::after {
    display: block;
    content: "";
    border-right: 1px solid black;
    height: 150px;
    margin: 0.8rem 0 0;
  }
}

@media only screen and (max-width: 1000px) {
  .homeSection {
    .introduction {
      padding: 0 0 0 4%;
      .name {
        font-size: 3rem;
      }
      .role {
        font-size: 2rem;
      }
      .phrase {
        font-size: 1.2rem;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .homeSection {
    .introduction {
      padding: 0;
      .name {
        font-size: 2.1rem;
      }
      .role {
        font-size: 1.7rem;
      }
      .phrase {
        font-size: 1.1rem;
        max-width: 90%;
      }
    }
    .social-media {
      inset: auto 0.5rem 1.5rem auto;
      flex-direction: row;
      .link-icon {
        margin: 0 0.4rem;
      }
    }

    .social-media::after {
      border-bottom: 1px solid var(--primary);
      height: 0;
      width: 150px;
      margin: 0 0 0 0.8rem;
    }
  }
}

@media only screen and (max-width: 600px) {
  .homeSection {
    background-image: url("/backgrounds/background-mobile.jpeg");
    background-position: right;
  }
}
</style>
