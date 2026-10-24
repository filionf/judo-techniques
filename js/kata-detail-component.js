const KataDetailComponent = {
  props: ["kata"],
  computed: {
    kataInfo() {
      return kataData.find((k) => k.id === this.kata) || null;
    },
    gradesText() {
      return this.kataInfo.grades
        .map((grade) => this.$t(`ui.levels.${grade}`))
        .join(", ");
    },
    videoUrl() {
      return `https://www.youtube.com/embed/${this.kataInfo.videoId}?rel=0`;
    },
  },
  template: `
    <div class="technique-page">
      <div class="navigation-links">
        <router-link to="/katas"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ $t('ui.katas.title') }}</router-link>
      </div>

      <div v-if="kataInfo">
        <h2>{{ kataInfo.name }} ({{ $t('katas.' + kataInfo.id + '.subtitle') }})</h2>
        <p>{{ $t('katas.' + kataInfo.id + '.description') }}</p>
        <p class="kata-grades">{{ $t('ui.katas.requiredFor') }}: {{ gradesText }}</p>

        <div class="family-video-container">
          <div class="video-wrapper">
            <iframe
              :src="videoUrl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <a :href="kataInfo.pdfUrl" target="_blank" rel="noopener" class="favorites-link home-link">
          <i class="fas fa-file-pdf" aria-hidden="true"></i> {{ $t('ui.katas.pdf') }}
        </a>
      </div>
    </div>
  `,
};
