/**
 * BookEasy SA – Shared demo helpers
 * All data is fictional and stored only in the browser (localStorage).
 * This is NOT a real multi-user system.
 */

const DemoStore = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem("bookeasy_" + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem("bookeasy_" + key, JSON.stringify(value));
  }
};

/** Default services for Kuja's Nails (demo only) */
const DEFAULT_SERVICES = [
  { id: "s1", name: "Classic Manicure", duration: 45, price: 250 },
  { id: "s2", name: "Gel Manicure", duration: 60, price: 350 },
  { id: "s3", name: "Acrylic Full Set", duration: 90, price: 450 },
  { id: "s4", name: "Pedicure", duration: 50, price: 280 },
  { id: "s5", name: "Nail Art (per nail)", duration: 15, price: 40 }
];

/** Sample appointments (fictional) */
const DEFAULT_APPOINTMENTS = [
  {
    id: "a1",
    customer: "Thandi M.",
    service: "Gel Manicure",
    date: "2026-10-23",
    time: "10:00",
    status: "confirmed",
    phone: "082 555 0101"
  },
  {
    id: "a2",
    customer: "Lerato K.",
    service: "Acrylic Full Set",
    date: "2026-10-23",
    time: "14:00",
    status: "pending",
    phone: "073 555 0202"
  },
  {
    id: "a3",
    customer: "Nomsa D.",
    service: "Classic Manicure",
    date: "2026-10-24",
    time: "11:30",
    status: "confirmed",
    phone: "084 555 0303"
  }
];

/* Seed demo data once */
if (!DemoStore.get("services")) {
  DemoStore.set("services", DEFAULT_SERVICES);
}
if (!DemoStore.get("appointments")) {
  DemoStore.set("appointments", DEFAULT_APPOINTMENTS);
}

/** Next N calendar days starting from today */
function getNextDays(count = 7) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      day: d.getDate(),
      weekday: d.toLocaleDateString("en-ZA", { weekday: "short" }),
      label: d.toLocaleDateString("en-ZA", { day: "numeric", month: "short" })
    });
  }
  return days;
}

/** Format amount as South African Rand */
function formatZAR(amount) {
  return "R" + Number(amount).toLocaleString("en-ZA");
}

/** Return times already taken on a given ISO date (from current demo appointments) */
function getBookedTimes(isoDate) {
  const appointments = DemoStore.get("appointments", []);
  return appointments
    .filter(a => a.date === isoDate && a.status !== "cancelled")
    .map(a => a.time);
}
