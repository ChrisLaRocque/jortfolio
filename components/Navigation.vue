<template>
    <nav class="navbar is-dark py-2" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink to="/" class="navbar-item is-size-4-touch is-size-4 has-text-weight-bold">
                Chris LaRocque
            </NuxtLink>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                    <NuxtLink to="/" class="navbar-item">
                        Home
                    </NuxtLink>
                <div class="navbar-item has-dropdown is-hoverable">
                    <NuxtLink to="/projects" class="navbar-link">
                        Projects
                    </NuxtLink>
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
                <NuxtLink to="/me" class="navbar-item">
                    About + Contact
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>
<script>
// Mobile nav toggle behavior
if (process.client) {
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
            });
        }

    });
}
    import { createClient } from '~/plugins/contentful.js';

    const client = createClient();
    export default {
        asyncData({ env, params }) {
            // console.log('params', params)
            const {project} = params
        return Promise.all([
            client.getEntries({
            content_type: 'chrisProjectPage',
            limit: 3,
            }),
            client.getEntries({
            content_type: 'tech',
            limit: 6
            }),
        ])
            .then(([projectEntries, techEntries]) => {
            // return data that should be available
            // in the template
            //   console.log('entries', entries)
              const {items} = projectEntries
              const techItems = techEntries.items
            return {projectCards: items, techCards: techItems};
            })
            .catch(console.error);
        }
    }
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
