<template>
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
</template>./GridAside.vue