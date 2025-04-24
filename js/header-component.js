const HeaderComponent = {
  props: {
    modelValue: {
      type: String,
      default: "shodan",
    },
  },
  data() {
    return {
      levels: ["shodan", "nidan", "sandan"],
    };
  },
  computed: {
    selectedLevel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
        // Store in localStorage when value changes
        localStorage.setItem("judo-selected-level", value);
      },
    },
  },
  template: `
    <header>
      <div class="header-content">
        <h1>Judo Prep Guide</h1>
        <div class="level-selector">
          <label for="level-type">Level:</label>
          <select id="level-type" v-model="selectedLevel">
            <option v-for="level in levels" :key="level" :value="level">
              {{ level.charAt(0).toUpperCase() + level.slice(1) }}
            </option>
          </select>
        </div>
      </div>
    </header>
  `,
};
