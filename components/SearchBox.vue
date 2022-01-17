<template>
  <AisInstantSearch :search-client="searchClient" index-name="larocque.dev">
    <AisSearchBox />
    <AisHits>
      <template #item="{ item }">
        <div class="card">
          <div class="card-content">
            <p class="subtitle">
              {{ contentTypeLookup[item.sys.contentType.sys.id] }}
            </p>
            <p class="title">
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
              >{{ `Learn more about ${item.fields.title["en-US"]}` }}</NuxtLink
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
.ais-Hits-item {
  box-shadow: none;
}
</style>
