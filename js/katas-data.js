// Kodokan katas - videos from the official Kodokan channel (Kagami Biraki 2025),
// reference documents from Judo Québec
const kataPdfBaseUrl = "https://judo-quebec.qc.ca/wp-content/uploads/2020/10/";

const kataData = [
  {
    id: "nage-no-kata",
    name: "Nage-no-kata",
    videoId: "L9eXTdrJAdk",
    grades: ["shodan", "nidan", "sandan"],
    pdfUrl: kataPdfBaseUrl + "Nage-no-kata.pdf",
  },
  {
    id: "katame-no-kata",
    name: "Katame-no-kata",
    videoId: "SvckHbFDnzk",
    grades: ["sandan", "yondan"],
    pdfUrl: kataPdfBaseUrl + "Katame-no-kata.pdf",
  },
  {
    id: "kime-no-kata",
    name: "Kime-no-kata",
    videoId: "vRALigvtyVM",
    grades: ["yondan", "godan"],
    pdfUrl: kataPdfBaseUrl + "Kime-no-kata.pdf",
  },
  {
    id: "ju-no-kata",
    name: "Ju-no-kata",
    videoId: "Nw-eADih5mo",
    grades: ["yondan", "godan"],
    pdfUrl: kataPdfBaseUrl + "Ju-no-kata.pdf",
  },
  {
    id: "kodokan-goshin-jutsu",
    name: "Kodokan Goshin-jutsu",
    videoId: "qevL9YVZsbo",
    grades: ["yondan", "godan"],
    pdfUrl: kataPdfBaseUrl + "Kodokan-Goshin-Jutsu.pdf",
  },
  {
    id: "itsutsu-no-kata",
    name: "Itsutsu-no-kata",
    videoId: "gsT7VFcQh3E",
    grades: ["godan"],
    pdfUrl: kataPdfBaseUrl + "Itsutsu-no-kata.pdf",
  },
  {
    id: "koshiki-no-kata",
    name: "Koshiki-no-kata",
    videoId: "7aL640NhyA0",
    grades: ["godan"],
    pdfUrl: kataPdfBaseUrl + "Koshiki-no-kata.pdf",
  },
];

// How to tie your judo belt - IJF, with Olympic champion Rafaela Silva
const beltVideoId = "A_OvdcQHe54";
