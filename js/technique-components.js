// Template for all technique pages
const TechniqueFamilyPage = {
  props: ["family"],
  data() {
    return {
      currentLevels: appState.getLevels(),
    };
  },
  computed: {
    familyInfo() {
      // Use familyData object directly to get family information
      return familyData[this.family] || {};
    },
    title() {
      return this.familyInfo.title || "";
    },
    description() {
      return this.familyInfo.description || "";
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
        <router-link :to="'/'"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> Home</router-link>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button @click="goToRandomTechnique" class="random-btn">
          Random Technique
        </button>
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

const TechniqueDetailPage = {
  props: ["family", "technique", "level"],
  data() {
    return {
      detailsExpanded: false,
    };
  },
  computed: {
    familyInfo() {
      // Get family information from familyData
      return familyData[this.family] || {};
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
  },
  methods: {
    toggleDetails() {
      this.detailsExpanded = !this.detailsExpanded;
    },

    goToNextRandomTechnique() {
      // Reset details expanded state before navigating
      this.detailsExpanded = false;

      // Get current random mode - returns either "global" or the family name
      const currentMode = appState.randomTechniques.getCurrentMode();

      const options = {
        router: this.$router,
      };

      // If currentMode is not "global", it contains the family name
      if (currentMode && currentMode !== "global") {
        options.family = currentMode;
      }

      techniqueUtils.navigateToRandomTechnique(options);
    },
  },
  template: `
    <div class="technique-detail-page">
      <div class="navigation-links">
        <router-link :to="'/' + family"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ familyInfo.title }}</router-link>

        <button v-if="inRandomMode" @click="goToNextRandomTechnique"
          class="random-btn"
          :class="{ 'global-random-btn': isGlobalMode }">
          Next
        </button>
      </div>

      <h2>{{ techniqueData.name }}</h2>

      <div class="details-section">
        <button @click="toggleDetails" class="toggle-btn">
          <i :class="detailsExpanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-right'" aria-hidden="true"></i>
          {{ detailsExpanded ? 'Hide Details' : 'Show Details' }}
        </button>

        <div v-if="detailsExpanded" class="details-container">
          <p>{{ techniqueData.description }}</p>

          <div v-if="techniqueData.videoId" class="video-container">
            <h4>Demonstration</h4>
            <iframe
              :src="'https://www.youtube.com/embed/' + techniqueData.videoId + '?fs=1&rel=0&modestbranding=1&playsinline=0'"
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
