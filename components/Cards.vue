<template>
  <section>
    <div class="content">
      <h2 class="is-size-4 has-text-weight-bold mt-2">{{ headline }}</h2>
      <p>{{ subHeadline }}</p>
      <div class="columns is-multiline">
        <div
          v-for="card in cards"
          :key="card.fields.slug"
          class="column is-one-third"
        >
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{ card.fields.title }}
              </p>
              <Icon v-if="icons" :name="card.fields.title" />
            </header>
            <div v-if="card.fields.description" class="card-content">
              <div class="content">
                {{ card.fields.description }}
              </div>
            </div>
            <footer class="card-footer">
              <NuxtLink
                :to="`${prepend || ''}${card.fields.slug}`"
                class="card-footer-item"
                >{{
                  `${
                    ctaText ? `${ctaText} ${card.fields.title}` : "Learn More"
                  }`
                }}</NuxtLink
              >
            </footer>
          </div>
        </div>
      </div>
      <NuxtLink v-if="more" :to="more.to" class="buttons is-right">
        <button :class="`button is-${more.is || 'black'}`">
          {{ more.text || "See all" }}
        </button>
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    cards: { type: Array, default: null },
    headline: { type: String, default: null },
    subHeadline: { type: String, default: null },
    more: { type: Object, default: null },
    prepend: { type: String, default: null },
    icons: Boolean,
    ctaText: { type: String, default: null },
  },
};
</script>
<style lang="scss">
.card-header {
  background: black;
  .card-header-title {
    color: #fff;
  }
  .icon {
    color: white;
    margin: 10px 10px 0 0;
    svg {
      transform: scale(1.5);
      transform-origin: top right;
    }
  }
}
</style>
