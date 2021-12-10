<template>
  <section class="columns">
        <div class="column is-two-thirds">
            <h1 class="is-size-3 is-size-4-touch is-capitalized has-text-weight-bold">{{ tech.fields.name }}</h1>
            <div class="content">{{tech.fields.description}}</div>
        </div>
        <div class="column">
            <strong style="display: block;" class="has-text-grey-darker mt-4 mb-2">Related links</strong>
            <div class="box" v-if="tech.fields.homepage">
                <small style="display: block;">Homepage</small>
                <a :href="tech.fields.homepage.fields.link"><Icon :name="tech.fields.name" />&nbsp;{{tech.fields.homepage.fields.text}}</a>
            </div> 
            <!-- <div class="box" v-if="project.fields.tech">
                <small style="display: block;">Tech used</small>
                <div class="columns is-multiline is-mobile mt-2">
                  <div v-for="techItem in project.fields.tech" class="column is-one-fifth">
                    <Icon :name="techItem.fields.name" />
                  </div>
                </div>
            </div> 
            <div class="box" v-if="project.fields.githubLink">
                <small style="display: block;">Github for project</small>
                <a :href="project.fields.githubLink"><Icon name="Github" /></a>
            </div> -->
            <div class="box" v-if="related.length > 0">
              <small style="display: block;">Related projects</small>
              <NuxtLink v-for="project in related" style="display: block;" :key="project.fields.slug" :to="`/projects/${project.fields.slug}`">{{project.fields.title}}</NuxtLink>
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
        const {tech} = params
      return Promise.all([
        client.getEntries({
          content_type: 'tech',
          'fields.slug': tech,
        }),
        client.getEntries({
          content_type: 'chrisProjectPage',
        }),
      ])
        .then(([entries, projectEntries]) => {
          // return data that should be available
          // in the template
          // console.log('entry', entry)
          const {items} = entries
          const entry = items[0]
          const relatedProjects = projectEntries.items.filter(item => item.fields.tech && item.fields.tech.filter(techItem => techItem.fields.slug === tech).length > 0)

          return {tech: entry, related: relatedProjects};
        })
        .catch(console.error);
    },
    head() {
      return {
        title: this.tech.fields.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.tech.fields.description
          }
        ],
      }
    }
  };
</script>