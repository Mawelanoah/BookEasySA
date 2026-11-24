/**
 * BeautyBook – Demonstration data (GitHub Pages safe)
 * Sample listings only. Replace with a real API/backend later.
 */
window.BB_DATA = {
  demo: true,
  notice: "Demonstration listings for preview. Not real businesses.",
  categories: [
    { id: "nails", name: "Nail Salons" },
    { id: "hair", name: "Hair Salons" },
    { id: "barber", name: "Barbershops" },
    { id: "lashes", name: "Lashes and Brows" },
    { id: "makeup", name: "Makeup Artists" },
    { id: "skincare", name: "Facials and Skincare" },
    { id: "massage", name: "Massage and Spas" },
    { id: "waxing", name: "Waxing" },
    { id: "tattoo", name: "Tattoo Studios" },
    { id: "piercing", name: "Piercing Studios" }
  ],
  businesses: [
    { id: "glow", name: "Glow Beauty Studio", category: "nails", categoryLabel: "Nail Salons", location: "Hatfield, Pretoria", city: "Pretoria", suburb: "Hatfield", description: "Modern nail studio offering manicures, gel and acrylics.", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", priceFrom: 180, hours: "Mon–Sat 09:00–17:00", sample: true, services: [{ name: "Classic Manicure", duration: 45, price: 180 }, { name: "Gel Overlay", duration: 60, price: 280 }, { name: "Full Set Acrylics", duration: 90, price: 450 }] },
    { id: "royal", name: "Royal Hair Studio", category: "hair", categoryLabel: "Hair Salons", location: "Centurion, Pretoria", city: "Pretoria", suburb: "Centurion", description: "Hair cutting, colour and styling for all hair types.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", priceFrom: 250, hours: "Tue–Sat 09:00–18:00", sample: true, services: [{ name: "Ladies Cut & Blow", duration: 60, price: 320 }, { name: "Colour (half head)", duration: 120, price: 550 }, { name: "Braids / Protective", duration: 180, price: 650 }] },
    { id: "luxe", name: "Luxe Nails & Spa", category: "nails", categoryLabel: "Nail Salons", location: "Brooklyn, Pretoria", city: "Pretoria", suburb: "Brooklyn", description: "Nail care and light spa treatments in Brooklyn.", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80", priceFrom: 160, hours: "Mon–Fri 08:30–17:30", sample: true, services: [{ name: "Express Manicure", duration: 30, price: 160 }, { name: "Pedicure", duration: 50, price: 220 }, { name: "Gel Polish", duration: 45, price: 240 }] },
    { id: "bliss", name: "Bliss Wellness", category: "massage", categoryLabel: "Massage and Spas", location: "Menlyn, Pretoria", city: "Pretoria", suburb: "Menlyn", description: "Massage and wellness treatments focused on relaxation.", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80", priceFrom: 400, hours: "Mon–Sun 10:00–19:00", sample: true, services: [{ name: "Swedish Massage (60 min)", duration: 60, price: 450 }, { name: "Deep Tissue (60 min)", duration: 60, price: 520 }, { name: "Hot Stone (90 min)", duration: 90, price: 680 }] },
    { id: "silk", name: "Silk Lashes Studio", category: "lashes", categoryLabel: "Lashes and Brows", location: "Sandton, Johannesburg", city: "Johannesburg", suburb: "Sandton", description: "Lash extensions and brow shaping.", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80", priceFrom: 280, hours: "Tue–Sat 09:00–17:00", sample: true, services: [{ name: "Classic Lash Set", duration: 90, price: 350 }, { name: "Hybrid Lashes", duration: 100, price: 420 }, { name: "Brow Laminate", duration: 45, price: 280 }] },
    { id: "edge", name: "Edge Barbers", category: "barber", categoryLabel: "Barbershops", location: "Hatfield, Pretoria", city: "Pretoria", suburb: "Hatfield", description: "Traditional and modern barbering for men.", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80", priceFrom: 120, hours: "Mon–Sat 08:00–18:00", sample: true, services: [{ name: "Haircut", duration: 30, price: 150 }, { name: "Beard Trim", duration: 20, price: 80 }, { name: "Cut & Beard", duration: 45, price: 200 }] },
    { id: "glowface", name: "Glow Skin Clinic", category: "skincare", categoryLabel: "Facials and Skincare", location: "Rosebank, Johannesburg", city: "Johannesburg", suburb: "Rosebank", description: "Facials and basic skincare treatments.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80", priceFrom: 350, hours: "Wed–Sat 09:00–16:00", sample: true, services: [{ name: "Signature Facial", duration: 60, price: 420 }, { name: "Deep Cleanse", duration: 45, price: 350 }] },
    { id: "inkline", name: "Ink Line Studio", category: "tattoo", categoryLabel: "Tattoo Studios", location: "Maboneng, Johannesburg", city: "Johannesburg", suburb: "Maboneng", description: "Custom tattoos by appointment.", image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80", priceFrom: 500, hours: "By appointment", sample: true, services: [{ name: "Small design (from)", duration: 60, price: 500 }, { name: "Consultation", duration: 30, price: 0 }] },
    { id: "muse", name: "Muse Makeup Co", category: "makeup", categoryLabel: "Makeup Artists", location: "Illovo, Johannesburg", city: "Johannesburg", suburb: "Illovo", description: "Bridal and event makeup.", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80", priceFrom: 450, hours: "By appointment", sample: true, services: [{ name: "Bridal Makeup", duration: 90, price: 1200 }, { name: "Event Makeup", duration: 60, price: 550 }] },
    { id: "smooth", name: "Smooth Wax Studio", category: "waxing", categoryLabel: "Waxing", location: "Waterkloof, Pretoria", city: "Pretoria", suburb: "Waterkloof", description: "Professional waxing services.", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80", priceFrom: 80, hours: "Mon–Fri 09:00–17:00", sample: true, services: [{ name: "Eyebrow Wax", duration: 15, price: 80 }, { name: "Full Leg", duration: 45, price: 280 }, { name: "Brazilian", duration: 30, price: 320 }] },
    { id: "pierce", name: "Point Piercing", category: "piercing", categoryLabel: "Piercing Studios", location: "Melville, Johannesburg", city: "Johannesburg", suburb: "Melville", description: "Body piercing in a clean studio environment.", image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80", priceFrom: 150, hours: "Tue–Sat 10:00–18:00", sample: true, services: [{ name: "Earlobe (pair)", duration: 20, price: 200 }, { name: "Nose stud", duration: 20, price: 250 }] }
  ]
};

window.BB = {
  getAll: function () { return (window.BB_DATA && window.BB_DATA.businesses) || []; },
  getById: function (id) { return this.getAll().find(function (b) { return b.id === id; }) || null; },
  search: function (query, category, location) {
    var list = this.getAll();
    var q = (query || "").toLowerCase().trim();
    var cat = (category || "").toLowerCase().trim();
    var loc = (location || "").toLowerCase().trim();
    return list.filter(function (b) {
      if (cat && cat !== "all" && b.category !== cat) return false;
      if (loc) {
        var locMatch = (b.city && b.city.toLowerCase().indexOf(loc) !== -1) || (b.suburb && b.suburb.toLowerCase().indexOf(loc) !== -1) || (b.location && b.location.toLowerCase().indexOf(loc) !== -1);
        if (!locMatch) return false;
      }
      if (!q) return true;
      var hay = (b.name + " " + b.categoryLabel + " " + b.location + " " + (b.description || "") + " " + (b.services || []).map(function (s) { return s.name; }).join(" ")).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  },
  parseQuery: function () {
    var params = new URLSearchParams(window.location.search);
    return { q: params.get("q") || "", cat: params.get("cat") || "", loc: params.get("loc") || "", id: params.get("id") || params.get("salon") || "" };
  },
  getFavs: function () { try { return JSON.parse(localStorage.getItem("bb_favs") || "[]"); } catch (e) { return []; } },
  toggleFav: function (id) { var favs = this.getFavs(); var i = favs.indexOf(id); if (i >= 0) favs.splice(i, 1); else favs.push(id); localStorage.setItem("bb_favs", JSON.stringify(favs)); return favs.indexOf(id) >= 0; },
  isFav: function (id) { return this.getFavs().indexOf(id) >= 0; },
  getUser: function () { try { return JSON.parse(localStorage.getItem("bb_user") || "null"); } catch (e) { return null; } },
  setUser: function (u) { if (!u) localStorage.removeItem("bb_user"); else localStorage.setItem("bb_user", JSON.stringify(u)); },
  getBookings: function () { try { return JSON.parse(localStorage.getItem("bb_bookings") || "[]"); } catch (e) { return []; } },
  getOwner: function () { try { return JSON.parse(localStorage.getItem("bb_owner") || "null"); } catch (e) { return null; } },
  setOwner: function (o) { if (!o) localStorage.removeItem("bb_owner"); else localStorage.setItem("bb_owner", JSON.stringify(o)); }
};
