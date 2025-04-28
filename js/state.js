/**
 * Central state management for the Judo app
 */
const appState = {
  // Current belt levels - default to ["shodan"] (first degree black belt)
  currentLevels: ["shodan"],

  // Available levels (belt ranks)

  availableColoredBelts: [
    "white/yellow",
    "yellow",
    "yellow/orange",
    "orange",
    "orange/green",
    "green",
    "green/blue",
    "blue",
    "blue/brown",
    "brown",
  ],
  availableBlackBelts: ["shodan", "nidan", "sandan"],

  get availableLevels() {
    return [...this.availableColoredBelts, ...this.availableBlackBelts];
  },

  // Get the current levels
  getLevels() {
    return this.currentLevels;
  },

  // Set the current levels
  setLevels(levels) {
    // Validate that all levels are allowed
    if (
      Array.isArray(levels) &&
      levels.every((level) => this.availableLevels.includes(level))
    ) {
      this.currentLevels = levels;

      // Store in localStorage for persistence
      localStorage.setItem("judoLevels", JSON.stringify(levels));

      // Dispatch a custom event that components can listen for
      document.dispatchEvent(
        new CustomEvent("levels-changed", {
          detail: { levels: this.currentLevels },
        })
      );

      return true;
    }
    return false;
  },

  // Initialize state - load saved levels from localStorage if available
  initialize() {
    try {
      const savedData = localStorage.getItem("judoLevels");
      if (savedData) {
        let savedLevels = JSON.parse(savedData);

        // Filter valid levels and ensure at least one valid level
        if (Array.isArray(savedLevels)) {
          const validLevels = savedLevels.filter((level) =>
            this.availableLevels.includes(level)
          );

          if (validLevels.length > 0) {
            this.currentLevels = validLevels;
          }
        }
      }
    } catch (error) {
      // Keep default levels on error
      console.error("Error initializing levels:", error);
    }
  },

  // Random technique state management
  randomTechniques: {
    /**
     * Get the previously shown techniques for a specific mode
     * @returns {Array} List of technique names already shown
     */
    getShownTechniques() {
      const storageKey = `randomlyShownTechniques`;
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    },

    /**
     * Save a technique as shown in the specified mode
     * @param {Array} techniques - List of technique names already shown
     */
    saveShownTechniques(techniques) {
      const storageKey = `randomlyShownTechniques`;
      localStorage.setItem(storageKey, JSON.stringify(techniques));
    },

    /**
     * Add a technique to the shown list
     * @param {string} techniqueName - Name of the technique to add
     */
    addShownTechnique(techniqueName) {
      const shown = this.getShownTechniques();
      shown.push(techniqueName);
      this.saveShownTechniques(shown);
    },

    /**
     * Clear the shown techniques for all modes
     */
    clearShownTechniques() {
      localStorage.removeItem("randomMode");
      localStorage.removeItem("randomlyShownTechniques");
    },

    /**
     * Set the current random mode
     * @param {string} mode - "global" or the family name
     */
    setRandomMode(mode) {
      let currentMode = localStorage.getItem("randomMode");
      if (currentMode !== mode) {
        localStorage.setItem("randomMode", mode);
        localStorage.removeItem("randomlyShownTechniques");
      }
    },

    /**
     * Get current random mode
     * @returns {string|null} "global", the family name, or null if not set
     */
    getCurrentMode() {
      return localStorage.getItem("randomMode") || null;
    },
  },
};

// Initialize on script load
appState.initialize();

// Add levels change listener to clear random technique history
document.addEventListener("levels-changed", () => {
  appState.randomTechniques.clearShownTechniques();
});
