const HeaderComponent = {
  data() {
    return {
      levels: appState.availableLevels || ["shodan", "nidan", "sandan"],
      selectedLevel: appState.getLevel(),
    };
  },
  methods: {
    onLevelChange() {
      // Update the level in the centralized state
      appState.setLevel(this.selectedLevel);

      // No need to manually emit events or store in localStorage
      // since appState.setLevel() handles that
    },
    onLevelChanged(event) {
      // Update local state when level is changed elsewhere
      this.selectedLevel = appState.getLevel();
    },
  },
  mounted() {
    // Listen for level changes from other components
    document.addEventListener("level-changed", this.onLevelChanged);
  },
  beforeUnmount() {
    // Clean up event listener
    document.removeEventListener("level-changed", this.onLevelChanged);
  },
  template: `
    <header>
      <div class="header-content">
        <h1>Judo Prep Guide</h1>
        <div class="level-selector">
          <label for="level-type">Level:</label>
          <select id="level-type" v-model="selectedLevel" @change="onLevelChange">
            <option v-for="level in levels" :key="level" :value="level">
              {{ level.charAt(0).toUpperCase() + level.slice(1) }}
            </option>
          </select>
        </div>
      </div>
    </header>
  `,
};
