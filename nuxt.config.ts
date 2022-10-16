// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailJsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
  },
  meta: {
    title: 'developer:hub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Wir gestalten & programmieren Webseiten based in Würzburg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },
  css: [
    // SCSS file in the project
    '@/styles/index.scss',
  ],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    baseUrl: 'https://developerhub.vercel.app/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'de',
        iso: 'de-DE',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      allowComposition: true,
      fallbackLocale: 'en',
      messages: {
        en: {
          // header
          headerIntro: 'Hola, we are developer:hub',
          // aside
          asideTitleOne: 'References:',
          asideTitleTwo: 'Contact:',
          asideTitleThree: 'Imprint:',
          asideImprint:
            'Responsible for programming and journalistic-editorial content: developer:hub, USt-IdNr.: DE253194968 Würzburg, Germany',
          // main
          mainTagline: 'Web-Design & Web-Development',
          mainHeadline: 'we design & program websites',
          mainTextOne: 'Let us work together today to ',
          mainTextTwo: 'create an awesome website ',
          mainTextThree: 'for your business.',
          mainButtonRegular: 'get in ',
          mainButtonThin: 'touch',
          // form
          formLabelName: 'Hi, thanks for getting in touch! What is your name?',
          formPlaceholderName: 'Jane Doe',
          formLabelEmail:
            'What email address can we reach you at?* Only to get in touch, not to send spam!',
          formPlaceholderEmail: "janedoe{'@'}mail.com",
          formLabelProject:
            'Tell us about your project, send us examples, links, or just think out loud.',
          formLabelPages:
            'How many pages are you looking to integrate into your website?',
          formSubmitRegular: 'get a  ',
          formSubmitThin: 'quote',
          formToast:
            'Thanks for getting in touch! We will get back to you soon.',

          mainButtonBackRegular: 'take me  ',
          mainButtonBackThin: 'back',
        },
        de: {
          // header
          headerIntro: 'Hola, wir sind developer:hub',
          // aside
          asideTitleOne: 'Referenzen:',
          asideTitleTwo: 'Kontakt:',
          asideTitleThree: 'Impressum:',
          asideImprint:
            'Verantwortlich für Programmierung und journalistisch-redaktionelle Inhalte: developer:hub, USt-IdNr.: DE253194968 Würzburg, Deutschland',
          // main
          mainTagline: 'Web-Design & Web-Entwicklung',
          mainHeadline: 'Wir gestalten & programmieren Webseiten',
          mainTextOne:
            'Lassen Sie uns noch heute zusammenarbeiten, um eine fantastische ',
          mainTextTwo: 'Website für Ihr Unternehmen ',
          mainTextThree: 'zu erstellen.',
          mainButtonRegular: 'in kontakt ',
          mainButtonThin: 'kommen',
          // form
          formLabelName:
            'Hallo, vielen Dank für Ihre Kontaktaufnahme! Wie ist Ihr Name?',
          formPlaceholderName: 'Erika Mustermann',
          formLabelEmail:
            'Mit welcher E-Mail-Adresse können wir Sie erreichen?* Nur um in Kontakt zu treten, nicht um Spam zu senden!',
          formPlaceholderEmail: "erikamustermann{'@'}mail.com",
          formLabelProject:
            'Erzählen Sie uns von Ihrem Projekt, senden Sie uns Beispiele, Links oder denken Sie einfach laut.',
          formLabelPages:
            'Wie viele Seiten möchten Sie in Ihre Website integrieren?',
          formSubmitRegular: 'ein Angebot ',
          formSubmitThin: 'erhalten',
          formToast:
            'Vielen Dank für Ihre Kontaktaufnahme! Wir melden uns bald.',

          mainButtonBackRegular: 'zurück ',
          mainButtonBackThin: 'bitte',
        },
      },
    },
  },
});
