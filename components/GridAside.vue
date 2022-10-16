<template>
  <aside class="grid__aside">
    <div class="references">
      <h2>{{ $t('asideTitleOne') }}</h2>
      <ul>
        <!-- <li>
          <a href="#" target="_blank">
            <span class="arrow">↳ </span>
            <span>Al Halqa</span>
          </a>
        </li> -->
        <li>
          <a href="https://ristorante-umbria.de/" target="_blank">
            <span class="arrow">↳ </span>
            <span>Feinkost Umbria</span>
          </a>
        </li>
        <li>
          <a href="https://biscotti.netlify.app/" target="_blank">
            <span class="arrow">↳ </span>
            <span>Biscotti</span>
          </a>
        </li>
        <li>
          <a href="https://jessica.gatsbyjs.io/" target="_blank">
            <span class="arrow">↳ </span>
            <span>Jessica Portfolio</span>
          </a>
        </li>
        <li>
          <a href="https://aspect-ratio.dev/" target="_blank">
            <span class="arrow">↳ </span>
            <span>Aspect Ratio</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="contact">
      <h2>{{ $t('asideTitleTwo') }}</h2>
      <ul>
        <li>
          <a href="mailto:developerhub@protonmail.com" class="contact__mail">
            <span class="arrow">↳ </span>
            <span>hello@developerhub.tech </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/developerhub.tech/"
            target="_blank"
          >
            <span class="arrow">↳ </span>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="imprint">
      <h2>{{ $t('asideTitleThree') }}</h2>
      <address class="address">
        <a href="mailto:hello@developerhub.tech" class="address__link">
          <span>mail: hello@developerhub.tech </span>
        </a>
        <!-- <a href="tel:+176 22622962" class="address__link">
          <span>0176 22622962</span>
        </a> -->
      </address>
      <p class="imprint__text">{{ $t('asideImprint') }}</p>
    </div>

    <footer>
      <small class="copyright">© 2022 developer:hub</small>
    </footer>
  </aside>
</template>

<script>
export default {
  // page properties go here
};
</script>
