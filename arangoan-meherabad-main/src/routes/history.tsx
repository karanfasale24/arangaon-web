import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import vanraiImg from "@/assets/vanrai-bandhara.jpeg";
import avatarImg from "@/assets/avatar-meher-baba.jpg";
import samadhiImg from "@/assets/meher-baba-samadhi.jpg";
import krishnaMandirImg from "@/assets/shri-krishna-mandir.jpeg";
import mandirShikharImg from "@/assets/mandir-shikhar.jpeg";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History — Arangaon Grampanchayat" },
      { name: "description", content: "The historic and spiritual heritage of Arangaon (Meherabad) — home of Avatar Meher Baba." },
      { property: "og:title", content: "History — Arangaon (Meherabad)" },
      { property: "og:description", content: "Spiritual home of Avatar Meher Baba and a site of global pilgrimage." },
      { property: "og:image", content: samadhiImg },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t("history.title")} subtitle={t("history.subtitle")} />

      {/* Avatar Meher Baba & Meherabad — featured at top */}
      <section className="bg-secondary/40 border-b">
        <div className="container mx-auto px-4 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Avatar Meher Baba & Meherabad</h2>
            <p className="mt-3 text-muted-foreground">
              The spiritual heritage that gives Arangaon its second name — Meherabad — and draws pilgrims from across the world.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-start">
            <div className="rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] border bg-card">
              <div className="bg-muted flex items-center justify-center">
                <img
                  src={avatarImg}
                  alt="Avatar Meher Baba"
                  className="w-full h-[28rem] object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl">Who Was Avatar Meher Baba?</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Meher Baba (Merwan Sheriar Irani) was born in Poona, India, on <strong>February 25, 1894</strong>, to
                  Persian Zoroastrian parents. He declared himself the <strong>Avatar</strong> — the total
                  manifestation of God in human form — and inspired hundreds of thousands of followers across India,
                  the Americas, Europe and Australia. His disciples named him <em>Meher Baba</em>, meaning
                  “Compassionate Father.”
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] border bg-card">
              <img
                src={samadhiImg}
                alt="Meher Baba's Samadhi (Tomb-Shrine) at Meherabad"
                className="w-full h-[28rem] object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-xl">Meherabad — The Ashram & Pilgrimage Site</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Established around <strong>1923</strong> near Ahilyanagar, Meherabad housed a free school, hospital,
                  dispensary and shelters for the poor — open to all castes in common fellowship. Today, Meher Baba’s
                  <strong> Samadhi (Tomb-Shrine)</strong> is open daily from <strong>6 AM to 8 PM</strong> for Darshan,
                  welcoming pilgrims from around the world.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed sections */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border bg-card p-6">
              <h3 className="font-bold text-lg">Spiritual Awakening</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                In 1913, while still in college, Merwan met <strong>Hazrat Babajan</strong>, an ancient Muslim woman
                and one of the five Perfect Masters of the Age. He later sought out <strong>Upasni Maharaj</strong> at
                Sakori, who over seven years imparted divine knowledge that allowed him to attain spiritual perfection.
              </p>
            </article>

            <article className="rounded-lg border bg-card p-6">
              <h3 className="font-bold text-lg">The 44 Years of Silence</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                In <strong>1925</strong>, Meher Baba began a 44-year period of silence, communicating first via an
                alphabet board and later entirely through hand gestures. He explained this silence not as a discipline
                but as a profound act of <em>universal suffering for the spiritual upliftment of humanity</em>.
              </p>
            </article>

            <article className="rounded-lg border bg-card p-6">
              <h3 className="font-bold text-lg">His Teachings & Work</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Meher Baba taught that God incarnates in human form every 700–1,400 years — earlier Avatars including
                Muhammad, Jesus, Buddha, Krishna, Rama and Zoroaster. His core message:
                <em> “The religion I impart to all is love for God… Love God.”</em> He personally served hundreds of
                <em> masts</em> (advanced seekers), washed lepers, washed the feet of the poor, and distributed grain
                and cloth to the destitute.
              </p>
            </article>

            <article className="rounded-lg border bg-card p-6">
              <h3 className="font-bold text-lg">Later Life & Departure</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                In <strong>February 1954</strong>, Meher Baba publicly declared himself to be the Avatar of the age. In
                July 1968 he announced that his work was completed 100% to his satisfaction. On
                <strong> January 31, 1969</strong>, he dropped his physical form “to live eternally in the hearts of
                all who love him.” His body was interred in the Samadhi he himself had directed to be built.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-xl border bg-primary/5 p-6 text-center">
            <p className="text-base italic text-foreground/90">
              “Don’t worry, be happy.” — Avatar Meher Baba
            </p>
          </div>
        </div>
      </section>

      {/* Shri Chakradhar Swami & Mahanubhav Panth */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">About Shri Chakradhar Swami</h2>
            <p className="mt-3 text-muted-foreground">
              The spiritual legacy of Shri Chakradhar Swami and the Mahanubhav Panth movement — rooted in devotion, equality, and simplicity.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-start">
            <div className="rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] border bg-card">
              <img
                src={krishnaMandirImg}
                alt="Shri Krishna Mandir, Arangaon"
                className="w-full h-[28rem] object-contain bg-muted"
              />
              <div className="p-5">
                <h3 className="font-bold text-xl">Shri Krishna Mandir, Arangaon</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  The historic Shri Krishna Mandir at Shri Kshetra Arangaon, Tal. & Dist. Ahilyanagar — a sacred place of worship and devotion for the village community.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] border bg-card">
              <img
                src={mandirShikharImg}
                alt="Mandir Shikhar (Temple Spire), Arangaon"
                className="w-full h-[28rem] object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-xl">Mandir Shikhar (Temple Spire)</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  The ornate temple spire adorned with traditional motifs, Om flag, and flower petals during a celebration at Arangaon.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed sections about Chakradhar Swami */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border bg-card p-6">
              <h3 className="font-bold text-lg">Early Life</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Shri Chakradhar Swami was born in <strong>1194 CE</strong> in Bharuch, Gujarat, in a Kshatriya family to a Village Chief named <strong>Vishaldeva</strong> and his wife <strong>Malhana Devi</strong>. His original name was <strong>Haripaladeva</strong>. From an early age, he showed little interest in worldly pleasures and chose the path of renunciation, traveling widely to spread his spiritual teachings.
              </p>
            </article>

            <article className="rounded-lg border bg-card p-6">
              <h3 className="font-bold text-lg">The Mahanubhav Panth Movement</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Chakradhar Swami is credited as the founder of the <strong>Mahanubhava Sect</strong> in Vaishnavism in <strong>1267</strong>. He is also known as <strong>Sarvajna Shri Chakradhar Swami</strong>, and the Mahanubhava movement is also known as <em>Jai Shri Krishna Pantha</em>.
              </p>
            </article>

            <article className="rounded-lg border bg-card p-6">
              <h3 className="font-bold text-lg">Core Teachings</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                The central message of Chakradhar Swami was pure devotion to <strong>Parabrahman (bhakti)</strong>, without barriers of caste, creed, or gender. He preached the worship of five divine forms — Sri Krishna, Sri Dattatreya, Sri Chakrapani, Sri Govindaprabhu, and Sri Chakradhar Swami himself. He opposed empty rituals and rigid authority, teaching that salvation was possible only through surrender, remembrance (<em>smaran</em>), and a life of simplicity and morality. His teachings emphasized <strong>non-violence (Ahimsa), celibacy (Brahmacharya), asceticism (Sannyasa), and devotion (Bhakti)</strong>.
              </p>
            </article>

            <article className="rounded-lg border bg-card p-6">
              <h3 className="font-bold text-lg">Social Impact & Literary Legacy</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Chakradhar Swami used simple <strong>Marathi language</strong> instead of Sanskrit, making spiritual knowledge accessible to common people. His teachings were recorded by disciples in important texts such as <strong>Leela Charitra</strong> (the first biography in Marathi, written by Mahimbhat) and <strong>Sutrapath</strong>. In Mahanubhava, all members are accepted irrespective of their castes, and traditional ritualistic religion is rejected.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Village heritage */}
      <section className="container mx-auto px-4 py-12 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="text-muted-foreground leading-relaxed text-[15px]">{t("history.body")}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { k: t("history.region"), v: t("history.regionV") },
              { k: t("history.knownFor"), v: t("history.knownForV") },
              { k: t("history.tradition"), v: t("history.traditionV") },
              { k: t("history.community"), v: t("history.communityV") },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border bg-card p-4">
                <div className="text-xs text-muted-foreground">{s.k}</div>
                <div className="font-semibold mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] border">
          <img src={vanraiImg} alt="Vanrai Bandhara — water conservation work" className="w-full h-80 object-cover" />
          <div className="p-4 bg-card">
            <p className="text-sm text-muted-foreground">{t("history.caption")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
