/**
 * চাঁদের আলো ফাউন্ডেশন (Chader Alo Foundation)
 * Comprehensive Multi-Service & Volunteer Management Web Portal Engine
 */

// 1. ALL 10 FOUNDATION SERVICES (গঠনতন্ত্রের ধারা-০৭ অনুযায়ী)
const FOUNDATION_SERVICES = [
  {
    id: "srv-blood",
    title: "ব্লাড লিংক (Blood Link) — রক্তদান সেবা",
    icon: "fa-solid fa-droplet",
    iconColor: "text-brand-red",
    bgGradient: "from-red-50 to-white",
    desc: "মুন্সীগঞ্জ ও সমগ্র বাংলাদেশের রোগীদের জন্য বিনামূল্যে রক্তের গ্রুপ নির্ণয়, ২৪ ঘণ্টা রক্তদাতা অনুসন্ধান ও রক্তদান ক্যাম্পেইন পরিচালনা।",
    features: ["২৪ ঘণ্টা রক্তদাতা ডিরেক্টরি", "জরুরি রক্তের লাইভ নোটিশ", "ডিজিটাল ডোনার আইডি কার্ড"],
    actionType: "bloodlink",
    btnText: "ব্লাড লিংকে প্রবেশ করুন"
  },
  {
    id: "srv-edu",
    title: "শিক্ষা সহায়তা ও মেধা বৃত্তি প্রকল্প",
    icon: "fa-solid fa-graduation-cap",
    iconColor: "text-blue-600",
    bgGradient: "from-blue-50 to-white",
    desc: "দরিদ্র ও মেধাবী শিক্ষার্থীদের লেখাপড়া চালিয়ে নিতে মাসিক বৃত্তি, বই-খাতা, স্কুল ড্রেস ও পরীক্ষার ফি প্রদান।",
    features: ["মেধাবী অসচ্ছল ছাত্রবৃত্তি", "শিক্ষা উপকরণ বিতরণ", "মাদ্রাসা শিক্ষার্থীদের সহায়তা"],
    actionType: "apply",
    btnText: "সহায়তার আবেদন করুন"
  },
  {
    id: "srv-poor",
    title: "দরিদ্র, এতিম ও অসহায় পুনর্বাসন",
    icon: "fa-solid fa-hands-holding-child",
    iconColor: "text-amber-600",
    bgGradient: "from-amber-50 to-white",
    desc: "সমাজের নিপীড়িত, ছিন্নমূল, এতিম ও সহায়-সম্বলহীন মানুষের জরুরি খাদ্য, বস্ত্র, চিকিৎসা ও থাকার ঘর সংস্কারে সহায়তা।",
    features: ["জরুরি খাদ্য সহায়তা", "গৃহহীনদের ঘর সংস্কার", "এতিমদের ভরণপোষণ"],
    actionType: "apply",
    btnText: "সহায়তার আবেদন করুন"
  },
  {
    id: "srv-disable",
    title: "প্রতিবন্ধী কল্যাণ ও স্বাবলম্বীকরণ",
    icon: "fa-solid fa-wheelchair",
    iconColor: "text-indigo-600",
    bgGradient: "from-indigo-50 to-white",
    desc: "শারীরিক প্রতিবন্ধী ভাই-বোনদের চলাচল ও জীবিকার সুবিধার্থে বিনামূল্যে আধুনিক হুইলচেয়ার, ক্রাচ ও ছোট ব্যবসা গড়ে দেওয়া।",
    features: ["হুইলচেয়ার ও ক্রাচ বিতরণ", "চিকিৎসা ও থেরাপি সহায়তা", "ক্ষুদ্র কর্মসংস্থান সৃষ্টি"],
    actionType: "apply",
    btnText: "সহায়তার আবেদন করুন"
  },
  {
    id: "srv-health",
    title: "বিনামূল্যে স্বাস্থ্য সেবা ও হেলথ ক্যাম্প",
    icon: "fa-solid fa-heart-pulse",
    iconColor: "text-brand-green",
    bgGradient: "from-emerald-50 to-white",
    desc: "অভিজ্ঞ এমবিবিএস ডাক্তারদের সমন্বয়ে ফ্রি মেডিকেল ক্যাম্প, ডায়াবেটিস পরীক্ষা ও অসহায় রোগীদের বিনামূল্যে ওষুধ বিতরণ।",
    features: ["ফ্রি মেডিকেল ক্যাম্প", "বিনামূল্যে প্রয়োজনীয় ওষুধ", "অসহায় রোগীদের চিকিৎসা অনুদান"],
    actionType: "apply",
    btnText: "স্বাস্থ্য সেবায় অংশ নিন"
  },
  {
    id: "srv-widow",
    title: "বিধবা ও দুস্থ নারীদের কর্মসংস্থান",
    icon: "fa-solid fa-person-dress",
    iconColor: "text-purple-600",
    bgGradient: "from-purple-50 to-white",
    desc: "অসহায় বিধবা ও কর্মহীন নারীদের আত্মমর্যাদা নিয়ে বাঁচার জন্য সেলাই প্রশিক্ষণ ও বিনামূল্যে সেলাই মেশিন বিতরণ।",
    features: ["বিনামূল্যে সেলাই মেশিন বিতরণ", "হস্তশিল্প ও কুটির শিল্প প্রশিক্ষণ", "মাসিক বিধবা ভাতা সহায়তা"],
    actionType: "apply",
    btnText: "সহায়তার আবেদন করুন"
  },
  {
    id: "srv-marriage",
    title: "দরিদ্র কন্যাদায়গ্রস্ত পরিবারকে বিবাহ সহায়তা",
    icon: "fa-solid fa-rings-wedding",
    iconColor: "text-pink-600",
    bgGradient: "from-pink-50 to-white",
    desc: "অসহায় দরিদ্র পিতা-মাতার কন্যাদের সামাজিক ও সুন্দরভাবে বিবাহ সম্পন্নে নগদ আর্থিক অনুদান ও উপহার প্রদান।",
    features: ["বিবাহের আর্থিক অনুদান", "নিত্যপ্রয়োজনীয় উপহার সামগ্রী", "সামাজিক সহায়তা প্রদান"],
    actionType: "apply",
    btnText: "সহায়তার আবেদন করুন"
  },
  {
    id: "srv-mosque",
    title: "মসজিদ ও মাদ্রাসা সংস্কার সহায়তা",
    icon: "fa-solid fa-mosque",
    iconColor: "text-emerald-700",
    bgGradient: "from-teal-50 to-white",
    desc: "গ্রামাঞ্চলের অসচ্ছল মসজিদ ও নূরানী মাদ্রাসায় কার্পেট, সিলিং ফ্যান, সাউন্ড সিস্টেম, পবিত্র কোরআন শরীফ ও কিতাব বিতরণ।",
    features: ["মসজিদে ফ্যান ও কার্পেট বিতরণ", "কোরআন শরীফ ও কিতাব প্রদান", "সংস্কার কাজে আর্থিক অনুদান"],
    actionType: "apply",
    btnText: "সহায়তার আবেদন করুন"
  },
  {
    id: "srv-tree",
    title: "সবুজ বাংলাদেশ — বৃক্ষরোপণ কর্মসূচি",
    icon: "fa-solid fa-tree",
    iconColor: "text-brand-green",
    bgGradient: "from-green-50 to-white",
    desc: "জলবায়ু পরিবর্তন মোকাবিলায় ও সুন্দর পরিবেশ রক্ষায় স্কুল, কলেজ, মাদ্রাসা ও রাস্তার দুই পাশে ফলজ ও বনজ বৃক্ষরোপণ।",
    features: ["ফলজ ও ওষধি গাছ বিতরণ", "শিক্ষা প্রতিষ্ঠানে বৃক্ষরোপণ", "পরিবেশ সচেতনতা বৃদ্ধি"],
    actionType: "volunteer",
    btnText: "স্বেচ্ছাসেবী হোন"
  },
  {
    id: "srv-relief",
    title: "শীতবস্ত্র ও জরুরি দুর্যোগ ত্রাণ বিতরণ",
    icon: "fa-solid fa-snowflake",
    iconColor: "text-cyan-600",
    bgGradient: "from-cyan-50 to-white",
    desc: "কনকনে শীতে অসহায় মানুষের মাঝে কম্বল বিতরণ এবং বন্যা, ঘূর্ণিঝড় বা অগ্নিকাণ্ডে ক্ষতিগ্রস্তদের জরুরি শুকনো খাবার ও পুনর্বাসন।",
    features: ["শীতার্তদের কম্বল বিতরণ", "বন্যা ও দুর্যোগে জরুরি খাদ্য", "পুনর্বাসন সহায়তা"],
    actionType: "apply",
    btnText: "সহায়তার আবেদন করুন"
  }
];

// Initial Seed Volunteers
const INITIAL_VOLUNTEERS = [
  {
    id: "CAF-VOL-101",
    name: "মাহমুদুল হাসান শুভ",
    father: "মোঃ সিরাজুল ইসলাম",
    bloodGroup: "AB+",
    dob: "1996-03-19",
    profession: "ব্যবসায়ী ও আইটি উদ্যোক্তা",
    phone: "01687654321",
    whatsapp: "01687654321",
    upazila: "মুন্সীগঞ্জ সদর",
    village: "মুন্সিরহাট",
    interest: "ব্লাড লিংক ও জরুরি রক্ত সেবা",
    photo: null,
    status: "active",
    joinedDate: "2024-01-15"
  },
  {
    id: "CAF-VOL-102",
    name: "তানভীর আহমেদ তানিম",
    father: "আনোয়ার হোসেন",
    bloodGroup: "A+",
    dob: "2001-08-22",
    profession: "বিশ্ববিদ্যালয় শিক্ষার্থী",
    phone: "01834567890",
    whatsapp: "01834567890",
    upazila: "গজারিয়া",
    village: "বাউশিয়া",
    interest: "শিক্ষা সহায়তা ও শিশু কল্যাণ",
    photo: null,
    status: "active",
    joinedDate: "2024-02-10"
  },
  {
    id: "CAF-VOL-103",
    name: "ফাতেমা আক্তার লিজা",
    father: "আব্দুল কাদের",
    bloodGroup: "B+",
    dob: "2000-11-05",
    profession: "নার্স ও স্বাস্থ্যকর্মী",
    phone: "01912987654",
    whatsapp: "01912987654",
    upazila: "গজারিয়া",
    village: "হোসেন্দী",
    interest: "বিনামূল্যে স্বাস্থ্যসেবা ও ক্যাম্পেইন",
    photo: null,
    status: "active",
    joinedDate: "2024-03-05"
  }
];

// Initial Blood Donors
const INITIAL_DONORS = [
  {
    id: "CAF-BD-1001",
    name: "হালিম দেওয়ান",
    father: "",
    bloodGroup: "B+",
    dob: "1980-01-01",
    gender: "পুরুষ",
    weight: 70,
    phone: "01914927933",
    whatsapp: "01914927933",
    upazila: "গজারিয়া",
    village: "কলেজ রোড",
    hasDonated: "হ্যাঁ",
    lastDonationDate: "2026-03-25",
    donationCount: 5,
    verified: true,
    status: "active",
    photo: "assets/leader_halim.jpg",
    isDemo: false
  },
  {
    id: "CAF-BD-1002",
    name: "মোঃ মাসুম শিকদার",
    father: "",
    bloodGroup: "A+",
    dob: "1985-05-10",
    gender: "পুরুষ",
    weight: 68,
    phone: "01785677062",
    whatsapp: "01785677062",
    upazila: "গজারিয়া",
    village: "হোগলাকান্দি, ভবেরচর, কলেজ রোড",
    hasDonated: "হ্যাঁ",
    lastDonationDate: "2026-08-02",
    donationCount: 21,
    verified: true,
    status: "active",
    photo: "assets/leader_masum.png",
    isDemo: false
  }
];

// Default Settings
const DEFAULT_SETTINGS = {
  history: "২০২১ সালের ১০ এপ্রিল মুন্সীগঞ্জ জেলার গজারিয়া উপজেলার ইমামপুর ইউনিয়নের বিভিন্ন গ্রামের একদল উদ্যমী, সমাজসচেতন ও মানবিক যুবকদের হাত ধরে প্রতিষ্ঠিত হয় <strong>চাঁদের আলো ফাউন্ডেশন (Chader Alo Foundation)</strong>। উদ্দেশ্যহীন সমাজকল্যাণ নয়, বরং একটি সুশৃঙ্খল, স্বচ্ছ ও প্রাতিষ্ঠানিক কাঠামোর মাধ্যমে সমাজের সবচেয়ে অবহেলিত ও নিপীড়িত মানুষের দ্বারে খাদ্য, বস্ত্র, ওষুধ ও জরুরি রক্ত পৌঁছে দেওয়াই আমাদের ব্রত।",
  helpline: "০১৯১৪-৯২৭৯৩৩",
  helplineRaw: "01914927933",
  whatsapp: "01914927933",
  address: "হোল্ডিং নং ৬৩৭, বিসমিল্লাহ ভবন, কলেজ রোড, ভবেরচর, গজারিয়া, মুন্সীগঞ্জ",
  addressShort: "ভবেরচর, গজারিয়া, মুন্সীগঞ্জ",
  slogan: "আর্ত মানবতার সেবায় আমরা",
  announcement: "“আর্ত মানবতার সেবায় আমরা” — চাঁদের আলো ফাউন্ডেশন একটি অরাজনৈতিক ও অলাভজনক স্বেচ্ছাসেবী সংস্থা",
  marqueeText: "চাঁদের আলো ফাউন্ডেশন একটি অরাজনৈতিক সমাজসেবামূলক প্রতিষ্ঠান (প্রতিষ্ঠা: ১০ এপ্রিল ২০২১)\nজরুরি রক্তের প্রয়োজনে ব্লাড লিংক পোর্টালে যোগাযোগ করুন: ০১৯১৪-৯২৭৯৩৩\nঅসহায়, এতিম ও দরিদ্র মানুষের চিকিৎসায় মুক্তহস্তে অনুদান দিন\nরক্তদান করুন, মুমূর্ষু রোগীর জীবন বাঁচান",
  waitMale: 90,
  waitFemale: 120,
  president: {
    name: "হালিম দেওয়ান",
    title: "প্রতিষ্ঠাতা ও সভাপতি, চাঁদের আলো ফাউন্ডেশন",
    photo: "assets/leader_halim.jpg",
    message: "বিসমিল্লাহির রাহমানির রাহিম। ২০২১ সালের ১০ এপ্রিল আর্ত মানবতার সেবার মহান ব্রত নিয়ে আমরা চাঁদের আলো ফাউন্ডেশনের সূচনা করেছিলাম। আমাদের লক্ষ্য সমাজের সুবিধাবঞ্চিত, অসহায় ও মুমূর্ষু মানুষের মুখে হাসি ফোটানো। বিশেষ করে রক্তের অভাবে যেন একটি তাজা প্রাণও ঝরে না যায়, সেজন্য আমাদের ব্লাড লিংক টিম নিরলসভাবে কাজ করে যাচ্ছে। শিক্ষা, চিকিৎসাসেবা, প্রতিবন্ধী পুনর্বাসন এবং নারীর আত্মকর্মসংস্থানে আমরা সবার সম্মিলিত সহযোগিতা কামনা করি। আসুন, মানবতার সেবায় সবাই একতাবদ্ধ হই।"
  },
  secretary: {
    name: "মোঃ মাসুম শিকদার",
    title: "সাধারণ সম্পাদক, চাঁদের আলো ফাউন্ডেশন",
    photo: "assets/leader_masum.png",
    message: "আসসালামু আলাইকুম। চাঁদের আলো ফাউন্ডেশন একটি সম্পূর্ণ অরাজনৈতিক, অলাভজনক ও মানবিক সংগঠন। আমাদের প্রতিটি স্বেচ্ছাসেবীর মেধা, শ্রম ও ভালোবাসায় আজ এই সংগঠন সমাজের হাজারো মানুষের আস্থার প্রতীক হয়ে উঠেছে। প্রতিটি অনুদানের সঠিক ও স্বচ্ছ ব্যবহার নিশ্চিত করাই আমাদের প্রধান অঙ্গীকার। ব্লাড লিংক প্ল্যাটফর্মের মাধ্যমে শত শত মানুষের পাশে আমরা দাঁড়াতে পারছি। তরুণ প্রজন্মকে মানবকল্যাণে উদ্বুদ্ধ করাই আমাদের প্রত্যয়। সবার দোয়া ও আন্তরিক সহযোগিতা আমাদের অনুপ্রেরণা।"
  },
  donation: {
    headline: "মানবতার কল্যাণে আপনার হাত বাড়িয়ে দিন",
    appeal: "আপনার যাকাত, সদকা ও সাধারণ অনুদানে হাসবে একটি অসহায় এতিম শিশু, চিকিৎসা পাবে একজন মুমূর্ষু রোগী।",
    generalFee: "ভর্তি ফি ১০০/- টাকা এবং বার্ষিক চাঁদা ১,০০০/- টাকা।",
    lifeFee: "এককালীন ৫০,০০০/- টাকা বা সমপরিমাণ সামগ্রী দান করলে। অনারবোর্ডে নাম লিপিবদ্ধ থাকবে।",
    donorFee: "এককালীন ১,০০,০০০/- টাকা বা সমপরিমাণ সহায়তা দিলে। অনারবোর্ডে নাম সংরক্ষিত থাকবে।",
    bankAccName: "চাঁদের আলো ফাউন্ডেশন",
    bankName: "সোনালী ব্যাংক পিএলসি",
    bankBranch: "ঢাকা বিশ্ববিদ্যালয় শাখা",
    bankAccNo: "৪৪০৫৭০১০২৩৮৪১",
    bankRouting: "১৫০২৬০৬৭৫",
    bkash: "০১৯১৪-৯২৭৯৩৩",
    nagad: "০১৯১৪-৯২৭৯৩৩",
    rocket: "০১৯১৪-৯২৭৯৩৩",
    note: "* অনুদান পাঠানোর পর অনুগ্রহ করে হেল্পলাইনে কল বা হোয়াটসঅ্যাপ মেসেজ দিয়ে আপনার নাম ও এলাকা নিশ্চিত করুন।"
  }
};


// Initial Notices Seed Data
const INITIAL_NOTICES = [
  {
    id: "NOT-2026-001",
    title: "বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান ক্যাম্পেইন-২০২৬",
    category: "রক্তদান কর্মসূচি",
    date: "2026-10-25",
    priority: "pinned",
    author: "হালিম দেওয়ান (সভাপতি)",
    signeeRole: "সভাপতি",
    status: "active",
    summary: "আগামী শুক্রবার ভবেরচর কলেজ রোড প্রাঙ্গণে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও রক্তদান ক্যাম্পেইন অনুষ্ঠিত হবে।",
    content: "চাঁদের আলো ফাউন্ডেশনের সকল শুভাকাঙ্ক্ষী ও এলাকাবাসীর সদয় অবগতির জন্য জানানো যাচ্ছে যে, আর্ত মানবতার সেবায় নিয়মিত কর্মসূচির অংশ হিসেবে আগামী শুক্রবার সকাল ৯:০০ টা থেকে বিকেল ৫:০০ টা পর্যন্ত ভবেরচর কলেজ রোডস্থ অস্থায়ী কার্যালয়ে এক বিশাল 'বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান কর্মসূচি-২০২৬' অনুষ্ঠিত হবে।\n\nউক্ত ক্যাম্পেইনে উপস্থিত থাকবেন গজারিয়া উপজেলার বিশিষ্ট সমাজসেবক, চিকিৎসকবৃন্দ ও ফাউন্ডেশনের কার্যনির্বাহী পরিষদের নেতৃবৃন্দ। ১৮ থেকে ৬০ বছর বয়সী সকল সুস্থ ব্যক্তিকে এই মহৎ রক্তদান কর্মসূচিতে অংশগ্রহণ করে মুমূর্ষু রোগীর পাশে দাঁড়ানোর উদাত্ত আহ্বান জানানো হচ্ছে।"
  },
  {
    id: "NOT-2026-002",
    title: "শীতার্ত ও সুবিধাবঞ্চিত মানুষের মাঝে শীতবস্ত্র বিতরণ সংক্রান্ত জরুরি বিজ্ঞপ্তি",
    category: "সমাজকল্যাণ",
    date: "2026-10-20",
    priority: "urgent",
    author: "মোঃ মাসুম শিকদার (সাধারণ সম্পাদক)",
    signeeRole: "সাধারণ সম্পাদক",
    status: "active",
    summary: "আসন্ন শীত মৌসুমে অসহায় ও দরিদ্র পরিবারের মাঝে কম্বল ও শীতবস্ত্র বিতরণের তালিকা প্রস্তুত কার্যক্রম শুরু হয়েছে।",
    content: "চাঁদের আলো ফাউন্ডেশনের উদ্যোগে আগামী মাসে গজারিয়া উপজেলার বিভিন্ন ইউনিয়নের প্রত্যন্ত অঞ্চলে অসহায় বিধবা, এতিম ও দরিদ্র পরিবারের মাঝে শীতবস্ত্র ও কম্বল বিতরণ কর্মসূচি পরিচালিত হবে।\n\nফাউন্ডেশনের সকল ইউনিয়ন ও ওয়ার্ড পর্যায়ের স্বেচ্ছাসেবীদের আগামী ৫ নভেম্বরের মধ্যে নিজ নিজ এলাকার প্রকৃত অসচ্ছল পরিবারের তালিকা প্রস্তুত করে সাধারণ সম্পাদকের নিকট জমা দেওয়ার জন্য নির্দেশ প্রদান করা হলো। যেকোনো তথ্যের জন্য সরাসরি হেল্পলাইনে (০১৯১৪-৯২৭৯৩৩) যোগাযোগ করার অনুরোধ করা হলো।"
  },
  {
    id: "NOT-2026-003",
    title: "ফাউন্ডেশনের আজীবন ও সাধারণ সদস্যপদ গ্রহণ নীতিমালা ও ফরম বিতরণ",
    category: "সাধারণ নোটিশ",
    date: "2026-10-10",
    priority: "normal",
    author: "কার্যনির্বাহী পরিষদ (যৌথ)",
    signeeRole: "সাধারণ সম্পাদক",
    status: "active",
    summary: "চাঁদের আলো ফাউন্ডেশনের গঠনতন্ত্রের ধারা-০৫ মোতাবেক নতুন সদস্যপদ গ্রহণের আবেদন আহ্বান করা যাচ্ছে।",
    content: "চাঁদের আলো ফাউন্ডেশনের গঠনতন্ত্র অনুযায়ী যারা আর্ত মানবতার সেবায় আত্মনিয়োগ করতে চান, তাদের জন্য আজীবন সদস্য ও সাধারণ সদস্যপদ গ্রহণের আবেদন উন্মুক্ত করা হয়েছে।\n\nআগ্রহী ব্যক্তিবর্গ ওয়েবসাইট অথবা কেন্দ্রীয় কার্যালয় (বিসমিল্লাহ ভবন, কলেজ রোড, ভবেরচর) থেকে সদস্যপদ ফরম সংগ্রহ ও পূরণ করে জমা দিতে পারবেন। আজীবন সদস্যপদের এককালীন অনুদান ১০,০০০/- টাকা এবং সাধারণ সদস্যপদের মাসিক ফি ১০০/- টাকা নির্ধারণ করা আছে।"
  }
];

// Initial Gallery Activities Seed Data
const INITIAL_ACTIVITIES = [
  {
    id: "ACT-01",
    title: "গজারিয়ায় বিনামূল্যে রক্তের গ্রুপ নির্ণয়",
    category: "রক্তদান",
    mediaType: "image",
    mediaUrl: "data:image/jpeg;base64,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",
    date: "2021-11-14",
    location: "কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়, ইমামপুর, গজারিয়া",
    description: "মুন্সীগঞ্জের গজারিয়া উপজেলার ইমামপুর ইউনিয়নের কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়ে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও সচেতনতামূলক কর্মসূচি অনুষ্ঠিত হয়। এতে চার শতাধিক মানুষের রক্তের গ্রুপ নির্ণয় করা হয়।",
    desc: "মুন্সীগঞ্জের গজারিয়া উপজেলার ইমামপুর ইউনিয়নের কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়ে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও সচেতনতামূলক কর্মসূচি অনুষ্ঠিত হয়। এতে চার শতাধিক মানুষের রক্তের গ্রুপ নির্ণয় করা হয়।"
  },
  {
    id: "ACT-02",
    title: "অসহায় ও শীতার্ত মানুষের মাঝে শীতবস্ত্র বিতরণ",
    category: "ত্রাণ",
    mediaType: "image",
    mediaUrl: "",
    date: "2022-01-10",
    location: "হোগলাকান্দি, গজারিয়া",
    description: "শীত মৌসুমে হতদরিদ্র পরিবারের মাঝে কম্বল ও গরম কাপড় বিতরণ কর্মসূচি।",
    desc: "শীত মৌসুমে হতদরিদ্র পরিবারের মাঝে কম্বল ও গরম কাপড় বিতরণ কর্মসূচি।"
  },
  {
    id: "ACT-03",
    title: "মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১",
    category: "বৃক্ষরোপণ",
    mediaType: "image",
    mediaUrl: "data:image/jpeg;base64,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EyhpImDA8BIR6Sucdc9MAO7/ALNviTtDwIq/DvbVNBulqS0m2U5o2EM8wK8eZikIAPckK7Hp0B1kqvhqogY1kRD7OubadfNW8GN085LiS27baqzrPT8LXTIo6LCg/lo3tacLVTKSPue34nQVbZ3hhio6qGWnqEQBoZo2jkH4qwBH92ji3Efs+nCn+DQWFwOhncHCxt90HisokjbY6XQF49OI/D4If+suVMv8yf8ADVf+CaB90zgsoK0MpxnqfWnbR94+EJsilDAeu606/nxkIP8ALQL4HxMd31BYHAoJe4/tx/5HVniYvD++6pqH/wBUCrOu24du2W72uw3W8U9LcL28sdtppCedU0a8nCADrhep7dNSKxYOkrlt2xXK50F6uNnoqm42ouaGplgR5aYuvFzG5GUyOhweo07Cnlg++suYgtYJLhfn39rHz2+01IaXAkipKONWB68vJD/l97Vq3O6bhNFWbNtFy8qogn8lpwSA0Rw6NkdSGjZTlT1ycHVc/aght8f2maqa4wTzUq01DLLFBKI5HYU6jiGweOVC9e/XWmrbt3wq8Z9kWys8Ia9rXets0i0IpamQyTRqv/VzZYmReZb1dwT0x21fUuGNxECMODXAC19r9lNLj7cEDHysLo3b26eaptNtLV0sNrp65WqqZSA0djMYUnuTMzEv9Px1N2wXPb9vNsud2krCpysjjGB8uupq40XjVa5Utg25BXM2VZqSvpIuGOhLCeSM498jlog2H4U1V9q5Nwb6qKOS3UeXfjUoaSPGG5SSdnAIPyXt972g/wDDlfNJke2w79P8oyp47wWnpxNHIJCdmt94n06IcTZF+otmXTxWrKOIxUohWippoS8jRyOFFRnsuJDERnuiyf1xq+EiSGJEjChVUKvEdMe3/wAn31R/jP46Um5adPDXZcLVFnWZFnqURjJc6lWBAjX7zJyAx7t3wABq+tjbL3pdtm0dzv8ARraa/wCGAFBUKDLIQMKWIbCZAHTqR740biODNYI4aQZiAbnzVEK+rqIzWYh4M50b2HT/ALptwHUgaS4Yz0HXXMNWHDIyOkkZ4yRsPVG3upHsR8tKecufbWddTFri1wsQkdLfUFceWPca+MWR0AH10o5DAY14CeX92k9nTM5QVuO1wSXiOqlGXMgChjlOIAx6ce5zrtroK+JKQBooYWVW8nCgt1GdMN+X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",
    date: "2021-07-06",
    location: "গজারিয়া, মুন্সীগঞ্জ",
    description: "পরিবেশের ভারসাম্য রক্ষা ও সবুজায়নের লক্ষ্যে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১ পরিচালিত হয় এবং বিভিন্ন প্রতিষ্ঠানে ফলজ ও বনজ গাছের চারা রোপণ করা হয়।",
    desc: "পরিবেশের ভারসাম্য রক্ষা ও সবুজায়নের লক্ষ্যে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১ পরিচালিত হয় এবং বিভিন্ন প্রতিষ্ঠানে ফলজ ও বনজ গাছের চারা রোপণ করা হয়।"
  }
];

// Storage Keys
const STORAGE_KEYS = {
  DONORS: "caf_blood_donors_data_v4",
  VOLUNTEERS: "caf_volunteers_data_v4",
  REQUESTS: "caf_blood_requests_data_v4",
  SETTINGS: "caf_site_settings_v4",
  ADMIN_PIN: "caf_admin_pin_v4",
  ADMIN_AUTH: "caf_admin_auth_v4",
  ACTIVITIES: "caf_activities_data_v4",
  AID: "caf_aid_applications_v4",
  DONATION_RECORDS: "caf_donation_records_v4",
  VISITORS: "caf_visitor_count_v4",
  NOTICES: "caf_notices_data_v4"
};

// State Variables
let donors = [];
let volunteers = [];
let emergencyRequests = [];
let donationRecords = [];
let notices = [];
let currentNoticeCategory = "ALL";
let siteSettings = { ...DEFAULT_SETTINGS };
let adminPin = "1234";
let isAdminLoggedIn = false;
let currentFilterGroup = "ALL";

// Uploaded Photo Cache
let regUploadedPhoto = null;
let volUploadedPhoto = null;
let adminUploadedPhoto = null;

// Gallery state
let activities = [];
let activityUploadedPhoto = null;
let editingActivityId = null;
let aidApplications = [];

// Supabase Cloud State
var supabaseClient = null;
var realtimeChannel = null;
var isSyncingFromCloud = false;
var SUPABASE_CONFIG = {
  url: "https://evnqybxfdzrvormdyutu.supabase.co",
  anonKey: "",  // << অ্যাডমিন প্যানেল > ক্লাউড ডেটাবেজ থেকে Publishable Key সেট করুন
  enabled: true
};

// Safe Swal fallback if offline or CDN blocked
if (typeof Swal === 'undefined') {
  window.Swal = {
    fire: function(opts, text, icon) {
      if (typeof opts === 'string') {
        alert((icon ? `[${icon.toUpperCase()}] ` : '') + opts + (text ? `\n${text}` : ''));
        return Promise.resolve({ isConfirmed: true });
      }
      const title = (opts && opts.title) ? opts.title.replace(/<[^>]*>/g, '') : '';
      const txt = (opts && opts.text) ? opts.text : '';
      alert(title + (txt ? `\n${txt}` : ''));
      return Promise.resolve({ isConfirmed: true });
    },
    showValidationMessage: function(msg) {
      alert(msg);
    }
  };
}

function applyEmbeddedLogo() {
  if (typeof window.CAF_LOGO_DATA_URI !== 'undefined' && window.CAF_LOGO_DATA_URI) {
    document.querySelectorAll('img[src*="logo.png"], img[data-logo], link[rel="icon"]').forEach(el => {
      if (el.tagName === 'LINK') el.href = window.CAF_LOGO_DATA_URI;
      else el.src = window.CAF_LOGO_DATA_URI;
    });
  }
  if (typeof window.CAF_SIG_MASUM_DATA_URI !== 'undefined' && window.CAF_SIG_MASUM_DATA_URI) {
    document.querySelectorAll('img[src*="signature_masum.png"]').forEach(el => {
      el.src = window.CAF_SIG_MASUM_DATA_URI;
    });
  }
  if (typeof window.CAF_SIG_HALIM_DATA_URI !== 'undefined' && window.CAF_SIG_HALIM_DATA_URI) {
    document.querySelectorAll('img[src*="signature_halim.png"]').forEach(el => {
      el.src = window.CAF_SIG_HALIM_DATA_URI;
    });
  }
  if (typeof window.CAF_PHOTO_PRESIDENT_DATA_URI !== 'undefined' && window.CAF_PHOTO_PRESIDENT_DATA_URI) {
    document.querySelectorAll('img[src*="leader_halim.jpg"]').forEach(el => {
      el.src = window.CAF_PHOTO_PRESIDENT_DATA_URI;
    });
    if (DEFAULT_SETTINGS.president) DEFAULT_SETTINGS.president.photo = window.CAF_PHOTO_PRESIDENT_DATA_URI;
    if (siteSettings.president) siteSettings.president.photo = window.CAF_PHOTO_PRESIDENT_DATA_URI;
  }
  if (typeof window.CAF_PHOTO_SECRETARY_DATA_URI !== 'undefined' && window.CAF_PHOTO_SECRETARY_DATA_URI) {
    document.querySelectorAll('img[src*="leader_masum.png"]').forEach(el => {
      el.src = window.CAF_PHOTO_SECRETARY_DATA_URI;
    });
    if (DEFAULT_SETTINGS.secretary) DEFAULT_SETTINGS.secretary.photo = window.CAF_PHOTO_SECRETARY_DATA_URI;
    if (siteSettings.secretary) siteSettings.secretary.photo = window.CAF_PHOTO_SECRETARY_DATA_URI;
  }
  if (typeof window.CAF_PHOTO_BLOOD_DATA_URI !== 'undefined' && window.CAF_PHOTO_BLOOD_DATA_URI) {
    const actBlood = INITIAL_ACTIVITIES.find(a => a.id === 'ACT-01');
    if (actBlood) actBlood.mediaUrl = window.CAF_PHOTO_BLOOD_DATA_URI;
    const currentBlood = activities.find(a => a.id === 'ACT-01');
    if (currentBlood && (!currentBlood.mediaUrl || currentBlood.mediaUrl.includes('assets/'))) {
      currentBlood.mediaUrl = window.CAF_PHOTO_BLOOD_DATA_URI;
    }
  }
  if (typeof window.CAF_PHOTO_TREE_DATA_URI !== 'undefined' && window.CAF_PHOTO_TREE_DATA_URI) {
    const actTree = INITIAL_ACTIVITIES.find(a => a.id === 'ACT-03');
    if (actTree) actTree.mediaUrl = window.CAF_PHOTO_TREE_DATA_URI;
    const currentTree = activities.find(a => a.id === 'ACT-03');
    if (currentTree && (!currentTree.mediaUrl || currentTree.mediaUrl.includes('assets/'))) {
      currentTree.mediaUrl = window.CAF_PHOTO_TREE_DATA_URI;
    }
  }
}

// Initialize on Load (Supports both synchronous, standalone, and async loading)

// ============================================================
// VISITOR COUNTER ENGINE
// ============================================================
function getVisitorCount() {
  let count = parseInt(localStorage.getItem(STORAGE_KEYS.VISITORS) || '0', 10);
  if (isNaN(count) || count < 1) {
    count = 1;
    localStorage.setItem(STORAGE_KEYS.VISITORS, count.toString());
  }
  return count;
}

function incrementVisitorCount() {
  let count = parseInt(localStorage.getItem(STORAGE_KEYS.VISITORS) || '0', 10);
  if (isNaN(count) || count < 1) {
    count = 1;
    localStorage.setItem(STORAGE_KEYS.VISITORS, count.toString());
    try { sessionStorage.setItem('caf_has_visited_session', 'true'); } catch(e){}
    return count;
  }
  try {
    if (!sessionStorage.getItem('caf_has_visited_session')) {
      count += 1;
      localStorage.setItem(STORAGE_KEYS.VISITORS, count.toString());
      sessionStorage.setItem('caf_has_visited_session', 'true');
    }
  } catch(e) {
    count += 1;
    localStorage.setItem(STORAGE_KEYS.VISITORS, count.toString());
  }
  return count;
}

function initApp() {
  incrementVisitorCount();
  applyEmbeddedLogo();
  loadData();
  applySiteSettings();
  renderAllServices();
  renderVolunteersGrid();
  filterDonors();
  renderEmergencyRequests();
  updateHomeStats();
  checkAdminSession();
  setupFilterPills();
  renderGallery('ALL');
  renderNoticeBoard();
  renderHomeNotices();
  updateNoticeStats();
  renderAdminNoticeList();
  applyAdminUIState();
  initSupabaseClient();
  syncAllFromSupabase();
  setupSupabaseRealtime();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


const INITIAL_DONATION_RECORDS = [
  {
    id: "REC-2026-001",
    requestId: "REQ-01",
    patientName: "বেগম রোকেয়া",
    patientPhone: "01823456789",
    hospital: "মুন্সীগঞ্জ জেনারেল হাসপাতাল",
    bloodGroup: "O+",
    bags: "1",
    donorName: "মোঃ আরিফুল ইসলাম",
    donorPhone: "01712345678",
    donorAddress: "ভবেরচর, গজারিয়া",
    donationDate: "2026-10-15",
    managedDate: "2026-10-15",
    notes: "সফলভাবে সিজারিয়ান অপারেশনের জন্য রক্তদান সম্পন্ন।",
    status: "managed"
  },
  {
    id: "REC-2026-002",
    requestId: "REQ-02",
    patientName: "আব্দুল করিম",
    patientPhone: "01987654321",
    hospital: "ঢাকা মেডিকেল কলেজ হাসপাতাল",
    bloodGroup: "A+",
    bags: "2",
    donorName: "ফারহানা আক্তার",
    donorPhone: "01834567890",
    donorAddress: "বাউশিয়া, গজারিয়া",
    donationDate: "2026-10-22",
    managedDate: "2026-10-22",
    notes: "জরুরি দুর্ঘটনাজনিত জরুরি চিকিৎসায় রক্তদান সম্পন্ন।",
    status: "managed"
  },
  {
    id: "REC-2026-003",
    requestId: "REQ-03",
    patientName: "শিশু তাহমিদ (থ্যালাসেমিয়া)",
    patientPhone: "01755443322",
    hospital: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (BSMMU)",
    bloodGroup: "B+",
    bags: "1",
    donorName: "সালমান ফারসি",
    donorPhone: "01799887766",
    donorAddress: "রসুলপুর, গজারিয়া",
    donationDate: "2026-10-28",
    managedDate: "2026-10-28",
    notes: "নিয়মিত থ্যালাসেমিয়া রোগীর জীবন রক্ষায় রক্তদান সম্পন্ন।",
    status: "managed"
  }
];

function loadData() {
  // Settings
  const st = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  if (st) {
    try {
      siteSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(st) };
      if (!siteSettings.history || siteSettings.history.includes('ভবেরচর বাজারে')) {
        siteSettings.history = DEFAULT_SETTINGS.history;
      }
      if (!siteSettings.headlines || !Array.isArray(siteSettings.headlines) || siteSettings.headlines.length === 0) {
        siteSettings.headlines = (siteSettings.marqueeText ? siteSettings.marqueeText.split('\n').map(s=>s.trim()).filter(Boolean) : [...defaultHeadlines]);
      }
      if (!siteSettings.president || siteSettings.president.name === 'মোঃ নাজমুল হাসান') {
        siteSettings.president = { ...DEFAULT_SETTINGS.president, ...(siteSettings.president || {}), name: 'হালিম দেওয়ান' };
      }
      if (!siteSettings.secretary || siteSettings.secretary.name === 'মোঃ আরিফুল ইসলাম') {
        siteSettings.secretary = { ...DEFAULT_SETTINGS.secretary, ...(siteSettings.secretary || {}), name: 'মোঃ মাসুম শিকদার' };
      }
            // Ensure President & Secretary photos are set
      if (!siteSettings.president.photo || siteSettings.president.photo === '' || siteSettings.president.photo.includes('leader_halim.jpg')) {
        siteSettings.president.photo = (typeof window !== 'undefined' && window.CAF_PHOTO_PRESIDENT_DATA_URI) ? window.CAF_PHOTO_PRESIDENT_DATA_URI : DEFAULT_SETTINGS.president.photo;
      }
      if (!siteSettings.secretary.photo || siteSettings.secretary.photo === '' || siteSettings.secretary.photo.includes('leader_masum.png')) {
        siteSettings.secretary.photo = (typeof window !== 'undefined' && window.CAF_PHOTO_SECRETARY_DATA_URI) ? window.CAF_PHOTO_SECRETARY_DATA_URI : DEFAULT_SETTINGS.secretary.photo;
      }
      if (!siteSettings.donation) {
        siteSettings.donation = { ...DEFAULT_SETTINGS.donation };
      }
      // Auto-migrate to official user contact & bank account info
      if (siteSettings.helpline === '০১৭১২-৩৪৫৬৭৮' || siteSettings.helplineRaw === '01712345678') {
        siteSettings.helpline = '০১৯১৪-৯২৭৯৩৩';
        siteSettings.helplineRaw = '01914927933';
        siteSettings.whatsapp = '01914927933';
      }
      if (siteSettings.donation) {
        if (!siteSettings.donation.bankAccNo || siteSettings.donation.bankAccNo === '১১০২৪০১০২৬৫৫৮') {
          siteSettings.donation.bankAccNo = '৪৪০৫৭০১০২৩৮৪১';
          siteSettings.donation.bankBranch = 'ঢাকা বিশ্ববিদ্যালয় শাখা';
          siteSettings.donation.bkash = '০১৯১৪-৯২৭৯৩৩';
          siteSettings.donation.nagad = '০১৯১৪-৯২৭৯৩৩';
          siteSettings.donation.rocket = '০১৯১৪-৯২৭৯৩৩';
        }
      }
    } catch(e){}
  }

  // Donors
  const dn = localStorage.getItem(STORAGE_KEYS.DONORS);
  if (dn) {
    try {
      donors = JSON.parse(dn);
      // Ensure Halim Dewan and Masum Shikdar are present with their exact details
      const hasHalim = donors.some(d => d.name === "হালিম দেওয়ান");
            const masum = donors.find(d => d.name === "মোঃ মাসুম শিকদার");
      if (masum && masum.phone !== "01785677062") {
        masum.phone = "01785677062";
        masum.whatsapp = "01785677062";
                // Ensure Halim & Masum have photos
        const hD = donors.find(d => d.name === "হালিম দেওয়ান");
        if (hD && (!hD.photo || hD.photo === '')) hD.photo = "assets/leader_halim.jpg";
        const mD = donors.find(d => d.name === "মোঃ মাসুম শিকদার");
        if (mD && (!mD.photo || mD.photo === '')) mD.photo = "assets/leader_masum.png";
        saveDonors();
      }
      const hasMasum = donors.some(d => d.name === "মোঃ মাসুম শিকদার");
      if (!hasHalim || !hasMasum || donors.some(d => d.name === "মোঃ আরিফুল ইসলাম")) {
        const realDonors = donors.filter(d => !d.isDemo && d.name !== "মোঃ আরিফুল ইসলাম" && d.name !== "তানভীর আহমেদ তানিম" && d.name !== "সালমান ফারসি" && d.name !== "হালিম দেওয়ান" && d.name !== "মোঃ মাসুম শিকদার");
        donors = [...INITIAL_DONORS, ...realDonors];
        saveDonors();
      }
    } catch(e) {
      donors = [...INITIAL_DONORS];
      saveDonors();
    }
  } else {
    donors = [...INITIAL_DONORS];
    saveDonors();
  }

  // Volunteers
  const vl = localStorage.getItem(STORAGE_KEYS.VOLUNTEERS);
  if (vl) {
    try { volunteers = JSON.parse(vl); } catch(e){ volunteers = [...INITIAL_VOLUNTEERS]; }
  } else {
    volunteers = [...INITIAL_VOLUNTEERS];
    saveVolunteers();
  }

  // Activities (Gallery)
  const ac = localStorage.getItem(STORAGE_KEYS.ACTIVITIES);
  if (ac) {
    try { 
      activities = JSON.parse(ac); 
    } catch(e) { 
      activities = JSON.parse(JSON.stringify(INITIAL_ACTIVITIES)); 
    }
    if (!Array.isArray(activities) || activities.length === 0) {
      activities = JSON.parse(JSON.stringify(INITIAL_ACTIVITIES));
      saveActivities();
    } else {
      let updated = false;
      INITIAL_ACTIVITIES.forEach(defAct => {
        const existIdx = activities.findIndex(a => a.id === defAct.id);
        if (existIdx === -1) {
          activities.push(JSON.parse(JSON.stringify(defAct)));
          updated = true;
        } else if ((!activities[existIdx].mediaUrl || activities[existIdx].mediaUrl === '' || activities[existIdx].mediaUrl.includes('assets/')) && defAct.mediaUrl) {
          activities[existIdx].mediaUrl = defAct.mediaUrl;
          activities[existIdx].title = defAct.title;
          activities[existIdx].location = defAct.location;
          activities[existIdx].date = defAct.date;
          activities[existIdx].description = defAct.description;
          activities[existIdx].desc = defAct.desc;
          updated = true;
        }
      });
      if (updated) saveActivities();
    }
  } else {
    activities = JSON.parse(JSON.stringify(INITIAL_ACTIVITIES));
    saveActivities();
  }

  // Aid Applications
  const aid = localStorage.getItem(STORAGE_KEYS.AID);
  if (aid) {
    try { aidApplications = JSON.parse(aid); } catch(e){ aidApplications = []; }
  }

  // Notices
  const nt = localStorage.getItem(STORAGE_KEYS.NOTICES);
  if (nt) {
    try { 
      notices = JSON.parse(nt); 
    } catch(e) { 
      notices = JSON.parse(JSON.stringify(INITIAL_NOTICES)); 
    }
    // Requirement 2: localStorage-এ notices নামে খালি অ্যারে [] থাকলেও ডিফল্ট নোটিশগুলো যেন হারিয়ে না যায়
    if (!Array.isArray(notices) || notices.length === 0) {
      notices = JSON.parse(JSON.stringify(INITIAL_NOTICES));
      localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
    } else {
      // Requirement 1 & 9: Ensure all default notices are present
      let needsSave = false;
      INITIAL_NOTICES.forEach(defN => {
        if (!notices.some(n => n.id === defN.id)) {
          notices.push(JSON.parse(JSON.stringify(defN)));
          needsSave = true;
        }
      });
      if (needsSave) {
        localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
      }
    }
  } else {
    // Requirement 3: প্রথমবার ওয়েবসাইট চালু হলে ডিফল্ট নোটিশগুলো স্বয়ংক্রিয়ভাবে লোড হবে
    notices = JSON.parse(JSON.stringify(INITIAL_NOTICES));
    localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  }

  // PIN
  const pin = localStorage.getItem(STORAGE_KEYS.ADMIN_PIN);
  if (pin) adminPin = pin;
}

function saveDonors() {
  localStorage.setItem(STORAGE_KEYS.DONORS, JSON.stringify(donors));
  updateHomeStats();
  if (isSupabaseReady()) cloudBulkUpsertDonors(donors);
}

function saveVolunteers() {
  localStorage.setItem(STORAGE_KEYS.VOLUNTEERS, JSON.stringify(volunteers));
  updateHomeStats();
  if (isSupabaseReady()) cloudBulkUpsertVolunteers(volunteers);
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
  if (isSupabaseReady()) cloudSaveSettings(siteSettings);
}

// -------------------------------------------------------------
// NAVIGATION SWITCHERS
// -------------------------------------------------------------
function switchMainTab(tabId) {
  if (tabId === 'constitution') tabId = 'aboutus';

  const tabs = ['home', 'aboutus', 'services', 'bloodlink', 'volunteers', 'gallery', 'notice', 'donation', 'admin'];
  
  tabs.forEach(t => {
    const view = document.getElementById(`tab-view-${t}`);
    const btn = document.getElementById(`nav-btn-${t}`);
    if (view) view.classList.add('hidden');
    if (btn) btn.classList.remove('active');
  });

  const activeView = document.getElementById(`tab-view-${tabId}`);
  const activeBtn = document.getElementById(`nav-btn-${tabId}`);
  if (activeView) activeView.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('active');

  if (tabId === 'bloodlink') {
    filterDonors();
  } else if (tabId === 'volunteers') {
    renderVolunteersGrid();
  } else if (tabId === 'gallery') {
    renderGallery('ALL');
  } else if (tabId === 'notice') {
    renderNoticeBoard();
    updateNoticeStats();
    applyAdminUIState();
  } else if (tabId === 'admin') {
    if (isAdminLoggedIn) updateAdminDashboard();
    applyAdminUIState();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchBloodSubTab(subId) {
  const subs = ['blood-search', 'blood-register', 'blood-emergency', 'blood-guidelines', 'blood-history'];
  subs.forEach(s => {
    const view = document.getElementById(`subview-${s}`);
    const btn = document.getElementById(`blood-subtab-${s.replace('blood-', '')}`);
    if (view) view.classList.add('hidden');
    if (btn) btn.classList.remove('active');
  });

  const activeView = document.getElementById(`subview-${subId}`);
  const activeBtn = document.getElementById(`blood-subtab-${subId.replace('blood-', '')}`);
  if (activeView) activeView.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('active');
  if (subId === 'blood-history') renderDonationHistory();
}

function switchVolSubTab(subId) {
  const subs = ['vol-register', 'vol-directory'];
  subs.forEach(s => {
    const view = document.getElementById(`subview-${s}`);
    const btn = document.getElementById(`vol-subtab-${s.replace('vol-', '')}`);
    if (view) view.classList.add('hidden');
    if (btn) btn.classList.remove('active');
  });

  const activeView = document.getElementById(`subview-${subId}`);
  const activeBtn = document.getElementById(`vol-subtab-${subId.replace('vol-', '')}`);
  if (activeView) activeView.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('active');
}

function switchAdminSubTable(tableId) {
  const dView = document.getElementById('adm-view-donors');
  const vView = document.getElementById('adm-view-volunteers');
  const dTab = document.getElementById('adm-tab-donors');
  const vTab = document.getElementById('adm-tab-volunteers');

  if (tableId === 'donors') {
    dView.classList.remove('hidden');
    vView.classList.add('hidden');
    dTab.classList.add('active');
    vTab.classList.remove('active');
    renderAdminTable();
  } else {
    dView.classList.add('hidden');
    vView.classList.remove('hidden');
    dTab.classList.remove('active');
    vTab.classList.add('active');
    renderAdminVolunteersTable();
  }
}

function toggleMobileMenu() {
  const m = document.getElementById('mobile-nav');
  m.classList.toggle('hidden');
}

// -------------------------------------------------------------
// RENDER ALL 10 SERVICES
// -------------------------------------------------------------
function renderAllServices() {
  const container = document.getElementById('services-full-grid');
  if (!container) return;

  container.innerHTML = FOUNDATION_SERVICES.map(srv => {
    return `
      <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover-lift">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl ${srv.iconColor}">
              <i class="${srv.icon}"></i>
            </div>
            <span class="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">চাঁদের আলো সেবা</span>
          </div>

          <h3 class="font-black text-slate-800 text-lg mb-2">${srv.title}</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">${srv.desc}</p>

          <div class="space-y-1.5 mb-6 text-xs text-slate-700">
            ${srv.features.map(f => `<div class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-green text-[10px]"></i><span>${f}</span></div>`).join('')}
          </div>
        </div>

        <div>
          ${srv.actionType === 'bloodlink' ? `
            <button onclick="switchMainTab('bloodlink')" class="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-droplet"></i> ${srv.btnText}
            </button>
          ` : srv.actionType === 'volunteer' ? `
            <button onclick="switchMainTab('volunteers'); switchVolSubTab('vol-register')" class="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-user-plus"></i> ${srv.btnText}
            </button>
          ` : `
            <button onclick="openApplyHelpModal('${srv.title}')" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow transition flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-hand-holding-heart text-amber-300"></i> ${srv.btnText}
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
  applyAdminUIState();
}

// -------------------------------------------------------------
// VOLUNTEER REGISTRATION & HUB
// -------------------------------------------------------------
function handleVolunteerSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('vol-name').value.trim();
  const father = document.getElementById('vol-father').value.trim();
  const bloodGroup = document.getElementById('vol-blood-group').value;
  const dob = document.getElementById('vol-dob').value;
  const profession = document.getElementById('vol-profession').value.trim();
  const rawPhone = document.getElementById('vol-phone').value.trim();
  const phone = normalizePhoneNumber(rawPhone);
  const rawWA = document.getElementById('vol-whatsapp').value.trim();
  const whatsapp = rawWA ? normalizePhoneNumber(rawWA) : phone;
  const upazila = document.getElementById('vol-upazila').value;
  const village = document.getElementById('vol-village').value.trim();
  const interest = document.getElementById('vol-interest').value;

  if (!phone || phone.length !== 11 || !phone.startsWith('01')) {
    Swal.fire({
      icon: 'warning',
      title: 'ভুল মোবাইল নম্বর!',
      text: 'অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)',
      confirmButtonColor: '#1b8040'
    });
    return;
  }

  // Duplicate Check: একই নম্বরে রক্তদাতা বা স্বেচ্ছাসেবী যেকোনো তালিকায় দ্বিতীয়বার নিবন্ধন বন্ধ
  const isDupVol = volunteers.some(v => normalizePhoneNumber(v.phone) === phone);
  const isDupDonorForVol = donors.some(d => normalizePhoneNumber(d.phone) === phone);
  if (isDupVol || isDupDonorForVol) {
    Swal.fire({
      icon: 'warning',
      title: 'ইতিমধ্যে নিবন্ধিত!',
      text: isDupDonorForVol
        ? 'এই মোবাইল নম্বরটি ইতিমধ্যে রক্তদাতা হিসেবে নিবন্ধিত। অনুগ্রহ করে অন্য নম্বর ব্যবহার করুন।'
        : 'এই মোবাইল নম্বরটি ইতিমধ্যে স্বেচ্ছাসেবী হিসেবে নিবন্ধিত। অনুগ্রহ করে অন্য নম্বর ব্যবহার করুন অথবা অ্যাডমিনের সঙ্গে যোগাযোগ করুন।',
      confirmButtonColor: '#1b8040'
    });
    return;
  }

  const newId = `CAF-VOL-${100 + volunteers.length + 1}`;

  const newVolunteer = {
    id: newId,
    name,
    father,
    bloodGroup,
    dob,
    profession,
    phone,
    whatsapp,
    upazila,
    village,
    interest,
    photo: volUploadedPhoto || null,
    status: 'active',
    joinedDate: new Date().toISOString().split('T')[0]
  };

  volunteers.unshift(newVolunteer);
  saveVolunteers();

  document.getElementById('volunteer-registration-form').reset();
  clearPhoto('vol');

  Swal.fire({
    title: 'স্বাগতম চাঁদের আলো পরিবারে!',
    text: `আপনার স্বেচ্ছাসেবী সদস্য প্রোফাইল সফলভাবে তৈরি হয়েছে। আপনার ভলান্টিয়ার আইডি: ${newId}`,
    icon: 'success',
    confirmButtonColor: '#1b8040',
    confirmButtonText: 'ভার্চুয়াল আইডি কার্ড দেখুন'
  }).then(() => {
    openVolunteerCard(newId);
  });

  renderVolunteersGrid();
}

function renderVolunteersGrid() {
  const grid = document.getElementById('volunteers-grid');
  const countBadge = document.getElementById('vol-count-badge');
  if (!grid) return;

  countBadge.textContent = `${toBengaliNumeral(volunteers.length)} জন সক্রিয় স্বেচ্ছাসেবী`;

  grid.innerHTML = volunteers.map(vol => {
    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover-lift flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3.5 mb-3">
            <div class="w-14 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center shadow-sm">
              ${vol.photo ? `
                <img src="${vol.photo}" alt="${vol.name}" class="w-full h-full object-cover">
              ` : `
                <i class="fa-solid fa-user text-2xl text-slate-400"></i>
              `}
            </div>
            <div>
              <span class="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">${vol.id}</span>
              <h4 class="font-bold text-slate-800 text-sm mt-0.5 leading-tight">${vol.name}</h4>
              <p class="text-xs text-slate-500">${vol.profession}</p>
            </div>
          </div>

          <div class="p-2.5 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-600 mb-3 border border-slate-100">
            <div class="flex justify-between">
              <span>রক্তের গ্রুপ:</span>
              <strong class="text-brand-red">${vol.bloodGroup}</strong>
            </div>
            <div class="flex justify-between">
              <span>এলাকা:</span>
              <strong>${vol.village}, ${vol.upazila}</strong>
            </div>
            <div class="flex justify-between">
              <span>সেবার আগ্রহ:</span>
              <span class="text-brand-green font-semibold truncate max-w-[150px]">${vol.interest}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 pt-2 border-t border-slate-100">
          <a href="tel:${vol.phone}" class="flex-1 bg-brand-green text-white text-xs font-bold py-1.5 px-3 rounded-lg text-center shadow">
            <i class="fa-solid fa-phone mr-1"></i> কল
          </a>
          <button onclick="openVolunteerCard('${vol.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-1.5 px-3 rounded-lg border border-slate-200" title="আইডি কার্ড দেখুন">
            <i class="fa-solid fa-id-card mr-1"></i> কার্ড
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openVolunteerCard(volId) {
  const vol = volunteers.find(v => v.id === volId);
  if (!vol) return;

  document.getElementById('card-vol-name').textContent = vol.name;
  document.getElementById('card-vol-id').textContent = vol.id;
  document.getElementById('card-vol-blood').textContent = vol.bloodGroup;
  document.getElementById('card-vol-phone').textContent = vol.phone;
  document.getElementById('card-vol-area').textContent = `${vol.village}, ${vol.upazila}`;

  // Back side info
  const volBackAddr = document.getElementById('card-vol-back-address');
  const volBackHelp = document.getElementById('card-vol-back-helpline');
  if (volBackAddr) volBackAddr.textContent = siteSettings.address || 'বিসমিল্লাহ ভবন, কলেজ রোড, ভবেরচর, গজারিয়া, মুন্সীগঞ্জ';
  if (volBackHelp) volBackHelp.textContent = siteSettings.helpline || '০১৭১২-৩৪৫৬৭৮';

  const img = document.getElementById('card-vol-img');
  const avatar = document.getElementById('card-vol-avatar');
  if (vol.photo) {
    img.src = vol.photo;
    img.classList.remove('hidden');
    avatar.classList.add('hidden');
  } else {
    img.classList.add('hidden');
    avatar.classList.remove('hidden');
  }

  document.getElementById('volunteer-card-modal').classList.remove('hidden');
}

function closeVolunteerCardModal() {
  document.getElementById('volunteer-card-modal').classList.add('hidden');
}

function printVolunteerCard() {
  document.body.classList.add('printing-card');
  window.print();
  setTimeout(() => { document.body.classList.remove('printing-card'); }, 1000);
}

// -------------------------------------------------------------
// AID / SERVICE APPLICATION MODAL
// -------------------------------------------------------------
function openApplyHelpModal(serviceTitle) {
  document.getElementById('service-apply-title').innerHTML = `<i class="fa-solid fa-hand-holding-heart text-amber-300"></i> ${serviceTitle} - সহযোগিতার আবেদন`;
  document.getElementById('service-apply-modal').classList.remove('hidden');
}

function closeApplyHelpModal() {
  document.getElementById('service-apply-modal').classList.add('hidden');
}

function handleServiceApplySubmit(e) {
  e.preventDefault();
  closeApplyHelpModal();
  Swal.fire({
    icon: 'success',
    title: 'আবেদন গৃহীত হয়েছে!',
    text: 'আপনার আবেদনটি চাঁদের আলো ফাউন্ডেশনের দায়িত্বপ্রাপ্ত কর্মকর্তা যাচাই করে খুব দ্রুত যোগাযোগ করবেন।',
    confirmButtonColor: '#1b8040'
  });
}

// -------------------------------------------------------------
// PHOTO UPLOAD & RESIZING ENGINE
// -------------------------------------------------------------
function handlePhotoUpload(event, target) {
  const file = event.target.files[0];
  if (!file) return;

  // ৫ এমবি সীমা যাচাই
  if (file.size > 5242880) {
    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        icon: 'error',
        title: '📁 ছবির সাইজ বেশি!',
        html: `ছবির বর্তমান সাইজ: <strong>${sizeMB} MB</strong><br>সর্বোচ্চ অনুমোদিত সাইজ: <strong>৫ MB</strong><br><br>অনুগ্রহ করে ছোট সাইজের ছবি বেছে নিন।`,
        confirmButtonText: 'ঠিক আছে',
        confirmButtonColor: '#dc2626'
      });
    } else {
      alert('ছবির সাইজ ৫ এমবির বেশি হতে পারবে না। আপনার ছবির সাইজ: ' + sizeMB + ' MB');
    }
    event.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 220;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_SIZE) {
          height = Math.round((height * MAX_SIZE) / width);
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width = Math.round((width * MAX_SIZE) / height);
          height = MAX_SIZE;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.82);

      if (target === 'reg') {
        regUploadedPhoto = dataUrl;
        document.getElementById('reg-photo-preview').src = dataUrl;
        document.getElementById('reg-photo-preview').classList.remove('hidden');
        document.getElementById('reg-photo-placeholder').classList.add('hidden');
        document.getElementById('reg-photo-remove-btn').classList.remove('hidden');
      } else if (target === 'vol') {
        volUploadedPhoto = dataUrl;
        document.getElementById('vol-photo-preview').src = dataUrl;
        document.getElementById('vol-photo-preview').classList.remove('hidden');
        document.getElementById('vol-photo-placeholder').classList.add('hidden');
        document.getElementById('vol-photo-remove-btn').classList.remove('hidden');
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function clearPhoto(target) {
  if (target === 'reg') {
    regUploadedPhoto = null;
    document.getElementById('reg-photo-input').value = '';
    document.getElementById('reg-photo-preview').src = '';
    document.getElementById('reg-photo-preview').classList.add('hidden');
    document.getElementById('reg-photo-placeholder').classList.remove('hidden');
    document.getElementById('reg-photo-remove-btn').classList.add('hidden');
  } else if (target === 'vol') {
    volUploadedPhoto = null;
    document.getElementById('vol-photo-input').value = '';
    document.getElementById('vol-photo-preview').src = '';
    document.getElementById('vol-photo-preview').classList.add('hidden');
    document.getElementById('vol-photo-placeholder').classList.remove('hidden');
    document.getElementById('vol-photo-remove-btn').classList.add('hidden');
  }
}

// -------------------------------------------------------------
// BLOOD LINK ENGINE (DONORS, SEARCH, EMERGENCY)
// -------------------------------------------------------------
function checkDonationEligibility(donor) {
  if (!donor.hasDonated || donor.hasDonated === "না" || !donor.lastDonationDate) {
    return {
      isReady: true,
      text: "রক্তদানে প্রস্তুত",
      badgeClass: "bg-emerald-100 text-brand-green border-emerald-300",
      icon: "fa-circle-check",
      note: "পূর্বে কখনো দেননি",
      eligibilityText: "প্রথমবার — যেকোনো সময় রক্ত দিতে পারবেন",
      shortText: "যেকোনো সময় প্রস্তুত",
      nextDate: "যেকোনো সময়",
      daysAgo: null,
      remDays: 0,
      waitingDays: 90
    };
  }
  const lastDate = new Date(donor.lastDonationDate);
  const now = new Date();
  const diffTime = now.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const waitingDays = donor.gender === "মহিলা" ? (siteSettings.waitFemale || 120) : (siteSettings.waitMale || 90);

  const nextDateObj = new Date(lastDate);
  nextDateObj.setDate(nextDateObj.getDate() + waitingDays);
  const nextDateStr = nextDateObj.toISOString().split('T')[0];

  if (diffDays >= waitingDays) {
    return {
      isReady: true,
      text: "রক্তদানে প্রস্তুত",
      badgeClass: "bg-emerald-100 text-brand-green border-emerald-300",
      icon: "fa-circle-check",
      note: `${toBengaliNumeral(diffDays)} দিন পূর্বে দান করেছেন`,
      eligibilityText: `এখনই রক্ত দিতে পারবেন (${toBengaliNumeral(diffDays)} দিন অতিক্রান্ত)`,
      shortText: `এখনই প্রস্তুত (${toBengaliNumeral(diffDays)} দিন পার)`,
      nextDate: nextDateStr,
      daysAgo: diffDays,
      remDays: 0,
      waitingDays: waitingDays
    };
  } else {
    const rem = waitingDays - diffDays;
    return {
      isReady: false,
      text: "বিশ্রামরত",
      badgeClass: "bg-amber-100 text-amber-700 border-amber-300",
      icon: "fa-clock",
      note: `আর ${toBengaliNumeral(rem)} দিন বাকি`,
      eligibilityText: `সর্বশেষ দানের পর আর ${toBengaliNumeral(rem)} দিন পর রক্ত দিতে পারবেন (${nextDateStr})`,
      shortText: `আর ${toBengaliNumeral(rem)} দিন পর (${nextDateStr})`,
      nextDate: nextDateStr,
      daysAgo: diffDays,
      remDays: rem,
      waitingDays: waitingDays
    };
  }
}

function filterDonors() {
  const group = document.getElementById('filter-blood-group').value;
  const location = document.getElementById('filter-location').value;
  const availability = document.getElementById('filter-availability').value;
  const search = document.getElementById('filter-search').value.trim().toLowerCase();

  const filtered = donors.filter(d => {
    if (d.status === 'inactive') return false;
    if (group !== 'ALL' && d.bloodGroup !== group) return false;
    if (location !== 'ALL') {
      const mUp = d.upazila && d.upazila.includes(location);
      const mVil = d.village && d.village.includes(location);
      if (!mUp && !mVil) return false;
    }
    const el = checkDonationEligibility(d);
    if (availability === 'READY' && !el.isReady) return false;
    if (availability === 'RESTING' && el.isReady) return false;
    if (search) {
      const match = (d.name && d.name.toLowerCase().includes(search)) || (d.phone && d.phone.includes(search)) || (d.village && d.village.toLowerCase().includes(search));
      if (!match) return false;
    }
    return true;
  });

  renderDonorsGrid(filtered);
}

function renderDonorsGrid(donorList) {
  const grid = document.getElementById('donors-grid');
  const countBadge = document.getElementById('donor-count-badge');
  const noFound = document.getElementById('no-donors-found');
  if (!grid) return;

  countBadge.textContent = `${toBengaliNumeral(donorList.length)} জন`;

  if (donorList.length === 0) {
    grid.innerHTML = '';
    noFound.classList.remove('hidden');
    return;
  }
  noFound.classList.add('hidden');

  grid.innerHTML = donorList.map(donor => {
    const el = checkDonationEligibility(donor);
    const cleanPhone = donor.phone ? donor.phone.replace(/[^0-9]/g, '') : '';
    const cleanWA = donor.whatsapp ? donor.whatsapp.replace(/[^0-9]/g, '') : cleanPhone;
    const msg = encodeURIComponent(`আসসালামু আলাইকুম ${donor.name} ভাই, চাঁদের আলো ফাউন্ডেশনের ব্লাড লিংক থেকে যোগাযোগ করছি। একজন মুমূর্ষু রোগীর জন্য ${donor.bloodGroup} রক্তের প্রয়োজন। কথা বলা যাবে কি?`);

    return `
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover-lift">
        <div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <div class="relative flex-shrink-0">
                ${donor.photo ? `
                  <img src="${donor.photo}" alt="${donor.name}" class="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-sm">
                  <span class="absolute -bottom-1 -right-1 bg-brand-red text-white text-[9px] font-black px-1.5 rounded">${donor.bloodGroup}</span>
                ` : `
                  <div class="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center font-black text-lg shadow border border-red-100">
                    ${donor.bloodGroup}
                  </div>
                `}
              </div>
              <div>
                <h4 class="font-bold text-slate-800 text-sm leading-tight">${donor.name}</h4>
                <p class="text-xs text-slate-500 mt-0.5"><i class="fa-solid fa-location-dot text-brand-red mr-1"></i>${donor.village}, ${donor.upazila}</p>
              </div>
            </div>
            <span class="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${el.badgeClass}">
              ${el.text}
            </span>
          </div>

          <div class="p-2.5 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-600 mb-3 border border-slate-100">
            <div class="flex justify-between items-center">
              <span>মোট রক্তদান:</span>
              <strong class="font-black text-slate-800">${toBengaliNumeral(donor.donationCount || 0)} বার</strong>
            </div>
            <div class="flex justify-between items-center">
              <span>সর্বশেষ দান:</span>
              <strong class="font-mono text-slate-700 font-bold">${donor.lastDonationDate || 'পূর্বে কখনো দেননি'}</strong>
            </div>
            <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/80">
              <span class="font-bold text-slate-700 flex items-center gap-1">
                <i class="fa-solid fa-hourglass-half text-brand-red text-[10px]"></i> পরবর্তী রক্তদান:
              </span>
              <span class="text-[11px] font-black ${el.isReady ? 'text-emerald-700' : 'text-amber-700'}" title="${el.eligibilityText}">
                ${el.shortText}
              </span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 pt-2 border-t border-slate-100">
          <a href="tel:${donor.phone}" class="flex-1 bg-brand-green text-white text-xs font-bold py-1.5 px-3 rounded-xl text-center shadow">
            <i class="fa-solid fa-phone mr-1"></i> কল
          </a>
          <a href="https://wa.me/88${cleanWA}?text=${msg}" target="_blank" class="flex-1 bg-emerald-600 text-white text-xs font-bold py-1.5 px-3 rounded-xl text-center shadow">
            <i class="fa-brands fa-whatsapp mr-1"></i> হোয়াটসঅ্যাপ
          </a>
          <button onclick="openDonorCard('${donor.id}')" class="p-1.5 bg-slate-100 text-slate-700 rounded-xl border border-slate-200" title="ডোনার কার্ড">
            <i class="fa-solid fa-id-card"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function setupFilterPills() {
  const pills = document.querySelectorAll('.group-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilterGroup = pill.getAttribute('data-group');
      document.getElementById('filter-blood-group').value = currentFilterGroup;
      filterDonors();
    });
  });
}

function setGroupFilter(g) {
  currentFilterGroup = g;
  document.getElementById('filter-blood-group').value = g;
  document.querySelectorAll('.group-pill').forEach(p => {
    if (p.getAttribute('data-group') === g) p.classList.add('active');
    else p.classList.remove('active');
  });
  filterDonors();
}

function resetFilters() {
  document.getElementById('filter-blood-group').value = 'ALL';
  document.getElementById('filter-location').value = 'ALL';
  document.getElementById('filter-availability').value = 'ALL';
  document.getElementById('filter-search').value = '';
  setGroupFilter('ALL');
}

// Donor Card Modal
function openDonorCard(donorId) {
  const donor = donors.find(d => d.id === donorId);
  if (!donor) return;

  // Front Side
  const bloodBadge = document.getElementById('card-blood-badge');
  const nameEl = document.getElementById('card-name');
  const idEl = document.getElementById('card-id');
  const phoneEl = document.getElementById('card-phone');
  const areaEl = document.getElementById('card-area');
  const donEl = document.getElementById('card-donations');

  if (bloodBadge) bloodBadge.textContent = donor.bloodGroup;
  if (nameEl) nameEl.textContent = donor.name;
  if (idEl) idEl.textContent = donor.id;
  if (phoneEl) phoneEl.textContent = donor.phone;
  if (areaEl) areaEl.textContent = `${donor.village || ''}, ${donor.upazila || ''}`;
  if (donEl) donEl.textContent = `${toBengaliNumeral(donor.donationCount || 0)} বার`;

  // Back Side (Foundation Info)
  const backAddrEl = document.getElementById('card-back-address');
  const backHelpEl = document.getElementById('card-back-helpline');
  if (backAddrEl) backAddrEl.textContent = siteSettings.address || 'বিসমিল্লাহ ভবন, কলেজ রোড, ভবেরচর, গজারিয়া, মুন্সীগঞ্জ';
  if (backHelpEl) backHelpEl.textContent = siteSettings.helpline || '০১৭১২-৩৪৫৬৭৮';

  const img = document.getElementById('card-donor-img');
  const avatar = document.getElementById('card-donor-avatar');
  if (donor.photo) {
    if (img) { img.src = donor.photo; img.classList.remove('hidden'); }
    if (avatar) avatar.classList.add('hidden');
  } else {
    if (img) img.classList.add('hidden');
    if (avatar) avatar.classList.remove('hidden');
  }

  const modal = document.getElementById('donor-card-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeDonorCardModal() {
  document.getElementById('donor-card-modal').classList.add('hidden');
}

function printDonorCard() {
  document.body.classList.add('printing-card');
  window.print();
  setTimeout(() => { document.body.classList.remove('printing-card'); }, 1500);
}

// Donor Registration Form
function calculateAge() {
  const dob = document.getElementById('reg-dob').value;
  if (!dob) return;
  const d = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  document.getElementById('calculated-age').textContent = `বয়স: ${toBengaliNumeral(age)} বছর`;
}

function toggleLastDonationField() {
  const has = document.getElementById('reg-has-donated').value;
  const c1 = document.getElementById('last-donation-container');
  const c2 = document.getElementById('total-donation-container');
  if (has === 'হ্যাঁ') {
    c1.classList.remove('hidden');
    c2.classList.remove('hidden');
  } else {
    c1.classList.add('hidden');
    c2.classList.add('hidden');
  }
}

function handleRegistrationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const father = document.getElementById('reg-father').value.trim();
  const bloodGroup = document.getElementById('reg-blood-group').value;
  const dob = document.getElementById('reg-dob').value;
  const gender = document.getElementById('reg-gender').value;
  const weight = document.getElementById('reg-weight').value;
  const rawPhone = document.getElementById('reg-phone').value.trim();
  const phone = normalizePhoneNumber(rawPhone);
  const rawWA = document.getElementById('reg-whatsapp').value.trim();
  const whatsapp = rawWA ? normalizePhoneNumber(rawWA) : phone;
  const upazila = document.getElementById('reg-upazila').value;
  const village = document.getElementById('reg-village').value.trim();
  const hasDonated = document.getElementById('reg-has-donated').value;
  const lastDonationDate = hasDonated === 'হ্যাঁ' ? document.getElementById('reg-last-date').value : '';
  const donationCount = hasDonated === 'হ্যাঁ' ? (parseInt(document.getElementById('reg-donation-count').value) || 1) : 0;

  if (!phone || phone.length !== 11 || !phone.startsWith('01')) {
    Swal.fire({
      icon: 'warning',
      title: 'ভুল মোবাইল নম্বর!',
      text: 'অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)',
      confirmButtonColor: '#dc2626'
    });
    return;
  }

  // Duplicate Check: একই নম্বরে রক্তদাতা বা স্বেচ্ছাসেবী যেকোনো তালিকায় দ্বিতীয়বার নিবন্ধন বন্ধ
  const isDupDnr = donors.some(d => normalizePhoneNumber(d.phone) === phone);
  const isDupVolForDnr = volunteers.some(v => normalizePhoneNumber(v.phone) === phone);
  if (isDupDnr || isDupVolForDnr) {
    Swal.fire({
      icon: 'warning',
      title: 'ইতিমধ্যে নিবন্ধিত!',
      text: isDupVolForDnr
        ? 'এই মোবাইল নম্বরটি ইতিমধ্যে স্বেচ্ছাসেবী হিসেবে নিবন্ধিত। অনুগ্রহ করে অন্য নম্বর ব্যবহার করুন।'
        : 'এই মোবাইল নম্বরটি ইতিমধ্যে রক্তদাতা হিসেবে নিবন্ধিত। অনুগ্রহ করে অন্য নম্বর ব্যবহার করুন অথবা অ্যাডমিনের সঙ্গে যোগাযোগ করুন।',
      confirmButtonColor: '#dc2626'
    });
    return;
  }

  const newId = `CAF-BD-${1000 + donors.length + 1}`;
  donors.unshift({
    id: newId,
    name, father, bloodGroup, dob, gender, weight,
    phone, whatsapp, upazila, village,
    hasDonated, lastDonationDate, donationCount,
    verified: false, status: 'active',
    photo: regUploadedPhoto || null,
    isDemo: false
  });

  saveDonors();
  document.getElementById('donor-registration-form').reset();
  clearPhoto('reg');

  Swal.fire({
    title: 'নিবন্ধন সম্পন্ন!',
    text: `ব্লাড লিংকে আপনার নিবন্ধন সফল হয়েছে। ডোনার আইডি: ${newId}`,
    icon: 'success',
    confirmButtonColor: '#dc2626',
    confirmButtonText: 'ডিজিটাল ডোনার কার্ড দেখুন'
  }).then(() => {
    openDonorCard(newId);
  });
  filterDonors();
}

// Emergency Requests
function handleEmergencySubmit(e) {
  e.preventDefault();
  const patientName = document.getElementById('req-patient-name').value.trim();
  const bloodGroup = document.getElementById('req-blood-group').value;
  const bags = document.getElementById('req-bags').value;
  const time = document.getElementById('req-time').value.trim();
  const hospital = document.getElementById('req-hospital').value.trim();
  const contact = document.getElementById('req-contact').value.trim();

  const newReq = {
    id: `REQ-${Date.now().toString().slice(-4)}`,
    patientName, bloodGroup, bags, time, hospital, contact,
    phone: contact,
    status: 'active'
  };
  emergencyRequests.unshift(newReq);
  localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(emergencyRequests));
  if (typeof isSupabaseReady === 'function' && isSupabaseReady()) cloudUpsertRequest(newReq);

  document.getElementById('emergency-request-form').reset();
  renderEmergencyRequests();
  updateUrgentBanner();
  applySiteSettings();
  Swal.fire('পোস্ট সফল!', 'জরুরি রক্তের পোস্ট প্রকাশিত ও শিরোনামে যুক্ত হয়েছে', 'success');
}

function renderEmergencyRequests() {
  const container = document.getElementById('emergency-requests-list');
  const badge = document.getElementById('emergency-count-badge');
  if (!container) return;

  const active = emergencyRequests.filter(r => r.status === 'active');
  if (badge) badge.textContent = `${toBengaliNumeral(active.length)}টি সক্রিয়`;

  if (active.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200 text-xs space-y-2">
        <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-xl">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <strong class="text-slate-700 block text-sm">বর্তমানে কোনো রক্তের রিকুয়েস্ট সক্রিয় নেই</strong>
        <p class="text-slate-500">সকল রক্তের আবেদন সফলভাবে সমাধান হয়েছে অথবা নতুন কোনো রিকোয়েস্ট নেই।</p>
      </div>`;
    return;
  }

  container.innerHTML = active.map(req => {
    return `
      <div class="p-5 bg-white rounded-2xl border-2 border-red-200 shadow-sm space-y-3 hover:border-red-300 transition">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-brand-red text-white font-black text-xl flex items-center justify-center shadow-md shadow-red-500/20">
              ${req.bloodGroup}
            </span>
            <div>
              <strong class="text-slate-900 font-black text-base block">${req.patientName}</strong>
              <span class="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                <i class="fa-solid fa-hospital text-brand-red"></i> ${req.hospital}
              </span>
            </div>
          </div>
          <div class="text-right">
            <span class="bg-red-50 text-brand-red font-black text-xs px-3 py-1 rounded-full border border-red-200 inline-block">
              ${toBengaliNumeral(req.bags)} ব্যাগ
            </span>
            <span class="block text-[11px] text-slate-400 mt-1 font-mono">
              <i class="fa-regular fa-clock mr-1"></i>${req.time}
            </span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
          <a href="tel:${req.contact}" class="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-3.5 rounded-xl flex items-center gap-1.5 shadow-sm transition">
            <i class="fa-solid fa-phone text-emerald-400"></i> কল করুন (${req.contact})
          </a>
          <div class="flex items-center gap-2">
            <button type="button" onclick="handleRequestOutcome('${req.id}', 'managed')" class="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black py-2 px-3.5 rounded-xl shadow-md shadow-emerald-600/30 flex items-center gap-1.5 transition" title="রক্ত ম্যানেজ হয়েছে চিহ্নিত করুন">
              <i class="fa-solid fa-check"></i> রক্ত ম্যানেজ হয়েছে
            </button>
            <button type="button" onclick="handleRequestOutcome('${req.id}', 'unmanaged')" class="bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 font-bold py-2 px-3 rounded-xl border border-slate-200 flex items-center gap-1 transition" title="ম্যানেজ করা সম্ভব হয়নি">
              <i class="fa-solid fa-xmark"></i> ম্যানেজ হয়নি
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function updateUrgentBanner() {
  const banner = document.getElementById('urgent-alert');
  const bannerText = document.getElementById('urgent-alert-text');
  const activeReq = emergencyRequests.find(r => r.status === 'active');

  if (activeReq) {
    banner.classList.remove('hidden');
    bannerText.textContent = `জরুরি রক্তের নোটিশ: ${activeReq.patientName}-এর জন্য জরুরি ভিত্তিতে ${activeReq.bloodGroup} রক্তের প্রয়োজন (${activeReq.hospital})`;
  } else {
    banner.classList.add('hidden');
  }
}

// -------------------------------------------------------------
// ADMIN DASHBOARD ENGINE
// -------------------------------------------------------------
async function checkAdminSession() {
  // First try Supabase Auth session (most secure)
  if (isSupabaseReady()) {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session && session.user) {
        isAdminLoggedIn = true;
        sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
        const gate = document.getElementById('admin-login-gate');
        const dash = document.getElementById('admin-dashboard-view');
        if (gate) gate.classList.add('hidden');
        if (dash) dash.classList.remove('hidden');
        updateAdminDashboard();
        return;
      }
    } catch(e) { console.warn('Supabase session check failed:', e); }
  }
  // Fallback: sessionStorage PIN session
  if (sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true') {
    isAdminLoggedIn = true;
    const gate = document.getElementById('admin-login-gate');
    const dash = document.getElementById('admin-dashboard-view');
    if (gate) gate.classList.add('hidden');
    if (dash) dash.classList.remove('hidden');
    updateAdminDashboard();
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const inputPin = document.getElementById('admin-pin-input').value.trim();
  if (inputPin === adminPin) {
    isAdminLoggedIn = true;
    sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    document.getElementById('admin-login-gate').classList.add('hidden');
    document.getElementById('admin-dashboard-view').classList.remove('hidden');
    updateAdminDashboard();
    Swal.fire({ icon: 'success', title: 'লগইন সফল!', timer: 1200, showConfirmButton: false });
  } else {
    Swal.fire({ icon: 'error', title: 'ভুল পিন কোড', text: 'সঠিক পিন দিয়ে পুনরায় চেষ্টা করুন' });
  }
}


// ============================================================
// ADMIN CROSS-TAB UI STATE & DISCRETE AUTH
// ============================================================
function applyAdminUIState() {
  const adminFeatures = document.querySelectorAll('.admin-only-feature');
  adminFeatures.forEach(el => {
    if (isAdminLoggedIn) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });

  const adminBtn = document.getElementById('nav-btn-admin');
  const adminLabel = document.getElementById('nav-admin-label');
  const adminIcon = document.getElementById('nav-admin-icon');

  if (adminBtn && adminLabel) {
    if (isAdminLoggedIn) {
      adminBtn.classList.add('!bg-emerald-800', '!border-emerald-500');
      adminBtn.classList.remove('bg-slate-900');
      adminLabel.innerHTML = `এডমিন (সক্রিয়) <span onclick="event.stopPropagation(); adminLogout();" title="লগআউট" class="ml-1.5 px-2 py-0.5 bg-red-600 hover:bg-red-700 text-white text-[11px] rounded-full inline-block font-bold">লগআউট</span>`;
      if (adminIcon) {
        adminIcon.className = "fa-solid fa-user-shield text-emerald-300 mr-1.5";
      }
    } else {
      adminBtn.classList.remove('!bg-emerald-800', '!border-emerald-500');
      adminBtn.classList.add('bg-slate-900');
      adminLabel.textContent = "এডমিন";
      if (adminIcon) {
        adminIcon.className = "fa-solid fa-lock text-emerald-400 mr-1.5";
      }
    }
  }
}

function handleAdminTabClick() {
  if (isAdminLoggedIn) {
    switchMainTab('admin');
  } else {
    Swal.fire({
      title: '<div class="admin-3d-header"><i class="fa-solid fa-shield-halved text-emerald-400 mr-2"></i>এডমিন লগইন টার্মিনাল</div>',
      html: `
        <div class="admin-3d-swal-body">
          <div class="admin-3d-swal-badge">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            ২৫৬-বিট সুরক্ষিত নিয়ন্ত্রণ ব্যবস্থা
          </div>
          <p class="text-xs text-slate-300 font-bold mb-3">Supabase Auth দিয়ে লগইন: ইমেইল + পাসওয়ার্ড দিন। অথবা শুধু নিচে অফলাইন PIN দিন:</p>
          <div class="relative max-w-xs mx-auto mb-2">
            <input type="email" id="swal-admin-email" 
                   class="w-full text-center text-sm bg-slate-800 text-slate-100 border border-slate-600 rounded-lg py-2 px-3 focus:outline-none focus:border-emerald-400 placeholder-slate-500" 
                   placeholder="admin@example.com (ঐচ্ছিক)">
          </div>
          
          <div class="relative max-w-xs mx-auto mb-3 admin-3d-screen p-1.5">
            <input type="password" id="swal-admin-pin" maxlength="8" 
                   class="w-full text-center tracking-[0.4em] text-3xl font-black bg-transparent text-emerald-300 py-2.5 px-4 focus:outline-none font-mono" 
                   placeholder="••••">
          </div>

          <div class="grid grid-cols-3 gap-2 max-w-xs mx-auto text-base font-black">
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '1'" class="admin-3d-key py-2.5">১</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '2'" class="admin-3d-key py-2.5">২</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '3'" class="admin-3d-key py-2.5">৩</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '4'" class="admin-3d-key py-2.5">৪</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '5'" class="admin-3d-key py-2.5">৫</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '6'" class="admin-3d-key py-2.5">৬</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '7'" class="admin-3d-key py-2.5">৭</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '8'" class="admin-3d-key py-2.5">৮</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '9'" class="admin-3d-key py-2.5">৯</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value = ''" class="admin-3d-key admin-3d-key-clear py-2.5 text-xs font-bold">মুছুন</button>
            <button type="button" onclick="document.getElementById('swal-admin-pin').value += '0'" class="admin-3d-key py-2.5">০</button>
            <button type="button" onclick="const p=document.getElementById('swal-admin-pin'); p.value=p.value.slice(0,-1);" class="admin-3d-key py-2.5 text-xs"><i class="fa-solid fa-delete-left"></i></button>
          </div>
        </div>
      `,
      customClass: {
        popup: 'admin-3d-swal-popup',
        confirmButton: 'admin-3d-swal-confirm-btn',
        cancelButton: 'admin-3d-swal-cancel-btn'
      },
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-lock-open mr-1"></i> লগইন সম্পন্ন করুন',
      cancelButtonText: 'বাতিল',
      didOpen: () => {
        const inp = document.getElementById('swal-admin-pin');
        if (inp) inp.focus();
      },
      preConfirm: async () => {
        const pin = document.getElementById('swal-admin-pin').value.trim();
        if (!pin) {
          Swal.showValidationMessage('অনুগ্রহ করে পিন কোড প্রদান করুন');
          return false;
        }
        // If Supabase is ready, try email+PIN as password login
        if (isSupabaseReady()) {
          const emailEl = document.getElementById('swal-admin-email');
          const email = emailEl ? emailEl.value.trim() : '';
          if (email) {
            try {
              const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password: pin });
              if (error) {
                Swal.showValidationMessage('ইমেইল বা পাসওয়ার্ড ভুল! পুনরায় চেষ্টা করুন।');
                return false;
              }
              return true; // Supabase auth success
            } catch(e) {
              Swal.showValidationMessage('সংযোগ সমস্যা। পুনরায় চেষ্টা করুন।');
              return false;
            }
          }
        }
        // Fallback: local PIN check
        if (pin !== adminPin) {
          Swal.showValidationMessage('ভুল পিন কোড! সঠিক পিন দিন।');
          return false;
        }
        return true;
      }
    }).then(res => {
      if (res.isConfirmed) {
        isAdminLoggedIn = true;
        sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
        applyAdminUIState();
        const gate = document.getElementById('admin-login-gate');
        const dash = document.getElementById('admin-dashboard-view');
        if (gate) gate.classList.add('hidden');
        if (dash) dash.classList.remove('hidden');
        updateAdminDashboard();
        switchMainTab('admin');
        Swal.fire({ 
          icon: 'success', 
          title: 'এডমিন লগইন সফল!', 
          text: 'স্বাগতম, চাঁদের আলো ফাউন্ডেশন এডমিন কন্ট্রোল প্যানেল সক্রিয় হয়েছে',
          timer: 1400, 
          showConfirmButton: false 
        });
      }
    });
  }
}

async function adminLogout() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  // Sign out from Supabase Auth if connected
  if (isSupabaseReady()) {
    try { await supabaseClient.auth.signOut(); } catch(e) { console.warn('Supabase signOut error:', e); }
  }
  applyAdminUIState();
  const gate = document.getElementById('admin-login-gate');
  const dash = document.getElementById('admin-dashboard-view');
  if (gate) gate.classList.remove('hidden');
  if (dash) dash.classList.add('hidden');
  const pinInput = document.getElementById('admin-pin-input');
  if (pinInput) pinInput.value = '';
  switchMainTab('home');
  Swal.fire({ icon: 'info', title: 'লগআউট সম্পন্ন', timer: 1200, showConfirmButton: false });
}

function updateAdminDashboard() {
  document.getElementById('stat-total-donors').textContent = toBengaliNumeral(donors.length);
  document.getElementById('stat-total-volunteers').textContent = toBengaliNumeral(volunteers.length);
  const ready = donors.filter(d => checkDonationEligibility(d).isReady).length;
  const readyEl = document.getElementById('stat-ready-donors'); if (readyEl) readyEl.textContent = toBengaliNumeral(ready);
  document.getElementById('stat-active-requests').textContent = toBengaliNumeral(emergencyRequests.filter(r => r.status === 'active').length);

  renderAdminTable();
  renderAdminVolunteersTable();

  // Gallery, Aid & Notice stats
  const galStatEl = document.getElementById("stat-total-gallery");
  if (galStatEl) galStatEl.textContent = toBengaliNumeral(activities.length);
  const aidStatEl = document.getElementById("stat-total-aid");
  if (aidStatEl) aidStatEl.textContent = toBengaliNumeral(aidApplications.length);
  const noticeStatEl = document.getElementById("stat-total-notices");
  if (noticeStatEl) noticeStatEl.textContent = toBengaliNumeral(notices.length);
  const admDonorBadge = document.getElementById("adm-donor-count-badge");
  if (admDonorBadge) admDonorBadge.textContent = toBengaliNumeral(donors.length) + " জন";
  renderAdminNoticeList();
}

function renderAdminTable() {
  const tbody = document.getElementById('admin-donors-tbody');
  if (!tbody) return;

  const search = (document.getElementById('admin-table-search')?.value || '').trim().toLowerCase();
  const filtered = donors.filter(d => !search || (d.name && d.name.toLowerCase().includes(search)) || (d.phone && d.phone.includes(search)));

  tbody.innerHTML = filtered.map((d, idx) => {
    const el = checkDonationEligibility(d);
    return `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100">
        <td class="py-2.5 px-3 text-center text-slate-400 font-bold">${toBengaliNumeral(idx + 1)}</td>
        <td class="py-2.5 px-3 text-right">
          <div class="flex items-center justify-end gap-2">
            <div>
              <strong class="text-slate-800 block">${d.name}</strong>
              <span class="text-slate-500 font-mono text-[11px]">${d.phone}</span>
            </div>
            ${d.photo ? `<img src="${d.photo}" class="w-8 h-8 rounded-full object-cover">` : `<div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-500"><i class="fa-solid fa-user"></i></div>`}
          </div>
        </td>
        <td class="py-2.5 px-2 text-center"><span class="bg-red-100 text-brand-red font-black px-1.5 py-0.5 rounded">${d.bloodGroup}</span></td>
        <td class="py-2.5 px-3 text-right">${d.upazila}</td>
        <td class="py-2.5 px-2 text-center">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${el.badgeClass}">${el.text}</span>
          <span class="block text-[10px] ${el.isReady ? 'text-emerald-700' : 'text-amber-700'} font-bold mt-0.5">${el.shortText}</span>
        </td>
        <td class="py-2.5 px-2 text-center font-mono text-[11px]">${d.lastDonationDate || 'কখনো দেননি'}</td>
        <td class="py-2.5 px-2 text-center font-bold text-brand-green">${toBengaliNumeral(d.donationCount || 0)}</td>
        <td class="py-2.5 px-3 text-center">
          <div class="flex items-center justify-center gap-1">
            <button onclick="adminMarkDonatedToday('${d.id}')" title="আজ রক্ত দিয়েছেন" class="p-1.5 bg-red-50 text-brand-red rounded hover:bg-red-100"><i class="fa-solid fa-hand-holding-droplet"></i></button>
            <button onclick="openEditDonorModal('${d.id}')" title="তথ্য সম্পাদনা করুন" class="p-1.5 bg-blue-50 text-blue-700 rounded hover:bg-blue-100"><i class="fa-solid fa-pen-to-square"></i></button>
            <button onclick="openDonorCard('${d.id}')" title="ডিজিটাল কার্ড দেখুন" class="p-1.5 bg-emerald-50 text-emerald-700 rounded hover:bg-emerald-100"><i class="fa-solid fa-id-card"></i></button>
            <button onclick="adminDeleteDonor('${d.id}')" title="মুছে ফেলুন" class="p-1.5 bg-slate-100 text-red-500 rounded hover:bg-red-50"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderAdminVolunteersTable() {
  const tbody = document.getElementById('admin-volunteers-tbody');
  const count = document.getElementById('adm-vol-table-count');
  if (!tbody) return;

  count.textContent = `${toBengaliNumeral(volunteers.length)} জন`;

  tbody.innerHTML = volunteers.map(v => {
    return `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100">
        <td class="py-2.5 px-3 text-center font-mono text-emerald-600 font-bold">${v.id}</td>
        <td class="py-2.5 px-3 text-right">
          <div class="flex items-center justify-end gap-2">
            <div>
              <strong class="text-slate-800 block">${v.name}</strong>
              <span class="text-slate-500 font-mono text-[11px]">${v.phone}</span>
            </div>
            ${v.photo ? `<img src="${v.photo}" class="w-8 h-8 rounded-full object-cover">` : `<div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-500"><i class="fa-solid fa-user"></i></div>`}
          </div>
        </td>
        <td class="py-2.5 px-2 text-center"><span class="bg-red-100 text-brand-red font-black px-1.5 py-0.5 rounded">${v.bloodGroup}</span></td>
        <td class="py-2.5 px-3 text-right"><strong>${v.profession}</strong><br><span class="text-slate-400 text-[10px]">${v.village}, ${v.upazila}</span></td>
        <td class="py-2.5 px-3 text-right text-brand-green font-semibold">${v.interest}</td>
        <td class="py-2.5 px-3 text-center">
          <div class="flex items-center justify-center gap-1.5">
            <button onclick="openVolunteerCard('${v.id}')" title="ডিজিটাল আইডি কার্ড" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1 px-2 rounded shadow">
              <i class="fa-solid fa-id-card"></i>
            </button>
            <button onclick="openEditVolunteerModal('${v.id}')" title="তথ্য সম্পাদনা" class="text-xs bg-blue-50 text-blue-700 font-bold py-1 px-2 rounded border border-blue-200 hover:bg-blue-100">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button onclick="adminDeleteVolunteer('${v.id}')" title="মুছে ফেলুন" class="text-xs bg-red-50 text-red-600 font-bold py-1 px-2 rounded border border-red-200 hover:bg-red-100">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function adminMarkDonatedToday(id) {
  const d = donors.find(x => x.id === id);
  if (!d) return;
  d.lastDonationDate = new Date().toISOString().split('T')[0];
  d.donationCount = (d.donationCount || 0) + 1;
  d.hasDonated = "হ্যাঁ";
  saveDonors();
  updateAdminDashboard();
  filterDonors();
  Swal.fire('হালনাগাদ সম্পন্ন!', `${d.name}-এর রক্তদানের তথ্য আপডেট হয়েছে`, 'success');
}

function adminDeleteDonor(id) {
  donors = donors.filter(x => x.id !== id);
  saveDonors();
  if (typeof isSupabaseReady === 'function' && isSupabaseReady()) cloudDeleteDonor(id);
  updateAdminDashboard();
  filterDonors();
  Swal.fire('মুছে ফেলা হয়েছে', 'ডোনার তালিকা থেকে বাদ দেওয়া হয়েছে', 'success');
}

function confirmClearDemoDonors() {
  Swal.fire({
    title: 'ডেমো ডেটা মুছবেন?',
    text: 'সকল কাল্পনিক রক্তদাতা মুছে সম্পূর্ণ খালি ডাটাবেজ করা হবে।',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc2626',
    confirmButtonText: 'হ্যাঁ, মুছুন'
  }).then(res => {
    if (res.isConfirmed) {
      donors = donors.filter(d => !d.isDemo);
      saveDonors();
      updateAdminDashboard();
      filterDonors();
      Swal.fire('সম্পন্ন', 'ডেমো ডেটা মুছে ফেলা হয়েছে', 'success');
    }
  });
}

// -------------------------------------------------------------
// SETTINGS HANDLER
// -------------------------------------------------------------

function formatHeadlinesForTicker() {
  // 1. Check for Active Emergency Blood Requests (অটোমেটিক জরুরি রক্তের নোটিশ)
  const activeReqs = (emergencyRequests || []).filter(r => r.status === 'active');
  let emergencyAlerts = [];

  if (activeReqs.length > 0) {
    emergencyAlerts = activeReqs.map(r => {
      const bagsText = r.bags ? ` (${toBengaliNumeral(r.bags)} ব্যাগ)` : '';
      const hosp = r.hospital ? ` • হাসপাতাল: ${r.hospital}` : '';
      const phone = r.contact ? ` • যোগাযোগ: ${r.contact}` : '';
      return `<span class="bg-red-600 text-white font-black px-2.5 py-0.5 rounded-lg shadow-sm animate-pulse">🚨 জরুরি রক্তের নোটিশ:</span> <strong class="text-white text-base">${r.patientName}-এর জন্য জরুরি ভিত্তিতে <span class="bg-brand-red text-white font-black px-2 py-0.5 rounded-lg border border-red-300/40 text-lg underline tracking-wider">${r.bloodGroup}</span> রক্তের প্রয়োজন${bagsText}${hosp}${phone}</strong>`;
    });
  }

  // 2. Normal Headlines
  const list = (siteSettings.headlines && siteSettings.headlines.length > 0)
    ? siteSettings.headlines
    : (siteSettings.marqueeText ? siteSettings.marqueeText.split('\n').map(s => s.trim()).filter(Boolean) : []);

  const normalAlerts = list.map(line => {
    const clean = line.replace(/^[⚡✦★•\-]\s*/, '');
    return `⚡ ${clean}`;
  });

  const combined = [...emergencyAlerts, ...normalAlerts];

  if (combined.length === 0) {
    return '⚡ চাঁদের আলো ফাউন্ডেশন একটি অরাজনৈতিক সমাজসেবামূলক প্রতিষ্ঠান &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp; জরুরি রক্তের প্রয়োজনে যোগাযোগ করুন: ০১৯১৪-৯২৭৯৩৩';
  }

  return combined.join(' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ');
}

function applySiteSettings() {
  const historyEl = document.getElementById('about-history-text');
  if (historyEl && (siteSettings.history || DEFAULT_SETTINGS.history)) {
    historyEl.innerHTML = siteSettings.history || DEFAULT_SETTINGS.history;
  }
  const clean = siteSettings.helplineRaw || siteSettings.helpline.replace(/[^0-9]/g, '');
  document.getElementById('top-announcement-display').textContent = siteSettings.announcement;
  document.getElementById('header-address-display').innerHTML = `<i class="fa-solid fa-location-dot mr-1"></i> ${siteSettings.addressShort || siteSettings.address}`;
  document.getElementById('top-helpline-display').textContent = siteSettings.helpline;
  document.getElementById('top-helpline-link').href = `tel:${clean}`;
  document.getElementById('footer-helpline-display').textContent = siteSettings.helpline;
  document.getElementById('footer-address-display').textContent = `কার্যালয়: ${siteSettings.address}`;
  const donBkash = document.getElementById('donation-bkash-display');
  if (donBkash) donBkash.textContent = siteSettings.helpline;
  // Marquee / headline
  const marqueeEl = document.getElementById('moving-headline-display');
  if (marqueeEl && siteSettings.marqueeText) {
    marqueeEl.innerHTML = formatHeadlinesForTicker();
  }

  // Render President's message & photo
  if (siteSettings.president) {
    const p = siteSettings.president;
    const nameEl = document.getElementById('pres-name-display');
    const titleEl = document.getElementById('pres-title-display');
    const msgEl = document.getElementById('pres-message-display');
    const imgEl = document.getElementById('pres-photo-img');
    const avatarEl = document.getElementById('pres-photo-avatar');

    if (nameEl) nameEl.textContent = p.name || 'হালিম দেওয়ান';
    if (titleEl) titleEl.textContent = p.title || 'সভাপতি, চাঁদের আলো ফাউন্ডেশন';
    if (msgEl) msgEl.textContent = p.message || '';
    const presPhoto = p.photo || (typeof window !== 'undefined' ? window.CAF_PHOTO_PRESIDENT_DATA_URI : null) || DEFAULT_SETTINGS.president.photo;
    if (presPhoto && imgEl && avatarEl) {
      imgEl.src = presPhoto;
      imgEl.classList.remove('hidden');
      avatarEl.classList.add('hidden');
    } else if (imgEl && avatarEl) {
      imgEl.classList.add('hidden');
      avatarEl.classList.remove('hidden');
    }
  }

  // Render General Secretary's message & photo
  if (siteSettings.secretary) {
    const s = siteSettings.secretary;
    const nameEl = document.getElementById('sec-name-display');
    const titleEl = document.getElementById('sec-title-display');
    const msgEl = document.getElementById('sec-message-display');
    const imgEl = document.getElementById('sec-photo-img');
    const avatarEl = document.getElementById('sec-photo-avatar');

    if (nameEl) nameEl.textContent = s.name || 'মোঃ মাসুম শিকদার';
    if (titleEl) titleEl.textContent = s.title || 'সাধারণ সম্পাদক, চাঁদের আলো ফাউন্ডেশন';
    if (msgEl) msgEl.textContent = s.message || '';
    const secPhoto = s.photo || (typeof window !== 'undefined' ? window.CAF_PHOTO_SECRETARY_DATA_URI : null) || DEFAULT_SETTINGS.secretary.photo;
    if (secPhoto && imgEl && avatarEl) {
      imgEl.src = secPhoto;
      imgEl.classList.remove('hidden');
      avatarEl.classList.add('hidden');
    } else if (imgEl && avatarEl) {
      imgEl.classList.add('hidden');
      avatarEl.classList.remove('hidden');
    }
  }

  // Render Donation fields
  if (siteSettings.donation) {
    const d = siteSettings.donation;
    const hEl = document.getElementById('don-headline-display');
    const aEl = document.getElementById('don-appeal-display');
    const gEl = document.getElementById('don-general-display');
    const lEl = document.getElementById('don-life-display');
    const dEl = document.getElementById('don-donor-display');
    const bAccName = document.getElementById('don-bank-accname');
    const bName = document.getElementById('don-bank-name');
    const bBranch = document.getElementById('don-bank-branch');
    const bAccNo = document.getElementById('don-bank-accno');
    const bRouting = document.getElementById('don-bank-routing');
    const bkashNo = document.getElementById('don-bkash-no');
    const nagadNo = document.getElementById('don-nagad-no');
    const rocketNo = document.getElementById('don-rocket-no');
    const noteEl = document.getElementById('don-note-display');

    if (hEl && d.headline) hEl.textContent = d.headline;
    if (aEl && d.appeal) aEl.textContent = d.appeal;
    if (gEl && d.generalFee) gEl.textContent = d.generalFee;
    if (lEl && d.lifeFee) lEl.textContent = d.lifeFee;
    if (dEl && d.donorFee) dEl.textContent = d.donorFee;
    if (bAccName && d.bankAccName) bAccName.textContent = d.bankAccName;
    if (bName && d.bankName) bName.textContent = d.bankName;
    if (bBranch && d.bankBranch) bBranch.textContent = d.bankBranch;
    if (bAccNo && d.bankAccNo) bAccNo.textContent = d.bankAccNo;
    if (bRouting && d.bankRouting) bRouting.textContent = d.bankRouting;
    if (bkashNo && d.bkash) bkashNo.textContent = d.bkash;
    if (nagadNo && d.nagad) nagadNo.textContent = d.nagad;
    if (rocketNo && d.rocket) rocketNo.textContent = d.rocket;
    if (noteEl && d.note) noteEl.textContent = d.note;
  }

}

function openSettingsModal() {
  document.getElementById('setting-helpline').value = siteSettings.helpline;
  document.getElementById('setting-whatsapp').value = siteSettings.whatsapp || '';
  document.getElementById('setting-address').value = siteSettings.address;
  document.getElementById('setting-slogan').value = siteSettings.slogan;
  const marqueeInput = document.getElementById('setting-marquee');
  if (marqueeInput) marqueeInput.value = siteSettings.marqueeText || '';
  const annInput = document.getElementById('setting-announcement');
  if (annInput) annInput.value = siteSettings.announcement || '';
  document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettingsModal() {
  document.getElementById('settings-modal').classList.add('hidden');
}

function handleSettingsSave(e) {
  e.preventDefault();
  const helpline = document.getElementById('setting-helpline').value.trim();
  const whatsapp = document.getElementById('setting-whatsapp').value.trim();
  const address = document.getElementById('setting-address').value.trim();
  const slogan = document.getElementById('setting-slogan').value.trim();
  const marqueeInput = document.getElementById('setting-marquee');
  const annInput = document.getElementById('setting-announcement');
  const marqueeText = marqueeInput ? marqueeInput.value.trim() : (siteSettings.marqueeText || '');
  const announcement = annInput ? annInput.value.trim() : (siteSettings.announcement || '');

  siteSettings = {
    ...siteSettings,
    helpline,
    helplineRaw: helpline.replace(/[^0-9]/g, ''),
    whatsapp: whatsapp || helpline.replace(/[^0-9]/g, ''),
    address,
    addressShort: address.length > 25 ? address.split(',').slice(-2).join(',').trim() : address,
    announcement,
    marqueeText,
    slogan
  };

  saveSettings();
  applySiteSettings();
  closeSettingsModal();
  Swal.fire('সেভ হয়েছে', 'জরুরি হেল্পলাইন ও সেটিংস হালনাগাদ সম্পন্ন', 'success');
}

function openChangePinModal() {
  Swal.fire({
    title: 'এডমিন পিন পরিবর্তন',
    input: 'password',
    inputPlaceholder: 'নতুন পিন কোড দিন',
    showCancelButton: true,
    confirmButtonText: 'সংরক্ষণ'
  }).then(res => {
    if (res.isConfirmed && res.value && res.value.length >= 4) {
      adminPin = res.value;
      localStorage.setItem(STORAGE_KEYS.ADMIN_PIN, adminPin);
      Swal.fire('পিন পরিবর্তিত হয়েছে', 'নতুন পিন সফলভাবে সংরক্ষিত হয়েছে', 'success');
    }
  });
}

function exportToCSV() {
  const headers = ['আইডি', 'নাম', 'রক্তের গ্রুপ', 'মোবাইল', 'উপজেলা', 'গ্রাম'];
  const rows = donors.map(d => [d.id, `"${d.name}"`, d.bloodGroup, d.phone, `"${d.upazila}"`, `"${d.village || ''}"`]);
  const csv = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Chader_Alo_Donors_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
}

function backupJSON() {
  const data = { organization: "চাঁদের আলো ফাউন্ডেশন", siteSettings, donors, volunteers, emergencyRequests };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Chader_Alo_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
}

function updateHomeStats() {
  const dEl = document.getElementById('home-stat-donors');
  const vEl = document.getElementById('home-stat-volunteers');
  if (dEl) dEl.textContent = `${toBengaliNumeral(donors.length)}+`;
  if (vEl) vEl.textContent = `${toBengaliNumeral(volunteers.length)}+`;
  const sEl = document.getElementById('home-stat-served');
  if (sEl) sEl.textContent = `${toBengaliNumeral(donationRecords.length)} জন`;
  const gEl = document.getElementById('home-stat-gallery');
  if (gEl) gEl.textContent = `${toBengaliNumeral(activities.length)}+`;
  const visEl = document.getElementById('home-stat-visitors');
  if (visEl) visEl.textContent = `${toBengaliNumeral(getVisitorCount())} জন`;
  const iconLabel = document.getElementById('iconic-served-count-label');
  if (iconLabel) iconLabel.textContent = `${toBengaliNumeral(donationRecords.length)} জন সেবা গ্রহণকারী`;
  const histCountEl = document.getElementById('history-total-served-count');
  if (histCountEl) histCountEl.textContent = toBengaliNumeral(donationRecords.length);
}

function normalizePhoneNumber(raw) {
  if (!raw) return '';
  // 1. Convert Bengali numerals to ASCII digits
  const bnToEnMap = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
  let str = String(raw).replace(/[০-৯]/g, m => bnToEnMap[m] || m);
  // 2. Strip all non-digit characters
  let digits = str.replace(/\D/g, '');
  // 3. Handle international BD country code (+88 or 88)
  if (digits.startsWith('880') && digits.length >= 13) {
    digits = digits.slice(2);
  } else if (digits.startsWith('88') && digits.length >= 12) {
    digits = digits.slice(2);
  }
  // 4. If 10 digits starting with 1 (e.g. 1712345678), add leading 0
  if (digits.length === 10 && digits.startsWith('1')) {
    digits = '0' + digits;
  }
  return digits;
}

function toBengaliNumeral(n) {
  if (n === null || n === undefined) return '';
  const bn = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return n.toString().replace(/[0-9]/g, d => bn[d]);
}



// ============================================================
// SAVE FUNCTIONS (new)
// ============================================================
function saveActivities() {
  localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(activities));
  updateHomeStats();
  if (isSupabaseReady()) cloudBulkUpsertActivities(activities);
}

function saveAidApplications() {
  localStorage.setItem(STORAGE_KEYS.AID, JSON.stringify(aidApplications));
  if (isSupabaseReady()) cloudBulkUpsertAid(aidApplications);
}

// ============================================================
// GALLERY ENGINE
// ============================================================
function renderGallery(filterCat) {
  const grid = document.getElementById('gallery-items-grid');
  const badge = document.getElementById('gallery-count-badge');
  if (!grid) return;

  const filtered = filterCat === 'ALL'
    ? activities
    : activities.filter(a => a.category === filterCat || (filterCat === 'ভিডিও' && a.mediaType === 'video'));

  if (badge) badge.textContent = toBengaliNumeral(filtered.length) + 'টি আইটেম প্রদর্শিত';

  const statEl = document.getElementById('home-stat-gallery');
  if (statEl) statEl.textContent = toBengaliNumeral(activities.length) + '+';

  const admStatEl = document.getElementById('stat-total-gallery');
  if (admStatEl) admStatEl.textContent = toBengaliNumeral(activities.length);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-3 py-16 text-center text-slate-400">
      <i class="fa-solid fa-photo-film text-5xl mb-4 text-slate-300"></i>
      <p class="text-lg font-bold">এই ক্যাটাগরিতে কোনো কার্যক্রম নেই</p>
      <p class="text-sm mt-1">এডমিন প্যানেল থেকে নতুন কার্যক্রম যোগ করুন</p>
    </div>`;
    return;
  }

  const catColors = {
    'রক্তদান': 'bg-red-100 text-red-700',
    'ত্রাণ': 'bg-blue-100 text-blue-700',
    'শিক্ষা': 'bg-indigo-100 text-indigo-700',
    'বৃক্ষরোপণ': 'bg-green-100 text-green-700',
    'স্বাস্থ্য': 'bg-emerald-100 text-emerald-700',
    'অন্যান্য': 'bg-slate-100 text-slate-700'
  };

  grid.innerHTML = filtered.map(act => {
    const colorClass = catColors[act.category] || 'bg-slate-100 text-slate-700';
    const thumbHtml = act.mediaType === 'video'
      ? `<div class="w-full h-48 bg-slate-800 flex flex-col items-center justify-center text-white rounded-t-2xl">
           <i class="fa-solid fa-play-circle text-5xl text-white/80 mb-2"></i>
           <span class="text-xs font-bold text-white/60">ভিডিও</span>
         </div>`
      : act.mediaUrl
        ? `<img src="${act.mediaUrl}" alt="${act.title}" class="w-full h-48 object-cover rounded-t-2xl">`
        : `<div class="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex flex-col items-center justify-center rounded-t-2xl">
             <i class="fa-solid fa-image text-4xl text-slate-400 mb-2"></i>
             <span class="text-xs text-slate-400">ছবি নেই</span>
           </div>`;

    return `
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover-lift cursor-pointer" onclick="openLightbox('${act.id}')">
        ${thumbHtml}
        <div class="p-4 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-bold px-2.5 py-1 rounded-full ${colorClass}">${act.mediaType === 'video' ? '🎥 ভিডিও' : act.category}</span>
            <span class="text-xs text-slate-400">${act.date || ''}</span>
          </div>
          <h3 class="font-black text-slate-800 text-sm leading-tight">${act.title}</h3>
          ${act.location ? `<p class="text-xs text-slate-500"><i class="fa-solid fa-location-dot text-brand-red mr-1"></i>${act.location}</p>` : ''}
        </div>
      </div>`;
  }).join('');
}

function filterGallery(cat) {
  // Update active pill
  document.querySelectorAll('[data-gal-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-gal-filter') === cat);
  });
  renderGallery(cat);
}

// ============================================================
// LIGHTBOX
// ============================================================
function openLightbox(actId) {
  const act = activities.find(a => a.id === actId);
  if (!act) return;

  const modal = document.getElementById('gallery-lightbox-modal');
  const mediaContainer = document.getElementById('lightbox-media-container');

  if (act.mediaType === 'video' && act.mediaUrl) {
    let embedUrl = act.mediaUrl;
    // Convert YouTube watch URL to embed
    if (embedUrl.includes('youtube.com/watch?v=')) {
      embedUrl = embedUrl.replace('youtube.com/watch?v=', 'youtube.com/embed/').split('&')[0];
    } else if (embedUrl.includes('youtu.be/')) {
      const vid = embedUrl.split('youtu.be/')[1].split('?')[0];
      embedUrl = 'https://www.youtube.com/embed/' + vid;
    }
    mediaContainer.innerHTML = `<iframe src="${embedUrl}" class="w-full" style="height:340px;" frameborder="0" allowfullscreen></iframe>`;
  } else if (act.mediaUrl) {
    mediaContainer.innerHTML = `<img src="${act.mediaUrl}" alt="${act.title}" class="w-full max-h-96 object-contain">`;
  } else {
    mediaContainer.innerHTML = `<div class="w-full h-48 flex items-center justify-center text-slate-400">
      <i class="fa-solid fa-image text-5xl"></i></div>`;
  }

  document.getElementById('lightbox-category').textContent = act.category;
  document.getElementById('lightbox-title').textContent = act.title;
  document.getElementById('lightbox-date').innerHTML = `<i class="fa-regular fa-calendar mr-1"></i>${act.date || ''}`;
  document.getElementById('lightbox-location').innerHTML = `<i class="fa-solid fa-location-dot mr-1"></i>${act.location || ''}`;
  document.getElementById('lightbox-desc').textContent = act.description || act.desc || '';

  modal.classList.remove('hidden');
}

function closeLightboxModal() {
  const modal = document.getElementById('gallery-lightbox-modal');
  modal.classList.add('hidden');
  // Stop any playing videos
  const container = document.getElementById('lightbox-media-container');
  if (container) container.innerHTML = '';
}

// ============================================================
// ACTIVITY ADD / EDIT MODAL
// ============================================================
function openAddActivityModal() {
  editingActivityId = null;
  activityUploadedPhoto = null;
  document.getElementById('activity-modal-title').innerHTML = '<i class="fa-solid fa-photo-film text-purple-300"></i> নতুন কার্যক্রম যোগ করুন';
  document.getElementById('activity-form').reset();
  document.getElementById('act-edit-id').value = '';
  // reset photo preview
  const preview = document.getElementById('act-photo-preview');
  const placeholder = document.getElementById('act-photo-placeholder');
  if (preview) { preview.src = ''; preview.classList.add('hidden'); }
  if (placeholder) placeholder.classList.remove('hidden');
  // show photo, hide video
  toggleMediaTypeFields();
  document.getElementById('activity-modal').classList.remove('hidden');
}

function closeActivityModal() {
  document.getElementById('activity-modal').classList.add('hidden');
  activityUploadedPhoto = null;
  editingActivityId = null;
}

function toggleMediaTypeFields() {
  const type = document.getElementById('act-media-type').value;
  const photoContainer = document.getElementById('act-photo-container');
  const videoContainer = document.getElementById('act-video-container');
  if (!photoContainer || !videoContainer) return;
  if (type === 'video') {
    photoContainer.classList.add('hidden');
    videoContainer.classList.remove('hidden');
  } else {
    photoContainer.classList.remove('hidden');
    videoContainer.classList.add('hidden');
  }
}

function handleActivityPhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // ৫ এমবি সীমা যাচাই
  if (file.size > 5242880) {
    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        icon: 'error',
        title: '📁 ছবির সাইজ বেশি!',
        html: `ছবির বর্তমান সাইজ: <strong>${sizeMB} MB</strong><br>সর্বোচ্চ অনুমোদিত সাইজ: <strong>৫ MB</strong><br><br>অনুগ্রহ করে ছোট সাইজের ছবি বেছে নিন।`,
        confirmButtonText: 'ঠিক আছে',
        confirmButtonColor: '#dc2626'
      });
    } else {
      alert('ছবির সাইজ ৫ এমবির বেশি হতে পারবে না। আপনার ছবির সাইজ: ' + sizeMB + ' MB');
    }
    event.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 800;
      let width = img.width;
      let height = img.height;
      if (width > MAX_SIZE) { height = Math.round((height * MAX_SIZE) / width); width = MAX_SIZE; }
      if (height > MAX_SIZE) { width = Math.round((width * MAX_SIZE) / height); height = MAX_SIZE; }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      activityUploadedPhoto = dataUrl;
      const preview = document.getElementById('act-photo-preview');
      const placeholder = document.getElementById('act-photo-placeholder');
      if (preview) { preview.src = dataUrl; preview.classList.remove('hidden'); }
      if (placeholder) placeholder.classList.add('hidden');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleActivitySubmit(e) {
  e.preventDefault();
  const title = document.getElementById('act-title').value.trim();
  const category = document.getElementById('act-category').value;
  const mediaType = document.getElementById('act-media-type').value;
  const date = document.getElementById('act-date').value;
  const location = document.getElementById('act-location').value.trim();
  const desc = document.getElementById('act-desc').value.trim();
  let mediaUrl = '';

  if (mediaType === 'image') {
    mediaUrl = activityUploadedPhoto || (editingActivityId ? (activities.find(a => a.id === editingActivityId) || {}).mediaUrl || '' : '');
  } else {
    mediaUrl = document.getElementById('act-video-url').value.trim();
  }

  if (editingActivityId) {
    const idx = activities.findIndex(a => a.id === editingActivityId);
    if (idx !== -1) {
      activities[idx] = { ...activities[idx], title, category, mediaType, mediaUrl, date, location, desc };
    }
  } else {
    const newId = 'ACT-' + Date.now().toString().slice(-6);
    activities.unshift({ id: newId, title, category, mediaType, mediaUrl, date, location, desc, isDemo: false });
  }

  saveActivities();
  renderGallery('ALL');
  renderAdminGalleryGrid();
  closeActivityModal();
  Swal.fire({ icon: 'success', title: editingActivityId ? 'আপডেট হয়েছে!' : 'কার্যক্রম যুক্ত হয়েছে!', timer: 1500, showConfirmButton: false });
}

function openEditActivityModal(actId) {
  const act = activities.find(a => a.id === actId);
  if (!act) return;
  editingActivityId = actId;
  activityUploadedPhoto = null;
  document.getElementById('activity-modal-title').innerHTML = '<i class="fa-solid fa-pen text-purple-300"></i> কার্যক্রম সম্পাদনা করুন';
  document.getElementById('act-edit-id').value = actId;
  document.getElementById('act-title').value = act.title || '';
  document.getElementById('act-category').value = act.category || 'রক্তদান';
  document.getElementById('act-media-type').value = act.mediaType || 'image';
  document.getElementById('act-date').value = act.date || '';
  document.getElementById('act-location').value = act.location || '';
  document.getElementById('act-desc').value = act.desc || '';
  toggleMediaTypeFields();
  if (act.mediaType === 'video') {
    document.getElementById('act-video-url').value = act.mediaUrl || '';
  } else if (act.mediaUrl) {
    const preview = document.getElementById('act-photo-preview');
    const placeholder = document.getElementById('act-photo-placeholder');
    if (preview) { preview.src = act.mediaUrl; preview.classList.remove('hidden'); }
    if (placeholder) placeholder.classList.add('hidden');
  }
  document.getElementById('activity-modal').classList.remove('hidden');
}

function adminDeleteActivity(actId) {
  Swal.fire({
    title: 'কার্যক্রম মুছবেন?',
    text: 'এই ছবি / ভিডিও পোস্টটি স্থায়ীভাবে মুছে ফেলা হবে।',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc2626',
    cancelButtonText: 'বাতিল',
    confirmButtonText: 'হ্যাঁ, মুছুন'
  }).then(res => {
    if (res.isConfirmed) {
      activities = activities.filter(a => a.id !== actId);
      saveActivities();
      if (typeof isSupabaseReady === 'function' && isSupabaseReady()) cloudDeleteActivity(actId);
      renderGallery('ALL');
      renderAdminGalleryGrid();
      Swal.fire({ icon: 'success', title: 'মুছে ফেলা হয়েছে!', timer: 1200, showConfirmButton: false });
    }
  });
}

function renderAdminGalleryGrid() {
  const grid = document.getElementById('admin-gallery-table-grid');
  const statEl = document.getElementById('stat-total-gallery');
  if (statEl) statEl.textContent = toBengaliNumeral(activities.length);
  if (!grid) return;

  if (activities.length === 0) {
    grid.innerHTML = `<div class="col-span-3 py-10 text-center text-slate-400 text-sm">কোনো কার্যক্রম যোগ হয়নি।</div>`;
    return;
  }

  grid.innerHTML = activities.map(act => {
    const thumb = act.mediaType === 'image' && act.mediaUrl
      ? `<img src="${act.mediaUrl}" class="w-full h-32 object-cover" alt="">`
      : `<div class="w-full h-32 bg-slate-100 flex items-center justify-center text-slate-400"><i class="fa-solid ${act.mediaType === 'video' ? 'fa-play-circle' : 'fa-image'} text-3xl"></i></div>`;
    return `
      <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        ${thumb}
        <div class="p-3 space-y-1">
          <span class="text-xs font-bold text-purple-700">${act.category}</span>
          <p class="text-sm font-bold text-slate-800 leading-tight">${act.title}</p>
          <p class="text-xs text-slate-400">${act.date || ''} • ${act.location || ''}</p>
          <div class="flex gap-2 pt-1">
            <button onclick="openEditActivityModal('${act.id}')" class="flex-1 text-xs bg-blue-50 text-blue-700 font-bold py-1 px-2 rounded-lg border border-blue-200">
              <i class="fa-solid fa-pen mr-1"></i>সম্পাদনা
            </button>
            <button onclick="adminDeleteActivity('${act.id}')" class="flex-1 text-xs bg-red-50 text-red-600 font-bold py-1 px-2 rounded-lg border border-red-200">
              <i class="fa-solid fa-trash mr-1"></i>মুছুন
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ============================================================
// ADMIN MODULE SWITCHER
// ============================================================
function switchAdminModule(modId) {
  const modules = ['donors', 'volunteers', 'gallery', 'emergency', 'aid', 'notice', 'cloud'];
  modules.forEach(m => {
    const box = document.getElementById('adm-box-' + m);
    const tab = document.getElementById('adm-mod-' + m);
    if (box) box.classList.add('hidden');
    if (tab) tab.classList.remove('active');
  });
  const activeBox = document.getElementById('adm-box-' + modId);
  const activeTab = document.getElementById('adm-mod-' + modId);
  if (activeBox) activeBox.classList.remove('hidden');
  if (activeTab) activeTab.classList.add('active');

  if (modId === 'gallery') renderAdminGalleryGrid();
  if (modId === 'emergency') renderAdminEmergencyList();
  if (modId === 'aid') renderAdminAidList();
  if (modId === 'notice') renderAdminNoticeList();
  if (modId === 'cloud') renderAdminCloudPanel();
}

// ============================================================
// ADMIN EMERGENCY LIST
// ============================================================
function renderAdminEmergencyList() {
  const container = document.getElementById('admin-emergency-list');
  const countEl = document.getElementById('adm-req-count');
  if (!container) return;

  const active = emergencyRequests.filter(r => r.status === 'active');
  const all = emergencyRequests;
  if (countEl) countEl.textContent = toBengaliNumeral(active.length) + 'টি সক্রিয়';

  if (all.length === 0) {
    container.innerHTML = `<div class="py-8 text-center text-slate-400 text-sm">কোনো রক্তের আবেদন নেই।</div>`;
    return;
  }

  container.innerHTML = all.map(req => `
    <div class="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-brand-red text-white font-black text-base flex items-center justify-center shadow">${req.bloodGroup}</div>
        <div>
          <strong class="text-slate-900 block text-sm font-black">${req.patientName} (${toBengaliNumeral(req.bags)} ব্যাগ)</strong>
          <span class="text-xs text-slate-500">${req.hospital} • ${req.time} • যোগাযোগ: ${req.contact}</span>
        </div>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-xs font-bold px-3 py-1 rounded-full ${
          req.status === 'active' 
            ? 'bg-red-100 text-red-700 border border-red-200 animate-pulse' 
            : (req.status === 'managed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-slate-100 text-slate-600')
        }">
          ${req.status === 'active' ? '● চলমান আবেদন' : (req.status === 'managed' ? '✔ রক্ত ম্যানেজ হয়েছে' : '✖ ম্যানেজ হয়নি')}
        </span>
        ${req.status === 'active' ? `
          <button type="button" onclick="handleRequestOutcome('${req.id}', 'managed')" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-black py-1.5 px-3 rounded-xl shadow flex items-center gap-1">
            <i class="fa-solid fa-check"></i> রক্ত ম্যানেজ হয়েছে
          </button>
          <button type="button" onclick="handleRequestOutcome('${req.id}', 'unmanaged')" class="text-xs bg-slate-200 hover:bg-red-100 hover:text-red-700 text-slate-700 font-bold py-1.5 px-2.5 rounded-xl">
            ম্যানেজ হয়নি
          </button>
        ` : ''}
        <button type="button" onclick="adminDeleteRequest('${req.id}')" class="text-xs bg-red-600 hover:bg-red-700 text-white font-black py-1.5 px-2.5 rounded-xl flex items-center gap-1 shadow">
          <i class="fa-solid fa-trash"></i> মুছুন
        </button>
      </div>
    </div>`).join('');
}

function adminResolveRequest(reqId) {
  const req = emergencyRequests.find(r => r.id === reqId);
  if (req) { req.status = 'resolved'; }
  localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(emergencyRequests));
  renderAdminEmergencyList();
  updateUrgentBanner();
  applySiteSettings();
  Swal.fire({ icon: 'success', title: 'সমাধান চিহ্নিত হয়েছে!', timer: 1200, showConfirmButton: false });
}
function adminDeleteRequest(reqId) {
  if (typeof Swal === 'undefined') {
    if (!confirm('এই রক্তের আবেদনটি স্থায়ীভাবে মুছে ফেলা হবে। নিশ্চিত?')) return;
    emergencyRequests = emergencyRequests.filter(r => r.id !== reqId);
    localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(emergencyRequests));
    renderAdminEmergencyList();
    renderEmergencyRequests();
    updateUrgentBanner();
    applySiteSettings();
    return;
  }
  Swal.fire({
    title: 'আবেদনটি মুছে ফেলবেন?',
    text: 'এই রক্তের আবেদনটি স্থায়ীভাবে মুছে ফেলা হবে এবং পুনরুদ্ধার করা সম্ভব হবে না।',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '<i class="fa-solid fa-trash mr-1"></i> হ্যাঁ, মুছুন',
    cancelButtonText: 'বাতিল',
    confirmButtonColor: '#dc2626',
    cancelButtonColor: '#6b7280'
  }).then(res => {
    if (res.isConfirmed) {
      emergencyRequests = emergencyRequests.filter(r => r.id !== reqId);
      localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(emergencyRequests));
      if (typeof isSupabaseReady === 'function' && isSupabaseReady()) cloudDeleteRequest(reqId);
      renderAdminEmergencyList();
      renderEmergencyRequests();
      updateUrgentBanner();
      applySiteSettings();
      Swal.fire({ icon: 'success', title: 'আবেদন মুছে ফেলা হয়েছে!', timer: 1200, showConfirmButton: false });
    }
  });
}


// ============================================================
// AID APPLICATION ENGINE
// ============================================================
function handleServiceApplySubmit(e) {
  e.preventDefault();
  const serviceName = document.getElementById('apply-service-name').value;
  const name = document.getElementById('apply-name').value.trim();
  const phone = document.getElementById('apply-phone').value.trim();
  const address = document.getElementById('apply-address').value.trim();
  const details = document.getElementById('apply-details').value.trim();

  aidApplications.unshift({
    id: 'AID-' + Date.now().toString().slice(-5),
    serviceName, name, phone, address, details,
    status: 'pending',
    submittedAt: new Date().toLocaleDateString('bn-BD')
  });
  saveAidApplications();

  document.getElementById('service-apply-modal').classList.add('hidden');
  document.getElementById('service-apply-modal').querySelector('form').reset();

  const aidCountEl = document.getElementById('stat-total-aid');
  const admAidCount = document.getElementById('adm-aid-count');
  if (aidCountEl) aidCountEl.textContent = toBengaliNumeral(aidApplications.length);
  if (admAidCount) admAidCount.textContent = toBengaliNumeral(aidApplications.filter(a => a.status === 'pending').length) + 'টি মুলতবি';

  Swal.fire({
    icon: 'success',
    title: 'আবেদন গৃহীত হয়েছে!',
    text: 'চাঁদের আলো ফাউন্ডেশনের দায়িত্বপ্রাপ্ত কর্মকর্তা যাচাই করে খুব দ্রুত যোগাযোগ করবেন।',
    confirmButtonColor: '#1b8040'
  });
}

function renderAdminAidList() {
  const container = document.getElementById('admin-aid-list');
  const countEl = document.getElementById('adm-aid-count');
  const statEl = document.getElementById('stat-total-aid');
  if (!container) return;

  const pending = aidApplications.filter(a => a.status === 'pending').length;
  if (countEl) countEl.textContent = toBengaliNumeral(pending) + 'টি মুলতবি';
  if (statEl) statEl.textContent = toBengaliNumeral(aidApplications.length);

  if (aidApplications.length === 0) {
    container.innerHTML = `<div class="py-8 text-center text-slate-400 text-sm">কোনো সহায়তার আবেদন জমা হয়নি।</div>`;
    return;
  }

  container.innerHTML = aidApplications.map(app => `
    <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
      <div class="flex items-center justify-between">
        <div>
          <strong class="text-slate-800 text-sm block">${app.name} — ${app.serviceName}</strong>
          <span class="text-xs text-slate-500">${app.phone} • ${app.address}</span>
        </div>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${app.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}">${app.status === 'pending' ? 'মুলতবি' : 'সম্পন্ন'}</span>
      </div>
      <p class="text-xs text-slate-600 bg-white p-2 rounded-xl border border-slate-100">${app.details}</p>
      ${app.status === 'pending' ? `
        <button onclick="adminResolveAid('${app.id}')" class="text-xs bg-emerald-600 text-white font-bold py-1.5 px-4 rounded-xl">
          ✔ সহায়তা প্রদান সম্পন্ন
        </button>` : ''}
    </div>`).join('');
}

function adminResolveAid(appId) {
  const app = aidApplications.find(a => a.id === appId);
  if (app) app.status = 'resolved';
  saveAidApplications();
  renderAdminAidList();
  Swal.fire({ icon: 'success', title: 'সম্পন্ন চিহ্নিত হয়েছে!', timer: 1200, showConfirmButton: false });
}

function openApplyHelpModal(serviceTitle) {
  const titleEl = document.getElementById('service-apply-title');
  const hiddenInput = document.getElementById('apply-service-name');
  if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-hand-holding-heart"></i> ${serviceTitle} — আবেদন`;
  if (hiddenInput) hiddenInput.value = serviceTitle;
  document.getElementById('service-apply-modal').classList.remove('hidden');
}

function closeApplyHelpModal() {
  document.getElementById('service-apply-modal').classList.add('hidden');
}

// ============================================================
// ADD DONOR MODAL (from admin panel)
// ============================================================
function openAddDonorModal() {
  switchMainTab('bloodlink');
  switchBloodSubTab('blood-register');
  Swal.fire({ icon: 'info', title: 'রক্তদাতা নিবন্ধন', text: 'ব্লাড লিংক নিবন্ধন ফরম খোলা হয়েছে', timer: 1500, showConfirmButton: false });
}



// ==============================================================
// MULTIPLE HEADLINES MANAGEMENT ENGINE (একাধিক চলমান শিরোনাম)
// ==============================================================
function openHeadlinesModal() {
  if (!siteSettings.headlines || !Array.isArray(siteSettings.headlines)) {
    siteSettings.headlines = siteSettings.marqueeText ? siteSettings.marqueeText.split('\n').map(s=>s.trim()).filter(Boolean) : [];
  }

  renderHeadlinesList();

  const bulkTextarea = document.getElementById('bulk-headlines-textarea');
  if (bulkTextarea) {
    bulkTextarea.value = siteSettings.headlines.join('\n');
  }

  const modal = document.getElementById('headlines-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeHeadlinesModal() {
  const modal = document.getElementById('headlines-modal');
  if (modal) modal.classList.add('hidden');
}

function renderHeadlinesList() {
  const container = document.getElementById('headlines-active-list');
  const countBadge = document.getElementById('headline-count-badge');
  if (!container) return;

  const list = siteSettings.headlines || [];
  if (countBadge) countBadge.textContent = `${toBengaliNumeral(list.length)}টি সক্রিয়`;

  if (list.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-slate-400 bg-slate-50 rounded-xl text-xs">বর্তমানে কোনো শিরোনাম নেই। নতুন শিরোনাম যুক্ত করুন।</div>`;
    return;
  }

  container.innerHTML = list.map((headline, idx) => {
    return `
      <div class="flex items-center justify-between gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-red-300 transition">
        <div class="flex items-center gap-2.5 overflow-hidden">
          <span class="w-6 h-6 rounded-full bg-red-100 text-brand-red font-black text-xs flex items-center justify-center flex-shrink-0">
            ${toBengaliNumeral(idx + 1)}
          </span>
          <span class="font-bold text-slate-800 text-xs truncate">${headline}</span>
        </div>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          <button onclick="handleEditHeadline(${idx})" title="সম্পাদনা করুন" class="p-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button onclick="handleDeleteHeadline(${idx})" title="মুছে ফেলুন" class="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function handleAddSingleHeadline() {
  const input = document.getElementById('new-headline-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) {
    Swal.fire({ icon: 'warning', title: 'শিরোনাম লিখুন', text: 'অনুগ্রহ করে শিরোনামের বার্তাটি লিখুন' });
    return;
  }

  if (!siteSettings.headlines) siteSettings.headlines = [];
  siteSettings.headlines.unshift(val);
  siteSettings.marqueeText = siteSettings.headlines.join('\n');
  saveSettings();
  applySiteSettings();
  renderHeadlinesList();
  input.value = '';

  const bulkTextarea = document.getElementById('bulk-headlines-textarea');
  if (bulkTextarea) bulkTextarea.value = siteSettings.headlines.join('\n');

  Swal.fire({ icon: 'success', title: 'শিরোনাম যুক্ত হয়েছে!', timer: 1200, showConfirmButton: false });
}

function handleEditHeadline(idx) {
  const current = siteSettings.headlines[idx];
  Swal.fire({
    title: 'শিরোনাম সম্পাদনা করুন',
    input: 'text',
    inputValue: current,
    showCancelButton: true,
    confirmButtonText: 'সংরক্ষণ',
    cancelButtonText: 'বাতিল',
    confirmButtonColor: '#dc2626',
    preConfirm: (val) => {
      if (!val || !val.trim()) {
        Swal.showValidationMessage('শিরোনাম খালি রাখা যাবে না');
        return false;
      }
      return val.trim();
    }
  }).then(res => {
    if (res.isConfirmed && res.value) {
      siteSettings.headlines[idx] = res.value;
      siteSettings.marqueeText = siteSettings.headlines.join('\n');
      saveSettings();
      applySiteSettings();
      renderHeadlinesList();
      const bulkTextarea = document.getElementById('bulk-headlines-textarea');
      if (bulkTextarea) bulkTextarea.value = siteSettings.headlines.join('\n');
      Swal.fire({ icon: 'success', title: 'আপডেট সম্পন্ন!', timer: 1200, showConfirmButton: false });
    }
  });
}

function handleDeleteHeadline(idx) {
  Swal.fire({
    title: 'শিরোনাম মুছবেন?',
    text: 'এই শিরোনামটি স্থায়ীভাবে মুছে ফেলা হবে।',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'হ্যাঁ, মুছুন',
    cancelButtonText: 'বাতিল',
    confirmButtonColor: '#dc2626'
  }).then(res => {
    if (res.isConfirmed) {
      siteSettings.headlines.splice(idx, 1);
      siteSettings.marqueeText = siteSettings.headlines.join('\n');
      saveSettings();
      applySiteSettings();
      renderHeadlinesList();
      const bulkTextarea = document.getElementById('bulk-headlines-textarea');
      if (bulkTextarea) bulkTextarea.value = siteSettings.headlines.join('\n');
      Swal.fire({ icon: 'success', title: 'মুছে ফেলা হয়েছে!', timer: 1200, showConfirmButton: false });
    }
  });
}

function handleSaveBulkHeadlines() {
  const bulkTextarea = document.getElementById('bulk-headlines-textarea');
  if (!bulkTextarea) return;
  const raw = bulkTextarea.value.trim();
  const list = raw.split('\n').map(s => s.trim()).filter(Boolean);

  if (list.length === 0) {
    Swal.fire({ icon: 'warning', title: 'কোনো শিরোনাম নেই', text: 'কমপক্ষে একটি শিরোনাম লিখুন' });
    return;
  }

  siteSettings.headlines = list;
  siteSettings.marqueeText = list.join('\n');
  saveSettings();
  applySiteSettings();
  renderHeadlinesList();

  Swal.fire({ icon: 'success', title: 'সকল শিরোনাম হালনাগাদ হয়েছে!', timer: 1400, showConfirmButton: false });
}

function setHeadlineSpeed(seconds) {
  const marquee = document.getElementById('moving-headline-display');
  if (marquee) {
    marquee.style.animationDuration = seconds + 's';
  }

  document.querySelectorAll('.speed-btn').forEach(btn => {
    if (btn.getAttribute('data-speed') == seconds) {
      btn.className = 'speed-btn px-3 py-1.5 bg-amber-600 text-white rounded-lg font-bold shadow';
    } else {
      btn.className = 'speed-btn px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-amber-100';
    }
  });
}


// ==============================================================
// DONOR EDIT ENGINE (রক্তদাতার সকল তথ্য সম্পাদনা)
// ==============================================================
function openEditDonorModal(donorId) {
  const d = donors.find(x => x.id === donorId);
  if (!d) return;

  document.getElementById('edit-donor-id').value = d.id;
  document.getElementById('edit-donor-id-display').textContent = d.id;
  document.getElementById('edit-donor-name').value = d.name || '';
  document.getElementById('edit-donor-father').value = d.father || '';
  document.getElementById('edit-donor-blood-group').value = d.bloodGroup || 'A+';
  document.getElementById('edit-donor-gender').value = d.gender || 'পুরুষ';
  document.getElementById('edit-donor-phone').value = d.phone || '';
  document.getElementById('edit-donor-whatsapp').value = d.whatsapp || d.phone || '';
  document.getElementById('edit-donor-upazila').value = d.upazila || 'গজারিয়া';
  document.getElementById('edit-donor-village').value = d.village || '';
  document.getElementById('edit-donor-donations').value = d.donationCount || 0;
  document.getElementById('edit-donor-last-date').value = d.lastDonationDate || '';

  const modal = document.getElementById('donor-edit-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeEditDonorModal() {
  const modal = document.getElementById('donor-edit-modal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveEditedDonor(e) {
  e.preventDefault();
  const id = document.getElementById('edit-donor-id').value;
  const d = donors.find(x => x.id === id);
  if (!d) return;

  const rawPhone = document.getElementById('edit-donor-phone').value.trim();
  const phone = normalizePhoneNumber(rawPhone);
  const rawWA = document.getElementById('edit-donor-whatsapp').value.trim();
  const whatsapp = rawWA ? normalizePhoneNumber(rawWA) : phone;

  if (!phone || phone.length !== 11 || !phone.startsWith('01')) {
    Swal.fire({
      icon: 'warning',
      title: 'ভুল মোবাইল নম্বর!',
      text: 'অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)'
    });
    return;
  }

  // Check duplicate against other donors
  const isDuplicate = donors.some(x => x.id !== id && normalizePhoneNumber(x.phone) === phone);
  if (isDuplicate) {
    Swal.fire({
      icon: 'warning',
      title: 'ইতিমধ্যে নিবন্ধিত নম্বর!',
      text: 'এই মোবাইল নম্বরটি ইতিমধ্যে নিবন্ধিত। অনুগ্রহ করে অন্য নম্বর ব্যবহার করুন অথবা অ্যাডমিনের সঙ্গে যোগাযোগ করুন।'
    });
    return;
  }

  d.name = document.getElementById('edit-donor-name').value.trim();
  d.father = document.getElementById('edit-donor-father').value.trim();
  d.bloodGroup = document.getElementById('edit-donor-blood-group').value;
  d.gender = document.getElementById('edit-donor-gender').value;
  d.phone = phone;
  d.whatsapp = whatsapp;
  d.upazila = document.getElementById('edit-donor-upazila').value;
  d.village = document.getElementById('edit-donor-village').value.trim();
  d.donationCount = parseInt(document.getElementById('edit-donor-donations').value) || 0;
  d.lastDonationDate = document.getElementById('edit-donor-last-date').value;
  d.hasDonated = d.donationCount > 0 ? 'হ্যাঁ' : 'না';

  saveDonors();
  renderAdminTable();
  filterDonors();
  updateAdminDashboard();
  closeEditDonorModal();

  Swal.fire({ icon: 'success', title: 'রক্তদাতার তথ্য সফলভাবে সংরক্ষিত হয়েছে!', timer: 1400, showConfirmButton: false });
}


// ==============================================================
// VOLUNTEER EDIT & DELETE ENGINE (স্বেচ্ছাসেবীর তথ্য সম্পাদনা ও মুছা)
// ==============================================================
function openEditVolunteerModal(volId) {
  const v = volunteers.find(x => x.id === volId);
  if (!v) return;

  document.getElementById('edit-vol-id').value = v.id;
  document.getElementById('edit-vol-id-display').textContent = v.id;
  document.getElementById('edit-vol-name').value = v.name || '';
  document.getElementById('edit-vol-father').value = v.father || '';
  document.getElementById('edit-vol-blood-group').value = v.bloodGroup || 'A+';
  document.getElementById('edit-vol-profession').value = v.profession || '';
  document.getElementById('edit-vol-phone').value = v.phone || '';
  document.getElementById('edit-vol-whatsapp').value = v.whatsapp || v.phone || '';
  document.getElementById('edit-vol-upazila').value = v.upazila || 'গজারিয়া';
  document.getElementById('edit-vol-village').value = v.village || '';
  document.getElementById('edit-vol-interest').value = v.interest || '';

  const modal = document.getElementById('volunteer-edit-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeEditVolunteerModal() {
  const modal = document.getElementById('volunteer-edit-modal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveEditedVolunteer(e) {
  e.preventDefault();
  const id = document.getElementById('edit-vol-id').value;
  const v = volunteers.find(x => x.id === id);
  if (!v) return;

  const rawPhone = document.getElementById('edit-vol-phone').value.trim();
  const phone = normalizePhoneNumber(rawPhone);
  const rawWA = document.getElementById('edit-vol-whatsapp').value.trim();
  const whatsapp = rawWA ? normalizePhoneNumber(rawWA) : phone;

  if (!phone || phone.length !== 11 || !phone.startsWith('01')) {
    Swal.fire({
      icon: 'warning',
      title: 'ভুল মোবাইল নম্বর!',
      text: 'অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)'
    });
    return;
  }

  // Check duplicate against other volunteers
  const isDuplicate = volunteers.some(x => x.id !== id && normalizePhoneNumber(x.phone) === phone);
  if (isDuplicate) {
    Swal.fire({
      icon: 'warning',
      title: 'ইতিমধ্যে নিবন্ধিত নম্বর!',
      text: 'এই মোবাইল নম্বরটি ইতিমধ্যে নিবন্ধিত। অনুগ্রহ করে অন্য নম্বর ব্যবহার করুন অথবা অ্যাডমিনের সঙ্গে যোগাযোগ করুন।'
    });
    return;
  }

  v.name = document.getElementById('edit-vol-name').value.trim();
  v.father = document.getElementById('edit-vol-father').value.trim();
  v.bloodGroup = document.getElementById('edit-vol-blood-group').value;
  v.profession = document.getElementById('edit-vol-profession').value.trim();
  v.phone = phone;
  v.whatsapp = whatsapp;
  v.upazila = document.getElementById('edit-vol-upazila').value.trim();
  v.village = document.getElementById('edit-vol-village').value.trim();
  v.interest = document.getElementById('edit-vol-interest').value.trim();

  saveVolunteers();
  renderAdminVolunteersTable();
  updateAdminDashboard();
  closeEditVolunteerModal();

  Swal.fire({ icon: 'success', title: 'স্বেচ্ছাসেবীর তথ্য সফলভাবে হালনাগাদ হয়েছে!', timer: 1400, showConfirmButton: false });
}

function adminDeleteVolunteer(volId) {
  Swal.fire({
    title: 'স্বেচ্ছাসেবী মুছবেন?',
    text: 'এই সদস্যকে ডাটাবেজ থেকে স্থায়ীভাবে বাদ দেওয়া হবে।',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'হ্যাঁ, মুছুন',
    cancelButtonText: 'বাতিল',
    confirmButtonColor: '#dc2626'
  }).then(res => {
    if (res.isConfirmed) {
      volunteers = volunteers.filter(x => x.id !== volId);
      saveVolunteers();
      if (typeof isSupabaseReady === 'function' && isSupabaseReady()) cloudDeleteVolunteer(volId);
      renderAdminVolunteersTable();
      updateAdminDashboard();
      Swal.fire({ icon: 'success', title: 'মুছে ফেলা হয়েছে!', timer: 1200, showConfirmButton: false });
    }
  });
}



// ==============================================================
// EXECUTIVE BANI MANAGEMENT ENGINE (সভাপতি ও সাধারণ সম্পাদকের বাণী)
// ==============================================================
let leaderUploadCache = {
  pres: null,
  sec: null
};

function openExecutiveBaniModal() {
  if (!siteSettings.president) siteSettings.president = { ...DEFAULT_SETTINGS.president };
  if (!siteSettings.secretary) siteSettings.secretary = { ...DEFAULT_SETTINGS.secretary };

  // President form
  document.getElementById('edit-pres-name').value = siteSettings.president.name || '';
  document.getElementById('edit-pres-title').value = siteSettings.president.title || '';
  document.getElementById('edit-pres-message').value = siteSettings.president.message || '';
  
  const presPreview = document.getElementById('edit-pres-photo-preview');
  const presPlaceholder = document.getElementById('edit-pres-photo-placeholder');
  if (siteSettings.president.photo && presPreview && presPlaceholder) {
    presPreview.src = siteSettings.president.photo;
    presPreview.classList.remove('hidden');
    presPlaceholder.classList.add('hidden');
  } else if (presPreview && presPlaceholder) {
    presPreview.classList.add('hidden');
    presPlaceholder.classList.remove('hidden');
  }

  // Secretary form
  document.getElementById('edit-sec-name').value = siteSettings.secretary.name || '';
  document.getElementById('edit-sec-title').value = siteSettings.secretary.title || '';
  document.getElementById('edit-sec-message').value = siteSettings.secretary.message || '';

  const secPreview = document.getElementById('edit-sec-photo-preview');
  const secPlaceholder = document.getElementById('edit-sec-photo-placeholder');
  if (siteSettings.secretary.photo && secPreview && secPlaceholder) {
    secPreview.src = siteSettings.secretary.photo;
    secPreview.classList.remove('hidden');
    secPlaceholder.classList.add('hidden');
  } else if (secPreview && secPlaceholder) {
    secPreview.classList.add('hidden');
    secPlaceholder.classList.remove('hidden');
  }

  leaderUploadCache = { pres: null, sec: null };

  const modal = document.getElementById('executive-bani-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeExecutiveBaniModal() {
  const modal = document.getElementById('executive-bani-modal');
  if (modal) modal.classList.add('hidden');
  leaderUploadCache = { pres: null, sec: null };
}

function handleLeaderPhotoUpload(event, role) {
  const file = event.target.files[0];
  if (!file) return;

  // ৫ এমবি সীমা যাচাই
  if (file.size > 5242880) {
    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        icon: 'error',
        title: '📁 ছবির সাইজ বেশি!',
        html: `ছবির বর্তমান সাইজ: <strong>${sizeMB} MB</strong><br>সর্বোচ্চ অনুমোদিত সাইজ: <strong>৫ MB</strong><br><br>অনুগ্রহ করে ছোট সাইজের ছবি বেছে নিন।`,
        confirmButtonText: 'ঠিক আছে',
        confirmButtonColor: '#dc2626'
      });
    } else {
      alert('ছবির সাইজ ৫ এমবির বেশি হতে পারবে না। আপনার ছবির সাইজ: ' + sizeMB + ' MB');
    }
    event.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 360;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_SIZE) {
          height = Math.round((height * MAX_SIZE) / width);
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width = Math.round((width * MAX_SIZE) / height);
          height = MAX_SIZE;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

      leaderUploadCache[role] = dataUrl;

      const preview = document.getElementById(`edit-${role}-photo-preview`);
      const placeholder = document.getElementById(`edit-${role}-photo-placeholder`);
      if (preview && placeholder) {
        preview.src = dataUrl;
        preview.classList.remove('hidden');
        placeholder.classList.add('hidden');
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleSaveExecutiveBani(e) {
  e.preventDefault();

  const presName = document.getElementById('edit-pres-name').value.trim();
  const presTitle = document.getElementById('edit-pres-title').value.trim();
  const presMessage = document.getElementById('edit-pres-message').value.trim();
  const presPhoto = leaderUploadCache.pres || (siteSettings.president ? siteSettings.president.photo : '') || '';

  const secName = document.getElementById('edit-sec-name').value.trim();
  const secTitle = document.getElementById('edit-sec-title').value.trim();
  const secMessage = document.getElementById('edit-sec-message').value.trim();
  const secPhoto = leaderUploadCache.sec || (siteSettings.secretary ? siteSettings.secretary.photo : '') || '';

  siteSettings.president = {
    name: presName,
    title: presTitle,
    message: presMessage,
    photo: presPhoto
  };

  siteSettings.secretary = {
    name: secName,
    title: secTitle,
    message: secMessage,
    photo: secPhoto
  };

  saveSettings();
  applySiteSettings();
  closeExecutiveBaniModal();

  Swal.fire({
    icon: 'success',
    title: 'বাণী ও ছবি সংরক্ষিত হয়েছে!',
    text: 'আমাদের কথা পাতায় সভাপতি ও সাধারণ সম্পাদকের তথ্য হালনাগাদ সম্পন্ন হয়েছে।',
    timer: 1600,
    showConfirmButton: false
  });
}



// ==============================================================
// DONATION EDIT ENGINE (অনুদান ও ব্যাংক তথ্য সম্পাদনা)
// ==============================================================
function openDonationEditModal() {
  if (!siteSettings.donation) {
    siteSettings.donation = { ...DEFAULT_SETTINGS.donation };
  }
  const d = siteSettings.donation;

  document.getElementById('edit-don-headline').value = d.headline || '';
  document.getElementById('edit-don-appeal').value = d.appeal || '';
  document.getElementById('edit-don-bank-accname').value = d.bankAccName || '';
  document.getElementById('edit-don-bank-name').value = d.bankName || '';
  document.getElementById('edit-don-bank-branch').value = d.bankBranch || '';
  document.getElementById('edit-don-bank-accno').value = d.bankAccNo || '';
  document.getElementById('edit-don-bank-routing').value = d.bankRouting || '';
  document.getElementById('edit-don-bkash').value = d.bkash || '';
  document.getElementById('edit-don-nagad').value = d.nagad || '';
  document.getElementById('edit-don-rocket').value = d.rocket || '';
  document.getElementById('edit-don-note').value = d.note || '';
  document.getElementById('edit-don-general').value = d.generalFee || '';
  document.getElementById('edit-don-life').value = d.lifeFee || '';
  document.getElementById('edit-don-donor').value = d.donorFee || '';

  const modal = document.getElementById('donation-edit-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeDonationEditModal() {
  const modal = document.getElementById('donation-edit-modal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveDonationSettings(e) {
  e.preventDefault();

  siteSettings.donation = {
    headline: document.getElementById('edit-don-headline').value.trim(),
    appeal: document.getElementById('edit-don-appeal').value.trim(),
    bankAccName: document.getElementById('edit-don-bank-accname').value.trim(),
    bankName: document.getElementById('edit-don-bank-name').value.trim(),
    bankBranch: document.getElementById('edit-don-bank-branch').value.trim(),
    bankAccNo: document.getElementById('edit-don-bank-accno').value.trim(),
    bankRouting: document.getElementById('edit-don-bank-routing').value.trim(),
    bkash: document.getElementById('edit-don-bkash').value.trim(),
    nagad: document.getElementById('edit-don-nagad').value.trim(),
    rocket: document.getElementById('edit-don-rocket').value.trim(),
    note: document.getElementById('edit-don-note').value.trim(),
    generalFee: document.getElementById('edit-don-general').value.trim(),
    lifeFee: document.getElementById('edit-don-life').value.trim(),
    donorFee: document.getElementById('edit-don-donor').value.trim()
  };

  saveSettings();
  applySiteSettings();
  closeDonationEditModal();

  Swal.fire({
    icon: 'success',
    title: 'অনুদান তথ্য হালনাগাদ হয়েছে!',
    text: 'ব্যাংক হিসাব, বিকাশ/নগদ নম্বর ও সদস্য ফি সফলভাবে সংরক্ষিত হয়েছে।',
    timer: 1600,
    showConfirmButton: false
  });
}

// ==============================================================
// LUXURY ADMIN TERMINAL KEYPAD HELPERS
// ==============================================================
function appendPinKey(num) {
  const inp = document.getElementById('admin-pin-input');
  if (!inp) return;
  if (inp.value.length < 8) {
    inp.value += num;
  }
}

function clearPinKey() {
  const inp = document.getElementById('admin-pin-input');
  if (inp) inp.value = '';
}

function backspacePinKey() {
  const inp = document.getElementById('admin-pin-input');
  if (inp && inp.value.length > 0) {
    inp.value = inp.value.slice(0, -1);
  }
}

function togglePinVisibility() {
  const inp = document.getElementById('admin-pin-input');
  const icon = document.getElementById('pin-toggle-icon');
  if (!inp || !icon) return;
  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fa-solid fa-eye-slash text-sm';
  } else {
    inp.type = 'password';
    icon.className = 'fa-solid fa-eye text-sm';
  }
}


// ============================================================
// BLOOD REQUEST RESOLUTION & DONATION HISTORY ENGINE
// ============================================================
function handleRequestOutcome(reqId, action) {
  const req = emergencyRequests.find(r => r.id === reqId);
  if (!req) return;

  if (action === 'managed') {
    // Open Managed Modal with pre-filled recipient info
    document.getElementById('manage-req-id').value = req.id;
    document.getElementById('manage-patient-name-display').textContent = req.patientName;
    document.getElementById('manage-patient-group-badge').textContent = req.bloodGroup;
    document.getElementById('manage-patient-hospital-display').textContent = req.hospital || 'মুন্সীগঞ্জ';
    document.getElementById('manage-patient-bags-display').textContent = `${toBengaliNumeral(req.bags)} ব্যাগ`;
    document.getElementById('manage-patient-phone-display').textContent = req.contact;

    // Reset donor fields
    document.getElementById('manage-donor-name').value = '';
    document.getElementById('manage-donor-phone').value = '';
    document.getElementById('manage-donor-address').value = '';
    document.getElementById('manage-notes').value = `${req.patientName}-এর জন্য ${req.bloodGroup} রক্তদান সফলভাবে সম্পন্ন।`;
    document.getElementById('manage-donation-date').value = new Date().toISOString().slice(0, 10);

    // Populate registered donors dropdown matching blood group
    const selectEl = document.getElementById('manage-select-registered-donor');
    if (selectEl) {
      const matchDonors = donors.filter(d => d.bloodGroup === req.bloodGroup);
      const otherDonors = donors.filter(d => d.bloodGroup !== req.bloodGroup);
      
      let opts = '<option value="">-- নিবন্ধিত রক্তদাতা নির্বাচন করুন অথবা নিচে ম্যানুয়ালি লিখুন --</option>';
      if (matchDonors.length > 0) {
        opts += `<optgroup label="মিল থাকা রক্তদাতা (${req.bloodGroup})">`;
        matchDonors.forEach(d => {
          opts += `<option value="${d.id}">${d.name} (${d.bloodGroup}) - ${d.phone} [${d.upazila || d.village || ''}]</option>`;
        });
        opts += '</optgroup>';
      }
      if (otherDonors.length > 0) {
        opts += '<optgroup label="অন্যান্য রক্তদাতা">';
        otherDonors.forEach(d => {
          opts += `<option value="${d.id}">${d.name} (${d.bloodGroup}) - ${d.phone}</option>`;
        });
        opts += '</optgroup>';
      }
      selectEl.innerHTML = opts;
    }

    const modal = document.getElementById('blood-managed-modal');
    if (modal) modal.classList.remove('hidden');
  } else if (action === 'unmanaged') {
    // Prompt confirmation and reason
    Swal.fire({
      title: 'আবেদনটি সমাধান করা যায়নি?',
      html: `
        <div class="text-left space-y-3">
          <p class="text-xs text-slate-600 font-bold">এই রক্তের আবেদনটি কী কারণে সমাধান সম্ভব হয়নি নির্বাচন করুন (এটি চলমান আবেদন বক্স ও লাইভ শিরোনাম থেকে অপসারিত হবে):</p>
          <select id="swal-unmanaged-reason" class="w-full p-2.5 text-xs font-bold border border-slate-300 rounded-xl bg-slate-50 focus:outline-none">
            <option value="রোগী অন্য উৎস থেকে রক্ত সংগ্রহ করেছেন">১. রোগী অন্য উৎস থেকে রক্ত সংগ্রহ করেছেন</option>
            <option value="নির্ধারিত সময় পার হয়ে গেছে">২. নির্ধারিত সময় পার হয়ে গেছে</option>
            <option value="রোগীর স্বজনরা আবেদন প্রত্যাহার করেছেন">৩. রোগীর স্বজনরা আবেদন প্রত্যাহার করেছেন</option>
            <option value="রক্তদাতা পাওয়া সম্ভব হয়নি">৪. রক্তদাতা পাওয়া সম্ভব হয়নি</option>
            <option value="অন্যান্য কারণে আবেদন সমাপ্ত">৫. অন্যান্য কারণে আবেদন সমাপ্ত</option>
          </select>
        </div>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-trash-can mr-1"></i> আবেদন বক্স থেকে সরান',
      cancelButtonText: 'বাতিল',
      confirmButtonColor: '#e11d48'
    }).then(res => {
      if (res.isConfirmed) {
        const reason = document.getElementById('swal-unmanaged-reason') ? document.getElementById('swal-unmanaged-reason').value : 'সমাধান সম্ভব হয়নি';
        markRequestUnmanaged(reqId, reason);
      }
    });
  }
}

function closeBloodManagedModal() {
  const modal = document.getElementById('blood-managed-modal');
  if (modal) modal.classList.add('hidden');
}

function autoFillSelectedDonor(donorId) {
  if (!donorId) return;
  const donor = donors.find(d => d.id === donorId);
  if (donor) {
    document.getElementById('manage-donor-name').value = donor.name;
    document.getElementById('manage-donor-phone').value = donor.phone;
    document.getElementById('manage-donor-address').value = donor.upazila ? `${donor.village ? donor.village + ', ' : ''}${donor.upazila}` : (donor.village || '');
  }
}

function markRequestUnmanaged(reqId, reason) {
  const req = emergencyRequests.find(r => r.id === reqId);
  if (req) {
    req.status = 'unmanaged';
    req.unmanagedReason = reason;
    req.resolvedDate = new Date().toLocaleDateString('bn-BD');
  }
  localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(emergencyRequests));

  renderEmergencyRequests();
  renderAdminEmergencyList();
  updateUrgentBanner();
  applySiteSettings();

  Swal.fire({
    icon: 'info',
    title: 'আবেদনটি অপসারিত হয়েছে',
    text: 'আবেদনটি সফলভাবে চলমান আবেদন বক্স ও লাইভ শিরোনাম থেকে সরিয়ে আর্কাইভে রাখা হয়েছে।',
    timer: 2000,
    showConfirmButton: false
  });
}

function handleBloodManagedSubmit(e) {
  e.preventDefault();
  const reqId = document.getElementById('manage-req-id').value;
  const donorName = document.getElementById('manage-donor-name').value.trim();
  const donorPhone = document.getElementById('manage-donor-phone').value.trim();
  const donorAddress = document.getElementById('manage-donor-address').value.trim();
  const donationDate = document.getElementById('manage-donation-date').value;
  const notes = document.getElementById('manage-notes').value.trim();

  const req = emergencyRequests.find(r => r.id === reqId);
  if (!req) {
    closeBloodManagedModal();
    return;
  }

  // 1. Mark request as managed
  req.status = 'managed';
  req.managedDate = donationDate || new Date().toLocaleDateString('bn-BD');
  req.donorName = donorName;
  req.donorPhone = donorPhone;

  // 2. Create permanent donation record
  const record = {
    id: `REC-${Date.now().toString().slice(-5)}`,
    requestId: req.id,
    patientName: req.patientName,
    patientPhone: req.contact,
    hospital: req.hospital || 'মুন্সীগঞ্জ',
    bloodGroup: req.bloodGroup,
    bags: req.bags || '1',
    donorName: donorName,
    donorPhone: donorPhone,
    donorAddress: donorAddress,
    donationDate: donationDate || new Date().toLocaleDateString('bn-BD'),
    managedDate: new Date().toLocaleDateString('bn-BD'),
    notes: notes,
    status: 'managed'
  };

  donationRecords.unshift(record);
  saveDonationRecords();
  localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(emergencyRequests));
  if (typeof isSupabaseReady === 'function' && isSupabaseReady()) {
    cloudUpsertRequest(req);
    cloudUpsertRecord(record);
  }

  // 3. If donor is registered in donors list, update last donation date & count
  const regDonor = donors.find(d => d.phone === donorPhone || (donorName && d.name.toLowerCase() === donorName.toLowerCase()));
  if (regDonor) {
    regDonor.lastDonationDate = donationDate;
    regDonor.hasDonated = "হ্যাঁ";
    regDonor.donationCount = (regDonor.donationCount || 0) + 1;
    saveDonors();
  }

  closeBloodManagedModal();

  // 4. Update UI everywhere
  renderEmergencyRequests();
  renderAdminEmergencyList();
  renderDonationHistory();
  updateHomeStats();
  updateUrgentBanner();
  applySiteSettings();

  Swal.fire({
    icon: 'success',
    title: 'রক্তদান সেবা সফলভাবে সম্পন্ন!',
    html: `
      <div class="text-sm text-slate-700 space-y-2">
        <p><strong>রোগী:</strong> ${req.patientName} (${req.bloodGroup})</p>
        <p><strong>মহতী রক্তদাতা:</strong> ${donorName} (${donorPhone})</p>
        <div class="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl font-bold text-xs border border-emerald-200 mt-2">
          🎉 আবেদনটি আবেদন বক্স থেকে মুক্ত হয়েছে এবং রক্তদান ইতিহাস আর্কাইভে স্থায়ীভাবে সংরক্ষিত হয়েছে। মোট সেবা গ্রহীতার সংখ্যা বৃদ্ধি পেয়েছে!
        </div>
      </div>
    `,
    confirmButtonText: 'ধন্যবাদ, আলহামদুলিল্লাহ'
  });
}

function saveDonationRecords() {
  localStorage.setItem(STORAGE_KEYS.DONATION_RECORDS, JSON.stringify(donationRecords));
  updateHomeStats();
}

// -------------------------------------------------------------
// RENDER DONATION HISTORY LIST & STATS
// -------------------------------------------------------------
function renderDonationHistory() {
  const container = document.getElementById('donation-history-list');
  const countEl = document.getElementById('history-total-served-count');
  if (countEl) countEl.textContent = toBengaliNumeral(donationRecords.length);

  const filterGrp = document.getElementById('filter-history-group') ? document.getElementById('filter-history-group').value : 'ALL';
  const search = document.getElementById('filter-history-search') ? document.getElementById('filter-history-search').value.toLowerCase().trim() : '';

  if (!container) return;

  let list = donationRecords;
  if (filterGrp !== 'ALL') {
    list = list.filter(r => r.bloodGroup === filterGrp);
  }
  if (search) {
    list = list.filter(r => 
      (r.patientName && r.patientName.toLowerCase().includes(search)) ||
      (r.donorName && r.donorName.toLowerCase().includes(search)) ||
      (r.hospital && r.hospital.toLowerCase().includes(search)) ||
      (r.donorAddress && r.donorAddress.toLowerCase().includes(search))
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 bg-white rounded-3xl border border-dashed border-slate-200">
        <i class="fa-solid fa-clipboard-question text-3xl mb-2 text-slate-300"></i>
        <p class="text-sm font-bold text-slate-600">কোনো রক্তদান সেবা রেকর্ড পাওয়া যায়নি</p>
        <span class="text-xs text-slate-400">ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন</span>
      </div>`;
    return;
  }

  container.innerHTML = list.map(rec => {
    return `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover-lift space-y-4 relative overflow-hidden">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-brand-red text-white font-black text-xl flex items-center justify-center shadow-md shadow-red-500/20">
              ${rec.bloodGroup}
            </span>
            <div>
              <span class="text-[11px] font-black uppercase text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                ✔ সফলভাবে রক্তদান সম্পন্ন
              </span>
              <strong class="text-slate-900 block font-black text-base mt-1">${rec.patientName}</strong>
            </div>
          </div>
          <span class="bg-red-50 text-brand-red font-black text-xs px-2.5 py-1 rounded-full border border-red-200">
            ${toBengaliNumeral(rec.bags || 1)} ব্যাগ
          </span>
        </div>

        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span class="text-slate-400 font-bold block text-[10px] uppercase">সেবা গ্রহীতা / রোগী</span>
            <strong class="text-slate-800 text-xs block mt-0.5">${rec.patientName}</strong>
            <span class="text-slate-500 block text-[11px]"><i class="fa-solid fa-hospital text-red-400 mr-1"></i>${rec.hospital || 'মুন্সীগঞ্জ'}</span>
          </div>

          <div class="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
            <span class="text-emerald-700 font-bold block text-[10px] uppercase">মহতী রক্তদাতা</span>
            <strong class="text-emerald-950 text-xs block mt-0.5">${rec.donorName}</strong>
            <span class="text-emerald-700 block text-[11px] font-mono"><i class="fa-solid fa-phone mr-1"></i>${rec.donorPhone}</span>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs pt-1 text-slate-500">
          <span class="flex items-center gap-1 font-mono text-[11px]">
            <i class="fa-regular fa-calendar-check text-emerald-600"></i> তারিখ: ${rec.donationDate || rec.managedDate}
          </span>
          <span class="text-slate-400 text-[11px]">${rec.donorAddress || 'গজারিয়া'}</span>
        </div>

        ${rec.notes ? `<p class="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 italic">"${rec.notes}"</p>` : ''}
      </div>
    `;
  }).join('');
}

function filterDonationHistory() {
  renderDonationHistory();
}

function printDonationHistoryReport() {
  window.print();
}


// ============================================================
// NOTICE BOARD ENGINE (নোটিশ ও সার্কুলার সিস্টেম)
// ============================================================
async function saveNotices() {
  localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  renderNoticeBoard();
  renderHomeNotices();
  renderAdminNoticeList();
  updateNoticeStats();
  if (isSupabaseReady()) {
    try { await cloudBulkUpsertNotices(notices); } catch(e) { console.error('Notice cloud sync failed:', e); }
  }
}

function updateNoticeStats() {
  const totalCountEl = document.getElementById('notice-total-count');
  if (totalCountEl) totalCountEl.textContent = toBengaliNumeral(notices.length) + 'টি';

  const admBadge = document.getElementById('adm-notice-count-badge');
  if (admBadge) admBadge.textContent = toBengaliNumeral(notices.length) + 'টি';

  const statNotices = document.getElementById('stat-total-notices');
  if (statNotices) statNotices.textContent = toBengaliNumeral(notices.length);
}

function filterNoticesByCat(cat) {
  currentNoticeCategory = cat;
  document.querySelectorAll('.notice-filter-pill').forEach(btn => {
    if (btn.getAttribute('data-cat') === cat) {
      btn.className = 'notice-filter-pill active bg-slate-900 text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-700 transition shadow-sm';
    } else {
      btn.className = 'notice-filter-pill bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-200 transition';
    }
  });
  renderNoticeBoard();
}

function searchNoticesLive() {
  renderNoticeBoard();
}

function getNoticeCategoryBadge(cat) {
  switch (cat) {
    case 'রক্তদান কর্মসূচি':
      return { bg: 'bg-red-50 text-brand-red border-red-200', icon: 'fa-droplet' };
    case 'জরুরি ঘোষণা':
      return { bg: 'bg-rose-100 text-rose-800 border-rose-300 font-black', icon: 'fa-triangle-exclamation' };
    case 'সমাজকল্যাণ':
      return { bg: 'bg-emerald-50 text-emerald-800 border-emerald-200', icon: 'fa-hand-holding-heart' };
    case 'প্রশাসনিক সার্কুলার':
      return { bg: 'bg-purple-50 text-purple-800 border-purple-200', icon: 'fa-stamp' };
    default:
      return { bg: 'bg-blue-50 text-blue-800 border-blue-200', icon: 'fa-bullhorn' };
  }
}

function renderNoticeBoard() {
  const grid = document.getElementById('notices-grid');
  const emptyEl = document.getElementById('notices-empty');
  if (!grid) return;

  const search = (document.getElementById('notice-search-input')?.value || '').trim().toLowerCase();

  let list = [...notices];

  // Category filter
  if (currentNoticeCategory === 'PINNED') {
    list = list.filter(n => n.priority === 'pinned' || n.priority === 'urgent');
  } else if (currentNoticeCategory === 'BLOOD') {
    list = list.filter(n => n.category && n.category.includes('রক্তদান'));
  } else if (currentNoticeCategory === 'WELFARE') {
    list = list.filter(n => n.category && n.category.includes('সমাজকল্যাণ'));
  } else if (currentNoticeCategory === 'GENERAL') {
    list = list.filter(n => n.category && (n.category.includes('সাধারণ') || n.category.includes('সার্কুলার') || n.category.includes('প্রশাসনিক')));
  } else if (currentNoticeCategory !== 'ALL') {
    list = list.filter(n => n.category === currentNoticeCategory);
  }

  // Search filter
  if (search) {
    list = list.filter(n => 
      (n.title && n.title.toLowerCase().includes(search)) ||
      (n.summary && n.summary.toLowerCase().includes(search)) ||
      (n.content && n.content.toLowerCase().includes(search)) ||
      (n.category && n.category.toLowerCase().includes(search))
    );
  }

  // Sort: pinned first, then newest date
  list.sort((a, b) => {
    if (a.priority === 'pinned' && b.priority !== 'pinned') return -1;
    if (b.priority === 'pinned' && a.priority !== 'pinned') return 1;
    return new Date(b.date || '2000-01-01') - new Date(a.date || '2000-01-01');
  });

  if (list.length === 0) {
    grid.innerHTML = '';
    grid.classList.add('hidden');
    if (emptyEl) emptyEl.classList.remove('hidden');
    return;
  }
  grid.classList.remove('hidden');
  if (emptyEl) emptyEl.classList.add('hidden');

  grid.innerHTML = list.map(n => {
    const b = getNoticeCategoryBadge(n.category);
    const isPinned = n.priority === 'pinned';
    const isUrgent = n.priority === 'urgent';

    return `
      <div class="bg-white rounded-3xl border ${isPinned ? 'border-rose-400 shadow-md ring-2 ring-rose-200' : 'border-slate-200 shadow-sm'} p-6 flex flex-col justify-between hover-lift relative overflow-hidden transition">
        ${isPinned ? `
          <div class="absolute -top-1 -right-1 bg-gradient-to-l from-rose-600 to-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-2xl shadow-sm flex items-center gap-1">
            <i class="fa-solid fa-thumbtack"></i> পিন করা
          </div>
        ` : ''}
        
        <div class="space-y-3">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${b.bg}">
              <i class="fa-solid ${b.icon}"></i> ${n.category}
            </span>
            <span class="text-xs text-slate-400 font-mono flex items-center gap-1">
              <i class="fa-regular fa-calendar"></i> ${n.date}
            </span>
          </div>

          <div>
            <h4 class="text-base sm:text-lg font-black text-slate-900 leading-snug hover:text-rose-600 transition cursor-pointer" onclick="openNoticeViewModal('${n.id}')">
              ${n.title}
            </h4>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
              ${n.summary || (n.content ? n.content.substring(0, 110) + '...' : '')}
            </p>
          </div>
        </div>

        <div class="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <div class="flex items-center gap-1.5 text-slate-500 text-[11px] font-bold truncate">
            <i class="fa-solid fa-signature text-rose-500"></i>
            <span class="truncate">${n.author || 'পরিচালনা পরিষদ'}</span>
          </div>
          <div class="flex items-center gap-1 shrink-0">
            <button onclick="openNoticeViewModal('${n.id}')" class="bg-rose-50 hover:bg-rose-100 text-rose-700 font-black px-3 py-1.5 rounded-xl border border-rose-200 transition flex items-center gap-1 shadow-sm">
              <span>পড়ুন</span> <i class="fa-solid fa-arrow-left text-[10px]"></i>
            </button>
            <div class="admin-only-feature hidden flex items-center gap-1">
              <button onclick="openNoticeEditModal('${n.id}')" title="সম্পাদনা" class="p-1.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 border border-blue-200">
                <i class="fa-solid fa-pen-to-square text-[11px]"></i>
              </button>
              <button onclick="adminDeleteNotice('${n.id}')" title="মুছুন" class="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 border border-red-200">
                <i class="fa-solid fa-trash text-[11px]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderHomeNotices() {
  const container = document.getElementById('home-notices-container');
  if (!container) return;

  const activeNotices = [...notices];
  activeNotices.sort((a, b) => {
    if (a.priority === 'pinned' && b.priority !== 'pinned') return -1;
    if (b.priority === 'pinned' && a.priority !== 'pinned') return 1;
    return new Date(b.date || '2000-01-01') - new Date(a.date || '2000-01-01');
  });

  const latestTwo = activeNotices.slice(0, 2);
  if (latestTwo.length === 0) {
    container.innerHTML = `<div class="col-span-full py-8 text-center bg-white/5 rounded-2xl border border-white/10 space-y-2">
      <div class="text-slate-400 text-2xl"><i class="fa-regular fa-folder-open"></i></div>
      <p class="text-slate-300 text-xs font-bold">বর্তমানে কোনো সক্রিয় নোটিশ নেই</p>
    </div>`;
    return;
  }

  container.innerHTML = latestTwo.map(n => {
    const isPinned = n.priority === 'pinned';
    return `
      <div class="bg-white/10 hover:bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/15 flex flex-col justify-between transition cursor-pointer" onclick="openNoticeViewModal('${n.id}')">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30">
              ${n.category}
            </span>
            <span class="text-[11px] font-mono text-slate-400">${n.date}</span>
          </div>
          <h4 class="font-bold text-white text-sm leading-snug line-clamp-2">
            ${isPinned ? '<i class="fa-solid fa-thumbtack text-rose-400 mr-1"></i>' : ''}${n.title}
          </h4>
          <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            ${n.summary || n.content}
          </p>
        </div>
        <div class="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-rose-300 font-bold">
          <span>বিস্তারিত সার্কুলার পড়ুন</span>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
      </div>
    `;
  }).join('');
}

function openNoticeViewModal(id) {
  const n = notices.find(x => x.id === id);
  if (!n) return;

  const idEl = document.getElementById('view-notice-id');
  const dateEl = document.getElementById('view-notice-date');
  const badgeEl = document.getElementById('view-notice-badge');
  const titleEl = document.getElementById('view-notice-title');
  const contentEl = document.getElementById('view-notice-content');

  if (idEl) idEl.textContent = n.id;
  if (dateEl) dateEl.textContent = n.date;
  if (badgeEl) badgeEl.textContent = n.category;
  if (titleEl) titleEl.textContent = n.title;
  if (contentEl) contentEl.textContent = n.content || n.summary || '';

  const modal = document.getElementById('notice-view-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeNoticeViewModal() {
  const modal = document.getElementById('notice-view-modal');
  if (modal) modal.classList.add('hidden');
}

function printOfficialNotice() {
  document.body.classList.add('printing-notice');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-notice');
  }, 1500);
}

function openNoticeEditModal(id = null) {
  const modal = document.getElementById('notice-edit-modal');
  const heading = document.getElementById('notice-modal-heading');
  const idInput = document.getElementById('notice-edit-id');
  const titleInput = document.getElementById('notice-input-title');
  const catInput = document.getElementById('notice-input-category');
  const priInput = document.getElementById('notice-input-priority');
  const dateInput = document.getElementById('notice-input-date');
  const authorInput = document.getElementById('notice-input-author');
  const summaryInput = document.getElementById('notice-input-summary');
  const contentInput = document.getElementById('notice-input-content');

  if (id) {
    const n = notices.find(x => x.id === id);
    if (!n) return;
    if (heading) heading.textContent = 'নোটিশ সম্পাদনা করুন';
    if (idInput) idInput.value = n.id;
    if (titleInput) titleInput.value = n.title;
    if (catInput) catInput.value = n.category;
    if (priInput) priInput.value = n.priority || 'normal';
    if (dateInput) dateInput.value = n.date;
    if (authorInput) authorInput.value = n.author || 'হালিম দেওয়ান (সভাপতি)';
    if (summaryInput) summaryInput.value = n.summary || '';
    if (contentInput) contentInput.value = n.content || '';
  } else {
    if (heading) heading.textContent = 'নতুন নোটিশ প্রকাশ';
    if (idInput) idInput.value = '';
    document.getElementById('notice-edit-form')?.reset();
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
  }

  if (modal) modal.classList.remove('hidden');
}

function closeNoticeEditModal() {
  const modal = document.getElementById('notice-edit-modal');
  if (modal) modal.classList.add('hidden');
}

async function handleNoticeSubmit(e) {
  e.preventDefault();
  const editId = document.getElementById('notice-edit-id')?.value;
  const title = document.getElementById('notice-input-title').value.trim();
  const category = document.getElementById('notice-input-category').value;
  const priority = document.getElementById('notice-input-priority').value;
  const date = document.getElementById('notice-input-date').value;
  const author = document.getElementById('notice-input-author').value;
  const summary = document.getElementById('notice-input-summary').value.trim();
  const content = document.getElementById('notice-input-content').value.trim();

  if (!title || !content) {
    Swal.fire({ icon: 'warning', title: 'অনুগ্রহ করে শিরোনাম ও বিস্তারিত বক্তব্য লিখুন!' });
    return;
  }

  let targetNotice;
  if (editId) {
    const idx = notices.findIndex(n => n.id === editId);
    if (idx !== -1) {
      notices[idx] = {
        ...notices[idx],
        title, category, priority, date, author, summary, content
      };
      targetNotice = notices[idx];
    }
  } else {
    let nextNum = notices.length + 1;
    while (notices.some(n => n.id === 'NOT-' + new Date().getFullYear() + '-' + String(nextNum).padStart(3, '0'))) {
      nextNum++;
    }
    targetNotice = {
      id: 'NOT-' + new Date().getFullYear() + '-' + String(nextNum).padStart(3, '0'),
      title, category, priority, date, author, summary, content,
      status: 'active'
    };
    notices.unshift(targetNotice);
  }

  // স্থানীয়ভাবে সাথে সাথে সংরক্ষণ ও রেন্ডার
  localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  renderNoticeBoard();
  renderHomeNotices();
  renderAdminNoticeList();
  updateNoticeStats();

  closeNoticeEditModal();

  // ক্লাউডে সংরক্ষণের চেষ্টা
  if (isSupabaseReady() && targetNotice) {
    const result = await cloudUpsertNotice(targetNotice);
    if (result && result.success) {
      Swal.fire({
        icon: 'success',
        title: editId ? 'নোটিশ সফলভাবে সংরক্ষিত হয়েছে!' : 'নতুন নোটিশ সফলভাবে প্রকাশিত হয়েছে!',
        text: 'সব ডিভাইস ও ব্রাউজারে দেখা যাবে।',
        confirmButtonColor: '#e11d48'
      });
    } else if (result && result.offline) {
      Swal.fire({
        icon: 'info',
        title: editId ? 'নোটিশ স্থানীয়ভাবে সংরক্ষিত' : 'নোটিশ স্থানীয়ভাবে প্রকাশিত',
        text: 'Supabase সংযোগ পাওয়া যাচ্ছে না। শুধু এই ডিভাইসে দেখা যাবে। অ্যাডমিন প্যানেলে Supabase Key সেট করুন।',
        confirmButtonColor: '#e11d48'
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'ক্লাউডে সংরক্ষণ ব্যর্থ!',
        text: 'নোটিশ এই ডিভাইসে সংরক্ষিত হয়েছে, কিন্তু অন্য ডিভাইসে দেখা যাবে না। ইন্টারনেট সংযোগ ও Supabase সেটিং পরীক্ষা করুন।',
        confirmButtonColor: '#e11d48'
      });
    }
  } else {
    // Supabase নেই — শুধু স্থানীয়
    Swal.fire({
      icon: 'success',
      title: editId ? 'নোটিশ সংরক্ষিত হয়েছে!' : 'নোটিশ প্রকাশিত হয়েছে!',
      text: 'Supabase সংযোগ নেই — শুধু এই ডিভাইসে দেখা যাবে।',
      confirmButtonColor: '#e11d48'
    });
  }
}

function adminDeleteNotice(id) {
  Swal.fire({
    title: 'নোটিশটি মুছে ফেলতে চান?',
    text: 'এই নোটিশটি স্থায়ীভাবে মুছে ফেলা হবে।',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'হ্যাঁ, মুছুন',
    cancelButtonText: 'বাতিল',
    confirmButtonColor: '#dc2626'
  }).then(res => {
    if (res.isConfirmed) {
      notices = notices.filter(n => n.id !== id);
      saveNotices();
      if (typeof isSupabaseReady === 'function' && isSupabaseReady()) cloudDeleteNotice(id);
      Swal.fire({ icon: 'success', title: 'নোটিশ মুছে ফেলা হয়েছে!', timer: 1200, showConfirmButton: false });
    }
  });
}

function adminTogglePinNotice(id) {
  const n = notices.find(x => x.id === id);
  if (!n) return;
  n.priority = (n.priority === 'pinned') ? 'normal' : 'pinned';
  saveNotices();
}

function renderAdminNoticeList() {
  const tbody = document.getElementById('admin-notice-tbody');
  const countBadge = document.getElementById('adm-notice-count-badge');
  if (!tbody) return;

  if (countBadge) countBadge.textContent = toBengaliNumeral(notices.length) + 'টি';

  if (notices.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center py-8 text-slate-400">কোনো নোটিশ নেই। "নতুন নোটিশ প্রকাশ" বাটনে ক্লিক করে প্রথম নোটিশ দিন।</td></tr>';
    return;
  }

  tbody.innerHTML = notices.map((n, idx) => {
    const isPinned = n.priority === 'pinned';
    const isUrgent = n.priority === 'urgent';
    return `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100">
        <td class="py-3 px-3 text-center text-slate-400 font-bold">${toBengaliNumeral(idx + 1)}</td>
        <td class="py-3 px-3 text-right">
          <strong class="text-slate-900 block leading-tight text-xs sm:text-sm">${n.title}</strong>
          <span class="text-slate-400 font-mono text-[10px]">${n.id}</span>
        </td>
        <td class="py-3 px-2 text-center">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            ${n.category}
          </span>
        </td>
        <td class="py-3 px-2 text-center font-mono text-[11px] text-slate-600">${n.date}</td>
        <td class="py-3 px-2 text-center text-[11px] text-slate-600 font-bold">${n.author || 'পরিচালনা পরিষদ'}</td>
        <td class="py-3 px-2 text-center">
          ${isPinned ? `
            <span class="bg-rose-100 text-rose-700 text-[10px] font-black px-2 py-0.5 rounded-full border border-rose-200">
              📌 পিন করা
            </span>
          ` : (isUrgent ? `
            <span class="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-200">
              🚨 জরুরি
            </span>
          ` : `
            <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
              সাধারণ
            </span>
          `)}
        </td>
        <td class="py-3 px-3 text-center">
          <div class="flex items-center justify-center gap-1">
            <button onclick="adminTogglePinNotice('${n.id}')" title="${isPinned ? 'আনপিন করুন' : 'পিন করুন'}" class="p-1.5 ${isPinned ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'} rounded hover:opacity-80">
              <i class="fa-solid fa-thumbtack text-[11px]"></i>
            </button>
            <button onclick="openNoticeViewModal('${n.id}')" title="দেখুন" class="p-1.5 bg-slate-100 text-slate-700 rounded hover:bg-slate-200">
              <i class="fa-solid fa-eye text-[11px]"></i>
            </button>
            <button onclick="openNoticeEditModal('${n.id}')" title="সম্পাদনা" class="p-1.5 bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
              <i class="fa-solid fa-pen-to-square text-[11px]"></i>
            </button>
            <button onclick="adminDeleteNotice('${n.id}')" title="মুছুন" class="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100">
              <i class="fa-solid fa-trash text-[11px]"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}


// ==============================================================================
// SUPABASE CLOUD DATABASE & REALTIME SYNCHRONIZATION ENGINE
// ==============================================================================

const STORAGE_KEYS_CLOUD = {
  SUPABASE_CONFIG: "caf_supabase_config_v4"
};

// Ensure Supabase state variables
if (!SUPABASE_CONFIG) {
  SUPABASE_CONFIG = {
    url: "https://evnqybxfdzrvormdyutu.supabase.co",
    anonKey: "",
    enabled: true
  };
} else {
  if (!SUPABASE_CONFIG.url) SUPABASE_CONFIG.url = "https://evnqybxfdzrvormdyutu.supabase.co";
  if (!SUPABASE_CONFIG.anonKey) SUPABASE_CONFIG.anonKey = "";
  SUPABASE_CONFIG.enabled = true;
}

// Embedded SQL Schema for Admin Modal view/copy
const EMBEDDED_SUPABASE_SCHEMA_SQL = "-- ==============================================================================\n-- চাঁদের আলো ফাউন্ডেশন (Chader Alo Foundation)\n-- Supabase PostgreSQL Cloud Database Schema & Row Level Security (RLS) Setup\n-- ==============================================================================\n\n-- 1. Enable UUID Extension (if needed)\nCREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";\n\n-- ------------------------------------------------------------------------------\n-- 2. CREATE TABLES\n-- ------------------------------------------------------------------------------\n\n-- Table: Blood Donors (রক্তদাতা তালিকা)\nCREATE TABLE IF NOT EXISTS public.donors (\n    id TEXT PRIMARY KEY,\n    name TEXT NOT NULL,\n    father TEXT DEFAULT '',\n    blood_group TEXT NOT NULL,\n    dob TEXT DEFAULT '',\n    gender TEXT DEFAULT 'পুরুষ',\n    weight NUMERIC DEFAULT 0,\n    phone TEXT NOT NULL,\n    whatsapp TEXT DEFAULT '',\n    upazila TEXT DEFAULT 'গজারিয়া',\n    village TEXT DEFAULT '',\n    has_donated TEXT DEFAULT 'হ্যাঁ',\n    last_donation_date TEXT DEFAULT '',\n    donation_count INTEGER DEFAULT 0,\n    verified BOOLEAN DEFAULT TRUE,\n    status TEXT DEFAULT 'active',\n    photo TEXT DEFAULT '',\n    is_demo BOOLEAN DEFAULT FALSE,\n    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- Table: Volunteers (স্বেচ্ছাসেবী কর্নার)\nCREATE TABLE IF NOT EXISTS public.volunteers (\n    id TEXT PRIMARY KEY,\n    name TEXT NOT NULL,\n    father TEXT DEFAULT '',\n    blood_group TEXT DEFAULT '',\n    dob TEXT DEFAULT '',\n    profession TEXT DEFAULT '',\n    phone TEXT NOT NULL,\n    whatsapp TEXT DEFAULT '',\n    upazila TEXT DEFAULT 'গজারিয়া',\n    village TEXT DEFAULT '',\n    interest TEXT DEFAULT '',\n    photo TEXT DEFAULT '',\n    status TEXT DEFAULT 'active',\n    joined_date TEXT DEFAULT '',\n    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- Table: Emergency Blood Requests (জরুরি রক্তের আবেদন)\nCREATE TABLE IF NOT EXISTS public.emergency_requests (\n    id TEXT PRIMARY KEY,\n    patient_name TEXT NOT NULL,\n    blood_group TEXT NOT NULL,\n    bags TEXT DEFAULT '1',\n    time TEXT DEFAULT 'জরুরি',\n    hospital TEXT DEFAULT '',\n    contact TEXT DEFAULT '',\n    phone TEXT NOT NULL,\n    reason TEXT DEFAULT '',\n    urgency TEXT DEFAULT 'জরুরি',\n    status TEXT DEFAULT 'active', -- active, managed, cancelled\n    managed_date TEXT DEFAULT '',\n    donor_name TEXT DEFAULT '',\n    donor_phone TEXT DEFAULT '',\n    notes TEXT DEFAULT '',\n    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- Table: Notice Board (নোটিশ ও সার্কুলার)\nCREATE TABLE IF NOT EXISTS public.notices (\n    id TEXT PRIMARY KEY,\n    title TEXT NOT NULL,\n    category TEXT NOT NULL,\n    date TEXT DEFAULT '',\n    priority TEXT DEFAULT 'normal', -- normal, urgent, pinned\n    author TEXT DEFAULT 'পরিচালনা পরিষদ',\n    signee_role TEXT DEFAULT 'সভাপতি',\n    status TEXT DEFAULT 'active',\n    summary TEXT DEFAULT '',\n    content TEXT NOT NULL,\n    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- Table: Activities & Gallery (গ্যালারি ও সামাজিক কর্মকাণ্ড)\nCREATE TABLE IF NOT EXISTS public.activities (\n    id TEXT PRIMARY KEY,\n    title TEXT NOT NULL,\n    category TEXT NOT NULL,\n    media_type TEXT DEFAULT 'image', -- image, video\n    media_url TEXT DEFAULT '',\n    date TEXT DEFAULT '',\n    location TEXT DEFAULT '',\n    description TEXT DEFAULT '',\n    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- Table: Aid & Service Applications (মানবকল্যাণ ও সেবামূলক আবেদন)\nCREATE TABLE IF NOT EXISTS public.aid_applications (\n    id TEXT PRIMARY KEY,\n    service_name TEXT NOT NULL,\n    name TEXT NOT NULL,\n    phone TEXT NOT NULL,\n    address TEXT DEFAULT '',\n    details TEXT DEFAULT '',\n    status TEXT DEFAULT 'pending', -- pending, approved, rejected\n    submitted_at TEXT DEFAULT '',\n    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- Table: Donation Records (রক্তদান সম্পন্ন ইতিহাস)\nCREATE TABLE IF NOT EXISTS public.donation_records (\n    id TEXT PRIMARY KEY,\n    request_id TEXT DEFAULT '',\n    patient_name TEXT DEFAULT '',\n    patient_phone TEXT DEFAULT '',\n    hospital TEXT DEFAULT '',\n    blood_group TEXT DEFAULT '',\n    bags TEXT DEFAULT '1',\n    donor_name TEXT DEFAULT '',\n    donor_phone TEXT DEFAULT '',\n    donor_address TEXT DEFAULT '',\n    donation_date TEXT DEFAULT '',\n    managed_date TEXT DEFAULT '',\n    notes TEXT DEFAULT '',\n    status TEXT DEFAULT 'managed',\n    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- Table: Site Settings (ওয়েবসাইট কনফিগারেশন)\nCREATE TABLE IF NOT EXISTS public.site_settings (\n    key TEXT PRIMARY KEY,\n    value JSONB NOT NULL,\n    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- Table: Global Visitor Counter (ভিজিটর কাউন্টার)\nCREATE TABLE IF NOT EXISTS public.visitor_counter (\n    id TEXT PRIMARY KEY DEFAULT 'main',\n    count BIGINT DEFAULT 1,\n    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL\n);\n\n-- ------------------------------------------------------------------------------\n-- 3. ROW LEVEL SECURITY (RLS) POLICIES\n-- ------------------------------------------------------------------------------\n\n-- Enable RLS on all tables\nALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.emergency_requests ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.aid_applications ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.donation_records ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.visitor_counter ENABLE ROW LEVEL SECURITY;\n\n-- Clean existing policies (idempotent setup)\nDO $$\nBEGIN\n    DROP POLICY IF EXISTS \"Public can view donors\" ON public.donors;\n    DROP POLICY IF EXISTS \"Public can register as donor\" ON public.donors;\n    DROP POLICY IF EXISTS \"Admins can update donors\" ON public.donors;\n    DROP POLICY IF EXISTS \"Admins can delete donors\" ON public.donors;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.donors;\n\n    DROP POLICY IF EXISTS \"Public can view volunteers\" ON public.volunteers;\n    DROP POLICY IF EXISTS \"Public can register as volunteer\" ON public.volunteers;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.volunteers;\n\n    DROP POLICY IF EXISTS \"Public can view emergency_requests\" ON public.emergency_requests;\n    DROP POLICY IF EXISTS \"Public can create emergency request\" ON public.emergency_requests;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.emergency_requests;\n\n    DROP POLICY IF EXISTS \"Public can view notices\" ON public.notices;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.notices;\n\n    DROP POLICY IF EXISTS \"Public can view activities\" ON public.activities;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.activities;\n\n    DROP POLICY IF EXISTS \"Public can submit aid application\" ON public.aid_applications;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.aid_applications;\n\n    DROP POLICY IF EXISTS \"Public can view donation_records\" ON public.donation_records;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.donation_records;\n\n    DROP POLICY IF EXISTS \"Public can view site_settings\" ON public.site_settings;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.site_settings;\n\n    DROP POLICY IF EXISTS \"Public can view visitor_counter\" ON public.visitor_counter;\n    DROP POLICY IF EXISTS \"Full access to authenticated\" ON public.visitor_counter;\nEND $$;\n\n-- A. PUBLIC READ POLICIES (সবার জন্য উন্মুক্ত প্রদর্শন)\nCREATE POLICY \"Public can view donors\" ON public.donors FOR SELECT USING (true);\nCREATE POLICY \"Public can view volunteers\" ON public.volunteers FOR SELECT USING (true);\nCREATE POLICY \"Public can view emergency_requests\" ON public.emergency_requests FOR SELECT USING (true);\nCREATE POLICY \"Public can view notices\" ON public.notices FOR SELECT USING (true);\nCREATE POLICY \"Public can view activities\" ON public.activities FOR SELECT USING (true);\nCREATE POLICY \"Public can view donation_records\" ON public.donation_records FOR SELECT USING (true);\nCREATE POLICY \"Public can view site_settings\" ON public.site_settings FOR SELECT USING (true);\nCREATE POLICY \"Public can view visitor_counter\" ON public.visitor_counter FOR SELECT USING (true);\n\n-- B. PUBLIC INSERT POLICIES (ওয়েবসাইটে ভিজিটররা সরাসরি যেসব আবেদন করতে পারবেন)\nCREATE POLICY \"Public can register as donor\" ON public.donors FOR INSERT WITH CHECK (true);\nCREATE POLICY \"Public can register as volunteer\" ON public.volunteers FOR INSERT WITH CHECK (true);\nCREATE POLICY \"Public can create emergency request\" ON public.emergency_requests FOR INSERT WITH CHECK (true);\nCREATE POLICY \"Public can submit aid application\" ON public.aid_applications FOR INSERT WITH CHECK (true);\n\n-- C. ADMIN POLICIES (লগইন করা অ্যাডমিনদের জন্য সম্পূর্ণ নিয়ন্ত্রণ)\n-- When Admin signs in with Supabase Auth (authenticated role):\nCREATE POLICY \"Full access to authenticated on donors\" ON public.donors FOR ALL TO authenticated USING (true) WITH CHECK (true);\nCREATE POLICY \"Full access to authenticated on volunteers\" ON public.volunteers FOR ALL TO authenticated USING (true) WITH CHECK (true);\nCREATE POLICY \"Full access to authenticated on emergency_requests\" ON public.emergency_requests FOR ALL TO authenticated USING (true) WITH CHECK (true);\nCREATE POLICY \"Full access to authenticated on notices\" ON public.notices FOR ALL TO authenticated USING (true) WITH CHECK (true);\nCREATE POLICY \"Full access to authenticated on activities\" ON public.activities FOR ALL TO authenticated USING (true) WITH CHECK (true);\nCREATE POLICY \"Full access to authenticated on aid_applications\" ON public.aid_applications FOR ALL TO authenticated USING (true) WITH CHECK (true);\nCREATE POLICY \"Full access to authenticated on donation_records\" ON public.donation_records FOR ALL TO authenticated USING (true) WITH CHECK (true);\nCREATE POLICY \"Full access to authenticated on site_settings\" ON public.site_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);\nCREATE POLICY \"Full access to authenticated on visitor_counter\" ON public.visitor_counter FOR ALL TO authenticated USING (true) WITH CHECK (true);\n\n-- D. ANON PERMISSIVE POLICIES FOR DIRECT PIN ADMIN ACCESS\n-- Note: Allows frontend CRUD operations using Anon Key while maintaining client-side Admin PIN verification.\nCREATE POLICY \"Allow anon update and delete on donors\" ON public.donors FOR ALL TO anon USING (true) WITH CHECK (true);\nCREATE POLICY \"Allow anon update and delete on volunteers\" ON public.volunteers FOR ALL TO anon USING (true) WITH CHECK (true);\nCREATE POLICY \"Allow anon update and delete on emergency_requests\" ON public.emergency_requests FOR ALL TO anon USING (true) WITH CHECK (true);\nCREATE POLICY \"Allow anon update and delete on notices\" ON public.notices FOR ALL TO anon USING (true) WITH CHECK (true);\nCREATE POLICY \"Allow anon update and delete on activities\" ON public.activities FOR ALL TO anon USING (true) WITH CHECK (true);\nCREATE POLICY \"Allow anon select and update on aid_applications\" ON public.aid_applications FOR ALL TO anon USING (true) WITH CHECK (true);\nCREATE POLICY \"Allow anon update and delete on donation_records\" ON public.donation_records FOR ALL TO anon USING (true) WITH CHECK (true);\nCREATE POLICY \"Allow anon update on site_settings\" ON public.site_settings FOR ALL TO anon USING (true) WITH CHECK (true);\nCREATE POLICY \"Allow anon update on visitor_counter\" ON public.visitor_counter FOR ALL TO anon USING (true) WITH CHECK (true);\n\n-- ------------------------------------------------------------------------------\n-- 4. REALTIME REPLICATION (এক ডিভাইসের পরিবর্তন অন্য ডিভাইসে স্বয়ংক্রিয় রিয়েলটাইম আপডেট)\n-- ------------------------------------------------------------------------------\nALTER PUBLICATION supabase_realtime ADD TABLE public.donors;\nALTER PUBLICATION supabase_realtime ADD TABLE public.volunteers;\nALTER PUBLICATION supabase_realtime ADD TABLE public.emergency_requests;\nALTER PUBLICATION supabase_realtime ADD TABLE public.notices;\nALTER PUBLICATION supabase_realtime ADD TABLE public.activities;\nALTER PUBLICATION supabase_realtime ADD TABLE public.aid_applications;\nALTER PUBLICATION supabase_realtime ADD TABLE public.donation_records;\nALTER PUBLICATION supabase_realtime ADD TABLE public.site_settings;\nALTER PUBLICATION supabase_realtime ADD TABLE public.visitor_counter;\n\n-- ------------------------------------------------------------------------------\n-- 5. ATOMIC VISITOR INCREMENT FUNCTION (নিরাপদ ভিজিটর কাউন্টার)\n-- ------------------------------------------------------------------------------\nCREATE OR REPLACE FUNCTION public.increment_visitor_count()\nRETURNS BIGINT AS $$\nDECLARE\n  new_count BIGINT;\nBEGIN\n  INSERT INTO public.visitor_counter (id, count)\n  VALUES ('main', 1)\n  ON CONFLICT (id)\n  DO UPDATE SET count = public.visitor_counter.count + 1, updated_at = NOW()\n  RETURNING count INTO new_count;\n  RETURN new_count;\nEND;\n$$ LANGUAGE plpgsql SECURITY DEFINER;\n\n-- ------------------------------------------------------------------------------\n-- 6. SEED INITIAL DATA (প্রাথমিক ডিফল্ট ডেটা যা কখনোই হারাবে না)\n-- ------------------------------------------------------------------------------\n\n-- Seed Donors (হালিম দেওয়ান ও মোঃ মাসুম শিকদার)\nINSERT INTO public.donors (id, name, father, blood_group, dob, gender, weight, phone, whatsapp, upazila, village, has_donated, last_donation_date, donation_count, verified, status, photo, is_demo)\nVALUES \n(\n  'CAF-BD-1001',\n  'হালিম দেওয়ান',\n  '',\n  'B+',\n  '1980-01-01',\n  'পুরুষ',\n  70,\n  '01914927933',\n  '01914927933',\n  'গজারিয়া',\n  'কলেজ রোড',\n  'হ্যাঁ',\n  '2026-03-25',\n  5,\n  true,\n  'active',\n  'assets/leader_halim.jpg',\n  false\n),\n(\n  'CAF-BD-1002',\n  'মোঃ মাসুম শিকদার',\n  '',\n  'A+',\n  '1985-05-10',\n  'পুরুষ',\n  68,\n  '01785677062',\n  '01785677062',\n  'গজারিয়া',\n  'হোগলাকান্দি, ভবেরচর, কলেজ রোড',\n  'হ্যাঁ',\n  '2026-08-02',\n  21,\n  true,\n  'active',\n  'assets/leader_masum.png',\n  false\n)\nON CONFLICT (id) DO NOTHING;\n\n-- Seed Notices (৩টি অফিসিয়াল ডিফল্ট নোটিশ)\nINSERT INTO public.notices (id, title, category, date, priority, author, signee_role, status, summary, content)\nVALUES\n(\n  'NOT-2026-001',\n  'বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান ক্যাম্পেইন-২০২৬',\n  'রক্তদান কর্মসূচি',\n  '2026-10-25',\n  'pinned',\n  'হালিম দেওয়ান (সভাপতি)',\n  'সভাপতি',\n  'active',\n  'আগামী শুক্রবার ভবেরচর কলেজ রোড প্রাঙ্গণে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও রক্তদান ক্যাম্পেইন অনুষ্ঠিত হবে।',\n  'চাঁদের আলো ফাউন্ডেশনের সকল শুভাকাঙ্ক্ষী ও এলাকাবাসীর সদয় অবগতির জন্য জানানো যাচ্ছে যে, আর্ত মানবতার সেবায় নিয়মিত কর্মসূচির অংশ হিসেবে আগামী শুক্রবার সকাল ৯:০০ টা থেকে বিকেল ৫:০০ টা পর্যন্ত ভবেরচর কলেজ রোডস্থ অস্থায়ী কার্যালয়ে এক বিশাল ''বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান কর্মসূচি-২০২৬'' অনুষ্ঠিত হবে।\\n\\nউক্ত ক্যাম্পেইনে উপস্থিত থাকবেন গজারিয়া উপজেলার বিশিষ্ট সমাজসেবক, চিকিৎসকবৃন্দ ও ফাউন্ডেশনের কার্যনির্বাহী পরিষদের নেতৃবৃন্দ। ১৮ থেকে ৬০ বছর বয়সী সকল সুস্থ ব্যক্তিকে এই মহৎ রক্তদান কর্মসূচিতে অংশগ্রহণ করে মুমূর্ষু রোগীর পাশে দাঁড়ানোর উদাত্ত আহ্বান জানানো হচ্ছে।'\n),\n(\n  'NOT-2026-002',\n  'শীতার্ত ও সুবিধাবঞ্চিত মানুষের মাঝে শীতবস্ত্র বিতরণ সংক্রান্ত জরুরি বিজ্ঞপ্তি',\n  'সমাজকল্যাণ',\n  '2026-10-20',\n  'urgent',\n  'মোঃ মাসুম শিকদার (সাধারণ সম্পাদক)',\n  'সাধারণ সম্পাদক',\n  'active',\n  'আসন্ন শীত মৌসুমে অসহায় ও দরিদ্র পরিবারের মাঝে কম্বল ও শীতবস্ত্র বিতরণের তালিকা প্রস্তুত কার্যক্রম শুরু হয়েছে।',\n  'চাঁদের আলো ফাউন্ডেশনের উদ্যোগে আগামী মাসে গজারিয়া উপজেলার বিভিন্ন ইউনিয়নের প্রত্যন্ত অঞ্চলে অসহায় বিধবা, এতিম ও দরিদ্র পরিবারের মাঝে শীতবস্ত্র ও কম্বল বিতরণ কর্মসূচি পরিচালিত হবে।\\n\\nফাউন্ডেশনের সকল ইউনিয়ন ও ওয়ার্ড পর্যায়ের স্বেচ্ছাসেবীদের আগামী ৫ নভেম্বরের মধ্যে নিজ নিজ এলাকার প্রকৃত অসচ্ছল পরিবারের তালিকা প্রস্তুত করে সাধারণ সম্পাদকের নিকট জমা দেওয়ার জন্য নির্দেশ প্রদান করা হলো। যেকোনো তথ্যের জন্য সরাসরি হেল্পলাইনে (০১৯১৪-৯২৭৯৩৩) যোগাযোগ করার অনুরোধ করা হলো।'\n),\n(\n  'NOT-2026-003',\n  'ফাউন্ডেশনের আজীবন ও সাধারণ সদস্যপদ গ্রহণ নীতিমালা ও ফরম বিতরণ',\n  'সাধারণ নোটিশ',\n  '2026-10-10',\n  'normal',\n  'কার্যনির্বাহী পরিষদ (যৌথ)',\n  'সাধারণ সম্পাদক',\n  'active',\n  'চাঁদের আলো ফাউন্ডেশনের গঠনতন্ত্রের ধারা-০৫ মোতাবেক নতুন সদস্যপদ গ্রহণের আবেদন আহ্বান করা যাচ্ছে।',\n  'চাঁদের আলো ফাউন্ডেশনের গঠনতন্ত্র অনুযায়ী যারা আর্ত মানবতার সেবায় আত্মনিয়োগ করতে চান, তাদের জন্য আজীবন সদস্য ও সাধারণ সদস্যপদ গ্রহণের আবেদন উন্মুক্ত করা হয়েছে।\\n\\nআগ্রহী ব্যক্তিবর্গ ওয়েবসাইট অথবা কেন্দ্রীয় কার্যালয় (বিসমিল্লাহ ভবন, কলেজ রোড, ভবেরচর) থেকে সদস্যপদ ফরম সংগ্রহ ও পূরণ করে জমা দিতে পারবেন। আজীবন সদস্যপদের এককালীন অনুদান ১০,০০০/- টাকা এবং সাধারণ সদস্যপদের মাসিক ফি ১০০/- টাকা নির্ধারণ করা আছে।'\n)\nON CONFLICT (id) DO NOTHING;\n\n-- Seed Activities (গ্যালারির ডিফল্ট ছবি ও তথ্য)\nINSERT INTO public.activities (id, title, category, media_type, media_url, date, location, description)\nVALUES\n(\n  'ACT-01',\n  'গজারিয়ায় বিনামূল্যে রক্তের গ্রুপ নির্ণয়',\n  'রক্তদান',\n  'image',\n  'assets/activity_blood.jpg',\n  '2021-11-14',\n  'কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়, ইমামপুর, গজারিয়া',\n  'মুন্সীগঞ্জের গজারিয়া উপজেলার ইমামপুর ইউনিয়নের কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়ে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বাস্থ্য সচেতনতামূলক কর্মসূচি অনুষ্ঠিত হয়। এতে চার শতাধিক মানুষের রক্তের গ্রুপ নির্ণয় করা হয়।'\n),\n(\n  'ACT-02',\n  'অসহায় ও শীতার্ত মানুষের মাঝে শীতবস্ত্র বিতরণ',\n  'ত্রাণ',\n  'image',\n  '',\n  '2022-01-10',\n  'হোগলাকান্দি, গজারিয়া',\n  'শীত মৌসুমে হতদরিদ্র পরিবারের মাঝে কম্বল ও গরম কাপড় বিতরণ কর্মসূচি।'\n),\n(\n  'ACT-03',\n  'মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১',\n  'বৃক্ষরোপণ',\n  'image',\n  'assets/activity_tree.jpg',\n  '2021-07-06',\n  'গজারিয়া, মুন্সীগঞ্জ',\n  'পরিবেশের ভারসাম্য রক্ষা ও সবুজায়নের লক্ষ্যে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১ পরিচালিত হয় এবং বিভিন্ন প্রতিষ্ঠানে ফলজ ও বনজ গাছের চারা রোপণ করা হয়।'\n)\nON CONFLICT (id) DO NOTHING;\n\n-- Initial Visitor Counter Row\nINSERT INTO public.visitor_counter (id, count)\nVALUES ('main', 1)\nON CONFLICT (id) DO NOTHING;\n";

function getSupabaseConfig() {
  // URL is hardcoded — always use it
  SUPABASE_CONFIG.url = "https://evnqybxfdzrvormdyutu.supabase.co";
  // Load saved key from localStorage (set via Admin Panel — works across browser sessions)
  try {
    const saved = localStorage.getItem(STORAGE_KEYS_CLOUD.SUPABASE_CONFIG);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.anonKey && parsed.anonKey.length > 20) {
        SUPABASE_CONFIG.anonKey = parsed.anonKey;
      }
    }
  } catch(e) {}
  SUPABASE_CONFIG.enabled = !!(SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey);
  return SUPABASE_CONFIG;
}

function isSupabaseReady() {
  const key = SUPABASE_CONFIG.anonKey || '';
  // Valid Supabase keys: either new "sb_publishable_..." format (>20 chars) or JWT format starting with "eyJ"
  // Reject only empty, placeholder "sb_publishable_..." (literal), or too-short keys
  const PLACEHOLDER = 'sb_publishable_...';
  const isEmpty = !key || key.trim() === '';
  const isLiteral = key === PLACEHOLDER;
  // A valid new-format key starts with "sb_publishable_" and has more than 30 chars
  const isNewFormat = key.startsWith('sb_publishable_') && key.length > 30;
  // A valid JWT key starts with "eyJ" and is >100 chars
  const isJwtFormat = key.startsWith('eyJ') && key.length > 100;
  const isValidKey = isNewFormat || isJwtFormat;
  return supabaseClient !== null && SUPABASE_CONFIG.enabled && !!SUPABASE_CONFIG.url && !isEmpty && !isLiteral && isValidKey;
}

function initSupabaseClient() {
  getSupabaseConfig();
  if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
    updateCloudStatusBadge(false, 'লোকাল মোড — অ্যাডমিন প্যানেলে Supabase Key সেট করুন');
    return null;
  }

  if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.warn('Supabase JS library not loaded (offline or CDN blocked). Using local fallback.');
    updateCloudStatusBadge(false, 'অফলাইন মোড (লাইব্রেরি লোড হয়নি)');
    return null;
  }

  try {
    supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey, {
      auth: { persistSession: true }
    });
    SUPABASE_CONFIG.enabled = true;
    updateCloudStatusBadge(true, 'সংযুক্ত (Supabase Connected)');
    return supabaseClient;
  } catch(e) {
    console.error('Failed to initialize Supabase client:', e);
    updateCloudStatusBadge(false, 'কানেকশন ত্রুটি');
    return null;
  }
}

function updateCloudStatusBadge(isConnected, customText = '') {
  const badge = document.getElementById('cloud-status-badge');
  if (!badge) return;

  if (isConnected) {
    badge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-sm';
    badge.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600"></i> <span>${customText || 'ক্লাউড সক্রিয় (সব ডিভাইসে সিঙ্ক হচ্ছে)'}</span>`;
  } else {
    badge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300 shadow-sm';
    badge.innerHTML = `<i class="fa-solid fa-circle-exclamation text-amber-600 animate-pulse"></i> <span>${customText || 'লোকাল মোড (ক্লাউড আনকানেক্টেড)'}</span>`;
  }
  updateCloudMetricsUI();
}

function updateCloudMetricsUI() {
  const mDonors = document.getElementById('cloud-metric-donors');
  const mVol = document.getElementById('cloud-metric-volunteers');
  const mReq = document.getElementById('cloud-metric-requests');
  const mNotices = document.getElementById('cloud-metric-notices');
  const mActs = document.getElementById('cloud-metric-activities');
  const mAid = document.getElementById('cloud-metric-aid');

  if (mDonors) mDonors.textContent = toBengaliNumeral(donors.length);
  if (mVol) mVol.textContent = toBengaliNumeral(volunteers.length);
  if (mReq) mReq.textContent = toBengaliNumeral(emergencyRequests.length);
  if (mNotices) mNotices.textContent = toBengaliNumeral(notices.length);
  if (mActs) mActs.textContent = toBengaliNumeral(activities.length);
  if (mAid) mAid.textContent = toBengaliNumeral(aidApplications.length);
}

// ==============================================================================
// DATA CONVERTERS (Frontend Objects <-> PostgreSQL Rows)
// ==============================================================================

function donorToRow(d) {
  return {
    id: d.id,
    name: d.name,
    father: d.father || '',
    blood_group: d.bloodGroup,
    dob: d.dob || '',
    gender: d.gender || 'পুরুষ',
    weight: d.weight ? Number(d.weight) : 0,
    phone: d.phone,
    whatsapp: d.whatsapp || '',
    upazila: d.upazila || 'গজারিয়া',
    village: d.village || '',
    has_donated: d.hasDonated || 'হ্যাঁ',
    last_donation_date: d.lastDonationDate || '',
    donation_count: d.donationCount ? Number(d.donationCount) : 0,
    verified: Boolean(d.verified),
    status: d.status || 'active',
    photo: d.photo || '',
    is_demo: Boolean(d.isDemo)
  };
}

function rowToDonor(r) {
  return {
    id: r.id,
    name: r.name,
    father: r.father || '',
    bloodGroup: r.blood_group,
    dob: r.dob || '',
    gender: r.gender || 'পুরুষ',
    weight: r.weight || 0,
    phone: r.phone,
    whatsapp: r.whatsapp || '',
    upazila: r.upazila || 'গজারিয়া',
    village: r.village || '',
    hasDonated: r.has_donated || 'হ্যাঁ',
    lastDonationDate: r.last_donation_date || '',
    donationCount: r.donation_count || 0,
    verified: r.verified !== false,
    status: r.status || 'active',
    photo: r.photo || '',
    isDemo: Boolean(r.is_demo)
  };
}

function volunteerToRow(v) {
  return {
    id: v.id,
    name: v.name,
    father: v.father || '',
    blood_group: v.bloodGroup || '',
    dob: v.dob || '',
    profession: v.profession || '',
    phone: v.phone,
    whatsapp: v.whatsapp || '',
    upazila: v.upazila || 'গজারিয়া',
    village: v.village || '',
    interest: v.interest || '',
    photo: v.photo || '',
    status: v.status || 'active',
    joined_date: v.joinedDate || ''
  };
}

function rowToVolunteer(r) {
  return {
    id: r.id,
    name: r.name,
    father: r.father || '',
    bloodGroup: r.blood_group || '',
    dob: r.dob || '',
    profession: r.profession || '',
    phone: r.phone,
    whatsapp: r.whatsapp || '',
    upazila: r.upazila || 'গজারিয়া',
    village: r.village || '',
    interest: r.interest || '',
    photo: r.photo || '',
    status: r.status || 'active',
    joinedDate: r.joined_date || ''
  };
}

function requestToRow(req) {
  return {
    id: req.id,
    patient_name: req.patientName,
    blood_group: req.bloodGroup,
    bags: req.bags || '1',
    time: req.time || 'জরুরি',
    hospital: req.hospital || '',
    contact: req.contact || '',
    phone: req.phone,
    reason: req.reason || '',
    urgency: req.urgency || 'জরুরি',
    status: req.status || 'active',
    managed_date: req.managedDate || '',
    donor_name: req.donorName || '',
    donor_phone: req.donorPhone || '',
    notes: req.notes || ''
  };
}

function rowToRequest(r) {
  return {
    id: r.id,
    patientName: r.patient_name,
    bloodGroup: r.blood_group,
    bags: r.bags || '1',
    time: r.time || 'জরুরি',
    hospital: r.hospital || '',
    contact: r.contact || '',
    phone: r.phone,
    reason: r.reason || '',
    urgency: r.urgency || 'জরুরি',
    status: r.status || 'active',
    managedDate: r.managed_date || '',
    donorName: r.donor_name || '',
    donorPhone: r.donor_phone || '',
    notes: r.notes || ''
  };
}

function noticeToRow(n) {
  return {
    id: n.id,
    title: n.title,
    category: n.category,
    date: n.date || '',
    priority: n.priority || 'normal',
    author: n.author || 'পরিচালনা পরিষদ',
    signee_role: n.signeeRole || 'সভাপতি',
    status: n.status || 'active',
    summary: n.summary || '',
    content: n.content || ''
  };
}

function rowToNotice(r) {
  return {
    id: r.id,
    title: r.title,
    category: r.category,
    date: r.date || '',
    priority: r.priority || 'normal',
    author: r.author || 'পরিচালনা পরিষদ',
    signeeRole: r.signee_role || 'সভাপতি',
    status: r.status || 'active',
    summary: r.summary || '',
    content: r.content || ''
  };
}

function activityToRow(a) {
  return {
    id: a.id,
    title: a.title,
    category: a.category,
    media_type: a.mediaType || 'image',
    media_url: a.mediaUrl || '',
    date: a.date || '',
    location: a.location || '',
    description: a.description || a.desc || ''
  };
}

function rowToActivity(r) {
  return {
    id: r.id,
    title: r.title,
    category: r.category,
    mediaType: r.media_type || 'image',
    mediaUrl: r.media_url || '',
    date: r.date || '',
    location: r.location || '',
    description: r.description || '',
    desc: r.description || ''
  };
}

function aidToRow(a) {
  return {
    id: a.id,
    service_name: a.serviceName,
    name: a.name,
    phone: a.phone,
    address: a.address || '',
    details: a.details || '',
    status: a.status || 'pending',
    submitted_at: a.submittedAt || ''
  };
}

function rowToAid(r) {
  return {
    id: r.id,
    serviceName: r.service_name,
    name: r.name,
    phone: r.phone,
    address: r.address || '',
    details: r.details || '',
    status: r.status || 'pending',
    submittedAt: r.submitted_at || ''
  };
}

function recordToRow(rec) {
  return {
    id: rec.id,
    request_id: rec.requestId || '',
    patient_name: rec.patientName || '',
    patient_phone: rec.patientPhone || '',
    hospital: rec.hospital || '',
    blood_group: rec.bloodGroup || '',
    bags: rec.bags || '1',
    donor_name: rec.donorName || '',
    donor_phone: rec.donorPhone || '',
    donor_address: rec.donorAddress || '',
    donation_date: rec.donationDate || '',
    managed_date: rec.managedDate || '',
    notes: rec.notes || '',
    status: rec.status || 'managed'
  };
}

function rowToRecord(r) {
  return {
    id: r.id,
    requestId: r.request_id || '',
    patientName: r.patient_name || '',
    patientPhone: r.patient_phone || '',
    hospital: r.hospital || '',
    bloodGroup: r.blood_group || '',
    bags: r.bags || '1',
    donorName: r.donor_name || '',
    donorPhone: r.donor_phone || '',
    donorAddress: r.donor_address || '',
    donationDate: r.donation_date || '',
    managedDate: r.managed_date || '',
    notes: r.notes || '',
    status: r.status || 'managed'
  };
}

// ==============================================================================
// CLOUD FETCH & SYNCHRONIZATION
// ==============================================================================

async function syncAllFromSupabase(isManual = false) {
  if (!isSupabaseReady()) return;
  if (isSyncingFromCloud) return;
  isSyncingFromCloud = true;

  if (isManual && typeof Swal !== 'undefined') {
    Swal.fire({
      title: 'ক্লাউড ডেটা লোড হচ্ছে...',
      text: 'Supabase থেকে সর্বশেষ তথ্য সিঙ্ক্রোনাইজ হচ্ছে',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });
  }

  try {
    const [
      donorsRes,
      volunteersRes,
      requestsRes,
      noticesRes,
      activitiesRes,
      aidRes,
      recordsRes,
      settingsRes
    ] = await Promise.allSettled([
      supabaseClient.from('donors').select('*'),
      supabaseClient.from('volunteers').select('*'),
      supabaseClient.from('emergency_requests').select('*').order('created_at', { ascending: false }),
      supabaseClient.from('notices').select('*'),
      supabaseClient.from('activities').select('*'),
      supabaseClient.from('aid_applications').select('*').order('created_at', { ascending: false }),
      supabaseClient.from('donation_records').select('*'),
      supabaseClient.from('site_settings').select('*')
    ]);

    let dataChanged = false;

    // 1. Donors
    if (donorsRes.status === 'fulfilled' && donorsRes.value.data) {
      if (donorsRes.value.data.length > 0) {
        donors = donorsRes.value.data.map(rowToDonor);
        localStorage.setItem(STORAGE_KEYS.DONORS, JSON.stringify(donors));
        dataChanged = true;
      } else {
        // Cloud is empty -> auto seed default donors
        cloudBulkUpsertDonors(INITIAL_DONORS);
      }
    }

    // 2. Volunteers
    if (volunteersRes.status === 'fulfilled' && volunteersRes.value.data) {
      if (volunteersRes.value.data.length > 0) {
        volunteers = volunteersRes.value.data.map(rowToVolunteer);
        localStorage.setItem(STORAGE_KEYS.VOLUNTEERS, JSON.stringify(volunteers));
        dataChanged = true;
      } else {
        cloudBulkUpsertVolunteers(INITIAL_VOLUNTEERS);
      }
    }

    // 3. Emergency Requests
    if (requestsRes.status === 'fulfilled' && requestsRes.value.data) {
      emergencyRequests = requestsRes.value.data.map(rowToRequest);
      localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(emergencyRequests));
      dataChanged = true;
    }

    // 4. Notices
    if (noticesRes.status === 'fulfilled' && noticesRes.value.data) {
      if (noticesRes.value.data.length > 0) {
        notices = noticesRes.value.data.map(rowToNotice);
        localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
        dataChanged = true;
      } else {
        cloudBulkUpsertNotices(INITIAL_NOTICES);
      }
    }

    // 5. Activities
    if (activitiesRes.status === 'fulfilled' && activitiesRes.value.data) {
      if (activitiesRes.value.data.length > 0) {
        activities = activitiesRes.value.data.map(rowToActivity);
        localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(activities));
        dataChanged = true;
      } else {
        cloudBulkUpsertActivities(INITIAL_ACTIVITIES);
      }
    }

    // 6. Aid Applications
    if (aidRes.status === 'fulfilled' && aidRes.value.data) {
      aidApplications = aidRes.value.data.map(rowToAid);
      localStorage.setItem(STORAGE_KEYS.AID, JSON.stringify(aidApplications));
      dataChanged = true;
    }

    // 7. Donation Records
    if (recordsRes.status === 'fulfilled' && recordsRes.value.data) {
      if (recordsRes.value.data.length > 0) {
        donationRecords = recordsRes.value.data.map(rowToRecord);
        localStorage.setItem(STORAGE_KEYS.DONATION_RECORDS, JSON.stringify(donationRecords));
      }
    }

    // 8. Site Settings
    if (settingsRes.status === 'fulfilled' && settingsRes.value.data && settingsRes.value.data.length > 0) {
      const row = settingsRes.value.data.find(s => s.key === 'general');
      if (row && row.value) {
        siteSettings = { ...DEFAULT_SETTINGS, ...row.value };
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
        applySiteSettings();
      }
    }

    // Refresh UI
    filterDonors();
    renderVolunteersGrid();
    renderEmergencyRequests();
    renderNoticeBoard();
    renderHomeNotices();
    renderGallery('ALL');
    updateHomeStats();
    updateNoticeStats();
    if (isAdminLoggedIn) {
      updateAdminDashboard();
      renderAdminTable();
      renderAdminVolunteersTable();
      renderAdminNoticeList();
      renderAdminEmergencyList();
      renderAdminAidList();
      renderAdminGalleryGrid();
    }
    updateCloudStatusBadge(true);

    if (isManual && typeof Swal !== 'undefined') {
      Swal.fire({
        icon: 'success',
        title: 'ক্লাউড সিঙ্ক্রোনাইজেশন সম্পন্ন!',
        text: 'সবশেষ লাইভ ডেটা সফলভাবে লোড হয়েছে।',
        timer: 1500,
        showConfirmButton: false
      });
    }
  } catch(err) {
    console.error('Error during Supabase sync:', err);
    if (isManual && typeof Swal !== 'undefined') {
      Swal.fire({ icon: 'error', title: 'সিঙ্ক ত্রুটি', text: err.message || 'ক্লাউড থেকে ডেটা আনা যায়নি।' });
    }
  } finally {
    isSyncingFromCloud = false;
  }
}

// ==============================================================================
// REALTIME SUBSCRIPTION (অন্য ডিভাইসের পরিবর্তন তৎক্ষণাৎ ধরা)
// ==============================================================================

function setupSupabaseRealtime() {
  if (!isSupabaseReady()) return;
  if (realtimeChannel) {
    try { supabaseClient.removeChannel(realtimeChannel); } catch(e){}
  }

  try {
    realtimeChannel = supabaseClient
      .channel('caf_portal_realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'emergency_requests' }, payload => {
        syncAllFromSupabase();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'donors' }, payload => {
        syncAllFromSupabase();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'volunteers' }, payload => {
        syncAllFromSupabase();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'notices' }, payload => {
        syncAllFromSupabase();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'activities' }, payload => {
        syncAllFromSupabase();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'aid_applications' }, payload => {
        syncAllFromSupabase();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'site_settings' }, payload => {
        syncAllFromSupabase();
      })
      .subscribe();
  } catch(e) {
    console.warn('Realtime channel could not be established:', e);
  }
}

// ==============================================================================
// CLOUD MUTATION HELPERS (CREATE, UPDATE, DELETE TO SUPABASE)
// ==============================================================================

async function cloudUpsertDonor(donor) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('donors').upsert(donorToRow(donor));
  } catch(e) { console.error('Cloud upsert donor error:', e); }
}

async function cloudBulkUpsertDonors(donorList) {
  if (!isSupabaseReady() || !Array.isArray(donorList) || donorList.length === 0) return;
  try {
    const rows = donorList.map(donorToRow);
    await supabaseClient.from('donors').upsert(rows);
  } catch(e) { console.error('Cloud bulk upsert donors error:', e); }
}

async function cloudDeleteDonor(id) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('donors').delete().eq('id', id);
  } catch(e) { console.error('Cloud delete donor error:', e); }
}

async function cloudUpsertVolunteer(vol) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('volunteers').upsert(volunteerToRow(vol));
  } catch(e) { console.error('Cloud upsert volunteer error:', e); }
}

async function cloudBulkUpsertVolunteers(volList) {
  if (!isSupabaseReady() || !Array.isArray(volList) || volList.length === 0) return;
  try {
    const rows = volList.map(volunteerToRow);
    await supabaseClient.from('volunteers').upsert(rows);
  } catch(e) { console.error('Cloud bulk upsert volunteers error:', e); }
}

async function cloudDeleteVolunteer(id) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('volunteers').delete().eq('id', id);
  } catch(e) { console.error('Cloud delete volunteer error:', e); }
}

async function cloudUpsertRequest(req) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('emergency_requests').upsert(requestToRow(req));
  } catch(e) { console.error('Cloud upsert request error:', e); }
}

async function cloudDeleteRequest(id) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('emergency_requests').delete().eq('id', id);
  } catch(e) { console.error('Cloud delete request error:', e); }
}

async function cloudUpsertNotice(notice) {
  if (!isSupabaseReady()) return { success: false, offline: true };
  try {
    const { error } = await supabaseClient.from('notices').upsert(noticeToRow(notice));
    if (error) throw error;
    return { success: true };
  } catch(e) {
    console.error('Cloud upsert notice error:', e);
    return { success: false, error: e };
  }
}

async function cloudBulkUpsertNotices(noticeList) {
  if (!isSupabaseReady() || !Array.isArray(noticeList) || noticeList.length === 0) return { success: false, offline: true };
  try {
    const rows = noticeList.map(noticeToRow);
    const { error } = await supabaseClient.from('notices').upsert(rows);
    if (error) throw error;
    return { success: true };
  } catch(e) {
    console.error('Cloud bulk upsert notices error:', e);
    return { success: false, error: e };
  }
}

async function cloudDeleteNotice(id) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('notices').delete().eq('id', id);
  } catch(e) { console.error('Cloud delete notice error:', e); }
}

async function cloudUpsertActivity(act) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('activities').upsert(activityToRow(act));
  } catch(e) { console.error('Cloud upsert activity error:', e); }
}

async function cloudBulkUpsertActivities(actList) {
  if (!isSupabaseReady() || !Array.isArray(actList) || actList.length === 0) return;
  try {
    const rows = actList.map(activityToRow);
    await supabaseClient.from('activities').upsert(rows);
  } catch(e) { console.error('Cloud bulk upsert activities error:', e); }
}

async function cloudDeleteActivity(id) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('activities').delete().eq('id', id);
  } catch(e) { console.error('Cloud delete activity error:', e); }
}

async function cloudUpsertAid(aid) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('aid_applications').upsert(aidToRow(aid));
  } catch(e) { console.error('Cloud upsert aid error:', e); }
}

async function cloudBulkUpsertAid(aidList) {
  if (!isSupabaseReady() || !Array.isArray(aidList) || aidList.length === 0) return;
  try {
    const rows = aidList.map(aidToRow);
    await supabaseClient.from('aid_applications').upsert(rows);
  } catch(e) { console.error('Cloud bulk upsert aid error:', e); }
}

async function cloudDeleteAid(id) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('aid_applications').delete().eq('id', id);
  } catch(e) { console.error('Cloud delete aid error:', e); }
}

async function cloudUpsertRecord(rec) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('donation_records').upsert(recordToRow(rec));
  } catch(e) { console.error('Cloud upsert record error:', e); }
}

async function cloudSaveSettings(settings) {
  if (!isSupabaseReady()) return;
  try {
    await supabaseClient.from('site_settings').upsert({
      key: 'general',
      value: settings,
      updated_at: new Date().toISOString()
    });
  } catch(e) { console.error('Cloud save settings error:', e); }
}

// ==============================================================================
// ADMIN CLOUD CONTROL PANEL CONTROLLER
// ==============================================================================

function renderAdminCloudPanel() {
  getSupabaseConfig();
  const urlInput = document.getElementById('supabase-url-input');
  const keyInput = document.getElementById('supabase-anon-key-input');

  if (urlInput) urlInput.value = SUPABASE_CONFIG.url || '';
  if (keyInput) keyInput.value = SUPABASE_CONFIG.anonKey || '';

  updateCloudStatusBadge(isSupabaseReady());
  updateCloudMetricsUI();
}

function toggleAnonKeyVisibility() {
  const input = document.getElementById('supabase-anon-key-input');
  const icon = document.getElementById('anon-key-eye-icon');
  if (!input || !icon) return;

  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fa-solid fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fa-solid fa-eye';
  }
}

async function saveAndTestSupabaseConfig() {
  const url = (document.getElementById('supabase-url-input')?.value || '').trim();
  const anonKey = (document.getElementById('supabase-anon-key-input')?.value || '').trim();

  if (!url || !anonKey) {
    Swal.fire({
      icon: 'warning',
      title: 'তথ্য অসম্পূর্ণ',
      text: 'অনুগ্রহ করে Supabase Project URL এবং Anon / Public Key উভয়টি দিন।'
    });
    return;
  }

  if (!url.startsWith('https://')) {
    Swal.fire({
      icon: 'warning',
      title: 'ভুল URL ফরম্যাট',
      text: 'Project URL অবশ্যই https:// দিয়ে শুরু হতে হবে (উদাঃ https://xyz.supabase.co)'
    });
    return;
  }

  Swal.fire({
    title: 'সংযোগ পরীক্ষা করা হচ্ছে...',
    text: 'Supabase সার্ভারের সাথে যোগাযোগ স্থাপন করা হচ্ছে',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  try {
    if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
      throw new Error('Supabase Client লাইব্রেরি লোড হয়নি। আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।');
    }

    const testClient = window.supabase.createClient(url, anonKey);
    // Ping donors or site_settings table
    const { data, error } = await testClient.from('donors').select('id').limit(1);

    if (error && error.code !== 'PGRST116') {
      throw new Error(error.message || 'Supabase টেবিলে সংযোগ করা সম্ভব হয়নি। SQL স্কিমা রান করেছেন কি?');
    }

    // Success -> persist config
    SUPABASE_CONFIG = { url, anonKey, enabled: true };
    localStorage.setItem(STORAGE_KEYS_CLOUD.SUPABASE_CONFIG, JSON.stringify(SUPABASE_CONFIG));
    supabaseClient = testClient;

    updateCloudStatusBadge(true, 'সংযুক্ত (Supabase Connected)');
    setupSupabaseRealtime();
    syncAllFromSupabase();

    Swal.fire({
      icon: 'success',
      title: 'কানেকশন সফল!',
      text: 'Supabase ক্লাউড ডেটাবেজ সফলভাবে সংযুক্ত হয়েছে। এখন সব ডিভাইসে ডেটা সিঙ্ক হবে।',
      confirmButtonColor: '#0284c7'
    });
  } catch(err) {
    console.error('Supabase test failed:', err);
    Swal.fire({
      icon: 'error',
      title: 'কানেকশন ব্যর্থ হয়েছে',
      text: err.message || 'সঠিক Project URL ও Anon Key দিয়েছেন কিনা এবং SQL স্কিমা রান করেছেন কিনা যাচাই করুন।'
    });
  }
}

async function migrateAllDataToCloud() {
  if (!isSupabaseReady()) {
    Swal.fire({
      icon: 'warning',
      title: 'ক্লাউড সংযুক্ত নয়',
      text: 'প্রথমে Supabase Project URL ও Anon Key দিয়ে "কানেকশন টেস্ট ও সক্রিয় করুন" চাপুন।'
    });
    return;
  }

  const result = await Swal.fire({
    title: 'লোকাল ডেটা ক্লাউডে আপলোড করতে চান?',
    text: 'আপনার ব্রাউজারের সকল রক্তদাতা, স্বেচ্ছাসেবী, নোটিশ, ছবি ও সেটিংস Supabase ডেটাবেজে আপলোড করা হবে।',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'হ্যাঁ, আপলোড করুন',
    cancelButtonText: 'বাতিল',
    confirmButtonColor: '#16a34a'
  });

  if (!result.isConfirmed) return;

  Swal.fire({
    title: 'ক্লাউডে আপলোড হচ্ছে...',
    text: 'অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  try {
    await Promise.all([
      cloudBulkUpsertDonors(donors),
      cloudBulkUpsertVolunteers(volunteers),
      cloudBulkUpsertNotices(notices),
      cloudBulkUpsertActivities(activities),
      cloudBulkUpsertAid(aidApplications),
      cloudSaveSettings(siteSettings)
    ]);

    for (const req of emergencyRequests) {
      await cloudUpsertRequest(req);
    }
    for (const rec of donationRecords) {
      await cloudUpsertRecord(rec);
    }

    await syncAllFromSupabase();

    Swal.fire({
      icon: 'success',
      title: 'আপলোড সফল হয়েছে!',
      text: 'সকল ডেটা Supabase ক্লাউডে সংরক্ষিত হয়েছে। এখন অন্য যেকোনো মোবাইল বা কম্পিউটার থেকে ওয়েবসাইট খুললে সব ডেটা দেখা যাবে।',
      confirmButtonColor: '#16a34a'
    });
  } catch(err) {
    console.error('Migration failed:', err);
    Swal.fire({
      icon: 'error',
      title: 'আপলোড ব্যর্থ হয়েছে',
      text: err.message || 'ক্লাউডে ডেটা পাঠাতে সমস্যা হয়েছে।'
    });
  }
}

function showSqlSchemaModal() {
  Swal.fire({
    title: 'Supabase SQL স্কিমা কোড',
    html: `
      <div class="text-left text-xs space-y-2">
        <p class="text-slate-600">এই SQL কোডটি কপি করে আপনার Supabase ড্যাশবোর্ডের <strong>SQL Editor</strong>-এ গিয়ে পেস্ট করে Run দিন:</p>
        <textarea id="sql-schema-textarea" readonly class="w-full h-64 p-3 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-xl border border-slate-700 focus:outline-none">${EMBEDDED_SUPABASE_SCHEMA_SQL}</textarea>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: '<i class="fa-solid fa-copy mr-1"></i> কোড কপি করুন',
    cancelButtonText: 'বন্ধ করুন',
    confirmButtonColor: '#0284c7',
    preConfirm: () => {
      const ta = document.getElementById('sql-schema-textarea');
      if (ta) {
        ta.select();
        navigator.clipboard.writeText(ta.value);
        return true;
      }
    }
  }).then(res => {
    if (res.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'কপি হয়েছে!',
        text: 'SQL কোড ক্লিপবোর্ডে কপি করা হয়েছে। এখন Supabase SQL Editor-এ পেস্ট করুন।',
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
}
