// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'developer:hub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
  },
  css: [
    // SCSS file in the project
    '@/styles/index.scss'
  ],
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    baseUrl: 'https://developerhub.vercel.app/',
    
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'de',
        iso: 'de-DE'
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      
      fallbackLocale: 'en',
      messages: {
        en: {
          headerIntro: 'Hello, we are freelance web-developer',
          asideTitleOne: 'References:',
          asideTitleTwo: 'Contact:',
          asideTitleThree: 'Imprint:',
          asideImprint: 'Responsible for programming and journalistic-editorial content according to § 55 RStV developer:hub, USt-IdNr.: DE253194968 Würzburg, Germany',
          mainTagline: 'Web-Design & Web-Development',
          mainHeadline: 'we design & program websites',
          mainTextOne: 'Let us work together today to ',
          mainTextTwo: 'create an awesome website ',
          mainTextThree: 'for your business.',
          mainButtonRegular: 'get in ',
          mainButtonThin: 'touch',
        },
        de: {
          headerIntro: 'Hallo wir sind Selbstständige Web-Entwickler:in',
          asideTitleOne: 'Referenzen:',
          asideTitleTwo: 'Kontakt:',
          asideTitleThree: 'Impressum:',
          asideImprint: 'Verantwortlich für Programmierung und journalistisch-redaktionelle Inhalte nach § 55 RStV developer:hub, USt-IdNr.: DE253194968 Würzburg, Deutschland',
          mainTagline: 'Web-Design & Web-Entwicklung',
          mainHeadline: 'Wir gestalten & programmieren Webseiten',
          mainTextOne: 'Lassen Sie uns noch heute zusammenarbeiten, um eine fantastisch ',
          mainTextTwo: 'Website für Ihr Unternehmen ',
          mainTextThree: 'zu erstellen.',
          mainButtonRegular: 'Kontaktieren ',
          mainButtonThin: 'Sie uns',
        },
      }
    }
  }
})
