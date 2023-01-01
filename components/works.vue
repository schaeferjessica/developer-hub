<template>
  <div class="works">
    <h2>{{ $t('worksH2') }}</h2>
    <ul class="works__grid">
      <li class="works__item">
        <a
          href="https://www.alhalqa-virtual.com/"
          class="works__item-inner"
          target="_blank"
        >
          <div class="works__image">
            <img src="/assets/images/works-1.webp" alt="" loading="lazy" />
          </div>
          <span>Al Halqa *coming soon*</span>
        </a>
      </li>

      <li class="works__item">
        <a
          href="https://ristorante-umbria.de/"
          class="works__item-inner"
          target="_blank"
        >
          <div class="works__image">
            <img src="/assets/images/works-2.webp" alt="" loading="lazy" />
          </div>
          <span>Feinkost Umbria</span>
        </a>
      </li>

      <li class="works__item">
        <a
          href="https://biscotti.netlify.app/ "
          class="works__item-inner"
          target="_blank"
        >
          <div class="works__image">
            <img src="/assets/images/works-3.webp" alt="" loading="lazy" />
          </div>
          <span>Biscotti</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss">
@use '/styles/generics' as *;

.works__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(2rem + 8vw);
}
.works__item:nth-child(even) {
  display: flex;
  justify-content: flex-end;
}
.works__item-inner {
  @include font-size--small;

  font-style: italic;
  max-width: 70vw;
  display: block;
}
</style>
