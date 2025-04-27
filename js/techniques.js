/**
 * Utility functions for managing judo techniques
 */
const techniqueUtils = {
  getAllTechniquesForLevel(levels = null) {
    // Use provided level or get from appState
    const targetLevels = levels || appState.getLevels();

    // If targetLevels is an array, get techniques for any matching level
    if (Array.isArray(targetLevels)) {
      return techniqueData.filter((technique) =>
        // Check if any targetLevel is in the technique's levels array
        targetLevels.some((level) => technique.levels.includes(level))
      );
    }

    // Backward compatibility for single level
    return techniqueData.filter((technique) =>
      technique.levels.includes(targetLevels)
    );
  },

  getTechniquesForFamily(family, level = null) {
    const currentLevels = level || appState.getLevels();

    // Filter techniques by family and any of the current levels
    return techniqueData.filter(
      (technique) =>
        technique.family === family &&
        (Array.isArray(currentLevels)
          ? currentLevels.some((level) => technique.levels.includes(level))
          : technique.levels.includes(currentLevels))
    );
  },

  getRandomTechnique(options = {}) {
    // Default level to current levels from appState if not specified
    const {
      level = appState.getLevels(),
      family = null,
      excludeIds = [],
    } = options;

    // Filter techniques by selected levels and optionally by family
    let techniques = techniqueData.filter(
      (technique) =>
        (Array.isArray(level)
          ? level.some((l) => technique.levels.includes(l))
          : technique.levels.includes(level)) &&
        (family === null || technique.family === family) &&
        !excludeIds.includes(technique.name)
    );

    if (techniques.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * techniques.length);
    return techniques[randomIndex];
  },

  /**
   * Navigate to a random technique with centralized tracking logic
   * @param {Object} options - Configuration options
   * @param {string|string[]} [options.level] - The skill level(s) (shodan, nidan, sandan)
   * @param {string|null} [options.family] - Optional family to limit the selection
   * @param {Function} options.router - Vue Router instance for navigation
   * @returns {Object} The selected random technique
   */
  navigateToRandomTechnique(options) {
    // Default level to current levels from appState if not specified
    const { level = appState.getLevels(), family = null, router } = options;

    // Save the random mode and family using state management
    appState.randomTechniques.setRandomMode(family || "global");

    // Get previously shown techniques from state management
    let randomlyShownTechniques =
      appState.randomTechniques.getShownTechniques();

    // Get all available techniques for this mode
    const availableTechniques = techniqueData.filter(
      (technique) =>
        (Array.isArray(level)
          ? level.some((l) => technique.levels.includes(l))
          : technique.levels.includes(level)) &&
        (family === null || technique.family === family)
    );

    console.log("Previously shown techniques:", randomlyShownTechniques);

    // Reset if all techniques have been shown
    if (randomlyShownTechniques.length >= availableTechniques.length) {
      randomlyShownTechniques = [];
      appState.randomTechniques.saveShownTechniques([]);
      console.log(
        "Reset shown techniques list - all techniques have been shown"
      );
    }

    // Get the next random technique
    const randomTechnique = this.getRandomTechnique({
      level,
      family,
      excludeIds: randomlyShownTechniques,
    });

    console.log("Selected random technique:", randomTechnique.name);

    if (randomTechnique) {
      // Add to shown list using state management
      appState.randomTechniques.addShownTechnique(randomTechnique.name);

      // Check if we're currently on a technique detail page
      const currentRoute = router.currentRoute.value;
      const isDetailPage =
        currentRoute.params.family && currentRoute.params.technique;

      // Either replace or push based on current location
      if (isDetailPage) {
        // On a detail page, replace the current route
        router.replace(
          `/${randomTechnique.family}/${encodeURIComponent(
            randomTechnique.name.toLowerCase()
          )}`
        );
      } else {
        // Not on a detail page, push a new route
        router.push(
          `/${randomTechnique.family}/${encodeURIComponent(
            randomTechnique.name.toLowerCase()
          )}`
        );
      }

      return randomTechnique;
    }

    return null;
  },
};
