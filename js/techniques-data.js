// Create an object of technique families with video IDs
const familyData = {
  "te-waza": {
    videoId: "z5qYfCEcZOU",
  },
  "koshi-waza": {
    videoId: "cgIby7HnKzA",
  },
  "ashi-waza": {
    videoId: "-Xpmgtaypmg",
  },
  "masutemi-waza": {
    videoId: "LnjW67efl00",
  },
  "yoko-sutemi-waza": {
    videoId: "ml_eSxz8OMo",
  },
  "osaekomi-waza": {
    videoId: "guJ-HlAKEA8",
  },
  "shime-waza": {
    videoId: "bq3cwrcS1-c",
  },
  "kansetsu-waza": {
    videoId: "QtVipMcTsdw",
  },
};

// Flattened techniques data - now a simple array with family as a property
const techniqueData = [
  // Te-waza techniques
  {
    name: "Seoi-nage",
    videoId: "zIq0xI0ogxk",
    levels: ["shodan", "orange/green"],
    family: "te-waza",
  },
  {
    name: "Ippon-seoi-nage",
    videoId: "FQnOlCxo4oI",
    levels: ["shodan", "yellow"],
    family: "te-waza",
  },
  {
    name: "Tai-otoshi",
    videoId: "4x6S3Q-Ktv8",
    levels: ["shodan", "orange"],
    family: "te-waza",
  },
  {
    name: "Kata-guruma",
    videoId: "cnHRhSy8yi4",
    levels: ["shodan", "orange/green"],
    family: "te-waza",
  },
  {
    name: "Sukui-nage",
    videoId: "vU6aJ2kFxoI",
    levels: ["shodan", "green/blue"],
    family: "te-waza",
  },
  {
    name: "Uki-otoshi",
    videoId: "6H5tmncOY4Q",
    levels: ["shodan", "blue"],
    family: "te-waza",
  },
  {
    name: "Sumi-otoshi",
    videoId: "lLU9wv52ni0",
    levels: ["shodan", "green/blue"],
    family: "te-waza",
  },
  {
    name: "Ko-uchi-gaeshi",
    videoId: "_MWAdYi_LC4",
    levels: ["nidan", "brown"],
    family: "te-waza",
  },
  {
    name: "Seoi-otoshi",
    videoId: "vu1TMVNnq34",
    levels: ["sandan", "green"],
    family: "te-waza",
  },
  {
    name: "Obi-otoshi",
    videoId: "ff8U2TVZIYI",
    levels: ["sandan", "green/blue"],
    family: "te-waza",
  },
  {
    name: "Yama-arashi",
    videoId: "MGlyKmSuzdc",
    levels: ["sandan", "green"],
    family: "te-waza",
  },
  {
    name: "Obi-tori-gaeshi",
    videoId: "bpc82SrunUU",
    levels: ["sandan"],
    family: "te-waza",
  },
  {
    name: "Morote-gari",
    videoId: "BHLQS4K85bs",
    levels: ["sandan", "blue/brown"],
    family: "te-waza",
  },
  {
    name: "Kuchiki-taoshi",
    videoId: "ZNL47q1aJNY",
    levels: ["sandan", "brown"],
    family: "te-waza",
  },
  {
    name: "Kibisu-gaeshi",
    videoId: "tJylJYfBliA",
    levels: ["sandan", "brown"],
    family: "te-waza",
  },
  {
    name: "Uchi-mata-sukashi",
    videoId: "V-RS3uhtVWM",
    levels: ["sandan", "brown"],
    family: "te-waza",
  },
  // Koshi-waza techniques
  {
    name: "Uki-goshi",
    videoId: "bPKwtB4lyOQ",
    levels: ["shodan", "orange"],
    family: "koshi-waza",
  },
  {
    name: "O-goshi",
    videoId: "yhu1mfy2vJ4",
    levels: ["shodan", "yellow"],
    family: "koshi-waza",
  },
  {
    name: "Koshi-guruma",
    videoId: "SU7Id6uVJ44",
    levels: ["shodan", "yellow"],
    family: "koshi-waza",
  },
  {
    name: "Tsurikomi-goshi",
    videoId: "McfzA0yRVt4",
    levels: ["shodan", "yellow/orange"],
    family: "koshi-waza",
  },
  {
    name: "Harai-goshi",
    videoId: "qTo8HlAAkOo",
    levels: ["shodan", "orange/green"],
    family: "koshi-waza",
  },
  {
    name: "Tsuri-goshi",
    videoId: "51Htlp7xEvE",
    levels: ["shodan", "orange/green"],
    family: "koshi-waza",
  },
  {
    name: "Hane-goshi",
    videoId: "M9_7De6A1kk",
    levels: ["shodan", "orange/green"],
    family: "koshi-waza",
  },
  {
    name: "Utsuri-goshi",
    videoId: "4pQd_bEnlf0",
    levels: ["shodan", "blue/brown"],
    family: "koshi-waza",
  },
  {
    name: "Ushiro-goshi",
    videoId: "ORIYstuxYT8",
    levels: ["shodan", "green/blue"],
    family: "koshi-waza",
  },
  {
    name: "Sode-tsurikomi-goshi",
    videoId: "QsmAxpmYLOI",
    levels: ["sandan", "blue"],
    family: "koshi-waza",
  },
  // Ashi-waza techniques
  {
    name: "De-ashi-harai",
    videoId: "4BUUvqxi_Kk",
    levels: ["shodan", "yellow/orange"],
    family: "ashi-waza",
  },
  {
    name: "Hiza-guruma",
    videoId: "JPJx9-oAVns",
    levels: ["shodan", "yellow"],
    family: "ashi-waza",
  },
  {
    name: "Sasae-tsurikomi-ashi",
    videoId: "699i--pvYmE",
    levels: ["shodan", "orange"],
    family: "ashi-waza",
  },
  {
    name: "O-soto-gari",
    videoId: "c-A_nP7mKAc",
    levels: ["shodan", "yellow"],
    family: "ashi-waza",
  },
  {
    name: "O-uchi-gari",
    videoId: "0itJFhV9pDQ",
    levels: ["shodan", "yellow"],
    family: "ashi-waza",
  },
  {
    name: "Ko-soto-gari",
    videoId: "jeQ541ScLB4",
    levels: ["shodan", "yellow/orange"],
    family: "ashi-waza",
  },
  {
    name: "Ko-uchi-gari",
    videoId: "3Jb3tZvr9Ng",
    levels: ["shodan", "yellow/orange"],
    family: "ashi-waza",
  },
  {
    name: "Okuri-ashi-harai",
    videoId: "nw1ZdRjrdRI",
    levels: ["shodan", "green"],
    family: "ashi-waza",
  },
  {
    name: "Uchi-mata",
    videoId: "iUpSu5J-bgw",
    levels: ["shodan", "green/blue"],
    family: "ashi-waza",
  },
  {
    name: "Ko-soto-gake",
    videoId: "8b6kY4s4zH4",
    levels: ["shodan", "green"],
    family: "ashi-waza",
  },
  {
    name: "Ashi-guruma",
    videoId: "ROeayhvom9U",
    levels: ["shodan", "green"],
    family: "ashi-waza",
  },
  {
    name: "Harai-tsurikomi-ashi",
    videoId: "gGPXvWL8VbE",
    levels: ["shodan", "blue/brown"],
    family: "ashi-waza",
  },
  {
    name: "O-guruma",
    videoId: "SnZciTAY9vc",
    levels: ["shodan", "orange"],
    family: "ashi-waza",
  },
  {
    name: "O-soto-guruma",
    videoId: "92KbCm6pQeI",
    levels: ["shodan", "orange/green"],
    family: "ashi-waza",
  },
  {
    name: "O-soto-gaeshi",
    videoId: "8ZjM3X_EANo",
    levels: ["nidan", "brown"],
    family: "ashi-waza",
  },
  {
    name: "O-uchi-gaeshi",
    videoId: "dCyZTXyjIXE",
    levels: ["nidan", "brown"],
    family: "ashi-waza",
  },
  {
    name: "Hane-goshi-gaeshi",
    videoId: "9bZAZSBtnGs",
    levels: ["nidan", "brown"],
    family: "ashi-waza",
  },
  {
    name: "Harai-goshi-gaeshi",
    videoId: "4U3It-7PPsc",
    levels: ["nidan", "blue/brown"],
    family: "ashi-waza",
  },
  {
    name: "Uchi-mata-gaeshi",
    videoId: "Sy6sLWxkWYw",
    levels: ["nidan", "blue/brown"],
    family: "ashi-waza",
  },
  {
    name: "O-soto-otoshi",
    videoId: "2DsVvDw7b8g",
    levels: ["sandan", "green"],
    family: "ashi-waza",
  },
  {
    name: "Tsubame-gaeshi",
    videoId: "GwweWqqFB5g",
    levels: ["sandan", "green"],
    family: "ashi-waza",
  },
  // Masutemi-waza techniques
  {
    name: "Tomoe-nage",
    videoId: "880WbHvHv6A",
    levels: ["shodan", "green/blue"],
    family: "masutemi-waza",
  },
  {
    name: "Sumi-gaeshi",
    videoId: "5VhduA5xkbA",
    levels: ["shodan", "blue/brown"],
    family: "masutemi-waza",
  },
  {
    name: "Ura-nage",
    videoId: "Fgi9b8DJ5sQ",
    levels: ["shodan", "brown"],
    family: "masutemi-waza",
  },
  {
    name: "Hikikomi-gaeshi",
    videoId: "92zUYWBp5N8",
    levels: ["sandan"],
    family: "masutemi-waza",
  },
  {
    name: "Tawara-gaeshi",
    videoId: "TmTWgrmViZc",
    levels: ["sandan"],
    family: "masutemi-waza",
  },
  // Yoko-sutemi-waza techniques
  {
    name: "Yoko-otoshi",
    videoId: "MnNG67pF_a0",
    levels: ["shodan", "blue"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Tani-otoshi",
    videoId: "3b9Me3Fohpk",
    levels: ["shodan", "blue"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Hane-makikomi",
    videoId: "6CRBGLGz9j8",
    levels: ["shodan", "blue"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Soto-makikomi",
    videoId: "bWG9O1BVKtQ",
    levels: ["shodan", "blue"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Uki-waza",
    videoId: "weVOpJ63gII",
    levels: ["shodan", "blue"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Yoko-wakare",
    videoId: "bp1tscHlePI",
    levels: ["shodan", "blue/brown"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Yoko-guruma",
    videoId: "MehP6I5cY2c",
    levels: ["shodan", "blue"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Yoko-gake",
    videoId: "tP1Sj1uDfSo",
    levels: ["shodan", "brown"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Uchi-makikomi",
    videoId: "5BowcjduxVc",
    levels: ["sandan", "blue/brown"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Daki-wakare",
    videoId: "Hr0cOMGBDYo",
    levels: ["sandan"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "O-soto-makikomi",
    videoId: "DGDv2oMwmas",
    levels: ["sandan", "brown"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Uchi-mata-makikomi",
    videoId: "jZXENTLpJCI",
    levels: ["sandan", "blue/brown"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Harai-makikomi",
    videoId: "VBaHzKaCXss",
    levels: ["sandan", "blue"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Ko-uchi-makikomi",
    videoId: "_1eygIXLD_w",
    levels: ["sandan"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Kani-basami",
    videoId: "OR-HGHnarYc",
    levels: ["sandan"],
    family: "yoko-sutemi-waza",
  },
  {
    name: "Kawazu-gake",
    videoId: "w6G57bWACi0",
    levels: ["sandan"],
    family: "yoko-sutemi-waza",
  },
  // Osaekomi-waza techniques
  {
    name: "Kesa-gatame",
    videoId: "NDaQuJOFBYk",
    levels: ["shodan", "yellow/orange"],
    family: "osaekomi-waza",
    exitVideoId: "5_TS0YHdxcQ"
  },
  {
    name: "Kata-gatame",
    videoId: "zQR3IOXxO_Q",
    levels: ["shodan", "yellow/orange"],
    family: "osaekomi-waza",
    exitVideoId: "7hP1-W2yovk"
  },
  {
    name: "Kuzure-kami-shiho-gatame",
    videoId: "YUrogQWdwiY",
    levels: ["shodan", "yellow/orange"],
    family: "osaekomi-waza",
    exitVideoId: "PPe7E_7d7UI"
  },
  {
    name: "Yoko-shiho-gatame",
    videoId: "TT7XJVSEQxA",
    levels: ["shodan", "yellow"],
    family: "osaekomi-waza",
    exitVideoId: "yK_GSamSPko"
  },
  {
    name: "Tate-shiho-gatame",
    videoId: "55-rFmBx53g",
    levels: ["shodan", "orange"],
    family: "osaekomi-waza",
    exitVideoId: "JMJBjnst_DA"
  },
  {
    name: "Kuzure-kesa-gatame",
    videoId: "Q2fb9jaoUFQ",
    levels: ["shodan", "yellow"],
    family: "osaekomi-waza",
    exitVideoId: "-zFQ6h4yKT4"
  },
  {
    name: "Kami-shiho-gatame",
    videoId: "HFuMjOv0WN8",
    levels: ["shodan", "yellow"],
    family: "osaekomi-waza",
    exitVideoId: "seGsXy9I4G8"
  },
  {
    name: "Ushiro-kesa-gatame",
    videoId: "SBapox2M2dE",
    levels: ["nidan"],
    family: "osaekomi-waza",
    exitVideoId: "4QuzAAucQsA"
  },
  {
    name: "Uki-gatame",
    videoId: "e_lAjik1SUM",
    levels: ["sandan"],
    family: "osaekomi-waza",
    exitVideoId: "AMHWDFR4ryo"
  },
  {
    name: "Ura-gatame",
    videoId: "eeAHZB0v3XY",
    levels: ["sandan"],
    family: "osaekomi-waza",
    exitVideoId: "0aY2Tmchzs8"
  },
  // Shime-waza techniques
  {
    name: "Nami-juji-jime",
    videoId: "k2cHry9HByQ",
    levels: ["shodan", "orange/green"],
    family: "shime-waza",
  },
  {
    name: "Gyaku-juji-jime",
    videoId: "t3tQriIPdlI",
    levels: ["shodan", "orange/green"],
    family: "shime-waza",
  },
  {
    name: "Kata-juji-jime",
    videoId: "3VZVUAmiMD8",
    levels: ["shodan", "green"],
    family: "shime-waza",
  },
  {
    name: "Hadaka-jime",
    videoId: "9f0n8jez7iA",
    levels: ["shodan", "green"],
    family: "shime-waza",
  },
  {
    name: "Okuri-eri-jime",
    videoId: "EiqyoVcIAi8",
    levels: ["shodan", "green/blue"],
    family: "shime-waza",
  },
  {
    name: "Kata-ha-jime",
    videoId: "yaTGgRjnwB8",
    levels: ["shodan", "green/blue"],
    family: "shime-waza",
  },
  {
    name: "Sankaku-jime",
    videoId: "lq1CUBRAm7s",
    levels: ["nidan", "blue"],
    family: "shime-waza",
  },
  {
    name: "Kata-te-jime",
    videoId: "cHeIs-fSqwE",
    levels: ["sandan", "brown"],
    family: "shime-waza",
  },
  {
    name: "Ryote-jime",
    videoId: "-RHC4V7TQiY",
    levels: ["sandan", "brown"],
    family: "shime-waza",
  },
  {
    name: "Sode-guruma-jime",
    videoId: "E3nvQzClcAU",
    levels: ["sandan", "blue"],
    family: "shime-waza",
  },
  {
    name: "Tsukkomi-jime",
    videoId: "dKKpnD3eLcY",
    levels: ["sandan", "blue/brown"],
    family: "shime-waza",
  },
  {
    name: "Do-jime",
    videoId: "D_0fFcoIbvY",
    levels: ["sandan", "brown"],
    family: "shime-waza",
  },
  // Kansetsu-waza techniques
  {
    name: "Ude-garami",
    videoId: "AIlTvZb4RlE",
    levels: ["shodan", "green/blue"],
    family: "kansetsu-waza",
  },
  {
    name: "Ude-hishigi-juji-gatame",
    videoId: "OWgSOlCuMXw",
    levels: ["shodan", "green"],
    family: "kansetsu-waza",
  },
  {
    name: "Ude-hishigi-ude-gatame",
    videoId: "SBf0aTma1VI",
    levels: ["shodan", "blue"],
    family: "kansetsu-waza",
  },
  {
    name: "Ude-hishigi-hiza-gatame",
    videoId: "H2HtAJdiJcE",
    levels: ["shodan", "brown"],
    family: "kansetsu-waza",
  },
  {
    name: "Ude-hishigi-waki-gatame",
    videoId: "8F5p1zuJRG0",
    levels: ["shodan", "blue"],
    family: "kansetsu-waza",
  },
  {
    name: "Ude-hishigi-hara-gatame",
    videoId: "ZzEycg8R_9M",
    levels: ["shodan", "blue/brown"],
    family: "kansetsu-waza",
  },
  {
    name: "Ude-hishigi-ashi-gatame",
    videoId: "ClY7g_pX-4s",
    levels: ["sandan", "brown"],
    family: "kansetsu-waza",
  },
  {
    name: "Ude-hishigi-te-gatame",
    videoId: "6DnvhY0tQVM",
    levels: ["sandan", "brown"],
    family: "kansetsu-waza",
  },
  {
    name: "Ude-hishigi-sankaku-gatame",
    videoId: "WefAmW4azhk",
    levels: ["sandan", "blue/brown"],
    family: "kansetsu-waza",
  },
  {
    name: "Ashi-garami",
    videoId: "BWWb0GoAtZw",
    levels: ["sandan", "brown"],
    family: "kansetsu-waza",
  },
];
