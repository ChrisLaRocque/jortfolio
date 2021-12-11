<template>
  <nav
    class="navbar is-dark py-2"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <NuxtLink
        to="/"
        class="navbar-item is-size-4-touch is-size-4 has-text-weight-bold"
      >
        Chris LaRocque
      </NuxtLink>
      <a
        id="navbar-toggle"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="mobileNavToggle"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <NuxtLink to="/projects" class="navbar-link"> Projects </NuxtLink>
          <div class="navbar-dropdown">
            <NuxtLink to="/projects/gatsby-v3-migration" class="navbar-item">
              Gatsby v3 Migration
            </NuxtLink>
            <NuxtLink to="/projects/greenhouse-jobs-board" class="navbar-item">
              Greenhouse jobs board
            </NuxtLink>
            <NuxtLink to="/projects/wifeapedia" class="navbar-item">
              Wifeapedia
            </NuxtLink>
            <NuxtLink to="/projects/larocque-dev" class="navbar-item">
              LaRocque.dev
            </NuxtLink>
            <!-- <hr class="navbar-divider">
                    <a class="navbar-item" href="mailto:larocque.christopher@gmail.com">
                        Report an issue
                    </a> -->
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <NuxtLink to="/tech" class="navbar-link"> Tech </NuxtLink>
          <div class="navbar-dropdown">
            <NuxtLink to="/tech/react" class="navbar-item"> React </NuxtLink>
            <NuxtLink to="/projects/vue" class="navbar-item"> Vue </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/me" class="navbar-item"> About + Contact </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script>
// Mobile nav toggle behavior
export default {
  methods: {
    mobileNavToggle() {
      if (process.client) {
        const toggle = document.getElementById("navbar-toggle");
        const menu = document.getElementById("navbarBasicExample");

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        toggle.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      }
    },
  },
};
</script>
<style lang="scss">
.navbar {
  .navbar-brand {
    .navbar-burger {
      height: 5rem;
      width: 5rem;
      span {
        width: 24px;
        height: 3px;
      }
    }
  }
}
</style>
