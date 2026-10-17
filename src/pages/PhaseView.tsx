import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import NotFound from "./NotFound";

const pages: Record<string, { phase: number; title: string; text: string; icon: string }> = {
  "recent": { phase: 5, title: "সাম্প্রতিক দেখা", text: "তুমি যেসব টপিক দেখেছ সেগুলোর ইতিহাস এখানে থাকবে। এর জন্য লগইন ও ডেটাবেস দরকার — ফেজ ৫-এ আসছে।", icon: "clock" },
  "bookmarks": { phase: 5, title: "বুকমার্ক", text: "পছন্দের টপিক ও টুল সেভ করে রাখার জায়গা। ফেজ ৫-এ যুক্ত হবে।", icon: "bookmark" },
  "ai-learning": { phase: 6, title: "এআই লার্নিং সেন্টার", text: "প্রকৌশল ধারণা ব্যাখ্যা, ফর্মুলা সহায়তা, লার্নিং প্ল্যান — নিরাপদ সার্ভার-সাইড এআই ফেজ ৬-এ আসছে। এপিআই কী কখনো ফ্রন্টএন্ড-এ থাকবে না।", icon: "brain" },
  "ai-builder": { phase: 6, title: "এআই প্রজেক্ট বিল্ডার", text: "এআই সহায়তায় প্রজেক্ট আউটলাইন ও ডিজাইন ট্রেড-অফ বিশ্লেষণ। ফেজ ৬-এ।", icon: "sparkles" },
  "data-science": { phase: 2, title: "ডেটা সায়েন্স", text: "ডেটা বিশ্লেষণের গঠিত টপিক লাইব্রেরি ফেজ ২-তে যোগ হবে।", icon: "database" },
  "calculators": { phase: 4, title: "প্রকৌশল ক্যালকুলেটর", text: "ওমের সূত্র, পাওয়ার, গিয়ার অনুপাত, সোলার এস্টিমেটর সহ ১২+ ক্যালকুলেটর — প্রতিটি পরীক্ষিত সূত্র ও স্টেপ-বাই-স্টেপ ব্যাখ্যা সহ। ফেজ ৪-এ।", icon: "calculator" },
  "circuit-sim": { phase: 4, title: "সার্কিট সিমুলেটর", text: "ব্যাটারি-রেজিস্টর-এলইডি-সুইচ শিক্ষামূলক সিমুলেটর, নিরাপদ লো-ভোল্টেজ উদাহরণ সহ। ফেজ ৪-এ।", icon: "circuit" },
  "mech-sim": { phase: 4, title: "যন্ত্র সিমুলেটর", text: "গিয়ার অনুপাত ভিজুয়ালাইজেশন ও মোটরের মৌলিক নীতি। ফেজ ৪-এ।", icon: "cog" },
  "structural-sim": { phase: 4, title: "স্ট্রাকচারাল সিমুলেটর", text: "সিম্পল লোড ভিজুয়ালাইজেশন ও সোলার আউটপুট মডেল। ফেজ ৪-এ।", icon: "layers" },
  "design-studio": { phase: 8, title: "ডিজাইন স্টুডিও", text: "প্রজেক্ট ড্যাশবোর্ড, নোট, ২ডি ডায়াগ্রাম এডিটর, বিল অব ম্যাটেরিয়ালস, টেস্টিং চেকলিস্ট। ফেজ ৮-এ।", icon: "pentool" },
  "invention-lab": { phase: 7, title: "আবিষ্কার ল্যাব", text: "সমস্যা → প্রাইর-আর্ট রিসার্চ → ব্লক ডায়াগ্রাম → বিল অব ম্যাটেরিয়ালস → টেস্ট প্ল্যান → রিপোর্ট এক্সপোর্ট। ফেজ ৭-এ।", icon: "bulb" },
  "research": { phase: 9, title: "রিসার্চ এক্সপ্লোরার", text: "ওপেন-অ্যাক্সেস রিসার্চ উৎস, পেটেন্ট ডেটাবেস লিংক ও সাইটেশন সহায়তা। ফেজ ৯-এ।", icon: "filesearch" },
  "patents": { phase: 9, title: "পেটেন্ট সার্চ", text: "অফিসিয়াল পেটেন্ট ডেটাবেসে খোঁজার গাইড ও লিংক। ফেজ ৯-এ।", icon: "filetext" },
  "workspace": { phase: 7, title: "প্রজেক্ট ওয়ার্কস্পেস", text: "তোমার ইঞ্জিনিয়ারিং প্রজেক্টের নোট, ভার্সন ও টেস্ট রেকর্ড। ফেজ ৭-এ।", icon: "folderkanban" },
  "my-projects": { phase: 5, title: "আমার প্রজেক্ট", text: "লগইন করা ইউজারের প্রাইভেট প্রজেক্ট — সার্ভার-সাইড অনুমতি ও ফায়ারস্টোর রুলস সহ। ফেজ ৫/৭-এ।", icon: "folder" },
  "product-dev": { phase: 8, title: "প্রোডাক্ট ডেভেলপমেন্ট", text: "আইডিয়া থেকে প্রোটোটাইপ: ম্যাটেরিয়াল সিলেকশন, ৩ডি প্রিন্টিং, কোয়ালিটি কন্ট্রোল। ফেজ ৮-এ।", icon: "package" },
  "mfg-planner": { phase: 8, title: "ম্যানুফ্যাকচারিং প্ল্যানার", text: "উৎপাদন পরিকল্পনা, কস্ট এস্টিমেশন (অনুমানসহ)। ফেজ ৮-এ।", icon: "factory" },
  "startup-lab": { phase: 9, title: "টেক স্টার্টআপ ল্যাব", text: "মার্কেট রিসার্চ, প্রাইসিং মৌলিক, লঞ্চ প্ল্যানিং — লাভের গ্যারান্টি কখনো দেওয়া হবে না। ফেজ ৯-এ।", icon: "trending" },
  "intl-business": { phase: 9, title: "আন্তর্জাতিক ব্যবসা", text: "ইমপোর্ট-এক্সপোর্ট শেখা, লজিস্টিকস, সাপ্লায়ার ডিসকভারি। দেশভেদে আইনি তথ্য নির্ভরযোগ্য উৎস থেকে। ফেজ ৯-এ।", icon: "globe" },
  "learning-paths": { phase: 3, title: "লার্নিং পাথ", text: "ধাপে ধাপে গঠিত শেখার পথ — টপিক লাইব্রেরি তৈরি হলে (ফেজ ২/৩) এখানে সাজানো হবে।", icon: "route" },
  "tutorials": { phase: 2, title: "টিউটোরিয়াল", text: "গঠিত, যাচাইকৃত টিউটোরিয়াল লাইব্রেরি ফেজ ২-তে আসছে।", icon: "book" },
  "practice": { phase: 4, title: "প্র্যাকটিস", text: "ক্যালকুলেটর ও সিমুলেটর-ভিত্তিক অনুশীলন ফেজ ৪-এ।", icon: "target" },
  "saved-lessons": { phase: 5, title: "সেভ করা লেসন", text: "লগইন করা ইউজারের সেভ করা পাঠ। ফেজ ৫-এ।", icon: "save" },
  "profile": { phase: 5, title: "প্রোফাইল", text: "প্রোফাইল ব্যবস্থাপনা ফায়ারবেস অথের সাথে ফেজ ৫-এ।", icon: "user" },
  "settings": { phase: 5, title: "সেটিংস", text: "ভাষা, থিম ও অ্যাকাউন্ট সেটিংস ফেজ ৫-এ।", icon: "settings" },
  "security": { phase: 10, title: "নিরাপত্তা", text: "পাসওয়ার্ড পরিবর্তন, সেশন ব্যবস্থাপনা, ২এফএ। ফেজ ৫/১০-এ।", icon: "shield" },
  "help": { phase: 10, title: "সহায়তা", text: "সাধারণ প্রশ্ন, গোপনীয়তা ও শর্তাবলীর পূর্ণ পেজ ফেজ ১০-এ।", icon: "help" },
  "about": { phase: 10, title: "সম্পর্কে", text: "InvenoryX মিশন ও দলের পরিচিতি ফেজ ১০-এ।", icon: "compass" },
  "privacy": { phase: 10, title: "প্রাইভেসি পলিসি", text: "কী ডেটা সংগ্রহ হয়, কেন রাখা হয়, কীভাবে ডিলিট করবে — সম্পূর্ণ নথি ফেজ ১০-এ।", icon: "shield" },
  "terms": { phase: 10, title: "শর্তাবলী", text: "ব্যবহারের শর্তাবলী ফেজ ১০-এ।", icon: "filetext" },
};

export default function PhaseView() {
  const { key } = useParams();
  const p = pages[key || ""];
  if (!p) return <NotFound />;
  return (
    <div className="phase-box glass-card reveal">
      <div className="p-icon"><Icon name={p.icon} size={30} /></div>
      <h2>{p.title}</h2>
      <p>{p.text}</p>
      <span className="phase-tag">ফেজ {p.phase} — নির্মাণাধীন</span>
      <div style={{ marginTop: 22 }}>
        <Link to="/" className="btn btn-ghost">{`← হোমে ফিরে যাও`}</Link>
      </div>
    </div>
  );
}
