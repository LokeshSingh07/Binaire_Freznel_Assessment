import { useState } from "react";

const featured = [
  {
    title: "RuneScape: Dragonwilds",
    label: "Popular this month",
    price: "₹1,700",
    image: "https://placehold.co/600x280/3b1d0e/f5c26b?text=RUNESCAPE+DRAGONWILDS",
  },
  {
    title: "Control Resonant",
    label: "Popular this month",
    price: "₹3,599",
    image: "https://placehold.co/600x280/5a1a1a/ffffff?text=CONTROL+RESONANT",
  },
];

const topSellers = [
  { id: 1, title: "Aion 2", price: "Free To Play", live: true, image: "https://placehold.co/230x108/1e2a4a/ffffff?text=AION+2" },
  { id: 2, title: "FC 27", price: "₹3,999", image: "https://placehold.co/230x108/2a3a52/ffffff?text=FC27" },
  { id: 3, title: "Wardogs", price: "₹1,969", image: "https://placehold.co/230x108/3a3320/ffffff?text=WARDOGS" },
  { id: 4, title: "Ace Combat 8", price: "₹3,999", live: true, image: "https://placehold.co/230x108/1d3447/ffffff?text=ACE+COMBAT+8" },
  {
    id: 5,
    title: "Aniimo",
    price: "Free To Play",
    image: "https://placehold.co/230x108/4a7fb5/ffffff?text=ANIIMO",
    released: "16 Sep, 2026",
    screenshot: "https://placehold.co/274x154/5d8f4a/ffffff?text=Screenshot",
    reviews: { label: "Mostly Positive", count: "11,555" },
    tags: ["Open World", "Creature Collector", "Multiplayer"],
  },
];

function FeaturedCard({ game }) {
  return (
    <a href="#" className="block bg-[#16202d] shadow-[0_0_8px_rgba(0,0,0,0.5)] hover:brightness-110 transition">
      <img src={game.image} alt={game.title} className="w-full h-[276px] object-cover" />
      <div className="h-16 bg-[#4c7a9b] px-4 py-2 flex flex-col justify-center">
        <span className="text-[#c6d4df] text-lg leading-tight">{game.label}</span>
        <span className="text-[#c6d4df] text-xs mt-1">{game.price}</span>
      </div>
    </a>
  );
}

function LiveBadge() {
  return (
    <span className="absolute top-1 left-1 flex items-center gap-1.5 bg-black/80 text-white text-sm tracking-wide px-2 py-0.5 rounded-sm">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
      LIVE
    </span>
  );
}

function HoverPopup({ game }) {
  return (
    <div className="absolute z-20 left-full top-0 ml-2 w-[306px] bg-[#c6d4df] text-[#16202d] p-4 shadow-[0_0_12px_rgba(0,0,0,0.6)]">
      <h3 className="text-base leading-tight">{game.title}</h3>
      <p className="text-[11px] text-[#4b5c6b] mt-1">Released: {game.released}</p>
      <img src={game.screenshot} alt="" className="w-full h-[154px] object-cover mt-2" />
      <div className="mt-2 bg-[#5d7083]/70 text-[#c6d4df] text-xs px-2 py-1.5">
        <div className="text-[#a8b8c6]">English Reviews:</div>
        <div>
          <span className="text-[#66c0f4]">{game.reviews.label}</span> ({game.reviews.count} reviews)
        </div>
      </div>
      <p className="text-xs text-[#4b5c6b] mt-3">User tags:</p>
      <div className="flex flex-wrap gap-1 mt-1">
        {game.tags.map((t) => (
          <span key={t} className="bg-[#5d7083] text-[#c6d4df] text-[11px] px-1.5 py-0.5 rounded-sm">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SellerCard({ game }) {
  const [hover, setHover] = useState(false);
  const isFree = game.price === "Free To Play";
  return (
    <div
      className="relative shrink-0 w-[230px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href="#" className="block bg-[#16202d] hover:brightness-110 transition">
        <div className="relative">
          <img src={game.image} alt={game.title} className="w-full h-[108px] object-cover" />
          {game.live && <LiveBadge />}
        </div>
        <div className="h-7 bg-[#1b2838] flex items-center justify-end px-2">
          <span
            className={`text-xs px-1.5 py-0.5 rounded-sm ${
              isFree ? "bg-black/50 text-[#c6d4df]" : "bg-black/50 text-[#c6d4df]"
            }`}
          >
            {game.price}
          </span>
        </div>
      </a>
      {hover && game.reviews && <HoverPopup game={game} />}
    </div>
  );
}

const releaseRows = [
  { id: 1, title: "AION 2", tags: "Free to Play, MMORPG, Massively Multiplayer, Adventure", price: "Free", img: "1e2a4a" },
  {
    id: 2,
    title: "ACE COMBAT 8: WINGS OF THEVE",
    tags: "Flight, Action, Shooter, Military",
    price: "₹3,999.00",
    img: "1d3447",
    released: "2 Oct, 2026",
    screenshot: "https://placehold.co/274x154/5a6f86/ffffff?text=Screenshot",
    reviews: { label: "Very Positive", count: "5,866" },
    popupTags: ["Flight", "Action", "Shooter", "Military", "Vehicular Combat"],
  },
  { id: 3, title: "RetroSpace", tags: "Immersive Sim, Action, First-Person, Sci-fi", price: "₹823.00", original: "₹915.00", discount: "-10%", img: "7a2a1a" },
  { id: 4, title: "DYNASTY WARRIORS 3: Complete Edition Remastered", tags: "Hack and Slash, Spectacle fighter, RPG, Strategy", price: "₹2,930.00", img: "b89a10" },
  { id: 5, title: "Dicevaders", tags: "Roguelike Deckbuilder, Deckbuilding, Roguelike, Strategy", price: "₹701.00", original: "₹779.00", discount: "-10%", mac: true, img: "123a6a" },
  { id: 6, title: "Nivalis Nights", tags: "Cyberpunk, Simulation, Life Sim, Management", price: "₹1,187.00", original: "₹1,319.00", discount: "-10%", img: "2a2050" },
  { id: 7, title: "Way of the Hunter 2", tags: "Adventure, Simulation, Hunting, Shooter", price: "₹2,458.00", original: "₹3,306.00", discount: "-26%", img: "4a4a30" },
  { id: 8, title: "Minecraft Dungeons II", tags: "Action, Adventure, RPG, Dungeon Crawler", price: "₹2,399.00", img: "1a2a5a" },
  { id: 9, title: "CONTROL Resonant", tags: "Hack and Slash, Action RPG, Story Rich, Lore-Rich", price: "₹3,599.00", img: "5a1a1a" },
  { id: 10, title: "Graveyard Keeper 2", tags: "Sandbox, Building, Capitalism, Medieval", price: "₹1,095.00", original: "₹1,623.00", discount: "-33%", img: "5a2a6a" },
];

const under500 = [
  { title: "FC27", price: "₹ 399", dlc: true, img: "2a3a52" },
  { title: "American Truck", price: "₹ 379", dlc: true, img: "6a2020" },
  { title: "World Apart", price: "₹ 421", original: "₹ 629", discount: "-33%", img: "7a3a3a" },
  { title: "Wanderburg", price: "₹ 499", img: "c9c0a8" },
  { title: "Well Dweller", price: "₹ 425", original: "₹ 500", discount: "-15%", img: "3a2a1a" },
  { title: "Woman Simulator", price: "₹ 392", original: "₹ 490", discount: "-20%", img: "d05a8a" },
  { title: "Space Marine II", price: "₹ 399", dlc: true, img: "1a3a6a" },
  { title: "IGTAP", price: "₹ 359", original: "₹ 399", discount: "-10%", img: "6a6a6a" },
  { title: "Escape Simulator", price: "₹ 269", original: "₹ 299", discount: "-10%", dlc: true, img: "8a5a1a" },
  { title: "Dinobones", price: "₹ 278", original: "₹ 309", discount: "-10%", img: "7a3a1a" },
];

const WinIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4 fill-[#8ba6b6]/70">
    <rect x="0" y="0" width="7" height="7" /><rect x="9" y="0" width="7" height="7" />
    <rect x="0" y="9" width="7" height="7" /><rect x="9" y="9" width="7" height="7" />
  </svg>
);

const Discount = ({ children }) => (
  <span className="bg-[#4c6b22] text-[#a4d007] text-[15px] px-1.5 py-1 leading-none">{children}</span>
);

function ReleaseRow({ game }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <a
        href="#"
        className="flex items-center h-[69px] bg-gradient-to-r from-[#16202d] to-[#1b2838] hover:from-[#2a3f55] hover:to-[#1f3246] transition-colors"
      >
        <img
          src={`https://placehold.co/184x69/${game.img}/ffffff?text=${encodeURIComponent(game.title.split(" ")[0])}`}
          alt=""
          className="w-[184px] h-[69px] object-cover shrink-0"
        />
        <div className="flex-1 min-w-0 px-4">
          <div className="text-[15px] text-[#c6d4df] truncate">{game.title}</div>
          <div className="flex items-center gap-1 my-0.5">
            <WinIcon />
            {game.mac && (
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-[#8ba6b6]/70"><circle cx="8" cy="9" r="5.5" /><rect x="7" y="1" width="2" height="3" /></svg>
            )}
          </div>
          <div className="text-xs text-[#4f6a80] truncate">{game.tags}</div>
        </div>
        <div className="flex items-center justify-end gap-3 pr-4 w-[200px] shrink-0">
          {game.discount && <Discount>{game.discount}</Discount>}
          <div className="text-right text-[#c6d4df]">
            {game.original && <div className="text-[10px] text-[#738895] line-through leading-none">{game.original}</div>}
            <div className={`text-[15px] ${game.original ? "text-[#a4d007]" : ""}`}>{game.price}</div>
          </div>
        </div>
      </a>
      {hover && game.reviews && (
        <div className="hidden lg:block">
          <div className="absolute z-20 left-full -top-2 ml-1 w-[306px] bg-[#c6d4df] text-[#16202d] p-4 shadow-[0_0_12px_rgba(0,0,0,0.6)]">
            <h3 className="text-base leading-tight">{game.title}</h3>
            <p className="text-[11px] text-[#4b5c6b] mt-1">Released: {game.released}</p>
            <img src={game.screenshot} alt="" className="w-full h-[154px] object-cover mt-2" />
            <div className="mt-2 bg-[#5d7083]/70 text-[#c6d4df] text-xs px-2 py-1.5">
              <div className="text-[#a8b8c6]">English Reviews:</div>
              <span className="text-[#66c0f4]">{game.reviews.label}</span> ({game.reviews.count} reviews)
            </div>
            <p className="text-xs text-[#4b5c6b] mt-3">User tags:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {game.popupTags.map((t) => (
                <span key={t} className="bg-[#5d7083] text-[#c6d4df] text-[11px] px-1.5 py-0.5 rounded-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PriceTile({ game }) {
  return (
    <a href="#" className="block bg-[#16202d] hover:bg-[#1f3246] transition-colors p-2.5 relative">
      {game.dlc && (
        <span className="absolute top-2.5 left-2.5 w-0 h-0 border-t-[28px] border-t-purple-500/80 border-r-[28px] border-r-transparent" />
      )}
      <img
        src={`https://placehold.co/160x68/${game.img}/ffffff?text=${encodeURIComponent(game.title)}`}
        alt={game.title}
        className="w-full h-[68px] object-cover"
      />
      <div className="flex items-center justify-end gap-1 mt-1 text-xs h-5">
        {game.discount ? (
          <span className="flex items-center bg-black/40 text-xs">
            <span className="bg-[#4c6b22] text-[#a4d007] px-1">{game.discount}</span>
            <span className="text-[#738895] line-through px-1">{game.original}</span>
            <span className="text-[#a4d007] pr-1">{game.price}</span>
          </span>
        ) : (
          <span className="text-[#c6d4df] bg-black/40 px-1">{game.price}</span>
        )}
      </div>
    </a>
  );
}

function ReleasesSection() {
  const [tab, setTab] = useState("popular");
  const tabCls = (k) =>
    `px-2.5 py-1.5 text-sm transition-colors ${
      tab === k ? "bg-[#2a475e] text-white" : "text-[#67c1f5] hover:text-white"
    }`;
  return (
    <section className="mt-14 grid grid-cols-1 lg:grid-cols-[790px_1fr] gap-x-4 gap-y-8">
      <div>
        <div className="flex gap-1 mb-1">
          <button className={tabCls("popular")} onClick={() => setTab("popular")}>Popular New Releases</button>
          <button className={tabCls("new")} onClick={() => setTab("new")}>New Releases</button>
        </div>
        <div className="flex flex-col gap-[5px]">
          {(tab === "popular" ? releaseRows : [...releaseRows].reverse()).map((g) => (
            <ReleaseRow key={g.id} game={g} />
          ))}
        </div>
      </div>

      <aside>
        <h3 className="text-sm text-white mb-3 lg:mt-5">Under ₹ 500</h3>
        <div className="grid grid-cols-2 gap-2">
          {under500.map((g) => (
            <PriceTile key={g.title} game={g} />
          ))}
        </div>
        <h3 className="text-sm text-white mt-10">Under ₹ 250</h3>
      </aside>
    </section>
  );
}

export default function NewReleases() {
  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] font-sans">
      {/* top search bar strip */}
      <div className="h-4 bg-[#171d25] relative">
        <div className="absolute right-[364px] top-0 w-[480px] h-2 bg-[#316282] rounded-b" />
        <div className="absolute right-[364px] top-0 w-8 h-2 bg-[#47bfff] rounded-br" />
      </div>

      <main className="max-w-[1200px] mx-auto pt-16 px-4 pb-24">
        {/* breadcrumb + title */}
        <nav className="text-xs text-[#8ba6b6]">
          <a href="#" className="hover:text-white">All Products</a>
          <span className="mx-1">&gt;</span>
          <span className="text-[#67c1f5]">New Releases</span>
        </nav>
        <h1 className="mt-3 text-[32px] font-semibold text-white leading-tight">New Releases</h1>

        {/* featured */}
        <section className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((g) => (
            <FeaturedCard key={g.title} game={g} />
          ))}
        </section>

        {/* top sellers */}
        <section className="mt-12">
          <h2 className="text-sm">
            <span className="text-white">New Top Sellers</span>{" "}
            <span className="text-[#8ba6b6] text-base">Released This Month</span>
          </h2>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:thin] [scrollbar-color:#3d4450_#171d25]">
            {topSellers.map((g) => (
              <SellerCard key={g.id} game={g} />
            ))}
          </div>
        </section>

        <ReleasesSection />
      </main>
    </div>
  );
}