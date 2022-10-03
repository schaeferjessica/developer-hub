<template>
  <main class="grid__main">
    
    <template v-if="!showForm">
      <span class="tagline">{{ $t("mainTagline") }}</span>
      <header>
        <h1 class="title">{{ $t("mainHeadline") }}</h1>
        <p class="text">{{ $t("mainTextOne") }}<i>{{ $t("mainTextTwo") }}</i>{{ $t("mainTextThree") }}</p>
      </header>
      <button class="button" @click="showForm = true">
        <span class="button-text-regular">{{ $t("mainButtonRegular") }}</span>
        <span class="button-text-thin">{{ $t("mainButtonThin") }}</span>
      </button>
    </template>

    <form action="#" class="from" v-if="showForm">
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

  </main>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
    }
  }
}

</script>