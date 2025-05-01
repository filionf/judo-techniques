// Home page component
const HomeComponent = {
  data() {
    return {
      categories: this.getCategoriesWithCounts(),
      currentLevels: appState.getLevels(),
    };
  },
  methods: {
    getCategoriesWithCounts() {
      return Object.keys(familyData)
        .map((family) => {
          // Get techniques for all selected levels
          const techniques = techniqueUtils.getTechniquesForFamily(family);
          const techniqueCount = techniques.length;

          return {
            id: family,
            title: family.toUpperCase() + " (" + this.$t(`families.${family}.title`) + ")",
            description: this.$t(`families.${family}.description`),
            techniqueCount: techniqueCount,
          };
        })
        .filter((category) => category.techniqueCount > 0);
    },
    goToRandomTechnique() {
      techniqueUtils.navigateToRandomTechnique({
        router: this.$router,
      });
    },

    // Handler for level change event
    onLevelsChanged(event) {
      // Update the current levels
      this.currentLevels = appState.getLevels();

      // Refresh the categories with new counts
      this.categories = this.getCategoriesWithCounts();
    },
  },
  mounted() {
    // Clear global random history when returning to home
    localStorage.removeItem("randomlyShownTechniques");

    // Add event listener for level changes
    document.addEventListener("levels-changed", this.onLevelsChanged);
  },
  beforeUnmount() {
    // Remove event listener when component is destroyed
    document.removeEventListener("levels-changed", this.onLevelsChanged);
  },
  template: `
    <div class="home-page">
      <h2>{{ $t('home.welcome') }}</h2>
      <p>{{ $t('home.description') }}</p>
      <p>To use:</p>
        1. {{ $t('home.instructions.selectLevel') }}<br>
        2. {{ $t('home.instructions.findTechnique') }}<br>
        3. {{ $t('home.instructions.randomButton') }}<br>

      <button @click="goToRandomTechnique" class="random-btn global-random-btn">
        {{ $t('ui.randomTechnique') }}
      </button>

      <div class="family-list">
        <router-link v-for="category in categories" :key="category.id" :to="'/' + category.id" class="technique-family-card">
          <div>
            <h2>{{ category.title }}</h2>
            <p>{{ category.techniqueCount }} techniques</p>
          </div>
        </router-link>
      </div>
    </div>
  `,
};
