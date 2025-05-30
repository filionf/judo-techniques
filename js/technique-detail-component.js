const TechniqueDetailPage = {
  props: ["technique"],
  data() {
    return {
      detailsExpanded: false,
      isFavorite: false,
      showNotes: false,
      noteText: "",
    };
  },
  computed: {
    techniqueData() {
      // Find the technique by name only - no longer requiring family match
      return (
        techniqueData.find(
          (t) => t.name.toLowerCase() === this.technique.toLowerCase()
        ) || {}
      );
    },
    // Get family from the technique data
    family() {
      return this.techniqueData.family || "";
    },
    familyTitle() {
      return this.family.toUpperCase();
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

    goBack() {
      // Use browser history to go back
      this.$router.back();
    },

    goToNextRandomTechnique() {
      // Reset details expanded state before navigating
      this.detailsExpanded = false;
      // Also reset notes expanded state
      this.showNotes = false;

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
    loadNote() {
      this.noteText = appState.notes.getNote(this.technique.toLowerCase());
    },
    saveNote() {
      appState.notes.saveNote(this.technique.toLowerCase(), this.noteText);
    },
    toggleNotes() {
      this.showNotes = !this.showNotes;
      if (this.showNotes) {
        this.loadNote();
      }
    },
  },
  watch: {
    // Watch for changes to the technique
    technique() {
      this.updateFavoriteStatus();
      this.loadNote();
    },
    techniqueData: {
      handler() {
        this.updateFavoriteStatus();
      },
      deep: true,
    },
    // Add watcher for noteText if you want additional behavior when it changes
    noteText(newValue) {
      // You could add debounced auto-save here if desired
      // For now we'll just keep the blur event for saving
    },
  },
  mounted() {
    // Initialize favorite status
    this.updateFavoriteStatus();

    // Add event listener for favorites changes
    document.addEventListener("favorites-changed", this.onFavoritesChanged);
    this.loadNote();
  },
  beforeUnmount() {
    // Remove event listener
    document.removeEventListener("favorites-changed", this.onFavoritesChanged);
  },
  template: `
    <div class="technique-page">
      <div class="technique-detail-page">
        <div class="navigation-links">
          <a href="#" @click.prevent="goBack">
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ $t('ui.back') }}
          </a>

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

        <!-- Notes Section -->
        <div class="technique-section">
          <div class="section-header" @click="toggleNotes">
            <h4>
              <i class="fas fa-chevron-right chevron-icon" :class="{ 'expanded': showNotes }"></i>
              Notes
              <i v-if="noteText.trim()" class="fas fa-sticky-note note-icon"></i>
            </h4>
          </div>
          <div class="section-content" :class="{ 'expanded': showNotes }">
            <textarea
              v-model="noteText"
              @blur="saveNote"
              placeholder="Add your notes here..."
              class="note-textarea"
            ></textarea>
          </div>
        </div>

        <!-- Details Section - updated to match notes section style -->
        <div class="technique-section">
          <div class="section-header" @click="toggleDetails">
            <h4>
              <i class="fas fa-chevron-right chevron-icon" :class="{ 'expanded': detailsExpanded }"></i>
              {{ $t(detailsExpanded ? 'ui.hideDetails' : 'ui.showDetails') }}
            </h4>
          </div>
          <div class="section-content" :class="{ 'expanded': detailsExpanded }">
            <div class="details-container">
              <div class="family-info">
                <span class="family-label">{{ $t('ui.family') }}:</span>
                <span class="family-name">{{ familyTitle }}</span>
              </div>

              <div class="description-info">
                <span class="description-label">{{ $t('ui.description') }}:</span>
                <span>{{ $t('techniques.' + techniqueData.name.toLowerCase() + '.description') }}</span>
              </div>

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
      </div>
    </div>
  `,
};
