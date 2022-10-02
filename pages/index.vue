<template>
  <div class="grid">
    <header class="grid__header">
      <p class="intro">{{ $t("headerIntro") }}<br>
        <a href="https://www.linkedin.com/in/nkosakul/" target="_blank">
          <span>Nat Kosakul </span>
          <span class="arrow"> ↳ </span>
        </a> &
        <a href="https://www.linkedin.com/in/jessicaschafer/" target="_blank">
          <span>Jessica Schäfer </span>
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

    <aside class="grid__aside">
      <div class="references">
        <h2>{{ $t("asideTitleOne") }}</h2>
        <ul>
          <li>
            <a href="#" target="_blank">
              <span class="arrow">↳ </span>
              <span>Al Halqa</span>
            </a>
          </li>
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
        </ul>
      </div>
      
      <div class="contact">
        <h2>{{ $t("asideTitleTwo") }}</h2>
        <ul>
          <li>
            <a href="mailto:developerhub@protonmail.com" class="contact__mail">
              <span class="arrow">↳ </span>
              <span>developerhub@protonmail.com</span>
            </a>
          </li>
          <li>
            <a href="instagram.com/developerhub" target="_blank">
              <span class="arrow">↳ </span>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="imprint">
        <h2>{{ $t("asideTitleThree") }}</h2>
        <address class="address">
          <a href="mailto:developerhub@protonmail.com" class="address__link">
            <span>developerhub@protonmail.com</span>
          </a>
          <a href="tel:+176 22622962" class="address__link">
            <span>0176 22622962</span>
          </a>
        </address>
        <p class="imprint__text">{{ $t("asideImprint") }}</p>
      </div>

      <footer>
        <small class="copyright">© 2022 developer:hub</small>
      </footer>
    </aside>

    <main class="grid__main">
      <span class="tagline">{{ $t("mainTagline") }}</span>
      <header>
        <h1 class="title">{{ $t("mainHeadline") }}</h1>
        <p class="text">{{ $t("mainTextOne") }}<i>{{ $t("mainTextTwo") }}</i>{{ $t("mainTextThree") }}</p>
      </header>
      <a href="#" class="button">
        <span class="button-text-regular">{{ $t("mainButtonRegular") }}</span>
        <span class="button-text-thin">{{ $t("mainButtonThin") }}</span>
      </a>
    </main>
  </div>
</template>

<script>
  export default {
    // page properties go here
  }
</script>
