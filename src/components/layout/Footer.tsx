import React from "react";

const footerSections = [
  {
    title: "STEAM",
    links: [
      "About Steam",
      "Steam SSA",
      "Steamworks",
      "Steam Distribution",
      "Gift Cards",
    ],
  },
  {
    title: "VALVE",
    links: [
      "About Valve",
      "Jobs",
      "Hardware",
      "Recycling",
    ],
  },
  {
    title: "LEGAL",
    links: [
      "Privacy",
      "Accessibility",
      "Notices & Policies",
      "Cookies",
      "Refunds",
    ],
  },
  {
    title: "MORE",
    links: [
      "Get Steam",
      "Get Mobile Apps",
      "Get Support",
      "My Account",
    ],
  },
];

function YoutubeIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#9aa1a9] hover:text-white transition"
    >
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path
        d="M10 8.5L16 12L10 15.5V8.5Z"
        fill="#101923"
      />
    </svg>
  );
}

function BlueskyIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#9aa1a9] hover:text-white transition"
    >
      <path d="M5.2 4.5C7.5 6.2 9.6 8.2 12 11c2.4-2.8 4.5-4.8 6.8-6.5C20.6 3.2 21 4.2 21 5.8c0 1.5-.7 3.5-2.2 5.2-1.3 1.4-3 2.3-5 2.6 2.2.2 4 1.1 5.1 2.5 1 1.2 1.2 2.5.6 3.2-.7.8-2.1.4-3.5-.6L12 15.5l-4 3.2c-1.4 1-2.8 1.4-3.5.6-.6-.7-.4-2 .6-3.2 1.1-1.4 2.9-2.3 5.1-2.5-2-.3-3.7-1.2-5-2.6C3.7 9.3 3 7.3 3 5.8c0-1.6.4-2.6 2.2-1.3Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#9aa1a9] hover:text-white transition"
    >
      <circle cx="12" cy="12" r="10" />
      <path
        d="M13.4 19v-6h2l.3-2.3h-2.3V9.2c0-.7.2-1.2 1.2-1.2h1.3V6c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.1v1.7H9v2.3h2.1v6h2.3Z"
        fill="#101923"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="text-[#9aa1a9] hover:text-white transition"
    >
      <path d="M5 4L19 20" />
      <path d="M19 4L5 20" />
    </svg>
  );
}


export default function Footer() {
  return (
    <footer className="w-full bg-[#101923] text-[#9aa1a9]">
      <div className="mx-auto max-w-[1330px] px-8 py-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

          {/* Left Section */}
          <div className="max-w-[440px]">

            {/* Logos */}
            <div className="mb-8 flex items-center gap-7">
              {/* Steam */}
              <div className="flex items-center gap-3">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="text-[#9aa1a9]"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <circle
                    cx="30"
                    cy="16"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <circle
                    cx="30"
                    cy="16"
                    r="2"
                    fill="currentColor"
                  />
                  <path
                    d="M7 26L18 30L27 22"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="17"
                    cy="32"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>

                <span className="text-[28px] font-bold tracking-[2px]">
                  STEAM
                  <sup className="ml-1 text-[8px]">®</sup>
                </span>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-[#59616a]" />

              {/* Valve */}
              <div className="text-[25px] font-bold tracking-[5px] text-[#9aa1a9]">
                VALVE
              </div>
            </div>

            {/* Copyright */}
            <p className="max-w-[440px] text-[14px] leading-[19px]">
              © 2026 Valve Corporation. All rights reserved. All trademarks
              are property of their respective owners in the US and other
              countries.
              <br />
              VAT included in all prices where applicable.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-7">
              <a href="#" aria-label="YouTube">
                <YoutubeIcon />
              </a>

              <a href="#" aria-label="Bluesky">
                <BlueskyIcon />
              </a>

              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>

              <a href="#" aria-label="X">
                <XIcon />
              </a>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-4 lg:min-w-[650px]">

            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 text-[14px] font-bold text-[#e5e7eb]">
                  {section.title}
                </h3>

                <ul className="space-y-5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] transition-colors duration-200 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
}