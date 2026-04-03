export const WHATSAPP_NUMBER = "60182112544";

export const BRAND = {
  nameEN: "Angie Earspa Wellness",
  nameCN: "采耳头疗养生美容馆",
  taglineEN: "Restore. Renew. Revive.",
  taglineCN: "还您身心的宁静",
};

export const NAV_LINKS = [
  { href: "/", labelCN: "首页", labelEN: "Home" },
  { href: "/services", labelCN: "服务", labelEN: "Services" },
  { href: "/packages", labelCN: "套餐", labelEN: "Packages" },
  { href: "/branches", labelCN: "分店", labelEN: "Branches" },
  { href: "/gallery", labelCN: "图库", labelEN: "Gallery" },
  { href: "/about", labelCN: "关于我们", labelEN: "About" },
  { href: "/book", labelCN: "预约", labelEN: "Book" },
];

export const SERVICES = [
  {
    id: "ear-spa",
    icon: "👂",
    nameCN: "采耳",
    nameEN: "Ear Cleaning / Ear Spa",
    descCN: "运用传统采耳技艺，温柔清洁耳道，舒缓耳压，促进耳部健康循环",
    descEN:
      "A traditional Chinese ear cleaning ritual that gently removes buildup, relieves pressure, and promotes healthy ear circulation",
    benefits: [
      "温柔清洁耳道 / Gentle ear canal cleaning",
      "舒缓耳压 / Relieves ear pressure",
      "促进耳部健康循环 / Promotes healthy circulation",
    ],
    priceFrom: 58,
  },
  {
    id: "head-therapy",
    icon: "💆",
    nameCN: "头疗",
    nameEN: "Head Therapy & Scalp Massage",
    descCN: "专业头皮按摩结合养生精油，深层滋养头皮，舒缓压力，改善睡眠质量",
    descEN:
      "Professional scalp massage with nourishing botanical oils — relieves tension, improves circulation, and promotes restful sleep",
    benefits: [
      "深层滋养头皮 / Deep scalp nourishment",
      "舒缓压力 / Relieves tension",
      "改善睡眠质量 / Improves sleep quality",
    ],
    priceFrom: 198,
  },
  {
    id: "womb-care",
    icon: "🌸",
    nameCN: "子宫护理",
    nameEN: "Womb Care",
    descCN: "针对女性生理健康的专属护理，调节内分泌，缓解经期不适，恢复女性活力",
    descEN:
      "A holistic feminine wellness treatment designed to support hormonal balance, ease menstrual discomfort, and restore vitality",
    benefits: [
      "调节内分泌 / Hormonal balance",
      "缓解经期不适 / Eases menstrual discomfort",
      "恢复女性活力 / Restores vitality",
    ],
    priceFrom: 280,
  },
  {
    id: "hair-removal",
    icon: "✨",
    nameCN: "除毛",
    nameEN: "Hair Removal",
    descCN: "温和有效的除毛护理，适合全身各部位，令肌肤光滑细腻",
    descEN:
      "Gentle and effective hair removal treatments for all body areas, leaving skin silky smooth",
    benefits: [
      "温和有效 / Gentle and effective",
      "适合全身 / Suitable for all areas",
      "肌肤光滑 / Silky smooth skin",
    ],
    priceFrom: 80,
  },
  {
    id: "eye-cleansing",
    icon: "👁️",
    nameCN: "洗眼",
    nameEN: "Eye Cleansing",
    descCN: "专业眼部清洁护理，舒缓眼疲劳，清洁眼睑，改善眼部健康",
    descEN:
      "Professional eye cleansing treatment that relieves digital eye strain, cleanses eyelids, and improves overall eye health",
    benefits: [
      "舒缓眼疲劳 / Relieves eye strain",
      "清洁眼睑 / Cleanses eyelids",
      "改善眼部健康 / Improves eye health",
    ],
    priceFrom: 68,
  },
  {
    id: "wellness-packages",
    icon: "🧖",
    nameCN: "养生美容套餐",
    nameEN: "Wellness Beauty Packages",
    descCN: "精心搭配的组合疗程，全方位呵护身心，享受一站式养生体验",
    descEN:
      "Curated combination treatments for a complete mind-body wellness experience — the ultimate self-care ritual",
    benefits: [
      "全方位呵护 / Complete mind-body care",
      "组合疗程 / Combination treatments",
      "一站式体验 / One-stop experience",
    ],
    priceFrom: 350,
  },
];

export const PACKAGES = [
  {
    id: "signature",
    nameCN: "套餐一",
    nameEN: "Signature Package",
    price: 380,
    items: [
      "采耳 Ear Spa (60 min)",
      "头疗按摩 Head Therapy (45 min)",
      "迎宾养生茶 Welcome Wellness Tea",
    ],
    popular: false,
  },
  {
    id: "wellness",
    nameCN: "套餐二",
    nameEN: "Wellness Package",
    price: 580,
    items: [
      "采耳 Ear Spa (60 min)",
      "头疗按摩 Head Therapy (60 min)",
      "洗眼 Eye Cleansing (30 min)",
      "迎宾养生茶 Welcome Wellness Tea",
    ],
    popular: false,
  },
  {
    id: "royal",
    nameCN: "套餐三",
    nameEN: "Royal Package",
    price: 880,
    items: [
      "采耳 Ear Spa (60 min)",
      "头疗按摩 Head Therapy (60 min)",
      "子宫护理 Womb Care (60 min)",
      "洗眼 Eye Cleansing (30 min)",
      "迎宾养生茶 Welcome Wellness Tea",
    ],
    popular: true,
  },
];

export const BRANCHES = [
  {
    id: "bayu-tinggi",
    nameCN: "吧生店",
    nameEN: "Bayu Tinggi, Klang",
    address:
      "No.2-A, Tingkat 1, Lorong Sentosa 4A/KS6, Taman Bayu Tinggi, 41200 Klang, Selangor",
    phone: "03-33916741",
    whatsapp: "60182112544",
    hours: "TODO: replace with real hours",
    mapUrl: "https://www.google.com/maps/search/Angie+Earspa+No.2-A+Lorong+Sentosa+4A+Taman+Bayu+Tinggi+41200+Klang+Selangor",
    mapType: "google" as "google" | "waze",
  },
  {
    id: "setia-alam",
    nameCN: "Setia Alam 店",
    nameEN: "Setia Alam",
    address:
      "No.4-2-2, Jalan Setia Prima L, U13/L, Setia Alam, 40170 Shah Alam, Selangor",
    phone: "03-33595956",
    whatsapp: "60182112544",
    hours: "TODO: replace with real hours",
    mapUrl: "https://www.google.com/maps/search/Angie+Earspa+No.4-2-2+Jalan+Setia+Prima+L+Setia+Alam+40170+Shah+Alam+Selangor",
    mapType: "google" as "google" | "waze",
  },
  {
    id: "cheras-c180",
    nameCN: "Cheras C180 店",
    nameEN: "Cheras C180",
    address:
      "No.12, Ground Floor, Jalan C180/1, Dataran C180, 43200 Cheras, Selangor",
    phone: "03-90811359",
    whatsapp: "60182112544",
    hours: "TODO: replace with real hours",
    mapUrl: "https://www.google.com/maps/search/Angie+Earspa+No.12+Jalan+C180+Dataran+C180+43200+Cheras+Selangor",
    mapType: "google" as "google" | "waze",
  },
  {
    id: "pj-damansara",
    nameCN: "PJ Damansara Utama 店",
    nameEN: "PJ Damansara Utama",
    address:
      "No.6, Jalan SS21/58, Damansara Utama, 47400 Petaling Jaya, Selangor Darul Ehsan",
    phone: "03-77319481",
    whatsapp: "60182112544",
    hours: "TODO: replace with real hours",
    mapUrl: "https://www.google.com/maps/search/Angie+Earspa+No.6+Jalan+SS21+58+Damansara+Utama+47400+Petaling+Jaya+Selangor",
    mapType: "google" as "google" | "waze",
  },
];

export const TESTIMONIALS = [
  {
    name: "Mei Ling",
    branch: "Bayu Tinggi",
    quoteCN: "采耳体验非常舒适，技师手法专业细腻，整个过程让人非常放松。强烈推荐！",
    quoteEN:
      "The ear cleaning experience was incredibly comfortable. The therapist's technique was professional and gentle. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Tan",
    branch: "Setia Alam",
    quoteCN: "头疗按摩太棒了！压力瞬间消失，睡眠质量也明显改善。会定期来做护理。",
    quoteEN:
      "The head therapy massage was amazing! Stress melted away instantly, and my sleep quality improved noticeably. Will be a regular!",
    rating: 5,
  },
  {
    name: "Jessica Wong",
    branch: "Cheras C180",
    quoteCN: "环境优雅，服务贴心。子宫护理疗程让我感受到前所未有的舒适和放松。",
    quoteEN:
      "Elegant environment with attentive service. The womb care treatment gave me a sense of comfort and relaxation like never before.",
    rating: 5,
  },
  {
    name: "Aisha Rahman",
    branch: "PJ Damansara Utama",
    quoteCN: "从踏入店门的那一刻就感受到温暖和专业。养生套餐是最好的自我犒赏！",
    quoteEN:
      "Felt the warmth and professionalism from the moment I walked in. The wellness package is the best treat you can give yourself!",
    rating: 5,
  },
];

export const GALLERY_IMAGES = [
  {
    src: "/images/gallery-1.webp",
    alt: "Treatment chairs and spa interior",
    captionCN: "疗愈空间",
    captionEN: "Treatment Room",
  },
  {
    src: "/images/gallery-2.webp",
    alt: "Welcome tea and reception setup",
    captionCN: "迎宾养生茶",
    captionEN: "Welcome Tea",
  },
  {
    src: "/images/gallery-3.webp",
    alt: "Store interior with brand wall",
    captionCN: "品牌展示",
    captionEN: "Brand Wall",
  },
  {
    src: "/images/gallery-4.webp",
    alt: "Herb & Hair Pro product display",
    captionCN: "养生产品",
    captionEN: "Wellness Products",
  },
  {
    src: "/images/gallery-5.webp",
    alt: "Product shelves display",
    captionCN: "产品陈列",
    captionEN: "Product Display",
  },
];
