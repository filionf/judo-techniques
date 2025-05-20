const RootComponent = {
  data() {
    return {
      currentLevel: localStorage.getItem("judo-selected-level") || "shodan"
    };
  },
  methods: {
    updateLevel(level) {
      this.currentLevel = level;
      localStorage.setItem("judo-selected-level", level);
    }
  },
  template: `
    <header-component></header-component>
    <main>
      <router-view :level="currentLevel" :key="$route.fullPath"></router-view>
    </main>
    <footer>
      <p>&copy; 2025 Judo Reference - Francis Filion</p>
    </footer>
  `
};
