<template>
  <main class="grid__main">
    
    <template v-if="!showForm">
      <span class="tagline">{{ $t("mainTagline") }}</span>
      <header class="main__header">
        <h1 class="main__title">{{ $t("mainHeadline") }}</h1>
        <p class="main__text">{{ $t("mainTextOne") }}<i>{{ $t("mainTextTwo") }}</i>{{ $t("mainTextThree") }}</p>
      </header>
      <button class="button" @click="showForm = true">
        <span class="button-text-regular">{{ $t("mainButtonRegular") }}</span>
        <span class="button-text-thin">{{ $t("mainButtonThin") }}</span>
      </button>
    </template>

    <form action="#" class="from" v-if="showForm" ref="form" @submit.prevent="sendEmail">
      <!-- <button class="button" @click="showForm = false">
        <span class="button-text-regular">{{ $t("mainButtonBackRegular") }}</span>
        <span class="button-text-thin">{{ $t("mainButtonBackThin") }}</span>
      </button> -->

      <label for="name" class="from__label">{{ $t("mainLabelName") }}</label>
      <input :placeholder="$t('mainPlaceholderName')" name="name" type="text" id="name" class="from__input">

      <label for="email" class="from__label">{{ $t("mainLabelEmail") }}</label>
      <input :placeholder="$t('mainPlaceholderEmail')" name="email" type="text" id="email" class="from__input">

      <label for="project" class="from__label">{{ $t("mainLabelProject") }}</label>
      <input type="text" id="project" name="project" class="from__input">

      <label for="pages" class="from__label">{{ $t("mainLabelPages") }}</label>
      <input type="text" id="pages" name="pages" class="from__input">

      <button type="submit" name="newsletter" class="button">
        <span class="button-text-regular">{{ $t("mainSubmitRegular") }}</span>
        <span class="button-text-thin">{{ $t("mainSubmitThin") }}</span>
      </button>
    </form> 

    <!-- <div v-if="showToast">
      <p class="main__text" v-if="formSent">Absenden war erfolgreich. Wir melden uns vielleicht mal</p>
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
      }
    },
    methods: {
      sendEmail() {
        emailjs.sendForm(this.$config.emailJsServiceId, this.$config.emailJsTemplateId, this.$refs.form, this.$config.emailJsPublicKey)
          .then(() => {
              this.formSent = true;
              this.showToast = true;

              setTimeout(() => {
                this.showToast = false;
              }, 5000);
          }, (error) => {
              console.error(error.text);
              this.formSent = false;
              this.showToast = true;

              setTimeout(() => {
                this.showToast = false;
              }, 5000);
          });
      }
    }
  }
</script>