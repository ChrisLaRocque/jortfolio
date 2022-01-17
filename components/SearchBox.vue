<template>
  <AisInstantSearch :search-client="searchClient" index-name="larocque.dev">
    <AisSearchBox class="mt-3" />
    <AisHits>
      <template #item="{ item }">
        <div class="card">
          <div class="card-content">
            <p class="subtitle has-text-grey is-size-5">
              {{ contentTypeLookup[item.sys.contentType.sys.id] }}
            </p>
            <p class="title has-text-weight-bold is-size-4">
              {{ item.fields.title["en-US"] }}
            </p>
            <div class="content">
              {{ item.fields.description["en-US"] }}
            </div>
          </div>
          <footer class="card-footer">
            <NuxtLink
              :to="
                linkLookup(
                  item.fields.slug['en-US'],
                  item.sys.contentType.sys.id
                )
              "
              class="card-footer-item"
              >{{
                `${contentTypeLookup[item.sys.contentType.sys.id]} page for ${
                  item.fields.title["en-US"]
                }`
              }}</NuxtLink
            >
          </footer>
        </div>
      </template>
    </AisHits>
  </AisInstantSearch>
</template>

<script>
import { AisInstantSearch, AisSearchBox, AisHits } from "vue-instantsearch";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite-min.css";

export default {
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisHits,
  },
  data() {
    return {
      searchClient: algoliasearch(
        "7PFPW08ZWW",
        "e7a77c55c1f14d46d433f88200964800"
      ),
      contentTypeLookup: {
        chrisProjectPage: "Project",
        tech: "Tech",
      },
    };
  },
  methods: {
    linkLookup: function (slug, contentType) {
      switch (contentType) {
        case "chrisProjectPage":
          return `projects/${slug}`;
        case "tech":
          return `tech/${slug}`;
        default:
          "/";
      }
    },
  },
};
</script>
<style lang="scss">
.ais-Hits-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.ais-Hits-item {
  box-shadow: none;
  max-width: calc(100% / 3);
}
@media only screen and (max-width: 768px) {
  .ais-Hits-item {
    max-width: 100%;
  }
}
</style>
