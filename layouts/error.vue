<template>
  <div>
    <div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe src="https://giphy.com/embed/hEc4k5pN17GZq" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        <Hero v-if="error.statusCode === 404" headline="404: Page not found" subHeadline="What were you looking for? What are we ALL looking for?" colorIs="danger"/>
    <Hero v-else headline="WTF?" subHeadline="Honestly I'm not even sure how you got here, click the link to the homepage below" colorIs="warning"/>

    <NuxtLink class="buttons" to="/">
      <button class="button is-success">Home</button>
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>