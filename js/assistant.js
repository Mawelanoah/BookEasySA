/**
 * BookEasy SA — Support Assistant
 * Works on GitHub Pages with no API keys or paid services.
 * Answers from a local knowledge base about this demo platform.
 * Not a cloud LLM; ready to swap for a real AI API later.
 */
(function () {
  if (window.__BE_ASSISTANT__) return;
  window.__BE_ASSISTANT__ = true;

  var KB = [
    {
      keys: ["what is", "bookeasy", "about", "platform", "this site"],
      answer:
        "BookEasy SA is a booking platform for South African appointment businesses (nails, hair, barbers, spas, lashes). This public site is a frontend demonstration — secure accounts and real multi-business data come next."
    },
    {
      keys: ["how to book", "request appointment", "book appointment", "make a booking", "customer book"],
      answer:
        "Open Explore Businesses → choose a business (try Kuja's Nails) → pick a service → choose date & time → enter your name and phone → submit. The request starts as pending until the owner confirms."
    },
    {
      keys: ["confirm", "confirmed", "pending", "approved", "when is booking"],
      answer:
        "A submitted request is pending, not confirmed. Only the business owner can confirm or cancel it from the dashboard. During this demo, data stays in your browser only."
    },
    {
      keys: ["price", "pricing", "cost", "free", "paid", "subscription"],
      answer:
        "Early access is free during testing. Future paid plans will be announced before any charges. This demo does not collect payment details."
    },
    {
      keys: ["register", "sign up", "owner", "business account", "join"],
      answer:
        "Owner registration and sign-in pages are prototypes. Secure accounts need a database (planned next). You can still try the demo dashboard without a real login."
    },
    {
      keys: ["dashboard", "manage", "owner dashboard"],
      answer:
        "Open the Owner dashboard from the homepage. There you can view demo appointments, confirm/cancel requests, and edit services. Changes are saved in this browser only for now."
    },
    {
      keys: ["service", "price list", "add service", "photos"],
      answer:
        "On the Services page in the dashboard you can add name, description, duration, price in Rand, and a photo preview. Photos are not uploaded to a server until storage is connected."
    },
    {
      keys: ["whatsapp", "share", "instagram", "facebook"],
      answer:
        "On the Kuja's Nails booking page use Copy link, WhatsApp, Facebook, or the device Share button. For Instagram/TikTok, copy the link and paste it into your post or bio."
    },
    {
      keys: ["location", "city", "suburb", "johannesburg", "pretoria", "find near"],
      answer:
        "Explore Businesses lets you filter by name, city/suburb, and category using sample listings. Live location search of real businesses needs the database stage."
    },
    {
      keys: ["privacy", "data", "personal", "popia", "safe"],
      answer:
        "See the Privacy Policy page. This demo mostly keeps data in your browser (localStorage). Real accounts will handle names and phone numbers more carefully under POPIA-minded practices."
    },
    {
      keys: ["contact", "support", "help", "email", "phone"],
      answer:
        "Use the Support form on the homepage. It validates your message but does not deliver to an inbox yet — no support email or phone is connected on this demo."
    },
    {
      keys: ["demo", "real", "working", "live"],
      answer:
        "Booking, dashboard, and filters work as a demonstration in your browser. They are not a live multi-business system until authentication and a database are connected."
    },
    {
      keys: ["hello", "hi", "hey", "howzit", "good morning", "good day"],
      answer:
        "Hi! I'm the BookEasy SA assistant. Ask about booking, pricing, the owner dashboard, or how the demo works."
    }
  ];

  var FALLBACK =
    "I'm not sure about that yet. Try asking about booking, pricing, the owner dashboard, or sharing a business link. You can also use the Support form on the homepage (messages are not delivered until a backend is connected).";

  function matchAnswer(text) {
    var q = (text || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    var best = null;
    var bestScore = 0;
    for (var i = 0; i < KB.length; i++) {
      var score = 0;
      for (var j = 0; j < KB[i].keys.length; j++) {
        if (q.indexOf(KB[i].keys[j]) !== -1) score += KB[i].keys[j].split(" ").length;
      }
      if (score > bestScore) {
        bestScore = score;
        best = KB[i].answer;
      }
    }
    return bestScore > 0 ? best : FALLBACK;
  }

  var style = document.createElement("style");
  style.textContent =
    "#be-assist-btn{position:fixed;right:16px;bottom:16px;z-index:9999;width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;" +
    "background:linear-gradient(135deg,#5125A8,#32145F);color:#fff;box-shadow:0 4px 16px rgba(81,37,168,.4);display:flex;align-items:center;justify-content:center;" +
    "font-size:1.4rem;line-height:1}" +
    "#be-assist-btn:hover{transform:scale(1.05)}" +
    "#be-assist-panel{position:fixed;right:16px;bottom:80px;z-index:9999;width:min(360px,calc(100vw - 24px));max-height:min(480px,70vh);" +
    "background:#fff;border:1px solid #e4e4e7;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.15);display:none;flex-direction:column;overflow:hidden;font-family:system-ui,-apple-system,sans-serif}" +
    "#be-assist-panel.open{display:flex}" +
    "#be-assist-head{background:linear-gradient(135deg,#5125A8,#32145F);color:#fff;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;gap:8px}" +
    "#be-assist-head strong{font-size:.95rem}" +
    "#be-assist-head span{display:block;font-size:.72rem;opacity:.85;margin-top:2px}" +
    "#be-assist-close{background:transparent;border:none;color:#fff;font-size:1.25rem;cursor:pointer;line-height:1;padding:4px}" +
    "#be-assist-msgs{flex:1;overflow-y:auto;padding:12px;background:#fafafa;display:flex;flex-direction:column;gap:8px}" +
    ".be-msg{max-width:92%;padding:10px 12px;border-radius:12px;font-size:.88rem;line-height:1.45;word-break:break-word}" +
    ".be-msg.bot{background:#fff;border:1px solid #e4e4e7;align-self:flex-start;color:#202033}" +
    ".be-msg.user{background:#5125A8;color:#fff;align-self:flex-end}" +
    "#be-assist-suggest{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 8px;background:#fafafa}" +
    "#be-assist-suggest button{border:1px solid #e4e4e7;background:#fff;border-radius:999px;padding:6px 10px;font-size:.75rem;cursor:pointer;color:#3f3f46}" +
    "#be-assist-suggest button:hover{border-color:#5125A8;color:#5125A8}" +
    "#be-assist-form{display:flex;gap:6px;padding:10px;border-top:1px solid #e4e4e7;background:#fff}" +
    "#be-assist-input{flex:1;min-width:0;border:1.5px solid #d4d4d8;border-radius:10px;padding:10px 12px;font-size:16px}" +
    "#be-assist-input:focus{outline:none;border-color:#5125A8}" +
    "#be-assist-send{border:none;background:#5125A8;color:#fff;border-radius:10px;padding:10px 14px;font-weight:600;cursor:pointer;font-size:.88rem}" +
    "@media(max-width:400px){#be-assist-panel{right:12px;left:12px;width:auto;bottom:76px}}";
  document.head.appendChild(style);

  var btn = document.createElement("button");
  btn.id = "be-assist-btn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Open support assistant");
  btn.innerHTML = "💬";

  var panel = document.createElement("div");
  panel.id = "be-assist-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "BookEasy support assistant");
  panel.innerHTML =
    '<div id="be-assist-head">' +
      "<div><strong>BookEasy Assistant</strong><span>Common questions about this demo</span></div>" +
      '<button type="button" id="be-assist-close" aria-label="Close">×</button>' +
    "</div>" +
    '<div id="be-assist-msgs"></div>' +
    '<div id="be-assist-suggest"></div>' +
    '<form id="be-assist-form">' +
      '<input id="be-assist-input" type="text" placeholder="Ask a question…" autocomplete="off" />' +
      '<button type="submit" id="be-assist-send">Send</button>' +
    "</form>";

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  var msgs = panel.querySelector("#be-assist-msgs");
  var input = panel.querySelector("#be-assist-input");
  var form = panel.querySelector("#be-assist-form");
  var suggest = panel.querySelector("#be-assist-suggest");

  function addMsg(text, who) {
    var d = document.createElement("div");
    d.className = "be-msg " + who;
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function openPanel() {
    panel.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    if (!msgs.childNodes.length) {
      addMsg(
        "Hi! I can help with booking steps, pricing, the owner dashboard, and how this demo works. I use a fixed knowledge base — not a cloud AI model.",
        "bot"
      );
    }
    input.focus();
  }

  function closePanel() {
    panel.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", function () {
    if (panel.classList.contains("open")) closePanel();
    else openPanel();
  });
  panel.querySelector("#be-assist-close").addEventListener("click", closePanel);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = (input.value || "").trim();
    if (!text) return;
    addMsg(text, "user");
    input.value = "";
    setTimeout(function () {
      addMsg(matchAnswer(text), "bot");
    }, 250);
  });

  var chips = [
    "How do I book?",
    "Is it free?",
    "When is a booking confirmed?",
    "Owner dashboard"
  ];
  chips.forEach(function (label) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.addEventListener("click", function () {
      openPanel();
      addMsg(label, "user");
      setTimeout(function () {
        addMsg(matchAnswer(label), "bot");
      }, 200);
    });
    suggest.appendChild(b);
  });
})();
