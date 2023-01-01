<template>
  <header class="navi__header">
    <p>developer:hub</p>
    <nav class="navi__language-switch">
      <nuxt-link :to="localePath('/', 'en')">
        <abbr title="English">en</abbr>
      </nuxt-link>
      <nuxt-link :to="localePath('/', 'de')">
        <abbr title="Deutsch">de</abbr>
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  // page properties go here
};
</script>

<style lang="scss">
.navi__header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: calc(0.1rem + 5vw);
}

.navi__language-switch {
  display: flex;
  gap: calc(0.1rem + 0.5vw);
  align-items: flex-start;
}

.navi__language-switch > a {
  text-decoration: none;
  font-style: italic;
}
</style>
