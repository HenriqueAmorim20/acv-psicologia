<template>
  <div class="main">
    <LayoutsNavbar />
    <slot />
    <LayoutsFooter />
  </div>
</template>

<style lang="scss" scoped>
.main {
  background-image: url("/backgrounds/background.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

@media only screen and (max-width: 600px) {
  .main {
    background-image: url("/backgrounds/background-mobile.jpg");
    background-position: right;
  }
}
</style>
