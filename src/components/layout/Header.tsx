import { useState } from "react";
import { Link } from "react-router-dom";

const STORE_NAV = ["Browse", "Recommendations", "Categories", "Ways to Play", "Special Sections"];

function Chevron() {
  return (
    <svg className="mt-[3px]" width="10" height="7" viewBox="0 0 10 7" aria-hidden="true">
      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SteamLogo() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
      <circle cx="23" cy="23" r="23" fill="#c5c3c0" />
      <circle cx="29" cy="17" r="7" fill="#171a21" />
      <circle cx="29" cy="17" r="4.2" fill="#c5c3c0" />
      <path d="M4 24l10 4a5 5 0 1 1-2.5 4.5L4.5 29.8A19 19 0 0 1 4 24z" fill="#171a21" />
      <circle cx="16.5" cy="32" r="2.4" fill="#c5c3c0" />
    </svg>
  );
}

export default function SteamHeader() {
  const [activeTab, setActiveTab] = useState("STORE");
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  return (
    <header className="w-full font-['Motiva_Sans',Arial,Helvetica,sans-serif] text-[#c6d4df]">
      <div className="h-[126px] bg-[#171a21]">
        <div className="relative mx-auto h-full w-full max-w-[1400px] px-6 lg:px-8">
          <div className="absolute right-6 top-1 flex items-center gap-2.5 text-[13px] lg:right-8">
            <a href="#install" className="inline-flex h-[30px] items-center gap-2 bg-gradient-to-r from-[#75b022] to-[#588a1b] px-3.5 text-[#e5f4c1] hover:from-[#8ed629] hover:to-[#6aa621] hover:text-white">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M9 1v8M5.5 6L9 9.5 12.5 6M2 12h14v4H2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              <span>Install Steam</span>
            </a>

            <a href="#signin" className="text-[#b8b6b4] hover:text-white">
              sign in
            </a>

            <span className="text-[#3d93c9]">|</span>

            <button type="button" className="inline-flex items-center gap-1.5 text-[#b8b6b4] hover:text-white">
              language
              <svg width="9" height="5" viewBox="0 0 9 5" aria-hidden="true">
                <path d="M0 0h9L4.5 5z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="flex h-full items-center pt-3.5">
            <Link to="/" aria-label="Steam" className="mr-8 flex shrink-0 items-center gap-3">
              <SteamLogo />
              <span className="text-2xl font-bold tracking-[2px] text-[#c5c3c0]">
                STEAM
                <sup className="ml-px align-top text-[8px]">®</sup>
              </span>
            </Link>

            <nav className="flex gap-[18px] overflow-x-auto" aria-label="Main">
              <Link
                to="/"
                onClick={() => setActiveTab("STORE")}
                className={`border-b-2 pb-1 text-xl font-medium tracking-[0.3px] transition-colors hover:text-[#1a9fff] ${
                  activeTab === "STORE" ? "border-[#1a9fff] text-[#1a9fff]" : "border-transparent text-white"
                }`}
              >
                STORE
              </Link>
              <Link
                to="/agegate"
                onClick={() => setActiveTab("AGEGATE")}
                className={`border-b-2 pb-1 text-xl font-medium tracking-[0.3px] transition-colors hover:text-[#1a9fff] ${
                  activeTab === "AGEGATE" ? "border-[#1a9fff] text-[#1a9fff]" : "border-transparent text-white"
                }`}
              >
                AGEGATE
              </Link>
              <Link
                to="/explore"
                onClick={() => setActiveTab("EXPLORE")}
                className={`border-b-2 pb-1 text-xl font-medium tracking-[0.3px] transition-colors hover:text-[#1a9fff] ${
                  activeTab === "EXPLORE" ? "border-[#1a9fff] text-[#1a9fff]" : "border-transparent text-white"
                }`}
              >
                EXPLORE
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#1b3450]/95 via-[#172232]/90 to-[#121a26]/90">
        <div className="mx-auto flex min-h-[54px] w-full max-w-[1400px] flex-col items-stretch gap-2 px-6 py-2 lg:h-[54px] lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-0">
          <nav className="flex items-center gap-1 overflow-x-auto" aria-label="Store">
            {STORE_NAV.map((item) => (
              <Link
                key={item}
                to="/explore"
                className="inline-flex h-9 shrink-0 items-center gap-2 px-3 text-base text-[#c6d4df] transition-colors hover:bg-white/10 hover:text-white"
              >
                {item}
                <Chevron />
              </Link>
            ))}
          </nav>

          <form onSubmit={handleSearch} role="search" className="flex h-[42px] w-full max-w-[600px] lg:ml-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the store"
              aria-label="Search the store"
              className="min-w-0 flex-1 border border-r-0 border-white/15 bg-[#67c1f5]/10 px-3.5 text-base italic text-white outline-none placeholder:text-[#8f98a0] focus:border-[#1a9fff] focus:bg-[#67c1f5]/20"
            />
            <button
              type="submit"
              aria-label="Search"
              className="grid w-[42px] shrink-0 place-items-center bg-[#1a9fff] transition-colors hover:bg-[#47b2ff]"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="8" cy="8" r="5.5" fill="none" stroke="#fff" strokeWidth="2.4" />
                <path d="M12.5 12.5L18 18" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}