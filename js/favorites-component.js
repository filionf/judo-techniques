const FavoritesComponent = {
  data() {
    return {
      favoriteTechniques: [],
    };
  },
  computed: {
    hasFavorites() {
      return this.favoriteTechniques.length > 0;
    },
  },
  methods: {
    refreshFavorites() {
      this.favoriteTechniques = appState.favorites.getAllFavoriteTechniques();
    },

    goToRandomFavorite() {
      techniqueUtils.navigateToRandomTechnique({
        router: this.$router,
        onlyFavorites: true,
      });
    },

    // Handler for favorites change event
    onFavoritesChanged(event) {
      this.refreshFavorites();
    },
  },
  mounted() {
    // Add event listener for favorites changes
    document.addEventListener("favorites-changed", this.onFavoritesChanged);

    // Initialize favorites
    this.refreshFavorites();
  },
  beforeUnmount() {
    // Remove event listeners when component is destroyed
    document.removeEventListener("favorites-changed", this.onFavoritesChanged);
  },
  template: `
    <div class="favorites-page">
      <div class="navigation-links">
        <router-link to="/"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ $t('ui.home') }}</router-link>
      </div>

      <h2>{{ $t('ui.favorites.title') }}</h2>

      <div v-if="hasFavorites">
        <div class="favorites-card">
          <div class="favorite-header">
            <h3>{{ $t('ui.favorites.yourFavorites') }} ({{ favoriteTechniques.length }})</h3>
            <button @click="goToRandomFavorite" class="random-btn favorite-random-btn">
              {{ $t('ui.favorites.randomFavorite') }}
            </button>
          </div>
          <div class="technique-list">
            <router-link
              v-for="technique in favoriteTechniques"
              :key="technique.name"
              :to="'/' + technique.family + '/' + encodeURIComponent(technique.name.toLowerCase())"
              class="technique-card favorite-technique"
            >
              <div>
                <h3>{{ technique.name }}</h3>
                <span class="technique-family">{{ technique.family }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="no-favorites">
        <p>{{ $t('ui.favorites.noFavorites') }}</p>
        <p>{{ $t('ui.favorites.addFavoritesInstruction') }}</p>
      </div>
    </div>
  `,
};