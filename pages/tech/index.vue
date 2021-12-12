<template>
  <div>
    <Hero headline="Tech" color-is="link" />
    <Cards
      :cards="cards"
      cta-text="What I've made with"
      prepend="/tech/"
      :icons="true"
    />
  </div>
</template>
<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  asyncData() {
    // console.log('params', params)
    return Promise.all([
      client.getEntries({
        content_type: "tech",
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
