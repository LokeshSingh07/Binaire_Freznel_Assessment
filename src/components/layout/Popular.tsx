import { useState } from "react";
import { Link } from "react-router-dom";

const u = (id: string, w = 700) => `https://images.unsplash.com/${id}?w=${w}&q=85`;
const P = [
  "photo-1511512578047-dfb367046420", "photo-1542751371-adc38448a05e", "photo-1593305841991-05c297ba4575",
  "photo-1605899435973-ca2d1a8861cf", "photo-1619252584172-a83a949b6efd", "photo-1519681393784-d120267933ba",
  "photo-1550745165-9bc0b252726f",
];

const games = [
  { id: 1, title: "AION 2", tags: ["Free to Play", "MMORPG", "Massively Multiplayer", "Adventure"], extra: ["Open World"], date: "5 Oct, 2026", free: true, reviews: ["Mostly Positive", 3702] },
  { id: 2, title: "Sengoku Rance", tags: ["RPG", "Strategy", "Adventure", "Turn-Based Combat"], date: "1 Oct, 2026", off: 20, was: 509, price: 407, reviews: ["Very Positive", 1280] },
  { id: 3, title: "ACE COMBAT 8: WINGS OF THEVE", tags: ["Flight", "Action", "Shooter", "Military"], date: "1 Oct, 2026", price: 3999, reviews: ["Positive", 940] },
  { id: 4, title: "DYNASTY WARRIORS 3: Complete Edition Remastered", tags: ["Hack and Slash", "Spectacle fighter", "RPG", "Strategy"], date: "30 Sep, 2026", price: 2930, reviews: ["Mixed", 612] },
  { id: 5, title: "Transport Fever 3", tags: ["Simulation", "Transportation", "Management", "City Builder"], date: "29 Sep, 2026", price: 2799, reviews: ["Very Positive", 2210] },
  { id: 6, title: "Nivalis Nights", tags: ["Cyberpunk", "Simulation", "Life Sim", "Management"], date: "29 Sep, 2026", off: 10, was: 1319, price: 1187, reviews: ["Positive", 530] },
  { id: 7, title: "EA SPORTS FC™ 27", tags: ["Sports", "Football (Soccer)", "Multiplayer", "Singleplayer"], date: "24 Sep, 2026", price: 3999, reviews: ["Mixed", 8400] },
  { id: 8, title: "CONTROL Resonant", tags: ["Hack and Slash", "Action RPG", "Story Rich", "Lore-Rich"], date: "23 Sep, 2026", price: 3499, reviews: ["Very Positive", 4100] },
].map((g, i) => ({
  ...g,
  img: u(P[i % P.length], 460),
  shots: [0, 1, 2].map((n) => u(P[(i + n + 1) % P.length], 680)),
}));

const tabs = [
  { id: "new", label: "Popular New Releases", list: games },
  { id: "top", label: "Top Sellers", list: [...games].sort((a: any, b: any) => b.reviews[1] - a.reviews[1]) },
  { id: "upcoming", label: "Popular Upcoming", list: [...games].reverse() },
  { id: "free", label: "Trending Free", list: games.filter((g) => g.free) },
];

const fmt = (n: number) => `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
const tone = (r: string) => (r.startsWith("Mixed") ? "text-[#b9a074]" : "text-[#66c0f4]");

function Price({ g }: { g: any }) {
  if (g.free) return <span className="rounded-[2px] bg-black/40 px-3 py-1.5 text-[14px] text-white">Free</span>;
  return (
    <div className="flex items-stretch text-[15px] leading-none">
      {g.off && (
        <>
          <span className="bg-[#a4d007] px-2 py-1.5 font-bold text-[#1a2b05]">-{g.off}%</span>
          <span className="flex items-center bg-black/40 pl-2 text-[11px] text-[#8f98a0] line-through">{fmt(g.was)}</span>
        </>
      )}
      <span className={`flex items-center bg-black/40 px-2 py-1.5 text-white ${g.off ? "" : "rounded-[2px]"}`}>{fmt(g.price)}</span>
    </div>
  );
}

export default function PopularReleases() {
  const [tab, setTab] = useState("new");
  const currentTab = tabs.find((t) => t.id === tab);
  const list = currentTab ? currentTab.list : games;
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = list.find((g) => g.id === activeId) ?? list[0];

  return (
    <div className="min-h-screen bg-[#3b1a12] px-4 py-10 text-white">
      <div className="mx-auto max-w-[1200px]">
        {/* Tabs */}
        <nav className="mb-6 flex flex-wrap gap-x-8 gap-y-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setActiveId(null); }}
              className={`border-b-[3px] pb-1 text-[22px] font-medium transition ${
                tab === t.id ? "border-[#1a9fff] font-semibold text-white" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className="flex gap-[10px]">
          {/* List */}
          <ul className="flex-1 space-y-[10px]">
            {list.map((g) => (
              <li key={g.id}>
                <Link
                  to="/agegate"
                  onMouseEnter={() => setActiveId(g.id)}
                  className={`flex h-[87px] overflow-hidden transition-colors duration-200 ${
                    active.id === g.id ? "bg-[#7a3b28]" : "bg-[#5b2416] hover:bg-[#6b2f1f]"
                  }`}
                >
                  <img src={g.img} alt={g.title} className="h-full w-[231px] shrink-0 object-cover" />
                  <div className="relative flex min-w-0 flex-1 flex-col justify-between px-3 py-2.5">
                    <div>
                      <h3 className="truncate text-[17px] leading-tight">{g.title}</h3>
                      <p className="mt-1.5 truncate text-[12px] text-[#e0cfc9]">{g.tags.join(", ")}</p>
                    </div>
                    <p className="text-[13px] text-[#b9a199]">Released: {g.date}</p>
                    <div className="absolute bottom-2.5 right-3"><Price g={g} /></div>
                  </div>
                </Link>
              </li>
            ))}
            {list.length === 0 && <li className="py-10 text-center text-white/50">Nothing here yet.</li>}
          </ul>

          {/* Preview panel */}
          <aside className="hidden w-[360px] shrink-0 lg:block">
            <div className="sticky top-4 bg-[#5b2416] p-2.5">
              <div key={active.id} className="animate-[fadeIn_.25s_ease-out]">
                <h2 className="mt-2 px-2 text-[21px]">{active.title}</h2>
                <div className="mt-3 px-2 text-[12px] text-[#e0cfc9]">
                  English Reviews
                  <div>
                    <span className={tone(active.reviews[0] as string)}>{active.reviews[0]}</span> ({(active.reviews[1] as number).toLocaleString()})
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5 px-2">
                  {[...active.tags, ...(active.extra ?? [])].map((t) => (
                    <span key={t} className="rounded-[2px] bg-black/30 px-2 py-1 text-[11px] text-[#e0cfc9]">{t}</span>
                  ))}
                </div>
                <div className="mt-3 space-y-1.5">
                  {active.shots.map((s, i) => (
                    <img key={i} src={s} alt="" className="aspect-[16/9] w-full object-cover" />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}