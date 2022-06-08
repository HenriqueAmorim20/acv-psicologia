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
  <footer class="footer" id="footer">
    <section class="left">
      <div class="name" @click="scrollTop()">
        <img src="/logos/logo.png" alt="Ana Carolina Villaça" />
        <h1>Ana Carolina Villaça</h1>
      </div>
      <div class="social">
        <a
          class="link"
          href="https://wa.me/5561981170400"
          target="_blank"
          rel="noopener noreferrer">
          <Icon class="link-icon" icon="ph:whatsapp-logo-thin" />
        </a>
        <a
          class="link"
          href="https://www.instagram.com/psicologa_anacarolinavillaca/"
          target="_blank"
          rel="noopener noreferrer">
          <Icon class="link-icon" icon="ph:instagram-logo-thin" />
        </a>
        <a
          class="link"
          href="https://www.youtube.com/channel/UCFq-F11A86ShC4ha-Crt8Yg"
          target="_blank">
          <Icon class="link-icon" icon="arcticons:youtube" />
        </a>
      </div>
    </section>
    <section class="right">
      <span>
        All rights reserved Ana Carolina Villaça &copy;
        {{ new Date().getFullYear() }}
      </span>
      <span>
        Coded By:
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
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background);
  color: var(--primary);
  padding: 1.5rem 2rem 2.5rem 0rem;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    .name {
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        width: 130px;
      }

      h1 {
        font-size: 2rem;
        font-family: "WorkSansThin";
      }
    }

    .social {
      margin-top: 1rem;
      font-size: 1.8rem;
      a {
        margin: 0 1rem;
        color: var(--primary);
      }

      a:hover {
        color: var(--secondary);
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      margin-top: 1rem;
      a {
        font-weight: bold;
        color: var(--primary);
        text-decoration: none;
        margin-left: 0.5rem;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .footer {
    flex-direction: column;
    .right {
      align-items: center;
    }
  }
}

@media only screen and (max-width: 450px) {
  .footer {
    padding: 2rem 1rem;

    .left {
      .name {
        img {
          width: 80px;
        }
        h1 {
          font-size: 1.5rem;
        }
      }

      .social {
        font-size: 1.5rem;
      }
    }
    .right {
      text-align: center;
      align-items: center;
    }
  }
}
</style>
