<template>
  <article id="in-progress" ref="inProgress" class="message is-warning">
    <div class="message-header">
      <p>In progress...</p>
      <button class="delete" aria-label="delete" @click="close"></button>
    </div>
    <div class="message-body">
      My bad y'all, life is crazy and/or I'm trying to remember all the deets of
      this specific project.
    </div>
  </article>
</template>
<script>
export default {
  methods: {
    close() {
      this.$refs.inProgress.style.display = "none";
    },
  },
};
</script>
<style lang="scss">
#in-progress {
  position: absolute;
  max-width: 20vw;
  bottom: 1.5rem;
  right: 1.5rem;
  @media only screen and (max-width: 768px) {
    max-width: 95vw;
    bottom: 0.5rem;
    right: 0.5rem;
    position: sticky;
  }
}
</style>
