// Home page component
const Home = {
  props: ["level"],
  data() {
    return {
      categories: Object.keys(techniqueData).map((key) => ({
        id: key,
        title: techniqueData[key].title,
        description: techniqueData[key].description,
        techniqueCount: techniqueData[key].techniques.length,
      })),
    };
  },
  methods: {
    goToRandomTechnique() {
      techniqueUtils.navigateToRandomTechnique({
        level: this.level,
        router: this.$router
      });
    },
  },
  mounted() {
    // Optional: Clear global random history when returning to home
    sessionStorage.removeItem("globalRandomlyShownTechniques");
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
          </div>
        </router-link>
      </div>
    </div>
  `,
};
