// Centralized data store for all judo techniques
const techniqueData = {
  "te-waza": {
    title: "TE-WAZA (Hand Techniques)",
    description:
      "Hand techniques in judo focus on using grip and arm strength to throw opponents.",
    techniques: [
      {
        name: "Seoi-nage",
        videoId: "zIq0xI0ogxk",
        description: "Shoulder throw",
        level: "shodan",
      },
      {
        name: "Ippon-seoi-nage",
        videoId: "FQnOlCxo4oI",
        description: "One-arm shoulder throw",
        level: "shodan",
      },
      {
        name: "Tai-otoshi",
        videoId: "4x6S3Q-Ktv8",
        description: "Body drop",
        level: "shodan",
      },
      {
        name: "Kata-guruma",
        videoId: "cnHRhSy8yi4",
        description: "Shoulder wheel",
        level: "shodan",
      },
      {
        name: "Sukui-nage",
        videoId: "vU6aJ2kFxoI",
        description: "Scooping throw",
        level: "shodan",
      },
      {
        name: "Uki-otoshi",
        videoId: "6H5tmncOY4Q",
        description: "Floating drop",
        level: "shodan",
      },
      {
        name: "Sumi-otoshi",
        videoId: "lLU9wv52ni0",
        description: "Corner drop",
        level: "shodan",
      },
    ],
  },
  "koshi-waza": {
    title: "KOSHI-WAZA (Hip Techniques)",
    description:
      "Hip techniques involve using your hip as a fulcrum to throw your opponent.",
    techniques: [
      {
        name: "Uki-goshi",
        videoId: "bPKwtB4lyOQ",
        description: "Floating hip throw",
        level: "shodan",
      },
      {
        name: "O-goshi",
        videoId: "yhu1mfy2vJ4",
        description: "Major hip throw",
        level: "shodan",
      },
      {
        name: "Koshi-guruma",
        videoId: "SU7Id6uVJ44",
        description: "Hip wheel",
        level: "shodan",
      },
      {
        name: "Tsurikomi-goshi",
        videoId: "McfzA0yRVt4",
        description: "Lifting pulling hip throw",
        level: "shodan",
      },
      {
        name: "Harai-goshi",
        videoId: "qTo8HlAAkOo",
        description: "Sweeping hip throw",
        level: "shodan",
      },
      {
        name: "Tsuri-goshi",
        videoId: "51Htlp7xEvE",
        description: "Lifting hip throw",
        level: "shodan",
      },
      {
        name: "Hane-goshi",
        videoId: "M9_7De6A1kk",
        description: "Spring hip throw",
        level: "shodan",
      },
      {
        name: "Utsuri-goshi",
        videoId: "4pQd_bEnlf0",
        description: "Changing hip throw",
        level: "shodan",
      },
      {
        name: "Ushiro-goshi",
        videoId: "ORIYstuxYT8",
        description: "Rear hip throw",
        level: "shodan",
      },
    ],
  },
  "ashi-waza": {
    title: "ASHI-WAZA (Foot Techniques)",
    description:
      "Foot techniques use the legs to sweep, hook, or block opponent's legs to execute throws.",
    techniques: [
      {
        name: "De-ashi-harai",
        videoId: "4BUUvqxi_Kk",
        description: "Advanced foot sweep",
        level: "shodan",
      },
      {
        name: "Hiza-guruma",
        videoId: "JPJx9-oAVns",
        description: "Knee wheel",
        level: "shodan",
      },
      {
        name: "Sasae-tsurikomi-ashi",
        videoId: "699i--pvYmE",
        description: "Supporting foot lift-pull throw",
        level: "shodan",
      },
      {
        name: "O-soto-gari",
        videoId: "c-A_nP7mKAc",
        description: "Major outer reap",
        level: "shodan",
      },
      {
        name: "O-uchi-gari",
        videoId: "0itJFhV9pDQ",
        description: "Major inner reap",
        level: "shodan",
      },
      {
        name: "Ko-soto-gari",
        videoId: "jeQ541ScLB4",
        description: "Minor outer reap",
        level: "shodan",
      },
      {
        name: "Ko-uchi-gari",
        videoId: "3Jb3tZvr9Ng",
        description: "Minor inner reap",
        level: "shodan",
      },
      {
        name: "Okuri-ashi-harai",
        videoId: "nw1ZdRjrdRI",
        description: "Sliding foot sweep",
        level: "shodan",
      },
      {
        name: "Uchi-mata",
        videoId: "iUpSu5J-bgw",
        description: "Inner thigh throw",
        level: "shodan",
      },
      {
        name: "Ko-soto-gake",
        videoId: "8b6kY4s4zH4",
        description: "Minor outer hook",
        level: "shodan",
      },
      {
        name: "Ashi-guruma",
        videoId: "ROeayhvom9U",
        description: "Leg wheel",
        level: "shodan",
      },
      {
        name: "Harai-tsurikomi-ashi",
        videoId: "gGPXvWL8VbE",
        description: "Lift-pull foot sweep",
        level: "shodan",
      },
      {
        name: "O-guruma",
        videoId: "SnZciTAY9vc",
        description: "Major wheel",
        level: "shodan",
      },
      {
        name: "O-soto-guruma",
        videoId: "92KbCm6pQeI",
        description: "Major outer wheel",
        level: "shodan",
      },
    ],
  },
  "masutemi-waza": {
    title: "MASUTEMI-WAZA (Back Sacrifice Techniques)",
    description:
      "Sacrifice techniques where the thrower falls directly onto their back to throw the opponent.",
    techniques: [
      {
        name: "Tomoe-nage",
        videoId: "880WbHvHv6A",
        description: "Circle throw",
        level: "shodan",
      },
      {
        name: "Sumi-gaeshi",
        videoId: "5VhduA5xkbA",
        description: "Corner reversal",
        level: "shodan",
      },
      {
        name: "Ura-nage",
        videoId: "Fgi9b8DJ5sQ",
        description: "Rear throw",
        level: "shodan",
      },
    ],
  },
  "yoko-sutemi-waza": {
    title: "YOKO-SUTEMI-WAZA (Side Sacrifice Techniques)",
    description:
      "Sacrifice techniques where the thrower falls onto their side to throw the opponent.",
    techniques: [
      {
        name: "Yoko-otoshi",
        videoId: "MnNG67pF_a0",
        description: "Side drop",
        level: "shodan",
      },
      {
        name: "Tani-otoshi",
        videoId: "3b9Me3Fohpk",
        description: "Valley drop",
        level: "shodan",
      },
      {
        name: "Hane-makikomi",
        videoId: "6CRBGLGz9j8",
        description: "Spring wrap-around throw",
        level: "shodan",
      },
      {
        name: "Soto-makikomi",
        videoId: "bWG9O1BVKtQ",
        description: "Outer wrap-around throw",
        level: "shodan",
      },
      {
        name: "Uki-waza",
        videoId: "weVOpJ63gII",
        description: "Floating technique",
        level: "shodan",
      },
      {
        name: "Yoko-wakare",
        videoId: "bp1tscHlePI",
        description: "Side separation",
        level: "shodan",
      },
      {
        name: "Yoko-guruma",
        videoId: "MehP6I5cY2c",
        description: "Side wheel",
        level: "shodan",
      },
      {
        name: "Yoko-gake",
        videoId: "tP1Sj1uDfSo",
        description: "Side hook",
        level: "shodan",
      },
    ],
  },
  "osaekomi-waza": {
    title: "OSAEKOMI-WAZA (Holding Techniques)",
    description:
      "Pinning or holding techniques used to immobilize the opponent on their back.",
    techniques: [
      {
        name: "Kesa-gatame",
        videoId: "NDaQuJOFBYk",
        description: "Scarf hold",
        level: "shodan",
      },
      {
        name: "Kata-gatame",
        videoId: "zQR3IOXxO_Q",
        description: "Shoulder hold",
        level: "shodan",
      },
      {
        name: "Kuzure-kami-shiho-gatame",
        videoId: "YUrogQWdwiY",
        description: "Modified upper four-corner hold",
        level: "shodan",
      },
      {
        name: "Yoko-shiho-gatame",
        videoId: "TT7XJVSEQxA",
        description: "Side four-corner hold",
        level: "shodan",
      },
      {
        name: "Tate-shiho-gatame",
        videoId: "55-rFmBx53g",
        description: "Vertical four-corner hold",
        level: "shodan",
      },
      {
        name: "Kuzure-kesa-gatame",
        videoId: "Q2fb9jaoUFQ",
        description: "Modified scarf hold",
        level: "shodan",
      },
      {
        name: "Kami-shiho-gatame",
        videoId: "HFuMjOv0WN8",
        description: "Upper four-corner hold",
        level: "shodan",
      },
    ],
  },
  "shime-waza": {
    title: "SHIME-WAZA (Choking Techniques)",
    description:
      "Strangling and choking techniques that restrict blood flow or breathing.",
    techniques: [
      {
        name: "Nami-juji-jime",
        videoId: "k2cHry9HByQ",
        description: "Normal cross strangle",
        level: "shodan",
      },
      {
        name: "Gyaku-juji-jime",
        videoId: "t3tQriIPdlI",
        description: "Reverse cross strangle",
        level: "shodan",
      },
      {
        name: "Kata-juji-jime",
        videoId: "3VZVUAmiMD8",
        description: "Half cross strangle",
        level: "shodan",
      },
      {
        name: "Hadaka-jime",
        videoId: "9f0n8jez7iA",
        description: "Naked strangle",
        level: "shodan",
      },
      {
        name: "Okuri-eri-jime",
        videoId: "EiqyoVcIAi8",
        description: "Sliding collar strangle",
        level: "shodan",
      },
      {
        name: "Kata-ha-jime",
        videoId: "yaTGgRjnwB8",
        description: "Single-wing strangle",
        level: "shodan",
      },
    ],
  },
  "kansetsu-waza": {
    title: "KANSETSU-WAZA (Joint Locking Techniques)",
    description:
      "Joint manipulation techniques that apply pressure to an opponent's joints.",
    techniques: [
      {
        name: "Ude-garami",
        videoId: "AIlTvZb4RlE",
        description: "Entangled arm lock",
        level: "shodan",
      },
      {
        name: "Ude-hishigi-juji-gatame",
        videoId: "OWgSOlCuMXw",
        description: "Cross armlock",
        level: "shodan",
      },
      {
        name: "Ude-hishigi-ude-gatame",
        videoId: "SBf0aTma1VI",
        description: "Straight arm lock",
        level: "shodan",
      },
      {
        name: "Ude-hishigi-hiza-gatame",
        videoId: "H2HtAJdiJcE",
        description: "Knee armlock",
        level: "shodan",
      },
      {
        name: "Ude-hishigi-waki-gatame",
        videoId: "8F5p1zuJRG0",
        description: "Armpit armlock",
        level: "shodan",
      },
      {
        name: "Ude-hishigi-hara-gatame",
        videoId: "ZzEycg8R_9M",
        description: "Stomach armlock",
        level: "shodan",
      },
    ],
  },
};
