<template>
  <main class="grid__main">
    <div
      class="main"
      :class="{ 'main--active': startAnimation }"
      v-if="!showForm"
    >
      <span class="main__tagline">{{ $t('mainTagline') }}</span>
      <header class="main__header">
        <h1 class="main__title">{{ $t('mainHeadline') }}</h1>
        <p class="main__text">
          {{ $t('mainTextOne') }}<i>{{ $t('mainTextTwo') }}</i
          >{{ $t('mainTextThree') }}
        </p>
      </header>
      <button class="button" @click="showForm = true">
        <span class="button-text-regular">{{ $t('mainButtonRegular') }}</span>
        <span class="button-text-thin">{{ $t('mainButtonThin') }}</span>
      </button>
    </div>

    <form
      action="#"
      class="from"
      v-if="showForm"
      ref="form"
      @submit.prevent="sendEmail"
    >
      <!-- <button class="button" @click="showForm = false">
        <span class="button-text-regular">{{ $t("mainButtonBackRegular") }}</span>
        <span class="button-text-thin">{{ $t("mainButtonBackThin") }}</span>
      </button> -->

      <label for="name" class="from__label">{{ $t('formLabelName') }}</label>
      <input
        :placeholder="$t('formPlaceholderName')"
        name="name"
        type="text"
        id="name"
        class="from__input"
      />

      <label for="email" class="from__label">{{ $t('formLabelEmail') }}</label>
      <input
        :placeholder="$t('formPlaceholderEmail')"
        name="email"
        type="text"
        id="email"
        class="from__input"
        required
      />

      <label for="project" class="from__label">{{
        $t('formLabelProject')
      }}</label>
      <input type="text" id="project" name="project" class="from__input" />

      <label for="pages" class="from__label">{{ $t('formLabelPages') }}</label>
      <input type="text" id="pages" name="pages" class="from__input" />

      <!-- Honeypot -->
      <label for="honeypot-name" style="display: none">Its a trap</label>
      <input
        type="text"
        id="honeypot-name"
        name="honeypot-name"
        ref="honeypotEmptyEl"
        style="display: none"
      />

      <label for="honeypot-email" class="sr-only" aria-hidden="true"
        >Another trap</label
      >
      <input
        class="sr-only"
        type="text"
        id="honeypot-email"
        name="honeypot-email"
        :value="honeypotEmail"
        ref="honeypotjsEl"
        aria-hidden="true"
      />

      <button type="submit" name="newsletter" class="button">
        <span class="button-text-regular">{{ $t('formSubmitRegular') }}</span>
        <span class="button-text-thin">{{ $t('formSubmitThin') }}</span>
      </button>
    </form>

    <div class="toast" :class="{ 'toast--active': showToast }">
      <p class="toast__text">
        {{ $t('formToast') }}
      </p>
    </div>
    <!-- <div v-if="showToast">
      <p class="main__text" v-if="formSent">
        Absenden war erfolgreich. Wir melden uns vielleicht mal
      </p>
      <p class="main__text" v-else>Ups, da ist was schief gelaufen!</p>
    </div> -->
  </main>
</template>
<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      showForm: false,
      formSent: false,
      showToast: false,
      honeypotEmail: 'honeypot@honey.com',
      animation: false,
    };
  },
  computed: {
    startAnimation() {
      return this.animation || !this.showForm;
    },
  },
  methods: {
    sendEmail() {
      // catch bots
      if (
        this.$refs.honeypotjsEl.value !== this.honeypotEmail &&
        this.$refs.honeypotEmptyEl.value
      ) {
        return;
      }

      emailjs
        .sendForm(
          this.$config.emailJsServiceId,
          this.$config.emailJsTemplateId,
          this.$refs.form,
          this.$config.emailJsPublicKey
        )
        .then(
          () => {
            this.formSent = true;
            this.showToast = true;
            this.showForm = false;

            setTimeout(() => {
              this.showToast = false;
            }, 5000);
          },
          error => {
            console.error(error.text);
            this.formSent = false;
            this.showToast = true;

            setTimeout(() => {
              this.showToast = false;
            }, 5000);
          }
        );
    },
  },
  mounted() {
    this.animation = true;
  },
};
</script>
