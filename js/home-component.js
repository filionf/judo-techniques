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
        .map((key) => {
          // Get techniques for all selected levels
          const techniques = techniqueUtils.getTechniquesForFamily(key);
          const techniqueCount = techniques.length;

          return {
            id: key,
            title: familyData[key].title,
            description: familyData[key].description,
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
      <h2>Welcome to the unofficial Judo Exam Preparation Guide</h2>
      <p>Judo (柔道, jūdō) is a modern Japanese martial art, which originated in Japan in the late 19th century.
         Its most prominent feature is its competitive element, where the objective is to either throw or takedown
         an opponent to the ground, immobilize or otherwise subdue an opponent with a pin, or force an opponent to
         submit with a joint lock or a choke.</p>

      <button @click="goToRandomTechnique" class="random-btn global-random-btn">
        Random Technique
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
