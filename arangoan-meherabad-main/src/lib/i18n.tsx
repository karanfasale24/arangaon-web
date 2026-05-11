import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "mr";
const STORAGE_KEY = "arangaon_lang_v1";

type Dict = Record<string, { en: string; mr: string }>;

export const dict: Dict = {
  // Nav
  "nav.home": { en: "Home", mr: "मुख्यपृष्ठ" },
  "nav.about": { en: "About", mr: "आमच्याबद्दल" },
  "nav.history": { en: "History", mr: "इतिहास" },
  "nav.services": { en: "Services", mr: "सेवा" },
  "nav.gallery": { en: "Gallery", mr: "छायाचित्रे" },
  "nav.contact": { en: "Contact", mr: "संपर्क" },
  // Layout
  "layout.menu": { en: "Menu", mr: "मेनू" },
  "layout.locationTag": { en: "Meherabad • Ahilyanagar", mr: "मेहराबाद • अहिल्यानगर" },
  "layout.quickLinks": { en: "Quick Links", mr: "त्वरित दुवे" },
  "layout.contact": { en: "Contact", mr: "संपर्क" },
  "layout.rights": { en: "All rights reserved.", mr: "सर्व हक्क राखीव." },
  "layout.designedFor": { en: "Designed for the citizens of Arangaon", mr: "अरणगावच्या नागरिकांसाठी तयार केले" },
  "layout.footerTagline": {
    en: "A historic village serving its citizens with transparency and care.",
    mr: "पारदर्शकता आणि काळजीने नागरिकांची सेवा करणारे ऐतिहासिक गाव.",
  },
  "lang.toggleTo": { en: "मराठी", mr: "English" },
  // Home
  "home.tag": { en: "ARANGAON • MEHERABAD • AHMEDNAGAR", mr: "अरणगाव • मेहराबाद • अहिल्यानगर" },
  "home.heroTitle": { en: "Welcome to Arangaon Grampanchayat", mr: "अरणगाव ग्रामपंचायतीत आपले स्वागत आहे" },
  "home.heroSubtitle": {
    en: "A historic village of Meherabad — committed to transparent governance, sustainable development, and the well-being of every citizen.",
    mr: "मेहराबादचे ऐतिहासिक गाव — पारदर्शक कारभार, शाश्वत विकास आणि प्रत्येक नागरिकाच्या कल्याणासाठी कटिबद्ध.",
  },
  "home.exploreServices": { en: "Explore Services", mr: "सेवा पहा" },
  "home.contactOffice": { en: "Contact Office", mr: "कार्यालयाशी संपर्क" },
  "home.welcomeTitle": { en: "Serving Our Village with Pride", mr: "अभिमानाने आपल्या गावाची सेवा" },
  "home.welcomeBody": {
    en: "Arangaon Grampanchayat works for the all-round development of our village — from clean water and roads to education, healthcare, and the preservation of our rich heritage. We believe in participation, transparency, and progress for every family.",
    mr: "अरणगाव ग्रामपंचायत आपल्या गावाच्या सर्वांगीण विकासासाठी कार्य करते — स्वच्छ पाणी आणि रस्त्यांपासून शिक्षण, आरोग्य आणि आपल्या समृद्ध वारशाच्या जतनापर्यंत. आम्ही सहभाग, पारदर्शकता आणि प्रत्येक कुटुंबाच्या प्रगतीवर विश्वास ठेवतो.",
  },
  "home.h1.title": { en: "Local Governance", mr: "स्थानिक स्वराज्य" },
  "home.h1.text": { en: "Decisions made by and for the village.", mr: "गावासाठी, गावाद्वारे घेतलेले निर्णय." },
  "home.h2.title": { en: "Citizen First", mr: "नागरिक प्रथम" },
  "home.h2.text": { en: "Quick services and grievance redressal.", mr: "त्वरित सेवा आणि तक्रार निवारण." },
  "home.h3.title": { en: "Sustainable Growth", mr: "शाश्वत विकास" },
  "home.h3.text": { en: "Water, sanitation and clean villages.", mr: "पाणी, स्वच्छता आणि स्वच्छ गावे." },
  "home.h4.title": { en: "Transparency", mr: "पारदर्शकता" },
  "home.h4.text": { en: "Open records and accountable work.", mr: "खुले अभिलेख आणि उत्तरदायी कामकाज." },
  "home.q1.title": { en: "About the Village", mr: "गावाबद्दल" },
  "home.q1.text": { en: "Learn about Arangaon and the Grampanchayat.", mr: "अरणगाव आणि ग्रामपंचायतीबद्दल जाणून घ्या." },
  "home.q2.title": { en: "Historic Heritage", mr: "ऐतिहासिक वारसा" },
  "home.q2.text": { en: "Discover the spiritual and cultural legacy of Meherabad.", mr: "मेहराबादचा आध्यात्मिक आणि सांस्कृतिक वारसा जाणून घ्या." },
  "home.q3.title": { en: "Photo Gallery", mr: "छायाचित्र दालन" },
  "home.q3.text": { en: "Recent activities and village development work.", mr: "अलीकडील उपक्रम आणि गाव विकास कामे." },
  "home.readMore": { en: "Read more", mr: "अधिक वाचा" },
  // About
  "about.title": { en: "About Arangaon", mr: "अरणगावबद्दल" },
  "about.subtitle": { en: "A village rooted in tradition, moving towards progress.", mr: "परंपरेत रुजलेले, प्रगतीकडे वाटचाल करणारे गाव." },
  "about.body": {
    en: "Arangaon, also known as Meherabad, is a village in Ahilyanagar district of Maharashtra, India. The Grampanchayat is the local self-government body responsible for the administration and development of the village. Our office — Gramsansad Bhavan — serves as the centre for citizen services, public meetings, and community decisions. We focus on inclusive growth, modern infrastructure, and preserving the cultural identity that makes Arangaon special.",
    mr: "अरणगाव, ज्याला मेहराबाद म्हणूनही ओळखले जाते, हे महाराष्ट्रातील अहिल्यानगर जिल्ह्यातील एक गाव आहे. ग्रामपंचायत ही गावाच्या प्रशासन व विकासासाठी जबाबदार स्थानिक स्वराज्य संस्था आहे. आमचे कार्यालय — ग्रामसंसद भवन — नागरिक सेवा, सार्वजनिक सभा आणि सामुदायिक निर्णयांचे केंद्र आहे. आम्ही समावेशक विकास, आधुनिक पायाभूत सुविधा आणि अरणगावची सांस्कृतिक ओळख जपण्यावर भर देतो.",
  },
  "about.mission": { en: "Our Mission", mr: "आमचे ध्येय" },
  "about.missionBody": {
    en: "To deliver responsive, transparent and inclusive local self-government — improving the quality of life for every resident of Arangaon while preserving our heritage.",
    mr: "तत्पर, पारदर्शक आणि समावेशक स्थानिक स्वराज्य देणे — अरणगावच्या प्रत्येक रहिवाशाचे जीवनमान उंचावताना आपला वारसा जपणे.",
  },
  "about.values": { en: "Our Values", mr: "आमची मूल्ये" },
  "about.v1": { en: "Transparency in every decision", mr: "प्रत्येक निर्णयात पारदर्शकता" },
  "about.v2": { en: "Equality and dignity for all citizens", mr: "सर्व नागरिकांसाठी समानता आणि सन्मान" },
  "about.v3": { en: "Sustainable development and clean environment", mr: "शाश्वत विकास आणि स्वच्छ पर्यावरण" },
  "about.v4": { en: "Respect for our cultural and spiritual heritage", mr: "आपल्या सांस्कृतिक व आध्यात्मिक वारशाचा आदर" },
  "about.officeInfo": { en: "Office Information", mr: "कार्यालय माहिती" },
  "about.office": { en: "Office", mr: "कार्यालय" },
  "about.officeName": { en: "Gramsansad Bhavan", mr: "ग्रामसंसद भवन" },
  "about.location": { en: "Location", mr: "स्थान" },
  "about.locationName": { en: "Arangaon (Meherabad)", mr: "अरणगाव (मेहराबाद)" },
  "about.taluka": { en: "Taluka / District", mr: "तालुका / जिल्हा" },
  "about.talukaName": { en: "Ahilyanagar", mr: "अहिल्यानगर" },
  "about.state": { en: "State", mr: "राज्य" },
  "about.stateName": { en: "Maharashtra, India", mr: "महाराष्ट्र, भारत" },
  "about.email": { en: "Email", mr: "ईमेल" },
  "about.committee": { en: "Committee Members", mr: "समिती सदस्य" },
  "about.role.sarpanch": { en: "Sarpanch", mr: "सरपंच" },
  "about.role.upasarpanch": { en: "Deputy Sarpanch", mr: "उपसरपंच" },
  "about.role.sadasya_m": { en: "Member", mr: "सदस्य" },
  "about.role.sadasya_f": { en: "Member", mr: "सदस्या" },
  // History
  "history.title": { en: "Our Heritage", mr: "आपला वारसा" },
  "history.subtitle": { en: "A village with deep spiritual and cultural roots.", mr: "खोल आध्यात्मिक आणि सांस्कृतिक मुळे असलेले गाव." },
  "history.body": {
    en: "Arangaon (Meherabad) is a historically significant village, known across India as the spiritual home of Meher Baba, who lived and worked here for many decades. Pilgrims from around the world visit Meherabad to experience its peaceful atmosphere and rich spiritual legacy. Beyond its spiritual importance, the village has a long agricultural tradition, vibrant local culture, and a strong sense of community that has been passed down through generations.",
    mr: "अरणगाव (मेहराबाद) हे ऐतिहासिकदृष्ट्या महत्त्वाचे गाव आहे, जे संपूर्ण भारतात मेहेर बाबांचे आध्यात्मिक निवासस्थान म्हणून ओळखले जाते. त्यांनी अनेक दशके येथे वास्तव्य व कार्य केले. जगभरातील भाविक मेहराबादला शांत वातावरण आणि समृद्ध आध्यात्मिक वारसा अनुभवण्यासाठी येतात. आध्यात्मिक महत्त्वाशिवाय, गावाला दीर्घ शेती परंपरा, सजीव स्थानिक संस्कृती आणि पिढ्यानपिढ्या चालत आलेली बळकट सामुदायिक भावना आहे.",
  },
  "history.region": { en: "Region", mr: "प्रदेश" },
  "history.regionV": { en: "Ahilyanagar, Maharashtra", mr: "अहिल्यानगर, महाराष्ट्र" },
  "history.knownFor": { en: "Known For", mr: "प्रसिद्ध" },
  "history.knownForV": { en: "Meherabad heritage", mr: "मेहराबाद वारसा" },
  "history.tradition": { en: "Tradition", mr: "परंपरा" },
  "history.traditionV": { en: "Agriculture & Spirituality", mr: "शेती व अध्यात्म" },
  "history.community": { en: "Community", mr: "समुदाय" },
  "history.communityV": { en: "Diverse & Inclusive", mr: "विविध व समावेशक" },
  "history.caption": {
    en: "Vanrai Bandhara — community water conservation work in Arangaon, continuing our tradition of working together for the land.",
    mr: "वनराई बंधारा — अरणगावमधील सामुदायिक जलसंधारण कार्य, जमिनीसाठी एकत्र काम करण्याची आपली परंपरा सुरू ठेवणारे.",
  },
  // Services
  "services.title": { en: "Citizen Services", mr: "नागरिक सेवा" },
  "services.subtitle": { en: "A range of services available to every citizen of Arangaon.", mr: "अरणगावच्या प्रत्येक नागरिकासाठी विविध सेवा उपलब्ध." },
  "services.s1.t": { en: "Birth & Death Certificates", mr: "जन्म व मृत्यू प्रमाणपत्रे" },
  "services.s1.d": { en: "Registration and issuance of official certificates for births and deaths in the village.", mr: "गावातील जन्म व मृत्यूंची नोंदणी आणि अधिकृत प्रमाणपत्रांचे वितरण." },
  "services.s2.t": { en: "Property Tax & Records", mr: "मालमत्ता कर व नोंदी" },
  "services.s2.d": { en: "Property tax collection, mutation, and maintenance of village land records.", mr: "मालमत्ता कर वसुली, फेरफार आणि गाव जमीन अभिलेखांचे जतन." },
  "services.s3.t": { en: "Water Supply", mr: "पाणीपुरवठा" },
  "services.s3.d": { en: "Clean drinking water supply, maintenance of pipelines, wells, and storage tanks.", mr: "स्वच्छ पिण्याचे पाणी पुरवठा, पाईपलाईन, विहिरी व टाक्यांची देखभाल." },
  "services.s4.t": { en: "Sanitation & Cleanliness", mr: "स्वच्छता" },
  "services.s4.d": { en: "Door-to-door waste collection, drainage maintenance, and Swachh Bharat initiatives.", mr: "घरोघरी कचरा संकलन, गटार देखभाल आणि स्वच्छ भारत उपक्रम." },
  "services.s5.t": { en: "Roads & Street Lights", mr: "रस्ते व पथदिवे" },
  "services.s5.d": { en: "Construction and repair of village roads, and installation of solar street lights.", mr: "गाव रस्त्यांचे बांधकाम व दुरुस्ती, आणि सौर पथदिवे बसवणे." },
  "services.s6.t": { en: "Agriculture & Livestock", mr: "शेती व पशुधन" },
  "services.s6.d": { en: "Vaccination drives, farmer schemes, and support for sustainable agriculture.", mr: "लसीकरण मोहीम, शेतकरी योजना आणि शाश्वत शेतीसाठी सहाय्य." },
  "services.s7.t": { en: "Government Schemes", mr: "शासकीय योजना" },
  "services.s7.d": { en: "Assistance with central and state schemes — pensions, housing, MGNREGA, and more.", mr: "केंद्र व राज्य योजनांसाठी सहाय्य — निवृत्तीवेतन, घरकुल, मनरेगा आणि अधिक." },
  "services.s8.t": { en: "Grievance Redressal", mr: "तक्रार निवारण" },
  "services.s8.d": { en: "A dedicated channel for citizens to raise issues and get timely resolutions.", mr: "नागरिकांना समस्या मांडण्यासाठी आणि वेळेत निराकरणासाठी समर्पित मार्ग." },
  "services.help": { en: "Need help with a service?", mr: "सेवेसाठी मदत हवी आहे?" },
  "services.helpBody": { en: "Visit Gramsansad Bhavan or write to us — we will respond promptly.", mr: "ग्रामसंसद भवनाला भेट द्या किंवा आम्हाला लिहा — आम्ही त्वरित प्रतिसाद देऊ." },
  "services.emailOffice": { en: "Email the Office", mr: "कार्यालयाला ईमेल करा" },
  // Gallery
  "gallery.title": { en: "Photo Gallery", mr: "छायाचित्र दालन" },
  "gallery.subtitle": { en: "Glimpses of village life, events, and development work.", mr: "गाव जीवन, कार्यक्रम आणि विकासकामांची झलक." },
  "gallery.empty": { en: "No photos yet.", mr: "अद्याप छायाचित्रे नाहीत." },
  "gallery.g1": { en: "Meher Health Centre, Meherabad (Arangaon) — completed 17 June 1975", mr: "मेहेर आरोग्य केंद्र, मेहराबाद (अरणगाव) — १७ जून १९७५ रोजी पूर्ण" },
  "gallery.g2": { en: "Village water supply tank — clean drinking water for Arangaon", mr: "गाव पाणीपुरवठा टाकी — अरणगावसाठी स्वच्छ पिण्याचे पाणी" },
  "gallery.g3": { en: "Cattle vaccination drive — Mukhyamantri Samrudh Panchayat Raj Abhiyan", mr: "जनावर लसीकरण मोहीम — मुख्यमंत्री समृद्ध पंचायत राज अभियान" },
  "gallery.g4": { en: "Vanrai Bandhara No. 2 — water conservation, Arangaon", mr: "वनराई बंधारा क्र. २ — जलसंधारण, अरणगाव" },
  "gallery.g5": { en: "Gramsansad Bhavan, Arangaon (Meherabad)", mr: "ग्रामसंसद भवन, अरणगाव (मेहराबाद)" },
  // Contact
  "contact.title": { en: "Contact Us", mr: "आमच्याशी संपर्क" },
  "contact.subtitle": { en: "We're here to help. Reach out to the Grampanchayat office.", mr: "आम्ही मदतीसाठी आहोत. ग्रामपंचायत कार्यालयाशी संपर्क साधा." },
  "contact.email": { en: "Email", mr: "ईमेल" },
  "contact.address": { en: "Office Address", mr: "कार्यालयाचा पत्ता" },
  "contact.phone": { en: "Phone", mr: "दूरध्वनी" },
  "contact.send": { en: "Send us a message", mr: "आम्हाला संदेश पाठवा" },
  "contact.sendBody": { en: "This will open your email app to send the message to the office.", mr: "हे आपले ईमेल अ‍ॅप उघडून संदेश कार्यालयाला पाठवेल." },
  "contact.name": { en: "Your Name", mr: "आपले नाव" },
  "contact.namePh": { en: "Full name", mr: "पूर्ण नाव" },
  "contact.message": { en: "Message", mr: "संदेश" },
  "contact.messagePh": { en: "How can we help?", mr: "आम्ही कशी मदत करू शकतो?" },
  "contact.sendBtn": { en: "Send Email", mr: "ईमेल पाठवा" },
  "contact.subjectPrefix": { en: "Citizen enquiry from ", mr: "नागरिक चौकशी - " },
  "contact.website": { en: "Website", mr: "वेबसाईट" },
  // Village content (translated names)
  "village.name": { en: "Arangaon Grampanchayat", mr: "अरणगाव ग्रामपंचायत" },
  "village.tagline": { en: "(Meherabad), Tal. & Dist. Ahilyanagar", mr: "(मेहराबाद), ता. व जि. अहिल्यानगर" },
  "village.address": {
    en: "Gramsansad Bhavan, Arangaon (Meherabad), Tal. & Dist. Ahilyanagar, Maharashtra",
    mr: "ग्रामसंसद भवन, अरणगाव (मेहराबाद), ता. व जि. अहिल्यानगर, महाराष्ट्र",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: keyof typeof dict) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "mr") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  };

  const t = (key: keyof typeof dict) => {
    const entry = dict[key];
    return entry ? entry[lang] : String(key);
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
