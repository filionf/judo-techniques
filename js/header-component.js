const HeaderComponent = {
  data() {
    return {
      levels: appState.availableLevels || ["shodan", "nidan", "sandan"],
      selectedLevel: appState.getLevels()[0], // Get first level from the array
    };
  },
  methods: {
    onLevelChange() {
      // Update the level in the centralized state
      appState.setLevels([this.selectedLevel]);
    },
    onLevelsChanged(event) {
      // Update local state when level is changed elsewhere
      this.selectedLevel = appState.getLevels()[0];
    },
  },
  mounted() {
    // Listen for level changes from other components
    document.addEventListener("levels-changed", this.onLevelsChanged); // Updated event name
  },
  beforeUnmount() {
    // Clean up event listener
    document.removeEventListener("levels-changed", this.onLevelsChanged); // Updated event name
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
