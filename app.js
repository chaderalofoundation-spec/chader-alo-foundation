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
    photo: "",
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
    title: "বিনামূল্যে রক্তের গ্রুপ নির্ণয় কর্মসূচি",
    category: "রক্তদান",
    mediaType: "image",
    mediaUrl: "",
    date: "2026-03-20",
    location: "ভবেরচর কলেজ রোড, গজারিয়া",
    description: "চাঁদের আলো ফাউন্ডেশনের উদ্যোগে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও সচেতনতামূলক ক্যাম্পেইন।"
  },
  {
    id: "ACT-02",
    title: "অসহায় ও শীতার্ত মানুষের মাঝে শীতবস্ত্র বিতরণ",
    category: "ত্রাণ",
    mediaType: "image",
    mediaUrl: "",
    date: "2026-01-10",
    location: "হোগলাকান্দি, গজারিয়া",
    description: "শীত মৌসুমে হতদরিদ্র পরিবারের মাঝে কম্বল ও গরম কাপড় বিতরণ।"
  },
  {
    id: "ACT-03",
    title: "পরিবেশ সুরক্ষায় বৃক্ষরোপণ কর্মসূচি",
    category: "বৃক্ষরোপণ",
    mediaType: "image",
    mediaUrl: "",
    date: "2026-06-05",
    location: "গজারিয়া উপজেলা চত্বর",
    description: "বিশ্ব পরিবেশ দিবস উপলক্ষে ফলজ ও বনজ গাছের চারা রোপণ ও বিতরণ।"
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
      if (!siteSettings.president.photo || siteSettings.president.photo === '') {
        siteSettings.president.photo = DEFAULT_SETTINGS.president.photo;
      }
      if (!siteSettings.secretary.photo || siteSettings.secretary.photo === '') {
        siteSettings.secretary.photo = DEFAULT_SETTINGS.secretary.photo;
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
    try { activities = JSON.parse(ac); } catch(e){ activities = [...INITIAL_ACTIVITIES]; }
  } else {
    activities = [...INITIAL_ACTIVITIES];
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
}

function saveVolunteers() {
  localStorage.setItem(STORAGE_KEYS.VOLUNTEERS, JSON.stringify(volunteers));
  updateHomeStats();
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
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
  const phone = document.getElementById('vol-phone').value.trim();
  const whatsapp = document.getElementById('vol-whatsapp').value.trim() || phone;
  const upazila = document.getElementById('vol-upazila').value;
  const village = document.getElementById('vol-village').value.trim();
  const interest = document.getElementById('vol-interest').value;

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
  const phone = document.getElementById('reg-phone').value.trim();
  const whatsapp = document.getElementById('reg-whatsapp').value.trim() || phone;
  const upazila = document.getElementById('reg-upazila').value;
  const village = document.getElementById('reg-village').value.trim();
  const hasDonated = document.getElementById('reg-has-donated').value;
  const lastDonationDate = hasDonated === 'হ্যাঁ' ? document.getElementById('reg-last-date').value : '';
  const donationCount = hasDonated === 'হ্যাঁ' ? (parseInt(document.getElementById('reg-donation-count').value) || 1) : 0;

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

  emergencyRequests.unshift({
    id: `REQ-${Date.now().toString().slice(-4)}`,
    patientName, bloodGroup, bags, time, hospital, contact,
    status: 'active'
  });

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
function checkAdminSession() {
  if (sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true') {
    isAdminLoggedIn = true;
    document.getElementById('admin-login-gate').classList.add('hidden');
    document.getElementById('admin-dashboard-view').classList.remove('hidden');
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
          <p class="text-xs text-slate-300 font-bold mb-3">চাঁদের আলো ফাউন্ডেশনের সেন্ট্রাল সিস্টেমে প্রবেশের জন্য ৪ ডিজিটের এডমিন পিন কোড দিন:</p>
          
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
      preConfirm: () => {
        const pin = document.getElementById('swal-admin-pin').value.trim();
        if (!pin) {
          Swal.showValidationMessage('অনুগ্রহ করে পিন কোড প্রদান করুন');
          return false;
        }
        if (pin !== adminPin) {
          Swal.showValidationMessage('ভুল পিন কোড! সঠিক পিন দিন (ডিফল্ট: 1234)');
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

function adminLogout() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
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
    if (p.photo && imgEl && avatarEl) {
      imgEl.src = p.photo;
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
    if (s.photo && imgEl && avatarEl) {
      imgEl.src = s.photo;
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
}

function saveAidApplications() {
  localStorage.setItem(STORAGE_KEYS.AID, JSON.stringify(aidApplications));
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
  document.getElementById('lightbox-desc').textContent = act.desc || '';

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
  const modules = ['donors', 'volunteers', 'gallery', 'emergency', 'aid', 'notice'];
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

  d.name = document.getElementById('edit-donor-name').value.trim();
  d.father = document.getElementById('edit-donor-father').value.trim();
  d.bloodGroup = document.getElementById('edit-donor-blood-group').value;
  d.gender = document.getElementById('edit-donor-gender').value;
  d.phone = document.getElementById('edit-donor-phone').value.trim();
  d.whatsapp = document.getElementById('edit-donor-whatsapp').value.trim() || d.phone;
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

  v.name = document.getElementById('edit-vol-name').value.trim();
  v.father = document.getElementById('edit-vol-father').value.trim();
  v.bloodGroup = document.getElementById('edit-vol-blood-group').value;
  v.profession = document.getElementById('edit-vol-profession').value.trim();
  v.phone = document.getElementById('edit-vol-phone').value.trim();
  v.whatsapp = document.getElementById('edit-vol-whatsapp').value.trim() || v.phone;
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
function saveNotices() {
  localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  renderNoticeBoard();
  renderHomeNotices();
  renderAdminNoticeList();
  updateNoticeStats();
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

function handleNoticeSubmit(e) {
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

  if (editId) {
    const idx = notices.findIndex(n => n.id === editId);
    if (idx !== -1) {
      notices[idx] = {
        ...notices[idx],
        title, category, priority, date, author, summary, content
      };
    }
  } else {
    let nextNum = notices.length + 1;
    while (notices.some(n => n.id === 'NOT-' + new Date().getFullYear() + '-' + String(nextNum).padStart(3, '0'))) {
      nextNum++;
    }
    const newNotice = {
      id: 'NOT-' + new Date().getFullYear() + '-' + String(nextNum).padStart(3, '0'),
      title, category, priority, date, author, summary, content,
      status: 'active'
    };
    notices.unshift(newNotice);
  }

  saveNotices();
  closeNoticeEditModal();

  Swal.fire({
    icon: 'success',
    title: editId ? 'নোটিশ সফলভাবে সংরক্ষিত হয়েছে!' : 'নতুন নোটিশ সফলভাবে প্রকাশিত হয়েছে!',
    confirmButtonColor: '#e11d48'
  });
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
