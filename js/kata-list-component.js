const KataListComponent = {
  data() {
    return {
      katas: kataData,
    };
  },
  methods: {
    gradesText(kata) {
      return kata.grades.map((grade) => this.$t(`ui.levels.${grade}`)).join(", ");
    },
  },
  template: `
    <div class="technique-page">
      <div class="navigation-links">
        <router-link to="/"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ $t('ui.home') }}</router-link>
      </div>
      <h2>{{ $t('ui.katas.title') }}</h2>
      <p>{{ $t('ui.katas.description') }}</p>

      <div class="family-list">
        <router-link
          v-for="kata in katas"
          :key="kata.id"
          :to="'/kata/' + kata.id"
          class="technique-family-card"
        >
          <div>
            <h3>{{ kata.name }}</h3>
            <p>{{ $t('katas.' + kata.id + '.subtitle') }}</p>
            <p class="kata-grades">{{ $t('ui.katas.requiredFor') }}: {{ gradesText(kata) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  `,
};
