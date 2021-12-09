<template>
    <section>
        <div class="content">
            <h2 class="is-size-4 has-text-weight-bold">Projects</h2>
            <p>Check out some of the work I've done.</p>
            <div class="columns">
                <div v-for="card in cards" class="column">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                            {{card.fields.title}}
                            </p>
                            <!-- <button class="card-header-icon" aria-label="more options">
                            <span class="icon">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                            </button> -->
                        </header>
                        <div class="card-content">
                            <div class="content">
                            {{card.fields.description}}
                            <!-- <br> -->
                            <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
                            </div>
                        </div>
                        <footer class="card-footer">
                            <!-- <a href="#" class="card-footer-item">Save</a>
                            <a href="#" class="card-footer-item">Edit</a> -->
                            <NuxtLink :to="`/projects/${card.fields.slug}`" class="card-footer-item">Learn more</NuxtLink>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.card-header {
    background: black;
    .card-header-title {
        color: #fff;
    }
}
</style>
<script>
export default {
    props: ['cards']
}
</script>