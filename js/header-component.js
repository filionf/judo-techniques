const HeaderComponent = {
  data() {
    return {
      levels: appState.availableLevels,
      selectedLevels: appState.getLevels(),
      isPopupOpen: false,
    };
  },
  computed: {
    // Get grouped levels directly from appState
    groupedLevels() {
      return {
        blackBelts: appState.availableBlackBelts || [],
        coloredBelts: appState.availableColoredBelts || [],
      };
    },
    // Check if we're on the home page
    isHomePage() {
      return this.$route.path === "/" || this.$route.path === "";
    },
    // Show back button on all pages except home
    showBackButton() {
      return !this.isHomePage;
    },
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
    // Add a method to go back
    goBack() {
      this.$router.back();
    },
    getSelectedText() {
      const count = this.selectedLevels.length;

      // Check if all colored belts are selected
      const allColoredBeltsSelected =
        this.groupedLevels.coloredBelts.length > 0 &&
        this.groupedLevels.coloredBelts.every((level) =>
          this.selectedLevels.includes(level)
        );

      // Check if all black belts are selected
      const allBlackBeltsSelected =
        this.groupedLevels.blackBelts.length > 0 &&
        this.groupedLevels.blackBelts.every((level) =>
          this.selectedLevels.includes(level)
        );

      if (count === 0) return this.$t("ui.levels.noLevels");

      // Return "All levels" if either all colored belts or all black belts are selected
      if (allColoredBeltsSelected && allBlackBeltsSelected) {
        return this.$t("ui.levels.allLevels");
      }

      if (count === this.levels.length) return this.$t("ui.levels.allLevels");
      if (count === 1) {
        // Display the translated level name when only one is selected
        const levelName = this.selectedLevels[0];
        return this.$t(`ui.levels.${levelName}`);
      }

      // Check for consecutive belts
      const consecutiveRange = this.getConsecutiveBeltsRange();
      if (consecutiveRange) {
        return consecutiveRange;
      }

      return this.$t("ui.levels.multiplelevels", { count });
    },

    // Add a new method to detect consecutive belt ranges
    getConsecutiveBeltsRange() {
      // Combine belt arrays in proper progression order
      const orderedBelts = [
        ...this.groupedLevels.coloredBelts,
        ...this.groupedLevels.blackBelts,
      ];

      // Sort selected belts according to the established belt order
      const selectedOrderedBelts = this.selectedLevels
        .filter((level) => orderedBelts.includes(level))
        .sort((a, b) => orderedBelts.indexOf(a) - orderedBelts.indexOf(b));

      if (selectedOrderedBelts.length < 2) return null;

      // Get indices of selected belts in the ordered list
      const selectedIndices = selectedOrderedBelts.map((belt) =>
        orderedBelts.indexOf(belt)
      );

      // Check if indices are consecutive
      const isConsecutive = selectedIndices.every(
        (val, idx, arr) => idx === 0 || val === arr[idx - 1] + 1
      );

      if (isConsecutive) {
        const startLevel = selectedOrderedBelts[0];
        const endLevel = selectedOrderedBelts[selectedOrderedBelts.length - 1];

        return `${this.$t(`ui.levels.${startLevel}`)} - ${this.$t(
          `ui.levels.${endLevel}`
        )}`;
      }

      return null;
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
        <!-- Back button in header (visible on mobile) or invisible spacer -->
        <button v-if="showBackButton" @click="goBack" class="header-back-btn">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div v-else class="header-back-spacer"></div>

        <h1>{{ $t('ui.title') }}</h1>
        <div class="level-selector">
          <button @click.stop="togglePopup" class="level-selector-btn">
            <span>{{ getSelectedText() }}</span>
            <span class="dropdown-icon">&#9662;</span>
          </button>
          <div class="level-popup" v-if="isPopupOpen">
            <ul class="menu-list">
              <!-- Black belts -->
              <li v-for="level in groupedLevels.blackBelts"
                  :key="level"
                  @click="toggleLevel(level)"
                  class="menu-item">
                <span class="checkmark" v-if="isSelected(level)">
                  <i class="fas fa-check"></i>
                </span>
                <span class="checkmark" v-else>
                  <i class="fas fa-check" style="visibility: hidden;"></i>
                </span>
                <span class="menu-text">{{ $t('ui.levels.' + level) }}</span>
              </li>

              <!-- Separator (only if both groups have items) -->
              <li class="menu-separator" v-if="groupedLevels.coloredBelts.length && groupedLevels.blackBelts.length"></li>

              <!-- Colored belts -->
              <li v-for="level in groupedLevels.coloredBelts"
                  :key="level"
                  @click="toggleLevel(level)"
                  class="menu-item">
                <span class="checkmark" v-if="isSelected(level)">
                  <i class="fas fa-check"></i>
                </span>
                <span class="checkmark" v-else>
                  <i class="fas fa-check" style="visibility: hidden;"></i>
                </span>
                <span class="menu-text">{{ $t('ui.levels.' + level) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  `,
};
