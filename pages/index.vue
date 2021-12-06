<template>
    <div>
        <Hero />
        <Cards :cards="cards" />
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
        ])
            .then(([entries]) => {
            // return data that should be available
            // in the template
            //   console.log('entries', entries)
              const {items} = entries
            return {cards: items};
            })
            .catch(console.error);
        }
    }
</script>