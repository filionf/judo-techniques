// Home page component
const HomeComponent = {
  data() {
    return {
      currentLevels: appState.getLevels(),
      hasFavorites: false,
      searchQuery: appState.searchQuery,
      // Technique families grouped by the Kodokan classification
      groups: [
        {
          id: "nageWaza",
          families: ["te-waza", "koshi-waza", "ashi-waza", "masutemi-waza", "yoko-sutemi-waza"],
        },
        {
          id: "katameWaza",
          families: ["osaekomi-waza", "shime-waza", "kansetsu-waza"],
        },
      ],
    };
  },
  computed: {
    categoryGroups() {
      return this.groups
        .map((group) => ({
          id: group.id,
          categories: group.families
            .map((family) => ({
              id: family,
              name: family.toUpperCase(),
              title: this.$t(`families.${family}.title`),
              techniqueCount: techniqueUtils.getTechniquesForFamily(family, this.currentLevels).length,
            }))
            .filter((category) => category.techniqueCount > 0),
        }))
        .filter((group) => group.categories.length > 0);
    },
    searchResults() {
      return techniqueUtils.search(this.searchQuery, (key) => this.$t(key));
    },
    isSearching() {
      return techniqueUtils.normalizeSearch(this.searchQuery).length > 0;
    },
  },
  watch: {
    searchQuery(value) {
      // Keep the query when navigating to a result and back
      appState.searchQuery = value;
    },
  },
  methods: {
    checkFavorites() {
      this.hasFavorites = appState.favorites.getFavorites().length > 0;
    },
    goToRandomTechnique() {
      techniqueUtils.navigateToRandomTechnique({
        router: this.$router,
      });
    },
    clearSearch() {
      this.searchQuery = "";
      this.$refs.searchInput.focus();
    },

    // Handler for level change event
    onLevelsChanged(event) {
      this.currentLevels = appState.getLevels();
    },

    // Handler for favorites change event
    onFavoritesChanged(event) {
      this.checkFavorites();
    },
  },
  mounted() {
    // Clear global random history when returning to home
    localStorage.removeItem("randomlyShownTechniques");

    // Add event listener for level changes
    document.addEventListener("levels-changed", this.onLevelsChanged);

    // Add event listener for favorites changes
    document.addEventListener("favorites-changed", this.onFavoritesChanged);

    // Check if user has favorites
    this.checkFavorites();
  },
  beforeUnmount() {
    // Remove event listeners when component is destroyed
    document.removeEventListener("levels-changed", this.onLevelsChanged);
    document.removeEventListener("favorites-changed", this.onFavoritesChanged);
  },
  template: `
    <div class="home-page">
      <h2>{{ $t('home.welcome') }}</h2>

      <details class="home-about">
        <summary>{{ $t('home.about') }}</summary>
        <p>{{ $t('home.description') }}</p>
        <p>{{ $t('home.instructions.title') }}</p>
        <ol>
          <li>{{ $t('home.instructions.selectLevel') }}</li>
          <li>{{ $t('home.instructions.findTechnique') }}</li>
          <li>{{ $t('home.instructions.randomButton') }}</li>
        </ol>
      </details>

      <div class="search-box">
        <i class="fas fa-magnifying-glass" aria-hidden="true"></i>
        <input
          ref="searchInput"
          v-model="searchQuery"
          type="search"
          :placeholder="$t('home.search.placeholder')"
          :aria-label="$t('home.search.placeholder')"
          autocomplete="off"
        />
        <button v-if="searchQuery" @click="clearSearch" class="search-clear" :aria-label="$t('home.search.clear')">
          <i class="fas fa-xmark" aria-hidden="true"></i>
        </button>
      </div>

      <div v-if="isSearching" class="search-results">
        <p class="search-count">{{ $t('home.search.results', { count: searchResults.length }, searchResults.length) }}</p>
        <div class="technique-list">
          <router-link
            v-for="result in searchResults"
            :key="result.type + result.name"
            :to="result.to"
            class="technique-card"
          >
            <h3>{{ result.name }}</h3>
            <span class="technique-meaning">{{ result.meaning }}</span>
          </router-link>
        </div>
      </div>

      <template v-else>
        <div class="home-actions">
          <button @click="goToRandomTechnique" class="random-btn global-random-btn">
            {{ $t('ui.randomTechnique') }}
          </button>

          <router-link to="/favorites" class="favorites-link">
            <i class="fas fa-star"></i> {{ $t('ui.favorites.viewAll') }}
            <span v-if="hasFavorites" class="favorites-badge"></span>
          </router-link>
        </div>

        <section v-for="group in categoryGroups" :key="group.id" class="home-group">
          <h3 class="home-group-title">
            {{ $t('home.groups.' + group.id + '.title') }}
            <span>{{ $t('home.groups.' + group.id + '.subtitle') }}</span>
          </h3>
          <div class="family-list">
            <router-link v-for="category in group.categories" :key="category.id" :to="'/' + category.id" class="technique-family-card">
              <h4>{{ category.name }}</h4>
              <p>{{ category.title }} · {{ $t('ui.techniqueCount', { count: category.techniqueCount }) }}</p>
            </router-link>
          </div>
        </section>

        <section class="home-group">
          <h3 class="home-group-title">{{ $t('home.groups.more.title') }}</h3>
          <div class="family-list">
            <router-link to="/katas" class="technique-family-card">
              <h4><i class="fas fa-scroll" aria-hidden="true"></i> {{ $t('ui.katas.title') }}</h4>
              <p>{{ $t('ui.katas.cardSubtitle') }}</p>
            </router-link>
            <router-link to="/belt" class="technique-family-card">
              <h4><i class="fas fa-ribbon" aria-hidden="true"></i> {{ $t('ui.belt.homeLink') }}</h4>
              <p>{{ $t('ui.belt.cardSubtitle') }}</p>
            </router-link>
          </div>
        </section>
      </template>
    </div>
  `,
};
