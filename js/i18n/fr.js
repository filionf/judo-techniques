const fr = {
  families: {
    "te-waza": {
      title: "Techniques de Main",
      description:
        "Les techniques de main en judo se concentrent sur l'utilisation de la prise et de la force des bras pour projeter les adversaires.",
    },
    "koshi-waza": {
      title: "Techniques de hanche",
      description:
        "Les techniques de hanche impliquent l'utilisation de votre hanche comme point d'appui pour projeter votre adversaire.",
    },
    "ashi-waza": {
      title: "Techniques de jambe",
      description:
        "Les techniques de jambe utilisent les jambes pour balayer, accrocher ou bloquer les jambes de l'adversaire pour exécuter des projections.",
    },
    "masutemi-waza": {
      title: "Techniques de sacrifice arrière",
      description:
        "Techniques de sacrifice où le lanceur tombe directement sur son dos pour projeter l'adversaire.",
    },
    "yoko-sutemi-waza": {
      title: "Techniques de sacrifice latéral",
      description:
        "Techniques de sacrifice où le lanceur tombe sur son côté pour projeter l'adversaire.",
    },
    "osaekomi-waza": {
      title: "Techniques d'immobilisation",
      description:
        "Techniques de contrôle ou d'immobilisation utilisées pour immobiliser l'adversaire sur son dos.",
    },
    "shime-waza": {
      title: "Techniques d'étranglement",
      description:
        "Techniques d'étranglement qui restreignent le flux sanguin ou la respiration.",
    },
    "kansetsu-waza": {
      title: "Techniques de luxation articulaire",
      description:
        "Techniques de manipulation des articulations qui appliquent une pression sur les articulations d'un adversaire.",
    },
  },
  ui: {
    title: "Référence de Judo",
    next: "Suivant",
    nextWithFamily: "Suivant {family}",
    home: "Accueil",
    showDetails: "Afficher les détails",
    hideDetails: "Masquer les détails",
    randomTechnique: "Technique aléatoire",
    demonstration: "Démonstration",
    exitTechnique: "Technique de sortie",
    levels: {
      noLevels: "Aucun niveau",
      allLevels: "Tous les niveaux",
      multiplelevels: "{count} niveaux",
      shodan: "Shodan",
      nidan: "Nidan",
      sandan: "Sandan",
      yellow: "Jaune",
      "yellow/orange": "Jaune/Orange",
      orange: "Orange",
      "orange/green": "Orange/Vert",
      green: "Vert",
      "green/blue": "Vert/Bleu",
      blue: "Bleu",
      "blue/brown": "Bleu/Marron",
      brown: "Marron",
    },
    favorites: {
      title: "Favoris",
      yourFavorites: "Vos Techniques Favorites",
      randomFavorite: "Favori Aléatoire",
      viewAll: "View Favorites",
      noFavorites: "You don't have any favorites yet.",
      addFavoritesInstruction: "Star techniques to add them to your favorites.",
    },
  },
  home: {
    welcome: "Bienvenue dans un guide de référence pour le Judo",
    instructions: {
      title: "Pour utiliser :",
      selectLevel: "Sélectionnez votre/vos niveau(x) dans l'en-tête",
      findTechnique:
        "Trouvez une technique en naviguant dans les sections ci-dessous",
      randomButton:
        "Ou appuyez sur le bouton aléatoire pour tester votre mémoire, la vidéo de référence sera masquée",
    },
    description:
      "Le Judo (柔道, jūdō) est un art martial japonais moderne, qui a vu le jour au Japon à la fin du 19ème siècle. Sa caractéristique la plus marquante est son élément compétitif, où l'objectif est soit de projeter ou de faire tomber un adversaire au sol, de l'immobiliser ou de le maîtriser avec une immobilisation, ou de forcer un adversaire à abandonner avec une clé articulaire ou un étranglement.",
  },
  techniques: {
    // Te-waza
    "seoi-nage": {
      description: "Projection d'épaule",
    },
    "ippon-seoi-nage": {
      description: "Projection d'épaule à un bras",
    },
    "tai-otoshi": {
      description: "Renversement du corps",
    },
    "kata-guruma": {
      description: "Roue autour des épaules",
    },
    "sukui-nage": {
      description: "Projection en cuillère",
    },
    "uki-otoshi": {
      description: "Projection flottante",
    },
    "sumi-otoshi": {
      description: "Chute dans l'angle",
    },
    "ko-uchi-gaeshi": {
      description: "Contre du petit fauchage intérieur",
    },
    "seoi-otoshi": {
      description: "Chute d'épaule",
    },
    "obi-otoshi": {
      description: "Renversement par la ceinture",
    },
    "yama-arashi": {
      description: "Tempête de montagne",
    },
    "obi-tori-gaeshi": {
      description: "Renversement par saisie de ceinture",
    },
    "morote-gari": {
      description: "Fauchage à deux mains",
    },
    "kuchiki-taoshi": {
      description: "Renversement en saisissant une jambe",
    },
    "kibisu-gaeshi": {
      description: "Renversement par le talon",
    },
    "uchi-mata-sukashi": {
      description: "Esquive de projection de la cuisse intérieure",
    },

    // Koshi-waza
    "uki-goshi": {
      description: "Hanche flottante",
    },
    "o-goshi": {
      description: "Grande projection de hanche",
    },
    "koshi-guruma": {
      description: "Roue autour de la hanche",
    },
    "tsurikomi-goshi": {
      description: "Projection de hanche en tirant et soulevant",
    },
    "harai-goshi": {
      description: "Balayage de hanche",
    },
    "tsuri-goshi": {
      description: "Projection de hanche par soulèvement",
    },
    "hane-goshi": {
      description: "Hanche sautée",
    },
    "utsuri-goshi": {
      description: "Hanche déplacée",
    },
    "ushiro-goshi": {
      description: "Projection de hanche par l'arrière",
    },
    "sode-tsurikomi-goshi": {
      description: "Projection de hanche en tirant et soulevant par la manche",
    },

    // Ashi-waza
    "de-ashi-harai": {
      description: "Balayage du pied avancé",
    },
    "hiza-guruma": {
      description: "Roue autour du genou",
    },
    "sasae-tsurikomi-ashi": {
      description: "Blocage du pied en tirant et soulevant",
    },
    "o-soto-gari": {
      description: "Grand fauchage extérieur",
    },
    "o-uchi-gari": {
      description: "Grand fauchage intérieur",
    },
    "ko-soto-gari": {
      description: "Petit fauchage extérieur",
    },
    "ko-uchi-gari": {
      description: "Petit fauchage intérieur",
    },
    "okuri-ashi-harai": {
      description: "Balayage des pieds en déplacement",
    },
    "uchi-mata": {
      description: "Fauchage par l'intérieur de la cuisse",
    },
    "ko-soto-gake": {
      description: "Petit accrochage extérieur",
    },
    "ashi-guruma": {
      description: "Roue autour de la jambe",
    },
    "harai-tsurikomi-ashi": {
      description: "Balayage du pied en tirant et soulevant",
    },
    "o-guruma": {
      description: "Grande roue",
    },
    "o-soto-guruma": {
      description: "Grande roue extérieure",
    },
    "o-soto-gaeshi": {
      description: "Contre du grand fauchage extérieur",
    },
    "o-uchi-gaeshi": {
      description: "Contre du grand fauchage intérieur",
    },
    "hane-goshi-gaeshi": {
      description: "Contre de la hanche sautée",
    },
    "harai-goshi-gaeshi": {
      description: "Contre du balayage de hanche",
    },
    "uchi-mata-gaeshi": {
      description: "Contre du fauchage par l'intérieur de la cuisse",
    },
    "o-soto-otoshi": {
      description: "Grande chute extérieure",
    },
    "tsubame-gaeshi": {
      description: "Contre de l'hirondelle",
    },

    // Continue with other families...
    // Masutemi-waza
    "tomoe-nage": {
      description: "Projection en cercle",
    },
    "sumi-gaeshi": {
      description: "Renversement dans l'angle",
    },
    "ura-nage": {
      description: "Projection vers l'arrière",
    },
    "hikikomi-gaeshi": {
      description: "Renversement en tirant vers le bas",
    },
    "tawara-gaeshi": {
      description: "Renversement du sac de riz",
    },

    // Yoko-sutemi-waza
    "yoko-otoshi": {
      description: "Chute latérale",
    },
    "tani-otoshi": {
      description: "Chute dans la vallée",
    },
    "hane-makikomi": {
      description: "Enroulement avec hanche sautée",
    },
    "soto-makikomi": {
      description: "Enroulement extérieur",
    },
    "uki-waza": {
      description: "Technique flottante",
    },
    "yoko-wakare": {
      description: "Séparation latérale",
    },
    "yoko-guruma": {
      description: "Roue latérale",
    },
    "yoko-gake": {
      description: "Accrochage latéral",
    },
    "uchi-makikomi": {
      description: "Enroulement intérieur",
    },
    "daki-wakare": {
      description: "Séparation en enlaçant",
    },
    "o-soto-makikomi": {
      description: "Grand enroulement extérieur",
    },
    "uchi-mata-makikomi": {
      description: "Enroulement par l'intérieur de la cuisse",
    },
    "harai-makikomi": {
      description: "Enroulement par balayage",
    },
    "ko-uchi-makikomi": {
      description: "Petit enroulement intérieur",
    },
    "kani-basami": {
      description: "Ciseau de crabe",
    },
    "kawazu-gake": {
      description: "Accrochage de grenouille",
    },

    // Osaekomi-waza
    "kesa-gatame": {
      description: "Contrôle en écharpe",
    },
    "kata-gatame": {
      description: "Contrôle par l'épaule",
    },
    "kuzure-kami-shiho-gatame": {
      description: "Variante du contrôle en quatre coins par le haut",
    },
    "yoko-shiho-gatame": {
      description: "Contrôle en quatre coins latéral",
    },
    "tate-shiho-gatame": {
      description: "Contrôle en quatre coins vertical",
    },
    "kuzure-kesa-gatame": {
      description: "Variante du contrôle en écharpe",
    },
    "kami-shiho-gatame": {
      description: "Contrôle en quatre coins par le haut",
    },
    "ushiro-kesa-gatame": {
      description: "Contrôle en écharpe par l'arrière",
    },
    "uki-gatame": {
      description: "Contrôle flottant",
    },
    "ura-gatame": {
      description: "Contrôle inversé",
    },

    // Shime-waza
    "nami-juji-jime": {
      description: "Étranglement en croix normal",
    },
    "gyaku-juji-jime": {
      description: "Étranglement en croix inversé",
    },
    "kata-juji-jime": {
      description: "Étranglement en croix à une main",
    },
    "hadaka-jime": {
      description: "Étranglement à mains nues",
    },
    "okuri-eri-jime": {
      description: "Étranglement en glissant le revers",
    },
    "kata-ha-jime": {
      description: "Étranglement en contrôlant l'épaule",
    },
    "sankaku-jime": {
      description: "Étranglement en triangle",
    },
    "kata-te-jime": {
      description: "Étranglement à une main",
    },
    "ryote-jime": {
      description: "Étranglement à deux mains",
    },
    "sode-guruma-jime": {
      description: "Étranglement en roue par la manche",
    },
    "tsukkomi-jime": {
      description: "Étranglement en poussant",
    },
    "do-jime": {
      description: "Étranglement du tronc",
    },

    // Kansetsu-waza
    "ude-garami": {
      description: "Clé de bras en torsion",
    },
    "ude-hishigi-juji-gatame": {
      description: "Clé de bras en croix",
    },
    "ude-hishigi-ude-gatame": {
      description: "Clé de bras avec le bras",
    },
    "ude-hishigi-hiza-gatame": {
      description: "Clé de bras avec le genou",
    },
    "ude-hishigi-waki-gatame": {
      description: "Clé de bras avec l'aisselle",
    },
    "ude-hishigi-hara-gatame": {
      description: "Clé de bras avec l'abdomen",
    },
    "ude-hishigi-ashi-gatame": {
      description: "Clé de bras avec la jambe",
    },
    "ude-hishigi-te-gatame": {
      description: "Clé de bras avec la main",
    },
    "ude-hishigi-sankaku-gatame": {
      description: "Clé de bras en triangle",
    },
    "ashi-garami": {
      description: "Clé de jambe en torsion",
    },
  },
};
