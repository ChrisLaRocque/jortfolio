<template>
    <div><small>Description from <a :href="homepageFields.link" alt="Link related to description" target="_blank">{{homepageFields.link}}</a></small></div>
</template>
<script>
export default {
    props: ['homepageFields']
}
</script>