/**
 * BookEasy SA – Demo helpers (Phase 1)
 * Data lives in localStorage only. NOT multi-tenant. NOT secure auth.
 * Time zone: Africa/Johannesburg
 */

const TZ = "Africa/Johannesburg";

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

const DEFAULT_SERVICES = [
  { id: "s1", name: "Classic Manicure", duration: 45, price: 250 },
  { id: "s2", name: "Gel Manicure", duration: 60, price: 350 },
  { id: "s3", name: "Acrylic Full Set", duration: 90, price: 450 },
  { id: "s4", name: "Pedicure", duration: 50, price: 280 },
  { id: "s5", name: "Nail Art (per nail)", duration: 15, price: 40 }
];

const DEFAULT_APPOINTMENTS = [
  {
    id: "a1",
    customer: "Sample Customer A",
    service: "Gel Manicure",
    date: null,
    time: "10:00",
    status: "confirmed",
    phone: "082 000 0001",
    isDemoSeed: true
  },
  {
    id: "a2",
    customer: "Sample Customer B",
    service: "Acrylic Full Set",
    date: null,
    time: "14:00",
    status: "pending",
    phone: "073 000 0002",
    isDemoSeed: true
  }
];

function todayISO() {
  return new Date().toLocaleDateString("en-CA", { timeZone: TZ });
}

function nowMinutesInSA() {
  const parts = new Date().toLocaleTimeString("en-GB", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).split(":");
  return Number(parts[0]) * 60 + Number(parts[1]);
}

function timeToMinutes(hhmm) {
  const p = hhmm.split(":");
  return Number(p[0]) * 60 + Number(p[1]);
}

function getNextDays(count) {
  count = count || 7;
  const days = [];
  const base = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(base.getTime());
    d.setDate(base.getDate() + i);
    const iso = d.toLocaleDateString("en-CA", { timeZone: TZ });
    const label = d.toLocaleDateString("en-ZA", {
      timeZone: TZ,
      day: "numeric",
      month: "short"
    });
    const weekday = d.toLocaleDateString("en-ZA", {
      timeZone: TZ,
      weekday: "short"
    });
    const dayNum = d.toLocaleDateString("en-ZA", {
      timeZone: TZ,
      day: "numeric"
    });
    days.push({ iso: iso, day: dayNum, weekday: weekday, label: label });
  }
  return days;
}

function formatZAR(amount) {
  return "R" + Number(amount).toLocaleString("en-ZA");
}

function getBookedTimes(isoDate) {
  const appointments = DemoStore.get("appointments", []);
  return appointments
    .filter(function (a) {
      return a.date === isoDate && a.status !== "cancelled";
    })
    .map(function (a) {
      return a.time;
    });
}

function isSlotInPast(isoDate, hhmm) {
  if (isoDate > todayISO()) return false;
  if (isoDate < todayISO()) return true;
  return timeToMinutes(hhmm) <= nowMinutesInSA();
}

function generateRef() {
  return "BE-" + Date.now().toString(36).toUpperCase().slice(-8);
}

if (!DemoStore.get("services")) {
  DemoStore.set("services", DEFAULT_SERVICES);
}
if (!DemoStore.get("appointments")) {
  const days = getNextDays(3);
  const seeded = DEFAULT_APPOINTMENTS.map(function (a, i) {
    return Object.assign({}, a, { date: days[Math.min(i, days.length - 1)].iso });
  });
  DemoStore.set("appointments", seeded);
}
