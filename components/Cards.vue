<template>
    <section>
        <div class="content">
            <h2 class="is-size-4 has-text-weight-bold mt-2">{{headline}}</h2>
            <p>{{subHeadline}}</p>
            <div class="columns is-multiline">
                <div v-for="card in cards" class="column is-one-third">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                            {{card.fields.title}}
                            </p>
                            <Icon v-if="icons" :name="card.fields.title"/>
                            <!-- <button class="card-header-icon" aria-label="more options">
                            <span class="icon">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                            </button> -->
                        </header>
                        <div class="card-content" v-if="card.fields.description">
                            <div class="content">
                            {{card.fields.description}}
                            <!-- <br> -->
                            <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
                            </div>
                        </div>
                        <footer class="card-footer">
                            <!-- <a href="#" class="card-footer-item">Save</a>
                            <a href="#" class="card-footer-item">Edit</a> -->
                            <NuxtLink :to="`${prepend || ''}${card.fields.slug}`" class="card-footer-item">{{ctaText || 'Learn more'}}</NuxtLink>
                        </footer>
                    </div>
                </div>
            </div>
            <NuxtLink v-if="more" :to="more.to" class="buttons is-right">
              <button :class="`button is-${more.is || 'info'}`">{{more.text || 'See all'}}</button>
            </NuxtLink>

        </div>
    </section>
</template>
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
<script>
export default {
    props: ['cards', 'headline', 'subHeadline', 'more', 'prepend', 'icons', 'ctaText']
}
</script>