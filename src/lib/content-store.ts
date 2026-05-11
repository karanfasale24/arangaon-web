import { useEffect, useState } from "react";
import bhavanImg from "@/assets/grampanchayat-bhavan.jpeg";
import vaccineImg from "@/assets/cattle-vaccination.jpeg";
import vanraiImg from "@/assets/vanrai-bandhara.jpeg";
import healthImg from "@/assets/meher-health-centre.jpg";
import waterTankImg from "@/assets/water-tank.jpeg";
import vanraiJcb from "@/assets/vanrai-bandhara-jcb.jpeg";
import miyawaki from "@/assets/miyawaki-plantation.jpeg";
import vanraiStream from "@/assets/vanrai-bandhara-stream.jpeg";
import vanraiWater from "@/assets/vanrai-bandhara-water.jpeg";
import smashanShed from "@/assets/smashan-bhumi-shed.jpeg";
import smashanPatra from "@/assets/smashan-bhumi-patra-shed.jpeg";
import vanraiWork from "@/assets/vanrai-bandhara-work.jpeg";
import sevaKendraImg from "@/assets/aapla-sarkar-seva-kendra.jpeg";
import waterBucketsImg from "@/assets/water-buckets-distribution.jpeg";

export type SiteContent = {
  village: { name: string; tagline: string; email: string; phone: string; address: string };
  home: { heroTitle: string; heroSubtitle: string; welcomeTitle: string; welcomeBody: string };
  about: { title: string; body: string };
  history: { title: string; body: string };
  services: { title: string; items: { title: string; description: string }[] };
  gallery: { caption: string; src: string }[];
};

const STORAGE_KEY = "arangaon_site_content_v1";
const ADMIN_KEY = "arangaon_admin_v1";
export const ADMIN_PASSWORD = "arangaon2026"; // change anytime via code

export const defaultContent: SiteContent = {
  village: {
    name: "Arangaon Grampanchayat",
    tagline: "(Meherabad), Tal. & Dist. Ahilyanagar",
    email: "arangaongram@gmail.com",
    phone: "+91 98225 23425",
    address: "Gramsansad Bhavan, Arangaon (Meherabad), Tal. & Dist. Ahilyanagar, Maharashtra",
  },
  home: {
    heroTitle: "Welcome to Arangaon Grampanchayat",
    heroSubtitle:
      "A historic village of Meherabad — committed to transparent governance, sustainable development, and the well-being of every citizen.",
    welcomeTitle: "Serving Our Village with Pride",
    welcomeBody:
      "Arangaon Grampanchayat works for the all-round development of our village — from clean water and roads to education, healthcare, and the preservation of our rich heritage. We believe in participation, transparency, and progress for every family.",
  },
  about: {
    title: "About Arangaon",
    body: "Arangaon, also known as Meherabad, is a village in Ahilyanagar district of Maharashtra, India. The Grampanchayat is the local self-government body responsible for the administration and development of the village. Our office — Gramsansad Bhavan — serves as the centre for citizen services, public meetings, and community decisions. We focus on inclusive growth, modern infrastructure, and preserving the cultural identity that makes Arangaon special.",
  },
  history: {
    title: "Our Heritage",
    body: "Arangaon (Meherabad) is a historically significant village, known across India as the spiritual home of Meher Baba, who lived and worked here for many decades. Pilgrims from around the world visit Meherabad to experience its peaceful atmosphere and rich spiritual legacy. Beyond its spiritual importance, the village has a long agricultural tradition, vibrant local culture, and a strong sense of community that has been passed down through generations.",
  },
  services: {
    title: "Citizen Services",
    items: [
      { title: "Birth & Death Certificates", description: "Registration and issuance of official certificates for births and deaths in the village." },
      { title: "Property Tax & Records", description: "Property tax collection, mutation, and maintenance of village land records." },
      { title: "Water Supply", description: "Clean drinking water supply, maintenance of pipelines, wells, and storage tanks." },
      { title: "Sanitation & Cleanliness", description: "Door-to-door waste collection, drainage maintenance, and Swachh Bharat initiatives." },
      { title: "Roads & Street Lights", description: "Construction and repair of village roads, and installation of solar street lights." },
      { title: "Agriculture & Livestock", description: "Vaccination drives, farmer schemes, and support for sustainable agriculture." },
      { title: "Government Schemes", description: "Assistance with central and state schemes — pensions, housing, MGNREGA, and more." },
      { title: "Grievance Redressal", description: "A dedicated channel for citizens to raise issues and get timely resolutions." },
    ],
  },
  gallery: [
    { caption: "Meher Health Centre, Meherabad (Arangaon) — completed 17 June 1975", src: healthImg },
    { caption: "Village water supply tank — clean drinking water for Arangaon", src: waterTankImg },
    { caption: "Cattle vaccination drive — Mukhyamantri Samrudh Panchayat Raj Abhiyan", src: vaccineImg },
    { caption: "Vanrai Bandhara No. 2 — water conservation, Arangaon", src: vanraiImg },
    { caption: "Gramsansad Bhavan, Arangaon (Meherabad)", src: bhavanImg },
    { caption: "Vanrai Bandhara construction with JCB — Mukhyamantri Samrudh Panchayat Raj Abhiyan", src: vanraiJcb },
    { caption: "Miyawaki tree plantation — green cover initiative, Arangaon", src: miyawaki },
    { caption: "Vanrai Bandhara stream site — water conservation work", src: vanraiStream },
    { caption: "Vanrai Bandhara — water harvesting in progress", src: vanraiWater },
    { caption: "Smashan Bhumi shed, Arangaon — community facility", src: smashanShed },
    { caption: "Smashan Bhumi covered shed (patra) — Arangaon", src: smashanPatra },
    { caption: "Vanrai Bandhara excavation work — Arangaon village", src: vanraiWork },
    { caption: "Adarsh Aaple Sarkar Seva Kendra — Grampanchayat Arangaon, Rohini Ramdas Karande", src: sevaKendraImg },
    { caption: "Water buckets distribution — village water supply initiative, Arangaon", src: waterBucketsImg },
  ],
};

function load(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultContent;
    const parsed = JSON.parse(raw);
    return { ...defaultContent, ...parsed };
  } catch {
    return defaultContent;
  }
}

const listeners = new Set<() => void>();

export function getContent(): SiteContent {
  return load();
}

export function setContent(updater: (c: SiteContent) => SiteContent) {
  const next = updater(load());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  listeners.forEach((l) => l());
}

export function resetContent() {
  localStorage.removeItem(STORAGE_KEY);
  listeners.forEach((l) => l());
}

export function useContent(): SiteContent {
  const [c, setC] = useState<SiteContent>(() => (typeof window === "undefined" ? defaultContent : load()));
  useEffect(() => {
    const update = () => setC(load());
    listeners.add(update);
    update();
    window.addEventListener("storage", update);
    return () => {
      listeners.delete(update);
      window.removeEventListener("storage", update);
    };
  }, []);
  return c;
}

// Admin auth (simple, client-side)
export function isAdmin(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ADMIN_KEY) === "1";
}
export function loginAdmin(pw: string): boolean {
  if (pw === ADMIN_PASSWORD) {
    localStorage.setItem(ADMIN_KEY, "1");
    return true;
  }
  return false;
}
export function logoutAdmin() {
  localStorage.removeItem(ADMIN_KEY);
}
