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
    // If family is "favorites", return favorite techniques
    if (family === "favorites") {
      return appState.favorites.getAllFavoriteTechniques();
    }

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
      onlyFavorites = false,
    } = options;

    // Filter techniques by selected levels and optionally by family
    let techniques = techniqueData.filter(
      (technique) =>
        (Array.isArray(level)
          ? level.some((l) => technique.levels.includes(l))
          : technique.levels.includes(level)) &&
        (family === null || technique.family === family) &&
        (!onlyFavorites || appState.favorites.isFavorite(technique.name)) &&
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
   * @param {boolean} [options.onlyFavorites] - Whether to only select from favorites
   * @param {Function} options.router - Vue Router instance for navigation
   * @returns {Object} The selected random technique
   */
  navigateToRandomTechnique(options) {
    // Default level to current levels from appState if not specified
    const {
      level = appState.getLevels(),
      family = null,
      onlyFavorites = false,
      router,
    } = options;

    // Save the random mode using state management
    if (onlyFavorites) {
      appState.randomTechniques.setRandomMode("favorites");
    } else {
      appState.randomTechniques.setRandomMode(family || "global");
    }

    // Get previously shown techniques from state management
    let randomlyShownTechniques =
      appState.randomTechniques.getShownTechniques();

    // Get all available techniques for this mode
    let availableTechniques;
    if (onlyFavorites) {
      availableTechniques = appState.favorites
        .getAllFavoriteTechniques()
        .filter((technique) =>
          Array.isArray(level)
            ? level.some((l) => technique.levels.includes(l))
            : technique.levels.includes(level)
        );
    } else {
      availableTechniques = techniqueData.filter(
        (technique) =>
          (Array.isArray(level)
            ? level.some((l) => technique.levels.includes(l))
            : technique.levels.includes(level)) &&
          (family === null || technique.family === family)
      );
    }

    // console.log("Previously shown techniques:", randomlyShownTechniques);

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
      onlyFavorites,
    });

    if (!randomTechnique) {
      console.log("No matching techniques available");
      return null;
    }

    // console.log("Selected random technique:", randomTechnique.name);

    // Add to shown list using state management
    appState.randomTechniques.addShownTechnique(randomTechnique.name);

    const currentRoute = router.currentRoute.value;
    const isDetailPage = currentRoute.name === "TechniqueDetail";
    if (isDetailPage) {
      router.replace({
        name: "TechniqueDetail",
        params: { technique: randomTechnique.name.toLowerCase() },
      });
    } else {
      router.push({
        name: "TechniqueDetail",
        params: { technique: randomTechnique.name.toLowerCase() },
      });
    }

    return randomTechnique;
  },
};
