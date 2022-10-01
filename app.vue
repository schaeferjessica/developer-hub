<template>
  <div class="grid">
    <header class="grid__header">
      <p>Hello, we are freelance web-developer 
        <a href="">↳ Nat Kosakul</a> &
        <a href="">↳ Jessica Schäfer</a>
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
          <li><a href="#">↳ Al Halqa</a></li>
          <li><a href="#">↳ Feinkost Umbria</a></li>
          <li><a href="#">↳ Biscotti</a></li>
        </ul>
      </div>
      
      <div class="contact">
        <h2>Contact:</h2>
        <a href="#">↳ developerhub@protonmail.com</a>
      </div>

      <div class="imprint">
        <h2>Imprint:</h2>
        <address>
          <a href="mailto:developerhub@protonmail.com">mail: developerhub@protonmail.com</a><br>
          <a href="tel:+176 22622962">phone: 0176 22622962</a>
        </address>
        <span>USt-IdNr.: DE253194968</span>
        <p>Responsible for programming and journalistic-editorial content according to § 55 RStV developer:hub, Zepplinstrasse 13A, 97074 Würzburg</p>
      </div>
    </aside>

    <main class="grid__main">
      <span>Web-Design & Web-Development</span>
      <header>
        <h1>we design & program websites</h1>
        <p>Let's work together today to create an awesome website for your business.</p>
      </header>
      <a href="#">Get in touch</a>

      <footer>
        <small>© 2022 developer:hub</small>
      </footer>
    </main>
  </div>
</template>

<script>
  export default {
    // page properties go here
  }
</script>
