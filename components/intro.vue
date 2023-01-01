<template>
  <div class="intro">
    <div class="intro__header">
      <h1>{{ $t('intro') }}</h1>
      <div class="intro__image">
        <img src="/assets/images/intro-1.webp" alt="" loading="lazy" />
      </div>
    </div>
    <div class="intro__images">
      <img src="/assets/images/intro-2.webp" alt="" loading="lazy" />
      <img src="/assets/images/intro-3.webp" alt="" loading="lazy" />
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.intro__header > h1 {
  margin-top: calc(2rem + 1vw);
}

.intro__image {
  display: flex;
  justify-content: flex-end;
  margin-top: calc(1rem + 1vw);
}

.intro__image > img {
  width: 75%;
}

.intro__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(0.2rem + 10vw);
  margin-top: calc(0.2rem + 10vw);
}

.intro__images img:nth-child(even) {
  margin-top: calc(1rem + 1vw);
}
</style>
