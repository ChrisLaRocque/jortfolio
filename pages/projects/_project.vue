<template>
  <section class="columns">
        <div class="column is-two-thirds">
            <h1 class="is-size-3 is-size-4-touch is-capitalized has-text-weight-bold">{{ project.fields.title }}</h1>
            <div v-if="project.fields.body" v-html="$md.render(project.fields.body)" class="content"></div>
        </div>
        <div class="column">
            <strong style="display: block;" class="has-text-grey-darker mt-4 mb-2">Related links</strong>
            <div class="box" v-if="project.fields.site">
                <small style="display: block;">Site</small>
                <a :href="project.fields.site.fields.link">{{project.fields.site.fields.text}}</a>
            </div> 
            <div class="box">
                <small style="display: block;">Tech</small>
                <div class="columns">
                  <div v-for="techItem in project.fields.tech" class="column">
                    <Icon :name="techItem" />
                  </div>
                </div>
            </div> 
        </div>
  </section>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js';

  const client = createClient();

  export default {
    // `env` is available in the context object
    asyncData({ env, params }) {
        // console.log('params', params)
        const {project} = params
      return Promise.all([
        client.getEntries({
          content_type: 'chrisProjectPage',
          'fields.slug': project,
        }),
      ])
        .then(([entries]) => {
          // return data that should be available
          // in the template
          // console.log('entries', entries)
          const {items} = entries
          const entry = items[0]
          console.log('entry', entry)
          return {project: entry};
        })
        .catch(console.error);
    },
    head() {
      return {
        title: this.project.fields.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.project.fields.description
          }
        ],
      }
    }
  };
</script>