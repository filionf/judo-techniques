/**
 * Central state management for the Judo app
 */
const appState = {
  // Current belt level - default to "shodan" (first degree black belt)
  currentLevel: "shodan",

  // Available levels (belt ranks)
  availableLevels: ["shodan", "nidan", "sandan"],

  // Get the current level
  getLevel() {
    return this.currentLevel;
  },

  // Set the current level
  setLevel(level) {
    // Validate that the level is allowed
    if (this.availableLevels.includes(level)) {
      this.currentLevel = level;

      // Store in localStorage for persistence
      localStorage.setItem("judoLevel", level);

      // Dispatch a custom event that components can listen for
      document.dispatchEvent(
        new CustomEvent("level-changed", {
          detail: { level: this.currentLevel },
        })
      );

      return true;
    }
    return false;
  },

  // Initialize state - load saved level from localStorage if available
  initialize() {
    const savedLevel = localStorage.getItem("judoLevel");
    if (savedLevel && this.availableLevels.includes(savedLevel)) {
      this.currentLevel = savedLevel;
    }
    return this.currentLevel;
  },

  // Random technique state management
  randomTechniques: {
    /**
     * Get the previously shown techniques for a specific mode
     * @returns {Array} List of technique names already shown
     */
    getShownTechniques() {
      const storageKey = `randomlyShownTechniques`;
      return JSON.parse(sessionStorage.getItem(storageKey) || "[]");
    },

    /**
     * Save a technique as shown in the specified mode
     * @param {Array} techniques - List of technique names already shown
     */
    saveShownTechniques(techniques) {
      const storageKey = `randomlyShownTechniques`;
      sessionStorage.setItem(storageKey, JSON.stringify(techniques));
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
      sessionStorage.removeItem("randomMode");
      sessionStorage.removeItem("randomlyShownTechniques");
    },

    /**
     * Set the current random mode
     * @param {string} mode - "global" or the family name
     */
    setRandomMode(mode) {
      let currentMode = sessionStorage.getItem("randomMode");
      if (currentMode !== mode) {
        sessionStorage.setItem("randomMode", mode);
        sessionStorage.removeItem("randomlyShownTechniques");
      }
    },

    /**
     * Get current random mode
     * @returns {string|null} "global", the family name, or null if not set
     */
    getCurrentMode() {
      return sessionStorage.getItem("randomMode") || null;
    },
  },
};

// Initialize on script load
appState.initialize();

// Add level change listener to clear random technique history
document.addEventListener("level-changed", () => {
  appState.randomTechniques.clearShownTechniques();
});
