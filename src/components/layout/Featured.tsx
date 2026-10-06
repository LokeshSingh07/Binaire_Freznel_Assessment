import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const u = (id: string) => `https://images.unsplash.com/${id}?w=900&q=85`;

const featured = [
  { id: 1, title: "Kingdom Two Crowns", img: u("photo-1511512578047-dfb367046420"), off: 90, was: "880", now: "88" },
  { id: 2, title: "Steep", img: u("photo-1519681393784-d120267933ba"), off: 95, was: "1,499", now: "74" },
  { id: 3, title: "Jagged Alliance 3", img: u("photo-1542751371-adc38448a05e"), off: 90, was: "1,800", now: "180" },
  { id: 4, title: "Cyberpunk 2077", img: u("photo-1605899435973-ca2d1a8861cf"), off: 80, was: "2,999", now: "599" },
  { id: 5, title: "Elden Ring", img: u("photo-1619252584172-a83a949b6efd"), off: 60, was: "3,999", now: "1,599" },
  { id: 6, title: "PRAGMATA", img: u("photo-1593305841991-05c297ba4575"), off: 70, was: "3,799", now: "1,139" },
];

const grid = [
  { id: 1, title: "Satisfactory", img: u("photo-1511512578047-dfb367046420"), off: 30, was: "1,600", now: "1,120" },
  { id: 2, title: "Funnel Runners", img: u("photo-1550745165-9bc0b252726f"), off: 30, was: "305", now: "213" },
  { id: 3, title: "Sand: Raiders of Sophie", img: u("photo-1542751371-adc38448a05e"), off: 20, was: "509", now: "407" },
  { id: 4, title: "American Truck Simulator", img: u("photo-1519681393784-d120267933ba"), off: 75, was: "920", now: "230", live: true },
  { id: 5, title: "WWI Gallipoli", img: u("photo-1605899435973-ca2d1a8861cf"), off: 40, was: "999", now: "599" },
  { id: 6, title: "Jurassic World Evolution 3", img: u("photo-1593305841991-05c297ba4575"), off: 50, was: "2,499", now: "1,249" },
  { id: 7, title: "Breathedge 2", img: u("photo-1619252584172-a83a949b6efd"), off: 25, was: "1,299", now: "974" },
  { id: 8, title: "Stellar Blade", img: u("photo-1511512578047-dfb367046420"), off: 20, was: "3,499", now: "2,799" },
];

function Price({ g }: { g: any }) {
  return (
    <div className="flex items-stretch text-[14px] leading-none">
      <span className="bg-[#a4d007] px-1.5 py-[5px] text-[16px] font-bold text-[#1a2b05]">-{g.off}%</span>
      <span className="flex items-center bg-[#344654] px-1.5 text-[11px] text-[#8f98a0] line-through">₹{g.was}</span>
      <span className="flex items-center bg-[#344654] px-1.5 pr-2 text-white">₹ {g.now}</span>
    </div>
  );
}

export default function FeaturedDeepDiscounts() {
  const perPage = 3;
  const pages = Math.ceil(featured.length / perPage);
  const [page, setPage] = useState(0);
  const go = (d: number) => setPage((p) => (p + d + pages) % pages);

  return (
    <div className="min-h-screen bg-[#2a1410] px-4 py-10 text-white">
      <div className="relative mx-auto w-full max-w-[1200px]">
        {/* ---------- Featured panel ---------- */}
        <section className="relative bg-[#5a2012]/90 px-4 pb-4 pt-6">
          <div className="mb-5 flex items-start justify-between px-0">
            <div>
              <h2 className="text-[21px] font-bold leading-tight">Featured Deep Discounts</h2>
              <p className="mt-1 text-[16px] text-[#c9b4ad]">Especially great deals on some of the all-time greats</p>
            </div>
            <Link to="/explore" className="bg-[#d6d7d9] px-5 py-2 text-[15px] font-medium text-[#1b2838] transition hover:bg-white">
              See All
            </Link>
          </div>

          <button aria-label="Previous" onClick={() => go(-1)} className="absolute -left-12 top-[190px] hidden text-white/70 transition hover:text-white lg:block">
            <ChevronLeft size={48} strokeWidth={2} />
          </button>
          <button aria-label="Next" onClick={() => go(1)} className="absolute -right-12 top-[190px] hidden text-white/70 transition hover:text-white lg:block">
            <ChevronRight size={48} strokeWidth={2} />
          </button>

          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${page * 100}%)` }}>
              {Array.from({ length: pages }).map((_, p) => (
                <div key={p} className="grid w-full shrink-0 grid-cols-1 gap-3 md:grid-cols-3">
                  {featured.slice(p * perPage, p * perPage + perPage).map((g) => (
                    <Link key={g.id} to="/agegate" className="group block">
                      <div className="relative aspect-[382/219] overflow-hidden bg-black">
                        <img src={g.img} alt={g.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-4 text-[22px] font-black uppercase tracking-tight drop-shadow">{g.title}</span>
                      </div>
                      <div className="flex justify-end"><Price g={g} /></div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex justify-center gap-1.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-[7px] w-[14px] rounded-full transition ${i === page ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </section>

        {/* ---------- Grid ---------- */}
        <section className="mt-[30px] grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-4">
          {grid.map((g) => (
            <Link key={g.id} to="/agegate" className="group block outline outline-2 -outline-offset-2 outline-transparent transition hover:outline-white">
              <div className="relative aspect-[291/166] overflow-hidden bg-black">
                <img src={g.img} alt={g.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-[16px] font-black uppercase leading-none drop-shadow">{g.title}</span>
                {g.live && (
                  <span className="absolute left-1.5 top-1.5 flex items-center gap-1.5 bg-black/80 px-2 py-1 text-[12px] tracking-wide">
                    <span className="h-2 w-2 rounded-full bg-[#e5413d]" /> LIVE
                  </span>
                )}
              </div>
              <div className="flex justify-end"><Price g={g} /></div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}