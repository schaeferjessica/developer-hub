<template>
  <header class="grid__header">
    <p class="intro">{{ $t("headerIntro") }}<br>
      <a href="https://www.linkedin.com/in/nkosakul/" target="_blank">
        <span>Nat Kosakul</span>
        <span class="arrow"> ↳ </span>
      </a> &
      <a href="https://www.linkedin.com/in/jessicaschafer/" target="_blank">
        <span>Jessica Schäfer</span>
        <span class="arrow"> ↳ </span>
      </a>
    </p>

    <nav class="language-switch">
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
  }
</script>
