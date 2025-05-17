const TechniqueFamilyPage = {
  props: ["family"],
  data() {
    return {
      currentLevels: appState.getLevels(),
    };
  },
  computed: {
    title() {
      return this.family.toUpperCase() + " (" + this.$t(`families.${this.family}.title`) + ")";
    },
    description() {
      return this.$t(`families.${this.family}.description`);
    },
    videoUrl() {
      if (!familyData[this.family].videoId) {
        return null;
      } else {
        return `https://www.youtube.com/embed/${
          familyData[this.family].videoId
        }`;
      }
    },
    techniques() {
      return techniqueUtils.getTechniquesForFamily(
        this.family,
        this.currentLevels
      );
    },
    showFamily() {
      // Hide the list if a technique detail is being viewed
      return !this.$route.params.technique;
    },
  },
  methods: {
    goToRandomTechnique() {
      techniqueUtils.navigateToRandomTechnique({
        family: this.family,
        router: this.$router,
      });
    },

    // Method to handle level change events
    onLevelsChanged(event) {
      // Update the current levels
      this.currentLevels = appState.getLevels();
    },
  },
  mounted() {
    // Listen for level changes
    document.addEventListener("levels-changed", this.onLevelsChanged);
  },
  beforeUnmount() {
    // Clean up event listener
    document.removeEventListener("levels-changed", this.onLevelsChanged);
  },
  template: `
    <div class="technique-page">
      <div v-if="showFamily">
        <div class="navigation-links">
          <router-link :to="'/'"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ $t('ui.home') }}</router-link>
        </div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button @click="goToRandomTechnique" class="random-btn">
          {{ $t('ui.randomTechnique') }}
        </button>

        <!-- Family video section -->
        <div v-if="videoUrl" class="family-video-container">
          <div class="video-wrapper">
            <iframe
              :src="videoUrl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <div class="technique-list">
          <router-link
            v-for="technique in techniques"
            :key="technique.name"
            :to="'/' + family + '/' + encodeURIComponent(technique.name.toLowerCase())"
            class="technique-card"
          >
            <div>
              <h3>{{ technique.name }}</h3>
            </div>
          </router-link>
        </div>
      </div>
      <router-view v-if="!showFamily"></router-view>
    </div>
  `,
};
