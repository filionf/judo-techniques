const TechniqueDetailPage = {
  props: ["family", "technique", "level"],
  data() {
    return {
      detailsExpanded: false,
      isFavorite: false,
    };
  },
  computed: {
    familyTitle() {
      return this.family.toUpperCase();
    },
    techniqueData() {
      // Find the technique in the flattened techniqueData array
      return (
        techniqueData.find(
          (t) =>
            t.family === this.family &&
            t.name.toLowerCase() === this.technique.toLowerCase()
        ) || {}
      );
    },
    randomMode() {
      return appState.randomTechniques.getCurrentMode();
    },
    inRandomMode() {
      return this.randomMode !== null;
    },
    isGlobalMode() {
      return this.randomMode === "global";
    },
    isFavoritesMode() {
      return this.randomMode === "favorites";
    },
    formattedFamilyName() {
      if (!this.randomMode || this.randomMode === "global") return "";
      if (this.randomMode === "favorites") return this.$t("ui.favorites.title");

      // Split by hyphens, capitalize first letter of each word, then rejoin
      return this.randomMode
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-");
    },
  },
  methods: {
    toggleDetails() {
      this.detailsExpanded = !this.detailsExpanded;
    },

    toggleFavorite() {
      if (this.techniqueData && this.techniqueData.name) {
        this.isFavorite = appState.favorites.toggleFavorite(
          this.techniqueData.name
        );
      }
    },

    goToNextRandomTechnique() {
      // Reset details expanded state before navigating
      this.detailsExpanded = false;

      // Get current random mode - returns either "global", "favorites", or the family name
      const currentMode = appState.randomTechniques.getCurrentMode();

      const options = {
        router: this.$router,
      };

      // If currentMode is not "global" and not "favorites", it contains the family name
      if (
        currentMode &&
        currentMode !== "global" &&
        currentMode !== "favorites"
      ) {
        options.family = currentMode;
      } else if (currentMode === "favorites") {
        // For favorites mode, we need to get only favorite techniques
        options.onlyFavorites = true;
      }

      techniqueUtils.navigateToRandomTechnique(options);
    },

    // New method to update favorite status
    updateFavoriteStatus() {
      if (this.techniqueData && this.techniqueData.name) {
        this.isFavorite = appState.favorites.isFavorite(
          this.techniqueData.name
        );
      }
    },

    // Event handler for favorites changes
    onFavoritesChanged(event) {
      // Update isFavorite if this technique was changed
      if (
        this.techniqueData &&
        event.detail.technique === this.techniqueData.name
      ) {
        this.isFavorite = event.detail.isFavorite;
      }
    },
  },
  watch: {
    // Watch for changes to the technique or family
    technique() {
      this.updateFavoriteStatus();
    },
    family() {
      this.updateFavoriteStatus();
    },
    // Watch for changes to the techniqueData
    techniqueData: {
      handler() {
        this.updateFavoriteStatus();
      },
      deep: true,
    },
  },
  mounted() {
    // Initialize favorite status
    this.updateFavoriteStatus();

    // Add event listener for favorites changes
    document.addEventListener("favorites-changed", this.onFavoritesChanged);
  },
  beforeUnmount() {
    // Remove event listener
    document.removeEventListener("favorites-changed", this.onFavoritesChanged);
  },
  template: `
    <div class="technique-detail-page">
      <div class="navigation-links">
        <router-link :to="'/' + family"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ familyTitle }}</router-link>

        <div class="action-buttons">
          <button v-if="inRandomMode" @click="goToNextRandomTechnique"
            class="random-btn"
            :class="{ 'global-random-btn': isGlobalMode, 'favorite-random-btn': isFavoritesMode }">
            {{ isGlobalMode ? $t('ui.next') : $t('ui.nextWithFamily', { family: formattedFamilyName }) }}
          </button>
        </div>
      </div>

      <div class="technique-title-container">
        <h2>{{ techniqueData.name }}</h2>
        <button
          @click="toggleFavorite"
          class="favorite-btn"
          :class="{ 'favorite-active': isFavorite }"
          aria-label="Toggle favorite">
          <i :class="isFavorite ? 'fas fa-star' : 'far fa-star'" aria-hidden="true"></i>
        </button>
      </div>

      <div class="details-section">
        <button @click="toggleDetails" class="toggle-btn">
          <i :class="detailsExpanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-right'" aria-hidden="true"></i>
          {{ $t(detailsExpanded ? 'ui.hideDetails' : 'ui.showDetails') }}
        </button>

        <div v-if="detailsExpanded" class="details-container">
          <p>{{ $t('techniques.' + techniqueData.name.toLowerCase() + '.description') }}</p>

          <div v-if="techniqueData.videoId" class="video-container">
            <div class="video-header">
              <h4>{{ $t('ui.demonstration') }}</h4>
            </div>
            <iframe
              :src="'https://www.youtube.com/embed/' + techniqueData.videoId + '?fs=1&rel=0&modestbranding=1&playsinline=0&start=5'"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen>
            </iframe>
          </div>

          <!-- Exit video section -->
          <div v-if="techniqueData.exitVideoId" class="video-container">
            <div class="video-header">
              <h4>{{ $t('ui.exitTechnique') }}</h4>
            </div>
            <iframe
              :src="'https://www.youtube.com/embed/' + techniqueData.exitVideoId + '?fs=1&rel=0&modestbranding=1&playsinline=0&start=5'"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  `,
};
