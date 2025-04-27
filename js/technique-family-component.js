const TechniqueFamilyPage = {
  props: ["family"],
  data() {
    return {
      currentLevels: appState.getLevels(),
    };
  },
  computed: {
    title() {
      return this.$t(`families.${this.family}.title`);
    },
    description() {
      return this.$t(`families.${this.family}.description`);
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
        <router-link :to="'/'"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ $t('ui.home') }}</router-link>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button @click="goToRandomTechnique" class="random-btn">
          {{ $t('ui.randomTechnique') }}
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
