// Template for all technique pages
const TechniqueFamilyPage = {
  props: ["family", "level"],
  computed: {
    familyData() {
      return techniqueData[this.family] || {};
    },
    title() {
      return this.familyData.title || "";
    },
    description() {
      return this.familyData.description || "";
    },
    techniques() {
      // Filter techniques based on the current level
      const allTechniques = this.familyData.techniques || [];
      return allTechniques.filter(
        (technique) => technique.level === this.level
      );
    },
    showFamily() {
      // Hide the list if a technique detail is being viewed
      return !this.$route.params.technique;
    },
  },
  methods: {
    goToRandomTechnique() {
      let randomlyShownTechniques = JSON.parse(
        sessionStorage.getItem("randomlyShownTechniques") || "[]"
      );
      if (randomlyShownTechniques.length === this.techniques.length) {
        // If all techniques have been shown, clear the list
        randomlyShownTechniques = [];
        sessionStorage.setItem("randomlyShownTechniques", JSON.stringify([]));
      }
      // Filter out already shown techniques
      const unshownTechniques = this.techniques.filter(
        (technique) => !randomlyShownTechniques.includes(technique.name)
      );
      if (unshownTechniques.length) {
        const randomIndex = Math.floor(
          Math.random() * unshownTechniques.length
        );
        const randomTechnique = unshownTechniques[randomIndex];
        // Add the shown technique to the list
        randomlyShownTechniques.push(randomTechnique.name);
        sessionStorage.setItem(
          "randomlyShownTechniques",
          JSON.stringify(randomlyShownTechniques)
        );
        this.$router.push(
          "/" +
            this.family +
            "/" +
            encodeURIComponent(randomTechnique.name.toLowerCase())
        );
      }
    },
  },
  template: `
    <div class="technique-page">
      <div v-if="showFamily">
        <router-link :to="'/'"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> Home</router-link>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button @click="goToRandomTechnique" class="random-technique-btn">
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
      <router-view :level="level"></router-view>
    </div>
  `,
};

const TechniqueDetailPage = {
  props: ["family", "technique"],
  data() {
    return {
      videoExpanded: false,
    };
  },
  computed: {
    familyData() {
      const family = techniqueData[this.family] || { techniques: [] };
      return family;
    },
    techniqueData() {
      const family = techniqueData[this.family] || { techniques: [] };
      return (
        family.techniques.find(
          (t) => t.name.toLowerCase() === this.technique.toLowerCase()
        ) || {}
      );
    },
  },
  methods: {
    toggleVideo() {
      this.videoExpanded = !this.videoExpanded;
    },
  },
  template: `
    <div class="technique-detail-page">
      <router-link :to="'/' + family"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ familyData.title }}</router-link>
      <h2>{{ techniqueData.name }}</h2>
      <p>{{ techniqueData.description }}</p>

      <div v-if="techniqueData.videoId" class="video-section">
        <button @click="toggleVideo" class="video-toggle-btn">
          <i :class="videoExpanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-play'" aria-hidden="true"></i>
          {{ videoExpanded ? 'Hide Demonstration' : 'Show Demonstration' }}
        </button>

        <div v-if="videoExpanded" class="video-container">
          <iframe
            :src="'https://www.youtube.com/embed/' + techniqueData.videoId + '?fs=1&rel=0&modestbranding=1&playsinline=0'"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  `,
};
