<template>
  <div>
    <Hero
      headline="Hey I'm Chris, I do web stuff."
      sub-headline="I'm a full-stack web developer/engineer building responsive, user-first websites. Check out the things I've built or the tech I've used to build them below."
    />
    <HomeBanner />
    <Cards
      headline="Projects"
      sub-headline="The 3 most recent projects of mine."
      :cards="projectCards"
      :more="{ to: '/projects', text: 'All projects' }"
      prepend="/projects/"
      cta-text="Building "
    />
    <Cards
      headline="Tech"
      sub-headline="The tech I use and where I've used it"
      :cards="techCards"
      :more="{ to: '/tech', text: 'All tech' }"
      prepend="/tech/"
      :icons="true"
      cta-text="What I've built with "
    />
  </div>
</template>
<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: "chrisProjectPage",
        limit: 3,
      }),
      client.getEntries({
        content_type: "tech",
        limit: 6,
      }),
    ])
      .then(([projectEntries, techEntries]) => {
        const { items } = projectEntries;
        const techItems = techEntries.items;
        return { projectCards: items, techCards: techItems };
      })
      .catch(console.error);
  },
};
</script>
