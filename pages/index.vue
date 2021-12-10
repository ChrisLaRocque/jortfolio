<template>
    <div>
        <Hero headline="Hey I'm Chris, I do web stuff." subHeadline="I'm a full-stack web developer/engineer building responsive, user-first websites." />
        <Cards headline="Projects" subHeadline="The 3 most recent projects of mine." :cards="projectCards" :more="{to: '/projects', text: 'All projects', is: 'info'}" prepend="/projects/" />
        <Cards headline="Tech" subHeadline="The tech I use and where I've used it" :cards="techCards" :more="{to: '/tech', text: 'All tech', is: 'link'}" prepend="/tech/" :icons=true />
    </div>
</template>
<script>
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
