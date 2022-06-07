<script setup lang="ts"></script>

<template>
  <div class="psicoterapia" id="psicoterapiaSection">
    <section>
      <Title
        title="psicoterapia"
        subtitle="conheça mais sobre tudo por trás do processo da psicoterapia" />
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </p>
    </section>
    <aside>
      <div />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.psicoterapia {
  display: flex;
  background-color: var(--secondary);
  color: var(--background);

  section {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: clamp(1.1rem, 1.5vw, 1.4rem);
      text-indent: 2rem;
      margin: 1rem 0;
      line-height: clamp(1.5rem, 2.5vw, 2rem);
    }

    p:first-of-type {
      margin-top: 5rem;
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;

    div {
      position: relative;
      width: clamp(300px, 70%, 400px);
      aspect-ratio: 3/4;
      background-image: url("/psicoterapia/abacaxi.jpg");
      background-size: cover;
      background-position: center;
      border-radius: 5px;
      z-index: 1;
    }
    div::before {
      content: "";
      position: absolute;
      inset: 1.3vw -1.3vw -1.3vw 1.3vw;
      border-radius: 5px;
      border: 2px solid var(--background);
      position: absolute;
      z-index: -1;
    }
  }
}

@media only screen and (max-width: 800px) {
  .psicoterapia {
    flex-direction: column;
    section,
    aside {
      width: 100%;
    }

    aside {
      margin-top: 2rem;
      div {
        max-width: 320px;
      }
      div::before {
        display: none;
      }
    }
  }
}
</style>
