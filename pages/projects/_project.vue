<template>
	<section id="page-wrapper" class="columns is-desktop">
		<div class="column is-two-thirds is-desktop">
			<h1
				class="is-size-3 is-size-4-touch is-capitalized has-text-weight-bold"
			>
				{{ project.fields.title }}
			</h1>
			<div
				v-if="project.fields.body"
				class="content"
				v-html="$md.render(project.fields.body + '\n${toc}')"
			></div>
		</div>
		<div class="column">
			<strong
				style="display: block"
				class="has-text-grey-darker mt-4 mb-2"
				>Related links</strong
			>
			<div v-if="project.fields.site" class="box">
				<small style="display: block">Site</small>
				<a :href="project.fields.site.fields.link">{{
					project.fields.site.fields.text
				}}</a>
			</div>
			<div v-if="project.fields.tech" class="box">
				<small style="display: block">Tech used</small>
				<div class="columns is-multiline is-mobile mt-2">
					<NuxtLink
						v-for="techItem in project.fields.tech"
						:key="techItem.fields.slug"
						class="column is-one-fifth"
						:to="`/tech/${techItem.fields.slug}`"
						><Icon :name="techItem.fields.name"
					/></NuxtLink>
				</div>
			</div>
			<div v-if="project.fields.githubLink" class="box">
				<small style="display: block">Github for project</small>
				<a
					:href="project.fields.githubLink"
					style="display: block"
					class="mt-2"
					><Icon name="Github"
				/></a>
			</div>
			<div v-if="project.fields.relatedProjects" class="box">
				<small style="display: block">Related projects</small>
				<NuxtLink
					v-for="relatedProject in project.fields.relatedProjects"
					:key="relatedProject.fields.slug"
					style="display: block"
					:to="`/projects/${relatedProject.fields.slug}`"
					>{{ relatedProject.fields.title }}</NuxtLink
				>
			</div>
			<div
				id="there-has-to-be-a-better-way"
				class="box"
				style="visibility: hidden"
			>
				<small style="display: block">Table of contents</small>
				<div class="content">
					<nav id="nav-side" class="table-of-contents"></nav>
				</div>
			</div>
		</div>
		<div class="modal">
			<div class="modal-background"></div>
			<div class="modal-content">
				<p class="image">
					<img
						src="https://bulma.io/images/placeholders/1280x960.png"
						alt=""
					/>
				</p>
			</div>
			<button class="modal-close is-large" aria-label="close"></button>
		</div>
		<Warning v-if="project.fields.inProgress" />
	</section>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
	asyncData({ params, payload }) {
		if (payload) {
			return { project: payload };
		}
		const { project } = params;
		return Promise.all([
			client.getEntries({
				content_type: "chrisProjectPage",
				"fields.slug": project,
			}),
		])
			.then(([entries]) => {
				// return data that should be available
				// in the template
				// console.log('entries', entries)
				const { items } = entries;
				const entry = items[0];
				// console.log('entry', entry)
				return { project: entry };
			})
			.catch(console.error);
	},
	head() {
		return {
			title: `${this.project.fields.title} | Chris LaRocque`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.project.fields.description,
				},
			],
			link: [
				{
					rel: "canonical",
					href: "https://www.larocque.dev" + this.$route.path,
				},
			],
		};
	},
	mounted() {
		if (process.client) {
			const markdownNav = document.getElementById("markdown-nav");
			if (markdownNav && markdownNav.innerHTML !== "") {
				const navWrapper = document.getElementById(
					"there-has-to-be-a-better-way"
				);
				const newNav = document.getElementById("nav-side");
				newNav.innerHTML = markdownNav.innerHTML;
				navWrapper.style.visibility = "visible";
				markdownNav.style.display = "none";
			} else {
				console.log("If you're seeing this I messed up.");
			}
			const pageWrapper = document.getElementById("page-wrapper");
			if (pageWrapper) {
				const pageImages = pageWrapper.querySelectorAll("img");
				if (pageImages.length > 0) {
					const modal = pageWrapper.querySelector(".modal");
					const modalImage = modal
						.querySelector(".image")
						.querySelector("img");
					// Each image gets an event listener
					pageImages.forEach((image) =>
						image.addEventListener("click", (e) => {
							modal.classList.toggle("is-active");
							modalImage.src = image.src;
						})
					);
					// Close button
					const closeButton = modal.querySelector(".modal-close");
					closeButton.addEventListener("click", (e) => {
						modal.classList.toggle("is-active");
					});
				}
			}
		}
	},
};
</script>
<style lang="scss">
#nav-side {
	ol {
		margin-top: 0;
	}
}
@media only screen and (max-width: 768px) {
	#page-wrapper {
		&.columns {
			margin-right: 0 !important;
		}
	}
	.content {
		table {
			thead,
			tbody {
				display: block;
				tr {
					display: flex;
					justify-content: space-between;
					align-items: stretch;
					td {
						&:nth-of-type(2) {
							text-align: right;
							padding-right: 0;
						}
					}
				}
			}
		}
	}
}
</style>
