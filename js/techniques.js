// Centralized data store for all judo techniques
const techniqueData = {
  "te-waza": {
    title: "TE-WAZA (Hand Techniques)",
    description:
      "Hand techniques in judo focus on using grip and arm strength to throw opponents.",
    techniques: [
      {
        name: "Seoi-nage",
        videoId: "PX6aYmfhZI8",
        description: "Shoulder throw",
        level: "shodan",
      },
      {
        name: "Ippon-seoi-nage",
        videoId: "qLfRSvwKim4",
        description: "One-arm shoulder throw",
        level: "shodan",
      },
      {
        name: "Tai-otoshi",
        videoId: "284L7haCrNk",
        description: "Body drop",
        level: "shodan",
      },
      {
        name: "Kata-guruma",
        videoId: "TrxM0PwS2-4",
        description: "Shoulder wheel",
        level: "shodan",
      },
      {
        name: "Sukui-nage",
        videoId: "e-CsD78pMYU",
        description: "Scooping throw",
        level: "shodan",
      },
      {
        name: "Uki-otoshi",
        videoId: "V1G27jxO6CY",
        description: "Floating drop",
        level: "shodan",
      },
      {
        name: "Sumi-otoshi",
        videoId: "z4CTAX8pwBw",
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
        videoId: "WBGADbR4qLc",
        description: "Floating hip throw",
        level: "shodan",
      },
      {
        name: "O-goshi",
        videoId: "AZ5rPpuYBHE",
        description: "Major hip throw",
        level: "shodan",
      },
      {
        name: "Koshi-guruma",
        videoId: "IG_Y2IHkPlo",
        description: "Hip wheel",
        level: "shodan",
      },
      {
        name: "Tsurikomi-goshi",
        videoId: "QA8HeW33Vq8",
        description: "Lifting pulling hip throw",
        level: "shodan",
      },
      {
        name: "Harai-goshi",
        videoId: "gKyqZvfifig",
        description: "Sweeping hip throw",
        level: "shodan",
      },
      {
        name: "Tsuri-goshi",
        videoId: "J7ucfdHjUQg",
        description: "Lifting hip throw",
        level: "shodan",
      },
      {
        name: "Hane-goshi",
        videoId: "8gq49qZcXIc",
        description: "Spring hip throw",
        level: "shodan",
      },
      {
        name: "Utsuri-goshi",
        videoId: "h2i8VULN2rc",
        description: "Changing hip throw",
        level: "shodan",
      },
      {
        name: "Ushiro-goshi",
        videoId: "4el-T1qlC1U",
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
        videoId: "UL4HeFxXeVU",
        description: "Advanced foot sweep",
        level: "shodan",
      },
      {
        name: "Hiza-guruma",
        videoId: "cm1CdgBwjqE",
        description: "Knee wheel",
        level: "shodan",
      },
      {
        name: "Sasae-tsurikomi-ashi",
        videoId: "_423eel7h_o",
        description: "Supporting foot lift-pull throw",
        level: "shodan",
      },
      {
        name: "O-soto-gari",
        videoId: "ru3LdDk2Aus",
        description: "Major outer reap",
        level: "shodan",
      },
      {
        name: "O-uchi-gari",
        videoId: "fPtWsOZfj1g",
        description: "Major inner reap",
        level: "shodan",
      },
      {
        name: "Ko-soto-gari",
        videoId: "2vywxxACofE",
        description: "Minor outer reap",
        level: "shodan",
      },
      {
        name: "Ko-uchi-gari",
        videoId: "yIFKm5CKk-A",
        description: "Minor inner reap",
        level: "shodan",
      },
      {
        name: "Okuri-ashi-harai",
        videoId: "h1XbxUX9A24",
        description: "Sliding foot sweep",
        level: "shodan",
      },
      {
        name: "Uchi-mata",
        videoId: "RDx1pVPqfXk",
        description: "Inner thigh throw",
        level: "shodan",
      },
      {
        name: "Ko-soto-gake",
        videoId: "rP2gqufq7l4",
        description: "Minor outer hook",
        level: "shodan",
      },
      {
        name: "Ashi-guruma",
        videoId: "T9Q3H8s_7ZY",
        description: "Leg wheel",
        level: "shodan",
      },
      {
        name: "Harai-tsurikomi-ashi",
        videoId: "nzk9QE45-0E",
        description: "Lift-pull foot sweep",
        level: "shodan",
      },
      {
        name: "O-guruma",
        videoId: "_W6ZgjBoZNY",
        description: "Major wheel",
        level: "shodan",
      },
      {
        name: "O-soto-guruma",
        videoId: "m66h8yrpXFA",
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
        videoId: "jBOh3YtGOHg",
        description: "Circle throw",
        level: "shodan",
      },
      {
        name: "Sumi-gaeshi",
        videoId: "n0XXBwIzix4",
        description: "Corner reversal",
        level: "shodan",
      },
      {
        name: "Ura-nage",
        videoId: "rYlo0DyndOQ",
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
        videoId: "sAolV9TyqOw",
        description: "Side drop",
        level: "shodan",
      },
      {
        name: "Tani-otoshi",
        videoId: "2KodTLUprb0",
        description: "Valley drop",
        level: "shodan",
      },
      {
        name: "Hane-makikomi",
        videoId: "AqgAxrcOfw0",
        description: "Spring wrap-around throw",
        level: "shodan",
      },
      {
        name: "Soto-makikomi",
        videoId: "p5x_1oYacBQ",
        description: "Outer wrap-around throw",
        level: "shodan",
      },
      {
        name: "Uki-waza",
        videoId: "pHMPTOQH4Hg",
        description: "Floating technique",
        level: "shodan",
      },
      {
        name: "Yoko-wakare",
        videoId: "0UIP1Co22dw",
        description: "Side separation",
        level: "shodan",
      },
      {
        name: "Yoko-guruma",
        videoId: "LQ39uZOnhIs",
        description: "Side wheel",
        level: "shodan",
      },
      {
        name: "Yoko-gake",
        videoId: "1aIWLxQOt2g",
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
        videoId: "RZY0FkBOPz0",
        description: "Scarf hold",
        level: "shodan",
      },
      {
        name: "Kata-gatame",
        videoId: "VS1hzXTl47k",
        description: "Shoulder hold",
        level: "shodan",
      },
      {
        name: "Kuzure-kami-shiho-gatame",
        videoId: "2GI4CmLxQXM",
        description: "Modified upper four-corner hold",
        level: "shodan",
      },
      {
        name: "Yoko-shiho-gatame",
        videoId: "CPoooeJAy4c",
        description: "Side four-corner hold",
        level: "shodan",
      },
      {
        name: "Tate-shiho-gatame",
        videoId: "dGMyuUPN188",
        description: "Vertical four-corner hold",
        level: "shodan",
      },
      {
        name: "Kuzure-kesa-gatame",
        videoId: "9kdwzkVM6xA",
        description: "Modified scarf hold",
        level: "shodan",
      },
      {
        name: "Kami-shiho-gatame",
        videoId: "KDmEexwaEf0",
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
        videoId: "Fhphg1NFlH0",
        description: "Normal cross strangle",
        level: "shodan",
      },
      {
        name: "Gyaku-juji-jime",
        videoId: "R9w3N3YT5fw",
        description: "Reverse cross strangle",
        level: "shodan",
      },
      {
        name: "Kata-juji-jime",
        videoId: "YFPMVcNBMC0",
        description: "Half cross strangle",
        level: "shodan",
      },
      {
        name: "Hadaka-jime",
        videoId: "xfm7ABFF9eo",
        description: "Naked strangle",
        level: "shodan",
      },
      {
        name: "Okuri-eri-jime",
        videoId: "QeFHQIP4CJE",
        description: "Sliding collar strangle",
        level: "shodan",
      },
      {
        name: "Kata-ha-jime",
        videoId: "PwsmkTxLvIw",
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
        videoId: "2vOf8--SadQ",
        description: "Entangled arm lock",
        level: "shodan",
      },
      {
        name: "Ude-hishigi-juji-gatame",
        videoId: "B3qmsogRueU",
        description: "Cross armlock",
        level: "shodan",
      },
      {
        name: "Ude-hishigi-ude-gatame",
        videoId: "rswnSd0JYdQ",
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
        videoId: "2zRTQEbIhlc",
        description: "Armpit armlock",
        level: "shodan",
      },
      {
        name: "Ude-hishigi-hara-gatame",
        videoId: "qoJ3c-jSOYc",
        description: "Stomach armlock",
        level: "shodan",
      },
    ],
  },
};
