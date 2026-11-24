/**
 * BeautyBook – Demonstration business data (static / GitHub Pages safe)
 * Clearly labelled as sample listings. Replace with real backend later.
 */
window.BB_DATA = {
  demo: true,
  notice: "Demonstration listings for preview. Not real businesses.",
  categories: [
    { id: "nails", name: "Nail Salons", icon: "nails" },
    { id: "hair", name: "Hair Salons", icon: "hair" },
    { id: "barber", name: "Barbershops", icon: "barber" },
    { id: "lashes", name: "Lashes and Brows", icon: "lashes" },
    { id: "makeup", name: "Makeup Artists", icon: "makeup" },
    { id: "skincare", name: "Facials and Skincare", icon: "skincare" },
    { id: "massage", name: "Massage and Spas", icon: "massage" },
    { id: "waxing", name: "Waxing", icon: "waxing" },
    { id: "tattoo", name: "Tattoo Studios", icon: "tattoo" },
    { id: "piercing", name: "Piercing Studios", icon: "piercing" }
  ],
  businesses: [
    {
      id: "glow",
      name: "Glow Beauty Studio",
      category: "nails",
      categoryLabel: "Nail Salons",
      location: "Hatfield, Pretoria",
      city: "Pretoria",
      suburb: "Hatfield",
      description: "Modern nail studio offering manicures, gel and acrylics in a calm space.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&q=80",
      priceFrom: 180,
      phone: "",
      whatsapp: "",
      hours: "Mon–Sat 09:00–17:00",
      services: [
        { name: "Classic Manicure", duration: 45, price: 180 },
        { name: "Gel Overlay", duration: 60, price: 280 },
        { name: "Full Set Acrylics", duration: 90, price: 450 }
      ],
      sample: true
    },
    {
      id: "royal",
      name: "Royal Hair Studio",
      category: "hair",
      categoryLabel: "Hair Salons",
      location: "Centurion, Pretoria",
      city: "Pretoria",
      suburb: "Centurion",
      description: "Hair cutting, colour and styling for all hair types.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80",
      priceFrom: 250,
      hours: "Tue–Sat 09:00–18:00",
      services: [
        { name: "Ladies Cut & Blow", duration: 60, price: 320 },
        { name: "Colour (half head)", duration: 120, price: 550 },
        { name: "Braids / Protective", duration: 180, price: 650 }
      ],
      sample: true
    },
    {
      id: "luxe",
      name: "Luxe Nails & Spa",
      category: "nails",
      categoryLabel: "Nail Salons",
      location: "Brooklyn, Pretoria",
      city: "Pretoria",
      suburb: "Brooklyn",
      description: "Nail care and light spa treatments in Brooklyn.",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=200&q=80",
      priceFrom: 160,
      hours: "Mon–Fri 08:30–17:30",
      services: [
        { name: "Express Manicure", duration: 30, price: 160 },
        { name: "Pedicure", duration: 50, price: 220 },
        { name: "Gel Polish", duration: 45, price: 240 }
      ],
      sample: true
    },
    {
      id: "bliss",
      name: "Bliss Wellness",
      category: "massage",
      categoryLabel: "Massage and Spas",
      location: "Menlyn, Pretoria",
      city: "Pretoria",
      suburb: "Menlyn",
      description: "Massage and wellness treatments focused on relaxation.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&q=80",
      priceFrom: 400,
      hours: "Mon–Sun 10:00–19:00",
      services: [
        { name: "Swedish Massage (60 min)", duration: 60, price: 450 },
        { name: "Deep Tissue (60 min)", duration: 60, price: 520 },
        { name: "Hot Stone (90 min)", duration: 90, price: 680 }
      ],
      sample: true
    },
    {
      id: "silk",
      name: "Silk Lashes Studio",
      category: "lashes",
      categoryLabel: "Lashes and Brows",
      location: "Sandton, Johannesburg",
      city: "Johannesburg",
      suburb: "Sandton",
      description: "Lash extensions and brow shaping.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=200&q=80",
      priceFrom: 280,
      hours: "Tue–Sat 09:00–17:00",
      services: [
        { name: "Classic Lash Set", duration: 90, price: 350 },
        { name: "Hybrid Lashes", duration: 100, price: 420 },
        { name: "Brow Laminate", duration: 45, price: 280 }
      ],
      sample: true
    },
    {
      id: "edge",
      name: "Edge Barbers",
      category: "barber",
      categoryLabel: "Barbershops",
      location: "Hatfield, Pretoria",
      city: "Pretoria",
      suburb: "Hatfield",
      description: "Traditional and modern barbering for men.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&q=80",
      priceFrom: 120,
      hours: "Mon–Sat 08:00–18:00",
      services: [
        { name: "Haircut", duration: 30, price: 150 },
        { name: "Beard Trim", duration: 20, price: 80 },
        { name: "Cut & Beard", duration: 45, price: 200 }
      ],
      sample: true
    },
    {
      id: "glowface",
      name: "Glow Skin Clinic",
      category: "skincare",
      categoryLabel: "Facials and Skincare",
      location: "Rosebank, Johannesburg",
      city: "Johannesburg",
      suburb: "Rosebank",
      description: "Facials and basic skincare treatments.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&q=80",
      priceFrom: 350,
      hours: "Wed–Sat 09:00–16:00",
      services: [
        { name: "Signature Facial", duration: 60, price: 420 },
        { name: "Deep Cleanse", duration: 45, price: 350 }
      ],
      sample: true
    },
    {
      id: "inkline",
      name: "Ink Line Studio",
      category: "tattoo",
      categoryLabel: "Tattoo Studios",
      location: "Maboneng, Johannesburg",
      city: "Johannesburg",
      suburb: "Maboneng",
      description: "Custom tattoos by appointment.",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=200&q=80",
      priceFrom: 500,
      hours: "By appointment",
      services: [
        { name: "Small design (from)", duration: 60, price: 500 },
        { name: "Consultation", duration: 30, price: 0 }
      ],
      sample: true
    }
  ]
};

window.BB = {
  getAll: function () { return (window.BB_DATA && window.BB_DATA.businesses) || []; },
  getById: function (id) {
    return this.getAll().find(function (b) { return b.id === id; }) || null;
  },
  search: function (query, category, location) {
    var list = this.getAll();
    var q = (query || "").toLowerCase().trim();
    var cat = (category || "").toLowerCase().trim();
    var loc = (location || "").toLowerCase().trim();
    return list.filter(function (b) {
      if (cat && cat !== "all" && b.category !== cat) return false;
      if (loc) {
        var locMatch =
          (b.city && b.city.toLowerCase().indexOf(loc) !== -1) ||
          (b.suburb && b.suburb.toLowerCase().indexOf(loc) !== -1) ||
          (b.location && b.location.toLowerCase().indexOf(loc) !== -1);
        if (!locMatch) return false;
      }
      if (!q) return true;
      var hay =
        (b.name + " " + b.categoryLabel + " " + b.location + " " + b.description + " " +
          (b.services || []).map(function (s) { return s.name; }).join(" ")).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  },
  parseQuery: function () {
    var params = new URLSearchParams(window.location.search);
    return {
      q: params.get("q") || "",
      cat: params.get("cat") || "",
      loc: params.get("loc") || "",
      id: params.get("id") || params.get("salon") || ""
    };
  }
};
