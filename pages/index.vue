<template>
  <div>
    <Navi />
    <main class="main">
      <intro />
      <about />
      <works />
      <imprint />
    </main>
  </div>
</template>

<script setup>
import Navi from '../components/navi.vue';
import Intro from '../components/intro.vue';
import About from '../components/about.vue';
import Works from '../components/works.vue';
import Imprint from '../components/imprint.vue';
</script>
