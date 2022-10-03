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

    <form action="#" class="from">
      <label for="name" class="from__label">{{ $t("mainLabelName") }}</label>
      <input placeholder="Jane Doe" name="name" type="text" id="name" class="from__input">

      <label for="email" class="from__label">{{ $t("mainLabelEmail") }}</label>
      <input placeholder="janedoe@mail.com" name="email" type="text" id="email" class="from__input">

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