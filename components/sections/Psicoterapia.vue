<script setup lang="ts">
reveal(".psicoterapia section p", 2500, 30, "left", 200, 150);
</script>

<template>
  <div class="psicoterapia" id="psicoterapiaSection">
    <section>
      <Title title="psicoterapia" subtitle="conheça mais sobre o processo da psicoterapia" />
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text (sentence,
        paragraph, page, etc.) that doesn't distract from the layout. A practice not without
        controversy, laying out pages with meaningless filler text can be very useful when the focus
        is meant to be on design, not content.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when Letraset used it on
        their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text
        with their software. Today it's seen all around the web; on templates, websites, and stock
        designs. Use our generator to get your own, or read on for the authoritative history of
        lorem ipsum.
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
      font-size: clamp(1.1rem, 1.5vw, 1.4rem);
      text-indent: 2rem;
      margin: 1rem 0;
      line-height: clamp(1.5rem, 2.5vw, 2rem);
    }

    p::before {
      content: "";
      display: block;
      border-left: 5px solid var(--background);
      margin-right: 2rem;
    }

    p:first-of-type {
      margin-top: 5rem;
    }
  }

  aside {
    width: 35%;
    background-image: url("/psicoterapia/abacaxi.jpg");
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
