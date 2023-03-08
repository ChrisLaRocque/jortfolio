<template>
	<section>
		<div class="columns">
			<div class="column is-two-thirds">
				<h1
					class="is-size-3 is-size-4-touch is-capitalized has-text-weight-bold"
				>
					{{ tech.fields.name }}
				</h1>
				<div class="content">
					<Description
						:homepage-fields="tech.fields.homepage.fields"
					/>
					{{ tech.fields.description }}
				</div>
				<div v-if="tech.fields.experience" class="content">
					<h2>{{ `My experience with ${tech.fields.name}` }}</h2>
					{{ tech.fields.experience }}
				</div>
			</div>
			<div class="column is-one-third">
				<strong
					style="display: block"
					class="has-text-grey-darker mt-4 mb-2"
					>{{ `Related links for ${tech.fields.name}` }}</strong
				>
				<div class="box">
					<small style="display: block">{{
						`${tech.fields.name} homepage`
					}}</small>
					<a :href="tech.fields.homepage.fields.link"
						><Icon :name="tech.fields.name" />&nbsp;{{
							tech.fields.homepage.fields.text
						}}</a
					>
				</div>
				<div v-if="related.length > 0" class="box">
					<small style="display: block">{{
						`Projects where I've used ${tech.fields.name}`
					}}</small>
					<NuxtLink
						v-for="project in related"
						:key="project.fields.slug"
						style="display: block"
						:to="`/projects/${project.fields.slug}`"
						>{{ project.fields.title }}</NuxtLink
					>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column is-full">
				<NuxtLink to="/tech"
					><Icon name="Arrow left" /> All tech</NuxtLink
				>
			</div>
		</div>
	</section>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
	// `env` is available in the context object
	asyncData({ params, payload }) {
		if (payload) {
			return { tech: payload };
		}
		// console.log('params', params)
		const { tech } = params;
		return Promise.all([
			client.getEntries({
				content_type: "tech",
				"fields.slug": tech,
			}),
			client.getEntries({
				content_type: "chrisProjectPage",
			}),
		])
			.then(([entries, projectEntries]) => {
				// return data that should be available
				// in the template
				// console.log('entry', entry)
				const { items } = entries;
				const entry = items[0];
				const relatedProjects = projectEntries.items.filter(
					(item) =>
						item.fields.tech &&
						item.fields.tech.filter(
							(techItem) => techItem.fields.slug === tech
						).length > 0
				);

				return { tech: entry, related: relatedProjects };
			})
			.catch(console.error);
	},
	head() {
		return {
			title: this.tech.fields.title,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.tech.fields.description,
				},
			],
			link: [
				{
					rel: "canonical",
					href:
						"https://www.my-primary-domain.com" + this.$route.path,
				},
			],
		};
	},
};
</script>
