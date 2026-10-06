import { useState } from "react";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const THIS_YEAR = new Date().getFullYear();
const MIN_AGE = 18;

function Select({ value, onChange, children, label, className = "" }) {
  return (
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className={`cursor-pointer rounded-[2px] bg-[#316282] px-1.5 py-[3px] text-[13px] text-[#67c1f5] outline-none transition hover:bg-[#3b719a] focus:ring-1 focus:ring-[#67c1f5] ${className}`}
    >
      {children}
    </select>
  );
}

export default function AgeGate({
  title = "Cyberpunk 2077",
  image = "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=700&q=85",
  description = "Cyberpunk 2077 contains strong language, intense violence, blood and gore, as well as nudity and sexual material.",
  onVerified = () => alert("Age verified"),
  onCancel = () => alert("Cancelled"),
}) {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(THIS_YEAR);
  const [error, setError] = useState("");

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const years = Array.from({ length: THIS_YEAR - 1899 }, (_, i) => THIS_YEAR - i);

  const submit = () => {
    const dob = new Date(year, month, Math.min(day, daysInMonth));
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const hadBirthday = now.getMonth() > dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() >= dob.getDate());
    if (!hadBirthday) age -= 1;

    if (age < MIN_AGE) {
      setError("Sorry, you are not old enough to view this page.");
      return;
    }
    setError("");
    onVerified();
  };

  return (
    <div className="min-h-screen bg-[#1b2838] px-4 pb-16 pt-[150px] text-white">
      <div className="mx-auto max-w-[1200px]">
        {/* Box */}
        <div className="relative rounded-[3px] border border-[#3a4a5c] px-6 pb-10 pt-[100px] text-center">
          {/* Capsule overlapping the top border */}
          <img
            src={image}
            alt={title}
            className="absolute -top-[44px] left-1/2 h-[130px] w-[276px] -translate-x-1/2 object-cover shadow-[0_0_8px_rgba(0,0,0,0.6)]"
          />

          <p className="mx-auto max-w-[420px] text-[15px] font-medium leading-[20px]">
            This game may contain content not appropriate for all ages, or may not be appropriate for viewing at work.
          </p>

          <div className="mx-auto mt-6 max-w-[580px]">
            <p className="text-[12px] text-[#8ba6b6]">The developers describe the content like this:</p>
            <p className="mt-0.5 text-[14px] leading-[20px] text-[#c6d4df]">“{description} ”</p>
          </div>

          {/* Birth date picker */}
          <div className="mx-auto mt-7 max-w-[574px] rounded-[3px] bg-[#2a3a4c] px-6 py-5">
            <p className="text-[14px] text-[#c6d4df]">Please enter your birth date to continue:</p>
            <div className="mt-3 flex justify-center gap-1">
              <Select label="Day" value={Math.min(day, daysInMonth)} onChange={setDay} className="w-[44px]">
                {days.map((d) => <option key={d} value={d}>{d}</option>)}
              </Select>
              <Select label="Month" value={month} onChange={setMonth} className="w-[95px]">
                {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
              </Select>
              <Select label="Year" value={year} onChange={setYear} className="w-[59px]">
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </Select>
            </div>
            {error && <p role="alert" className="mt-3 text-[13px] text-[#e5645c]">{error}</p>}
          </div>

          {/* Actions */}
          <div className="mt-14 flex justify-center gap-3">
            <button onClick={submit} className="rounded-[2px] bg-[#2d5271] px-4 py-[6px] text-[15px] text-[#67c1f5] transition hover:bg-[#3a6b94] hover:text-white">
              View Page
            </button>
            <button onClick={onCancel} className="rounded-[2px] bg-[#2d5271] px-4 py-[6px] text-[15px] text-[#67c1f5] transition hover:bg-[#3a6b94] hover:text-white">
              Cancel
            </button>
          </div>
        </div>

        <p className="mt-12 text-center text-[11px] text-[#8ba6b6]">
          This data is for verification purposes only and will not be stored.
        </p>
      </div>
    </div>
  );
}