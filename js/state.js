/**
 * Central state management for the Judo app
 */
const appState = {
  // Current belt levels - default to ["shodan"] (first degree black belt)
  currentLevels: ["shodan"],

  // Available levels (belt ranks)

  availableColoredBelts: [
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

      // Initialize favorites
      this.favorites.initialize();
    } catch (error) {
      // Keep default levels on error
      console.error("Error initializing levels:", error);
    }
  },

  // Favorites management
  favorites: {
    // List of favorite technique IDs
    favoriteTechniques: [],

    /**
     * Initialize favorites from localStorage
     */
    initialize() {
      try {
        const savedFavorites = localStorage.getItem("judoFavorites");
        if (savedFavorites) {
          this.favoriteTechniques = JSON.parse(savedFavorites);
        }
      } catch (error) {
        console.error("Error initializing favorites:", error);
        this.favoriteTechniques = [];
      }
    },

    /**
     * Get all favorite techniques
     * @returns {Array} List of favorite technique names
     */
    getFavorites() {
      return this.favoriteTechniques;
    },

    /**
     * Check if a technique is a favorite
     * @param {string} techniqueName - Name of the technique to check
     * @returns {boolean} True if the technique is a favorite
     */
    isFavorite(techniqueName) {
      return this.favoriteTechniques.includes(techniqueName);
    },

    /**
     * Toggle a technique's favorite status
     * @param {string} techniqueName - Name of the technique to toggle
     * @returns {boolean} New favorite status
     */
    toggleFavorite(techniqueName) {
      const isCurrentlyFavorite = this.isFavorite(techniqueName);

      if (isCurrentlyFavorite) {
        // Remove from favorites
        this.favoriteTechniques = this.favoriteTechniques.filter(
          (name) => name !== techniqueName
        );
      } else {
        // Add to favorites
        this.favoriteTechniques.push(techniqueName);
      }

      // Save to localStorage
      localStorage.setItem(
        "judoFavorites",
        JSON.stringify(this.favoriteTechniques)
      );

      // Dispatch an event that components can listen for
      document.dispatchEvent(
        new CustomEvent("favorites-changed", {
          detail: {
            technique: techniqueName,
            isFavorite: !isCurrentlyFavorite,
          },
        })
      );

      return !isCurrentlyFavorite;
    },

    /**
     * Get all favorite technique objects
     * @returns {Array} List of favorite technique objects
     */
    getAllFavoriteTechniques() {
      return techniqueData.filter((technique) =>
        this.favoriteTechniques.includes(technique.name)
      );
    },
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

  // Notes management
  notes: {
    /**
     * Generate storage key for a technique note
     * @param {string} techniqueId - Technique identifier
     * @returns {string} Storage key for the note
     */
    getNoteKey(techniqueId) {
      return `judo_note_${techniqueId}`;
    },

    /**
     * Get note for a technique
     * @param {string} techniqueId - Technique identifier
     * @returns {string} Note text or empty string if no note exists
     */
    getNote(techniqueId) {
      return localStorage.getItem(this.getNoteKey(techniqueId)) || '';
    },

    /**
     * Save note for a technique
     * @param {string} techniqueId - Technique identifier
     * @param {string} noteText - Note text to save
     */
    saveNote(techniqueId, noteText) {
      if (noteText && noteText.trim()) {
        localStorage.setItem(this.getNoteKey(techniqueId), noteText);
      } else {
        localStorage.removeItem(this.getNoteKey(techniqueId));
      }

      // Dispatch an event that components can listen for
      document.dispatchEvent(
        new CustomEvent("note-changed", {
          detail: {
            techniqueId: techniqueId,
            hasNote: this.hasNote(techniqueId)
          },
        })
      );
    },

    /**
     * Check if a technique has a note
     * @param {string} techniqueId - Technique identifier
     * @returns {boolean} True if the technique has a note
     */
    hasNote(techniqueId) {
      const note = localStorage.getItem(this.getNoteKey(techniqueId));
      return note !== null && note.trim() !== '';
    }
  },
};

// Initialize on script load
appState.initialize();

// Add levels change listener to clear random technique history
document.addEventListener("levels-changed", () => {
  appState.randomTechniques.clearShownTechniques();
});
