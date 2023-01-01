<script setup>
const head = useLocaleHead({ addSeoAttributes: true });
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang">
      <Head />
      <Body>
        <nuxt-child />
      </Body>
    </Html>
  </div>
</template>
