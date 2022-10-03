<script setup>
const head = useLocaleHead({ addSeoAttributes: true });
</script>

<template>
  <Html :lang="head.htmlAttrs.lang">
    <Head />
    <Body>
      <nuxt-child />
    </Body>
  </Html>
</template>
