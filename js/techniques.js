// Centralized data store for all judo techniques
const techniqueData = {
  "te-waza": {
    title: "TE-WAZA (Hand Techniques)",
    description: "Hand techniques in judo focus on using grip and arm strength to throw opponents.",
    techniques: [
      { name: "Seoi-nage", description: "Shoulder throw" },
      { name: "Ippon-seoi-nage", description: "One-arm shoulder throw" },
      { name: "Tai-otoshi", videoId: "284L7haCrNk", description: "Body drop" },
      { name: "Kata-guruma", description: "Shoulder wheel" },
      { name: "Sukui-nage", description: "Scooping throw" },
      { name: "Uki-otoshi", description: "Floating drop" },
      { name: "Sumi-otoshi", description: "Corner drop" },
    ]
  },
  "koshi-waza": {
    title: "KOSHI-WAZA (Hip Techniques)",
    description: "Hip techniques involve using your hip as a fulcrum to throw your opponent.",
    techniques: [
      { name: "Uki-goshi", description: "Floating hip throw" },
      { name: "O-goshi", description: "Major hip throw" },
      { name: "Koshi-guruma", description: "Hip wheel" },
      { name: "Tsurikomi-goshi", description: "Lifting pulling hip throw" },
      { name: "Harai-goshi", description: "Sweeping hip throw" },
      { name: "Tsuri-goshi", description: "Lifting hip throw" },
      { name: "Hane-goshi", description: "Spring hip throw" },
      { name: "Utsuri-goshi", description: "Changing hip throw" },
      { name: "Ushiro-goshi", description: "Rear hip throw" },
    ]
  },
  "ashi-waza": {
    title: "ASHI-WAZA (Foot Techniques)",
    description: "Foot techniques use the legs to sweep, hook, or block opponent's legs to execute throws.",
    techniques: [
      { name: "De-ashi-harai", description: "Advanced foot sweep" },
      { name: "Hiza-guruma", description: "Knee wheel" },
      { name: "Sasae-tsurikomi-ashi", description: "Supporting foot lift-pull throw" },
      { name: "O-soto-gari", description: "Major outer reap" },
      { name: "O-uchi-gari", description: "Major inner reap" },
      { name: "Ko-soto-gari", description: "Minor outer reap" },
      { name: "Ko-uchi-gari", description: "Minor inner reap" },
      { name: "Okuri-ashi-harai", description: "Sliding foot sweep" },
      { name: "Uchi-mata", description: "Inner thigh throw" },
      { name: "Ko-soto-gake", description: "Minor outer hook" },
      { name: "Ashi-guruma", description: "Leg wheel" },
      { name: "Harai-tsurikomi-ashi", description: "Lift-pull foot sweep" },
      { name: "O-guruma", description: "Major wheel" },
      { name: "O-soto-guruma", description: "Major outer wheel" },
    ]
  },
  "masutemi-waza": {
    title: "MASUTEMI-WAZA (Back Sacrifice Techniques)",
    description: "Sacrifice techniques where the thrower falls directly onto their back to throw the opponent.",
    techniques: [
      { name: "Tomoe-nage", description: "Circle throw" },
      { name: "Sumi-gaeshi", description: "Corner reversal" },
      { name: "Ura-nage", description: "Rear throw" },
    ]
  },
  "yoko-sutemi-waza": {
    title: "YOKO-SUTEMI-WAZA (Side Sacrifice Techniques)",
    description: "Sacrifice techniques where the thrower falls onto their side to throw the opponent.",
    techniques: [
      { name: "Yoko-otoshi", description: "Side drop" },
      { name: "Tani-otoshi", description: "Valley drop" },
      { name: "Hane-makikomi", description: "Spring wrap-around throw" },
      { name: "Soto-makikomi", description: "Outer wrap-around throw" },
      { name: "Uki-waza", description: "Floating technique" },
      { name: "Yoko-wakare", description: "Side separation" },
      { name: "Yoko-guruma", description: "Side wheel" },
      { name: "Yoko-gake", description: "Side hook" },
    ]
  },
  "osaekomi-waza": {
    title: "OSAEKOMI-WAZA (Holding Techniques)",
    description: "Pinning or holding techniques used to immobilize the opponent on their back.",
    techniques: [
      { name: "Kesa-gatame", description: "Scarf hold" },
      { name: "Kata-gatame", description: "Shoulder hold" },
      { name: "Kuzure-kami-shiho-gatame", description: "Modified upper four-corner hold" },
      { name: "Yoko-shiho-gatame", description: "Side four-corner hold" },
      { name: "Tate-shiho-gatame", description: "Vertical four-corner hold" },
      { name: "Kuzure-kesa-gatame", description: "Modified scarf hold" },
      { name: "Kami-shiho-gatame", description: "Upper four-corner hold" },
    ]
  },
  "shime-waza": {
    title: "SHIME-WAZA (Choking Techniques)",
    description: "Strangling and choking techniques that restrict blood flow or breathing.",
    techniques: [
      { name: "Nami-juji-jime", description: "Normal cross strangle" },
      { name: "Gyaku-juji-jime", description: "Reverse cross strangle" },
      { name: "Kata-juji-jime", description: "Half cross strangle" },
      { name: "Hadaka-jime", description: "Naked strangle" },
      { name: "Okuri-eri-jime", description: "Sliding collar strangle" },
      { name: "Kata-ha-jime", description: "Single-wing strangle" },
    ]
  },
  "kansetsu-waza": {
    title: "KANSETSU-WAZA (Joint Locking Techniques)",
    description: "Joint manipulation techniques that apply pressure to an opponent's joints.",
    techniques: [
      { name: "Ude-garami", description: "Entangled arm lock" },
      { name: "Ude-hishigi-juji-gatame", description: "Cross armlock" },
      { name: "Ude-hishigi-ude-gatame", description: "Straight arm lock" },
      { name: "Ude-hishigi-hiza-gatame", description: "Knee armlock" },
      { name: "Ude-hishigi-waki-gatame", description: "Armpit armlock" },
      { name: "Ude-hishigi-hara-gatame", description: "Stomach armlock" },
    ]
  }
};
