import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Warhammer 40,000: Space Marine 2",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=90",
    previewImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=90",
    discount: 75,
    originalPrice: "3,399",
    price: "849",
    rating: 8.1,
    reviews: 3200,
    reviewText: "Very Positive",
    tags: ["Action", "Shooter", "Warhammer 40K", "Adventure"],
  },
  {
    id: 2,
    title: "Resident Evil Requiem",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=90",
    previewImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=90",
    discount: 30,
    originalPrice: "4,399",
    price: "3,079",
    rating: 8.7,
    reviews: 54029,
    reviewText: "Overwhelmingly Positive",
    tags: ["Survival Horror", "Zombies", "Horror", "Third-Person Shooter", "Action"],
  },
  {
    id: 3,
    title: "PRAGMATA",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=90",
    previewImage: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&q=90",
    discount: 20,
    originalPrice: "3,799",
    price: "3,039",
    rating: 8.4,
    reviews: 1800,
    reviewText: "Very Positive",
    tags: ["Action", "Adventure", "Sci-Fi", "Third-Person"],
  },
  {
    id: 4,
    title: "Cyberpunk 2077",
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=900&q=90",
    previewImage: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=1200&q=90",
    discount: 50,
    originalPrice: "2,999",
    price: "1,499",
    rating: 8.6,
    reviews: 12000,
    reviewText: "Very Positive",
    tags: ["RPG", "Open World", "Cyberpunk", "Action"],
  },
  {
    id: 5,
    title: "Elden Ring",
    image: "https://images.unsplash.com/photo-1619252584172-a83a949b6efd?w=900&q=90",
    previewImage: "https://images.unsplash.com/photo-1619252584172-a83a949b6efd?w=1200&q=90",
    discount: 40,
    originalPrice: "3,999",
    price: "2,399",
    rating: 9.0,
    reviews: 25000,
    reviewText: "Overwhelmingly Positive",
    tags: ["RPG", "Souls-like", "Open World", "Fantasy"],
  },
];

function PriceTag({ game, small = false }) {
  const pad = small ? "px-2 py-2" : "px-2 py-1";

  return (
    <div className="flex">
      <span className={`bg-[#a4d007] font-bold text-[#1a2b05] ${pad} ${small ? "text-[14px]" : "text-[16px]"}`}>
        -{game.discount}%
      </span>
      <span className={`bg-[#344654] text-gray-300 line-through ${pad} ${small ? "text-[12px]" : "text-[13px]"}`}>
        ₹{game.originalPrice}
      </span>
      <span className={`bg-[#344654] text-white ${pad} ${small ? "text-[13px]" : "text-[14px]"}`}>
        ₹{game.price}
      </span>
    </div>
  );
}

function GameCard({ game }) {
  return (
    <div className="group overflow-hidden bg-[#171d25] shadow-lg transition duration-300 hover:shadow-2xl">
      <div className="relative aspect-[0.78] overflow-hidden">
        <img src={game.image} alt={game.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 right-0">
          <PriceTag game={game} />
        </div>
      </div>

      <div className="p-3">
        <h3 className="truncate text-[16px] font-medium text-white">{game.title}</h3>
        <div className="mt-2 flex items-center gap-1 text-[12px] text-gray-400">
          <Star size={13} fill="currentColor" />
          <span>{game.rating}</span>
          <span className="text-gray-600">({game.reviews.toLocaleString()})</span>
        </div>
      </div>
    </div>
  );
}

function GamePreview({ game }) {
  return (
    <div className="absolute left-1/2 top-0 w-[370px] -translate-x-1/2 overflow-hidden bg-[#713521] shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
      <div className="relative h-[220px] overflow-hidden">
        <img src={game.previewImage} alt={game.title} className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#713521] to-transparent" />
      </div>

      <div className="min-h-[235px] px-5 py-4">
        <h2 className="text-[23px] font-semibold leading-tight text-white">{game.title}</h2>

        <div className="mt-2 text-[12px]">
          <span className="text-[#66c0f4]">{game.reviewText}</span>
          <span className="text-white"> ({game.reviews.toLocaleString()})</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {game.tags.map((tag) => (
            <span key={tag} className="rounded-[2px] bg-[#875344] px-2 py-1 text-[12px] text-[#ddd]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button className="flex items-center gap-2 bg-[#75a900] px-4 py-2 text-[14px] font-medium text-white transition hover:bg-[#8bc400]">
            <ShoppingCart size={15} />
            Add to Cart
          </button>
          <PriceTag game={game} small />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const carouselRef = useRef(null);
  const [search, setSearch] = useState("");
  const [hoveredGame, setHoveredGame] = useState(null);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -390 : 390,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0b1118] text-white">
      <main>
        <section className="relative mx-auto max-w-[1080px] overflow-hidden">
          <div className="relative h-[390px] overflow-hidden bg-gradient-to-br from-[#301815] via-[#9b5031] to-[#d69a48]">
            <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#431c18]/80 blur-3xl" />
            <div className="absolute -right-[100px] -top-[100px] h-[450px] w-[450px] rounded-full bg-[#f3d78d]/50 blur-3xl" />
            <div className="absolute bottom-[-150px] left-[30%] h-[400px] w-[600px] rounded-full bg-[#6c2d1e]/50 blur-3xl" />

            <div className="absolute left-10 top-5 text-[90px] opacity-50">🍂</div>
            <div className="absolute left-[48%] top-0 text-[70px] opacity-50">🍁</div>
            <div className="absolute right-16 top-4 text-[80px] opacity-50">🍂</div>
            <div className="absolute bottom-5 left-[20%] text-[80px] opacity-40">🍁</div>

            <div className="relative z-10 flex h-full flex-col justify-center px-14">
              <div
                className="text-[38px] font-black uppercase leading-none text-white"
                style={{ textShadow: "0 3px 0 #ed5266, 0 4px 8px rgba(0,0,0,.4)" }}
              >
                Steam
              </div>

              <h1
                className="mt-2 text-[76px] font-black uppercase leading-[0.82] tracking-tight text-[#ff5068]"
                style={{ WebkitTextStroke: "5px white", textShadow: "0 7px 0 rgba(255,255,255,.25)" }}
              >
                Autumn
                <br />
                Sale
              </h1>

              <div
                className="mt-8 text-[21px] font-black uppercase text-white"
                style={{ textShadow: "0 3px 0 #ef4b62" }}
              >
                ON NOW THRU OCT 8 AT 10 AM PT
              </div>
            </div>

            <div className="absolute bottom-3 right-[19%] text-[120px]">🐉</div>
            <div className="absolute bottom-10 right-10 text-[80px]">🧰</div>
          </div>
        </section>

        <section className="relative mx-auto -mt-1 max-w-[1080px]">
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute -left-[65px] top-1/2 z-[60] hidden -translate-y-1/2 text-white/70 transition hover:text-white md:block"
          >
            <ChevronLeft size={54} strokeWidth={1.5} />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth py-1"
            style={{ scrollbarWidth: "none" }}
          >
            {filteredGames.map((game) => {
              const isHovered = hoveredGame === game.id;

              return (
                <div
                  key={game.id}
                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                  className={`relative shrink-0 transition-all duration-200 ${isHovered ? "z-50 w-[370px]" : "z-10 w-[350px]"}`}
                >
                  {isHovered ? <GamePreview game={game} /> : <GameCard game={game} />}
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scrollCarousel("right")}
            className="absolute -right-[65px] top-1/2 z-[60] hidden -translate-y-1/2 text-white/70 transition hover:text-white md:block"
          >
            <ChevronRight size={54} strokeWidth={1.5} />
          </button>
        </section>

        {filteredGames.length === 0 && (
          <div className="mx-auto flex max-w-[1080px] justify-center py-20 text-gray-400">
            No games found for "{search}"
          </div>
        )}
      </main>
    </div>
  );
}