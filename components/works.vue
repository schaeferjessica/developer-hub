<template>
  <div class="works">
    <h2>Ausgewählte Referenzen:</h2>
    <ul class="works__grid">
      <li class="works__item">
        <a href="" class="works__item-inner" target="_blank">
          <div class="works__image">
            <img src="/assets/images/works-1.png" alt="" />
          </div>
          <span>Al Halqa</span>
        </a>
      </li>

      <li class="works__item">
        <div class="works__item-inner">
          <a
            href="https://ristorante-umbria.de/"
            class="works__item-inner"
            target="_blank"
          >
            <div class="works__image">
              <img src="/assets/images/works-2.jpg" alt="" />
            </div>
            <span>Feinkost Umbria</span>
          </a>
        </div>
      </li>

      <li class="works__item">
        <div class="works__item-inner">
          <a
            href="https://biscotti.netlify.app/ "
            class="works__item-inner"
            target="_blank"
          >
            <div class="works__image">
              <img src="/assets/images/works-3.jpg" alt="" />
            </div>
            <span>Biscotti</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss">
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
  max-width: 70vw;
}
</style>
