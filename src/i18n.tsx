import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "bn" | "en" | "hi";

const en: Record<string, string> = {
  brand: "ENGINEERING WORLD AI",
  tagline: "Learn. Engineer. Simulate. Invent.",
  group_overview: "Overview", group_engineering: "Engineering",
  group_ai: "AI & Software", group_tools: "Engineering Tools",
  group_innovation: "Innovation", group_business: "Business",
  group_learning: "Learning", group_account: "Account",
  nav_home: "Home", nav_explore: "Explore Technologies",
  nav_recent: "Recently Viewed", nav_bookmarks: "Bookmarks",
  nav_electrical: "Electrical Engineering", nav_electronics: "Electronics",
  nav_mechanical: "Mechanical Engineering", nav_automotive: "Cars and Bikes",
  nav_aircraft: "Aircraft Engineering", nav_space: "Space Technology",
  nav_ship: "Ship Engineering", nav_railway: "Railway Engineering",
  nav_civil: "Civil Engineering", nav_robotics: "Robotics",
  nav_energy: "Energy Technology", nav_manufacturing: "Manufacturing",
  nav_aiLearning: "AI Learning Center", nav_aiBuilder: "AI Project Builder",
  nav_software: "Software Engineering", nav_computer: "Computer Engineering",
  nav_dataScience: "Data Science",
  nav_calculators: "Calculators", nav_circuitSim: "Circuit Simulator",
  nav_mechSim: "Mechanical Simulator", nav_structuralSim: "Structural Simulator",
  nav_designStudio: "Design Studio",
  nav_inventionLab: "Invention Lab", nav_research: "Research Explorer",
  nav_patents: "Patent Search", nav_workspace: "Project Workspace",
  nav_myProjects: "My Projects",
  nav_productDev: "Product Development", nav_mfgPlanner: "Manufacturing Planner",
  nav_startupLab: "Technology Startup Lab", nav_intlBusiness: "International Business",
  nav_learningPaths: "Learning Paths", nav_tutorials: "Tutorials",
  nav_practice: "Practice", nav_savedLessons: "Saved Lessons",
  nav_profile: "Profile", nav_settings: "Settings", nav_security: "Security",
  nav_help: "Help", nav_signOut: "Sign Out",
  hero_title: "Explore How the World Works.",
  hero_sub: "Learn the science behind machines, vehicles, buildings, AI, robotics and the technologies shaping our future.",
  hero_b1: "Explore Engineering", hero_b2: "Open Invention Lab", hero_b3: "Start Learning",
  sec_categories: "Engineering Fields", sec_popular: "Popular Technologies",
  sec_sims: "Interactive Simulators", sec_ai: "AI Learning Center",
  demo: "Demo content", view_all: "View all",
  search_ph: "Search technologies, topics, tools…",
  home_search_ph: "What do you want to learn today?",
  no_results: "No results found. Try another keyword.",
  login: "Log in", register: "Sign up",
  welcome: "Welcome back", create_acc: "Create your account",
  email: "Email address", password: "Password", name: "Full name",
  confirm_password: "Confirm password", forgot: "Forgot password?",
  remember: "Remember me", no_account: "No account yet?",
  have_account: "Already have an account?",
  consent: "I agree to the Terms and Privacy Policy",
  signin_btn: "Sign In", signup_btn: "Create Account",
  notice_title: "Authentication not connected yet",
  notice_text: "Firebase setup is pending (Phase 5). This form validates your input, but no account is created yet and nothing is sent anywhere.",
  email_invalid: "Enter a valid email address",
  pass_short: "Password must be at least 8 characters",
  name_short: "Name is too short",
  pass_mismatch: "Passwords do not match",
  consent_required: "You must accept the terms",
  language: "Language",
  topics_count: "{n} topics", subcategories: "Subcategories",
  topics_soon: "Detailed topics for this category will be added in Phase 2.",
  footer_text: "A structured engineering learning and invention platform, growing phase by phase with verified content.",
  rights: "All rights reserved.",
  back_home: "Back to home",
};

const bn: Record<string, string> = {
  tagline: "শিখো। প্রকৌশল করো। সিমুলেশন করো। আবিষ্কার করো।",
  group_overview: "সংক্ষেপ", group_engineering: "প্রকৌশল",
  group_ai: "এআই ও সফটওয়্যার", group_tools: "প্রকৌশল টুল",
  group_innovation: "উদ্ভাবন", group_business: "ব্যবসা",
  group_learning: "শেখা", group_account: "অ্যাকাউন্ট",
  nav_home: "হোম", nav_explore: "প্রযুক্তি অন্বেষণ",
  nav_recent: "সাম্প্রতিক দেখা", nav_bookmarks: "বুকমার্ক",
  nav_electrical: "বিদ্যুৎ প্রকৌশল", nav_electronics: "ইলেকট্রনিক্স",
  nav_mechanical: "যন্ত্র প্রকৌশল", nav_automotive: "গাড়ি ও বাইক",
  nav_aircraft: "বিমান প্রকৌশল", nav_space: "মহাকাশ প্রযুক্তি",
  nav_ship: "জাহাজ প্রকৌশল", nav_railway: "রেল প্রকৌশল",
  nav_civil: "সিভিল প্রকৌশল", nav_robotics: "রোবোটিক্স",
  nav_energy: "শক্তি প্রযুক্তি", nav_manufacturing: "উৎপাদন প্রযুক্তি",
  nav_aiLearning: "এআই লার্নিং সেন্টার", nav_aiBuilder: "এআই প্রজেক্ট বিল্ডার",
  nav_software: "সফটওয়্যার প্রকৌশল", nav_computer: "কম্পিউটার প্রকৌশল",
  nav_dataScience: "ডেটা সায়েন্স",
  nav_calculators: "ক্যালকুলেটর", nav_circuitSim: "সার্কিট সিমুলেটর",
  nav_mechSim: "যন্ত্র সিমুলেটর", nav_structuralSim: "স্ট্রাকচারাল সিমুলেটর",
  nav_designStudio: "ডিজাইন স্টুডিও",
  nav_inventionLab: "আবিষ্কার ল্যাব", nav_research: "রিসার্চ এক্সপ্লোরার",
  nav_patents: "পেটেন্ট সার্চ", nav_workspace: "প্রজেক্ট ওয়ার্কস্পেস",
  nav_myProjects: "আমার প্রজেক্ট",
  nav_productDev: "প্রোডাক্ট ডেভেলপমেন্ট", nav_mfgPlanner: "ম্যানুফ্যাকচারিং প্ল্যানার",
  nav_startupLab: "টেক স্টার্টআপ ল্যাব", nav_intlBusiness: "আন্তর্জাতিক ব্যবসা",
  nav_learningPaths: "লার্নিং পাথ", nav_tutorials: "টিউটোরিয়াল",
  nav_practice: "প্র্যাকটিস", nav_savedLessons: "সেভ করা লেসন",
  nav_profile: "প্রোফাইল", nav_settings: "সেটিংস", nav_security: "নিরাপত্তা",
  nav_help: "সহায়তা", nav_signOut: "সাইন আউট",
  hero_title: "পৃথিবী কীভাবে কাজ করে, অন্বেষণ করো।",
  hero_sub: "যন্ত্র, যানবাহন, ভবন, এআই, রোবোটিক্স — আমাদের ভবিষ্যৎ গড়া প্রযুক্তির বিজ্ঞান শিখো।",
  hero_b1: "প্রকৌশল অন্বেষণ", hero_b2: "আবিষ্কার ল্যাব খোলো", hero_b3: "শেখা শুরু করো",
  sec_categories: "প্রকৌশল শাখা", sec_popular: "জনপ্রিয় প্রযুক্তি",
  sec_sims: "ইন্টারঅ্যাক্টিভ সিমুলেটর", sec_ai: "এআই লার্নিং সেন্টার",
  demo: "ডেমো কনটেন্ট", view_all: "সব দেখো",
  search_ph: "প্রযুক্তি, টপিক, টুল খুঁজুন…",
  home_search_ph: "আজ কী শিখতে চাও?",
  no_results: "কিছু পাওয়া যায়নি। অন্য কীওয়ার্ড চেষ্টা করুন।",
  login: "লগ ইন", register: "সাইন আপ",
  welcome: "আবার স্বাগতম", create_acc: "তোমার অ্যাকাউন্ট বানাও",
  email: "ইমেইল ঠিকানা", password: "পাসওয়ার্ড", name: "পুরো নাম",
  confirm_password: "পাসওয়ার্ড নিশ্চিত করো", forgot: "পাসওয়ার্ড ভুলে গেছো?",
  remember: "মনে রাখো", no_account: "অ্যাকাউন্ট নেই?",
  have_account: "অ্যাকাউন্ট আছে?",
  consent: "আমি শর্তাবলী ও প্রাইভেসি পলিসি মেনে নিচ্ছি",
  signin_btn: "সাইন ইন", signup_btn: "অ্যাকাউন্ট খোলো",
  notice_title: "অথেনটিকেশন এখনো যুক্ত হয়নি",
  notice_text: "ফায়ারবেস সেটআপ ফেজ ৫-এ হবে। এই ফর্ম ইনপুট যাচাই করে, কিন্তু এখনো কোনো অ্যাকাউন্ট তৈরি হয় না — কিছুই কোথাও পাঠানো হয় না।",
  email_invalid: "সঠিক ইমেইল দাও",
  pass_short: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে",
  name_short: "নামটি খুব ছোট",
  pass_mismatch: "পাসওয়ার্ড মিলছে না",
  consent_required: "শর্তাবলী মেনে নিতে হবে",
  language: "ভাষা",
  topics_count: "{n} টি টপিক", subcategories: "উপ-শ্রেণি",
  topics_soon: "এই বিভাগের বিস্তারিত টপিক ফেজ ২-তে যোগ হবে।",
  footer_text: "প্রকৌশল শেখা ও আবিষ্কারের সুগঠিত প্ল্যাটফর্ম — যাচাইকৃত কনটেন্ট দিয়ে ধাপে ধাপে এগোচ্ছে।",
  rights: "সর্বস্বত্ব সংরক্ষিত।",
  back_home: "হোমে ফিরে যাও",
};

const hi: Record<string, string> = {
  tagline: "सीखें। इंजीनियरिंग करें। सिम्युलेट करें। आविष्कार करें।",
  group_overview: "अवलोकन", group_engineering: "इंजीनियरिंग",
  group_ai: "एआई और सॉफ्टवेयर", group_tools: "इंजीनियरिंग टूल्स",
  group_innovation: "नवाचार", group_business: "व्यवसाय",
  group_learning: "सीखना", group_account: "खाता",
  nav_home: "होम", nav_explore: "तकनीक खोजें",
  nav_recent: "हाल ही में देखा", nav_bookmarks: "बुकमार्क",
  nav_calculators: "कैलकुलेटर", nav_circuitSim: "सर्किट सिम्युलेटर",
  nav_mechSim: "यांत्रिक सिम्युलेटर", nav_structuralSim: "संरचनात्मक सिम्युलेटर",
  nav_designStudio: "डिज़ाइन स्टूडियो",
  nav_inventionLab: "आविष्कार लैब", nav_research: "अनुसंधान खोज",
  nav_patents: "पेटेंट खोज", nav_workspace: "प्रोजेक्ट वर्कस्पेस",
  nav_myProjects: "मेरे प्रोजेक्ट",
  nav_learningPaths: "लर्निंग पाथ", nav_tutorials: "ट्यूटोरियल",
  nav_practice: "अभ्यास", nav_savedLessons: "सहेजे पाठ",
  nav_profile: "प्रोफ़ाइल", nav_settings: "सेटिंग्स", nav_security: "सुरक्षा",
  nav_help: "सहायता", nav_signOut: "साइन आउट",
  hero_title: "देखें दुनिया कैसे काम करती है।",
  hero_sub: "मशीनों, वाहनों, भवनों, एआई और रोबोटिक्स के पीछे का विज्ञान सीखें।",
  hero_b1: "इंजीनियरिंग खोजें", hero_b2: "आविष्कार लैब खोलें", hero_b3: "सीखना शुरू करें",
  sec_categories: "इंजीनियरिंग क्षेत्र", sec_popular: "लोकप्रिय तकनीकें",
  sec_sims: "इंटरैक्टिव सिम्युलेटर", sec_ai: "एआई लर्निंग सेंटर",
  demo: "डेमो कंटेंट", view_all: "सभी देखें",
  search_ph: "तकनीक, विषय, टूल खोजें…", no_results: "कोई परिणाम नहीं। कोई और शब्द आज़माएँ।",
  login: "लॉग इन", register: "साइन अप",
  welcome: "फिर से स्वागत है", create_acc: "अपना खाता बनाएं",
  email: "ईमेल पता", password: "पासवर्ड", name: "पूरा नाम",
  confirm_password: "पासवर्ड की पुष्टि करें",
  signin_btn: "साइन इन", signup_btn: "खाता बनाएं",
  language: "भाषा",
  topics_count: "{n} विषय", subcategories: "उप-श्रेणियाँ",
};

const dict: Record<Lang, Record<string, string>> = { en, bn, hi };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx>({
  lang: "bn",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(
    () => (localStorage.getItem("ew-lang") as Lang) || "bn"
  );
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ew-lang", l);
    document.documentElement.lang = l;
  };
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const t = (key: string) => dict[lang][key] ?? en[key] ?? key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
