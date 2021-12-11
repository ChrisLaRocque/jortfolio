<template>
  <div>
    <Hero headline="Projects" color-is="info" />
    <Cards :cards="cards" prepend="/projects/" cta-text="More about" />
  </div>
</template>
<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  asyncData({ env, params }) {
    // console.log('params', params)
    const { project } = params;
    return Promise.all([
      client.getEntries({
        content_type: "chrisProjectPage",
      }),
    ])
      .then(([entries]) => {
        // return data that should be available
        // in the template
        //   console.log('entries', entries)
        const { items } = entries;
        return { cards: items };
      })
      .catch(console.error);
  },
};
</script>
