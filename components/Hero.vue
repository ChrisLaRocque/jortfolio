<template>
    <div :class="`hero is-${colorIs || 'primary'} is-medium`">
        <div class="hero-body">
            <h1 class="is-size-2 has-text-weight-bold">{{headline}}</h1>
            <p>{{subHeadline}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['headline', 'subHeadline', 'colorIs']
}
</script>