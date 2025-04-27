const HeaderComponent = {
  data() {
    return {
      levels: appState.availableLevels || ["shodan", "nidan", "sandan"],
      selectedLevels: appState.getLevels(),
      isPopupOpen: false,
    };
  },
  methods: {
    toggleLevel(level) {
      if (this.selectedLevels.includes(level)) {
        this.selectedLevels = this.selectedLevels.filter((l) => l !== level);
      } else {
        this.selectedLevels.push(level);
      }

      appState.setLevels(this.selectedLevels);
    },
    isSelected(level) {
      return this.selectedLevels.includes(level);
    },
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
    closePopup(event) {
      // Close popup when clicking outside
      if (!event.target.closest(".level-selector")) {
        this.isPopupOpen = false;
      }
    },
    onLevelsChanged(event) {
      this.selectedLevels = appState.getLevels();
    },
    getSelectedText() {
      const count = this.selectedLevels.length;
      if (count === 0) return "No levels";
      if (count === this.levels.length) return "All levels";
      if (count === 1) {
        // Display the actual level name when only one is selected
        const levelName = this.selectedLevels[0];
        return levelName.charAt(0).toUpperCase() + levelName.slice(1);
      }
      return `${count} levels`;
    },
  },
  mounted() {
    document.addEventListener("levels-changed", this.onLevelsChanged);
    document.addEventListener("click", this.closePopup);
  },
  beforeUnmount() {
    document.removeEventListener("levels-changed", this.onLevelsChanged);
    document.removeEventListener("click", this.closePopup);
  },
  template: `
    <header>
      <div class="header-content">
        <h1>Judo Prep Guide</h1>
        <div class="level-selector">
          <button @click.stop="togglePopup" class="level-selector-btn">
            <span>{{ getSelectedText() }}</span>
            <span class="dropdown-icon">&#9662;</span>
          </button>
          <div class="level-popup" v-if="isPopupOpen">
            <ul class="menu-list">
              <li v-for="level in levels"
                  :key="level"
                  @click="toggleLevel(level)"
                  class="menu-item">
                <span class="checkmark" v-if="isSelected(level)">
                  <i class="fas fa-check"></i>
                </span>
                <span class="checkmark" v-else>
                  <i class="fas fa-check" style="visibility: hidden;"></i>
                </span>
                <span class="menu-text">{{ level.charAt(0).toUpperCase() + level.slice(1) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  `,
};
