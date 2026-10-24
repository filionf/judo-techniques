const beltColors = {
  yellow: "#f2c811",
  orange: "#ec7a1c",
  green: "#2e9e4f",
  blue: "#2f6fd1",
  brown: "#7a4a24",
  black: "#1a1a1a",
};

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
    otherLanguage() {
      return this.$i18n.locale === "fr" ? "en" : "fr";
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
    selectAllLevels() {
      this.selectedLevels = [...this.levels];
      appState.setLevels(this.selectedLevels);
    },
    selectNoLevels() {
      this.selectedLevels = [];
      appState.setLevels(this.selectedLevels);
    },
    // Belt colour dot, split in two for intermediate belts (e.g. yellow/orange)
    beltSwatchStyle(level) {
      const colors = level.split("/").map((belt) => beltColors[belt] || beltColors.black);
      return {
        background: colors.length === 1
          ? colors[0]
          : `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1]} 50%)`,
      };
    },
    toggleLanguage() {
      const language = this.otherLanguage;
      this.$i18n.locale = language;
      localStorage.setItem("preferredLanguage", language);
      document.documentElement.lang = language;
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
    closePopupOnEscape(event) {
      if (event.key === "Escape") {
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
    document.addEventListener("keydown", this.closePopupOnEscape);
  },
  beforeUnmount() {
    document.removeEventListener("levels-changed", this.onLevelsChanged);
    document.removeEventListener("click", this.closePopup);
    document.removeEventListener("keydown", this.closePopupOnEscape);
  },
  template: `
    <header>
      <div class="header-content">
        <!-- Back button in header (visible on mobile) or invisible spacer -->
        <button v-if="showBackButton" @click="goBack" class="header-back-btn" :aria-label="$t('ui.back')">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div v-else class="header-back-spacer"></div>

        <h1>
          <span class="title-full">{{ $t('ui.title') }}</span>
          <span class="title-short">Judo</span>
        </h1>
        <div class="header-controls">
          <button @click="toggleLanguage" class="language-btn" :aria-label="$t('ui.switchLanguage')">
            {{ otherLanguage.toUpperCase() }}
          </button>
          <div class="level-selector">
            <button @click.stop="togglePopup" class="level-selector-btn" aria-haspopup="true" :aria-expanded="isPopupOpen">
              <span>{{ getSelectedText() }}</span>
              <span class="dropdown-icon">&#9662;</span>
            </button>
            <div class="level-popup" v-if="isPopupOpen">
              <div class="level-shortcuts">
                <button @click="selectAllLevels">{{ $t('ui.levels.selectAll') }}</button>
                <button @click="selectNoLevels">{{ $t('ui.levels.selectNone') }}</button>
              </div>
              <ul class="menu-list" role="menu">
                <!-- Black belts -->
                <li v-for="level in groupedLevels.blackBelts" :key="level" role="none">
                  <button
                    @click="toggleLevel(level)"
                    class="menu-item"
                    role="menuitemcheckbox"
                    :aria-checked="isSelected(level)">
                    <span class="checkmark">
                      <i class="fas fa-check" :style="{ visibility: isSelected(level) ? 'visible' : 'hidden' }" aria-hidden="true"></i>
                    </span>
                    <span class="belt-swatch" :style="beltSwatchStyle(level)" aria-hidden="true"></span>
                    <span class="menu-text">{{ $t('ui.levels.' + level) }}</span>
                  </button>
                </li>

                <!-- Separator (only if both groups have items) -->
                <li class="menu-separator" role="separator" v-if="groupedLevels.coloredBelts.length && groupedLevels.blackBelts.length"></li>

                <!-- Colored belts -->
                <li v-for="level in groupedLevels.coloredBelts" :key="level" role="none">
                  <button
                    @click="toggleLevel(level)"
                    class="menu-item"
                    role="menuitemcheckbox"
                    :aria-checked="isSelected(level)">
                    <span class="checkmark">
                      <i class="fas fa-check" :style="{ visibility: isSelected(level) ? 'visible' : 'hidden' }" aria-hidden="true"></i>
                    </span>
                    <span class="belt-swatch" :style="beltSwatchStyle(level)" aria-hidden="true"></span>
                    <span class="menu-text">{{ $t('ui.levels.' + level) }}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
};
