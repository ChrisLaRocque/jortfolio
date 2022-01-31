<template>
  <section class="is-flex is-justify-content-flex-end is-align-items-center">
    <div class="is-flex is-align-items-center px-4">
      <Icon name="Nuxt" style="margin-right: 5px" />
      <p style="padding-right: 10px; line-height: 1.5rem; font-weight: bold">
        Built with Nuxt
      </p>
      <p>...but it doesn&apos;t have to be</p>
    </div>
    <div class="field is-grouped">
      <a href="https://gatsby.larocque.dev/" title="Gatsby on Gatsby Cloud">
        <button class="button mx-2">
          <Icon name="Gatsby" style="color: #663399" />&nbsp;<span
            >This site on Gatsby</span
          >
        </button>
      </a>
      <a href="https://next.larocque.dev/" title="Next on Netlify">
        <button class="button">
          <Icon name="Next" />&nbsp;<span>This site on Next</span>
        </button>
      </a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  background: black;
  color: white;
}
</style>
