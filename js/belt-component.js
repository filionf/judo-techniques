const BeltComponent = {
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${beltVideoId}?rel=0`;
    },
  },
  template: `
    <div class="technique-page">
      <div class="navigation-links">
        <router-link to="/"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ $t('ui.home') }}</router-link>
      </div>
      <h2>{{ $t('ui.belt.title') }}</h2>
      <p>{{ $t('ui.belt.intro') }}</p>

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
    </div>
  `,
};
