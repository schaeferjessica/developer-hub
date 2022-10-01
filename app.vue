<template>
  <div class="grid">
    <header class="grid__header">
      <p class="intro">Hello, we are freelance web-developer<br>
        <a href="https://www.linkedin.com/in/nkosakul/" target="_blank">
          <span>Nat Kosakul</span>
          <span class="arrow"> ↳</span>
        </a> &
        <a href="https://www.linkedin.com/in/jessicaschafer/" target="_blank">
          <span>Jessica Schäfer</span>
          <span class="arrow"> ↳</span>
        </a>
      </p>

      <nav class="language-switch">
        <a href="#/en/" hreflang="en" aria-current="page">
          <abbr title="English">en</abbr>
        </a>
        <a href="#/de/" hreflang="de">
          <abbr title="Deutsch">de</abbr>
        </a>
      </nav>
    </header>

    <aside class="grid__aside">
      <div class="references">
        <h2>References:</h2>
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
        <h2>Contact:</h2>
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
        <h2>Imprint:</h2>
        <address class="address">
          <a href="mailto:developerhub@protonmail.com" class="address__link">
            <span>mail: developerhub@protonmail.com</span>
          </a>
          <a href="tel:+176 22622962" class="address__link">
            <span>phone: 0176 22622962</span>
          </a>
        </address>
        <p class="imprint__text">Responsible for programming and journalistic-editorial content according to § 55 RStV developer:hub, USt-IdNr.: DE253194968 Zepplinstrasse 13A, 97074 Würzburg</p>
      </div>
    </aside>

    <main class="grid__main">
      <div class="main__context">
        <span class="tagline">Web-Design & Web-Development</span>
        <header>
          <h1 class="title">we design & program websites</h1>
          <p class="text">Let's work together today to <i>create an awesome website</i> for your business.</p>
        </header>
        <a href="#" class="button">
          <span class="button-text-regular">Get in </span>
          <span class="button-text-thin">touch</span>
        </a>
      </div>

      <footer>
        <small class="copyright">© 2022 developer:hub</small>
      </footer>
    </main>
  </div>
</template>

<script>
  export default {
    // page properties go here
  }
</script>
