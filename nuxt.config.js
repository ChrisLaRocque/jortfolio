const config = require("./.contentful.json");
const contentful = require("contentful");

export default {
	env: {
		CTF_SPACE_ID: config.CTF_SPACE_ID,
		CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
	},
	components: true,
	css: ["bulma", "~/assets/css/main.scss"],
	head: {
		title: "Chris LaRocque | Web Developer",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "robots", content: "noindex, nofollow" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content:
					"Chris LaRocque is a web developer from Boston, MA. He specializes in tactical agile development aimed at delivering user-centric software at scale and at speed.",
			},
			{
				hid: "og:image",
				property: "og:image",
				content: "https://www.larocque.dev/headshot.jpeg",
			},
		],
		link: [
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{ rel: "manifest", href: "/site.webmanifest" },
		],
	},
	modules: ["@nuxtjs/markdownit", "@nuxtjs/google-gtag"],
	markdownit: {
		runtime: true, // Support `$md()`
		html: true,
		use: [
			"markdown-it-anchor",
			["markdown-it-toc-done-right", { containerId: "markdown-nav" }],
		],
	},
	target: "static",

	generate: {
		fallback: true,
		routes() {
			return contentful
				.createClient({
					space: config.CTF_SPACE_ID,
					accessToken: config.CTF_CDA_ACCESS_TOKEN,
				})
				.getEntries()
				.then((res) => {
					return res.items
						.filter(
							(item) =>
								item.sys.contentType.sys.id ===
									"chrisProjectPage" ||
								item.sys.contentType.sys.id === "tech"
						)
						.map((item) => {
							const type = item.sys.contentType.sys.id;
							const routes = {
								chrisProjectPage: `/projects/${item.fields.slug}`,
								tech: `/tech/${item.fields.slug}`,
							};
							return { route: routes[type], payload: item };
						});
				});
		},
	},
	// "google-gtag": {
	// 	id: "G-YH5X1FXFKW",
	// 	debug: true,
	// },
};
