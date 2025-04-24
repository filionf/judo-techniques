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
      techniqueUtils.navigateToRandomTechnique({
        level: this.level,
        family: this.family,
        router: this.$router
      });
    },
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
      <router-view :level="level"></router-view>
    </div>
  `,
};

const TechniqueDetailPage = {
  props: ["family", "technique", "level"],
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
    inRandomMode() {
      return sessionStorage.getItem("randomMode") !== null;
    },
    randomModeType() {
      return sessionStorage.getItem("randomMode");
    },
    isGlobalMode() {
      return this.randomModeType === "global";
    }
  },
  methods: {
    toggleVideo() {
      this.videoExpanded = !this.videoExpanded;
    },

    goToNextRandomTechnique() {
      const randomMode = sessionStorage.getItem("randomMode");
      const options = {
        level: this.level,
        router: this.$router
      };

      if (randomMode === "family") {
        options.family = sessionStorage.getItem("randomFamily");
      }

      techniqueUtils.navigateToRandomTechnique(options);
    },
  },
  template: `
    <div class="technique-detail-page">
      <div class="navigation-links">
        <router-link :to="'/' + family"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ familyData.title }}</router-link>

        <button v-if="inRandomMode" @click="goToNextRandomTechnique"
          class="random-btn"
          :class="{ 'global-random-btn': isGlobalMode }">
          Next Random Technique
          <i class="fa-solid fa-forward" aria-hidden="true"></i>
        </button>
      </div>

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
