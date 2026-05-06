// ===== MENU DATA =====
const menuData = {
  comecar: [
    {
      name: "Couvert",
      desc: "Cesta de pães, queijo de cabra, pickles de tomate e manteiga de vinho.",
      price: "R$ 39,00",
      tag: "Para Começar",
      gradient: "linear-gradient(135deg, #c8b880, #a89050)"
    },
    {
      name: "Arancini Cacio e Pepe",
      desc: "4 unidades elaborados com risoto a base de queijos e pimenta preta.",
      price: "R$ 45,00",
      tag: "Apimentado",
      gradient: "linear-gradient(135deg, #d4a850, #b07820)"
    },
    {
      name: "Pastel",
      desc: "2 un. Pastel com creme de queijos e alho negro.",
      price: "R$ 35,00",
      tag: "Para Começar",
      gradient: "linear-gradient(135deg, #e0c060, #c09830)"
    },
    {
      name: "Coalho Crocante",
      desc: "6 dadinhos de coalho crocante com geleia de pimenta e manjericão.",
      price: "R$ 29,00",
      tag: "Lev. Apimentado",
      gradient: "linear-gradient(135deg, #d8c860, #b8a030)"
    }
  ],
  compartilhar: [
    {
      name: "Brie Trufado",
      desc: "Queijo brie gratinado com mel trufado e cesta de pães.",
      price: "R$ 69,00",
      tag: "Vegetariano",
      gradient: "linear-gradient(135deg, #e0d8b8, #c8c090)"
    },
    {
      name: "Burrata",
      desc: "Servida com pesto, rúcula e pickles de tomate cereja.",
      price: "R$ 69,00",
      tag: "Vegetariano",
      gradient: "linear-gradient(135deg, #f0e8d0, #d8d0a8)"
    },
    {
      name: "Carpaccio de Wagyu",
      desc: "Servido com molho de dijon e romesco com lascas de grana padano.",
      price: "R$ 65,00",
      tag: "Premium",
      gradient: "linear-gradient(135deg, #b83830, #902018)"
    },
    {
      name: "Taglio",
      desc: "Tiras de filé mignon ao molho gorgonzola.",
      price: "R$ 99,00",
      tag: "Chef",
      gradient: "linear-gradient(135deg, #7a4030, #5a2010)"
    },
    {
      name: "Petit Tartare",
      desc: "Mignon cru na ponta da faca ao tempero do chef em folhas de batata doce.",
      price: "R$ 49,00",
      tag: "Especial",
      gradient: "linear-gradient(135deg, #a83030, #802010)"
    }
  ],
  pratos: [
    {
      name: "Carbonara",
      desc: "Nossa releitura do tradicional carbonara italiano.",
      price: "R$ 69,00",
      tag: "Chef",
      gradient: "linear-gradient(135deg, #d8c870, #b8a040)"
    },
    {
      name: "Pomodorini",
      desc: "Tagliatelle com tomates italianos assados, queijo de búfula e basílico.",
      price: "R$ 65,00",
      tag: "Vegetariano",
      gradient: "linear-gradient(135deg, #c83030, #a01010)"
    },
    {
      name: "Tartufo",
      desc: "Tagliatelle com fonduta de grana padano e cogumelos trufado.",
      price: "R$ 89,00",
      tag: "Trufado",
      gradient: "linear-gradient(135deg, #3a2818, #5a4028)"
    },
    {
      name: "San Marzano",
      desc: "Ribeye duroc empanado, gratinado com grana padano e tagliatelle ao pomodoro e sálvia.",
      price: "R$ 75,00",
      tag: "Chef",
      gradient: "linear-gradient(135deg, #b83020, #901800)"
    },
    {
      name: "Risoto de Cordeiro",
      desc: "Risoto de grana padano com ragu de cordeiro.",
      price: "R$ 75,00",
      tag: "Chef",
      gradient: "linear-gradient(135deg, #b89060, #907040)"
    },
    {
      name: "Amatriciana",
      desc: "Tradicional rigatoni com guanciale, grana padano e pimenta preta.",
      price: "R$ 69,00",
      tag: "Clássico",
      gradient: "linear-gradient(135deg, #c03828, #a01808)"
    },
    {
      name: "Paris",
      desc: "Filé da costela com manteiga de ervas, fritas e molho dijon.",
      price: "R$ 79,00",
      tag: "Clássico",
      gradient: "linear-gradient(135deg, #906040, #704020)"
    },
    {
      name: "Negre",
      desc: "Maminha angus com risoto de alho negro e farofa panko.",
      price: "R$ 89,00",
      tag: "Clássico",
      gradient: "linear-gradient(135deg, #282018, #403828)"
    },
    {
      name: "Mignon Au Poivre",
      desc: "Mignon ao demi-glace de pimenta verde com risoto de queijo de cabra.",
      price: "R$ 98,00",
      tag: "Premium",
      gradient: "linear-gradient(135deg, #804030, #602010)"
    },
    {
      name: "Confit de Pato",
      desc: "Coxa de pato confitado com risoto de laranja.",
      price: "R$ 98,00",
      tag: "Premium",
      gradient: "linear-gradient(135deg, #c06828, #a04808)"
    },
    {
      name: "Aligot",
      desc: "Denver com aligot trufado.",
      price: "R$ 99,00",
      tag: "Trufado",
      gradient: "linear-gradient(135deg, #c8b870, #a89840)"
    }
  ],
  carnes: [
    {
      name: "Chorizo Angus",
      desc: "Retirado do miolo do contrafilé, macio e de sabor marcante. Acompanha farofa e vinagrete.",
      price: "R$ 85,00",
      tag: "Angus",
      gradient: "linear-gradient(135deg, #b84828, #902808)"
    },
    {
      name: "Maminha Angus",
      desc: "Oriunda da alcatra, muito macia, suculenta e de sabor suave. Acompanha farofa e vinagrete.",
      price: "R$ 69,00",
      tag: "Angus",
      gradient: "linear-gradient(135deg, #c04030, #a01810)"
    },
    {
      name: "Ribeye Angus",
      desc: "Filé da costela, um dos cortes mais exclusivos do contrafilé. Acompanha farofa e vinagrete.",
      price: "R$ 105,00",
      tag: "Premium",
      gradient: "linear-gradient(135deg, #a83020, #801000)"
    },
    {
      name: "Prime Rib Duroc",
      desc: "Corte suíno da parte mais nobre da costela com osso. Acompanha farofa e vinagrete.",
      price: "R$ 79,00",
      tag: "Suíno",
      gradient: "linear-gradient(135deg, #c06848, #a04828)"
    },
    {
      name: "Prime Rib Angus",
      desc: "Superior da costela com osso, similar ao ribeye com sabor único. Acompanha farofa e vinagrete.",
      price: "R$ 198,00",
      tag: "Premium",
      gradient: "linear-gradient(135deg, #901810, #700000)"
    },
    {
      name: "Tornedor de Mignon",
      desc: "Retirado do centro do mignon, um dos cortes mais macios e nobres. Acompanha farofa e vinagrete.",
      price: "R$ 68,00",
      tag: "Nobre",
      gradient: "linear-gradient(135deg, #b83028, #901008)"
    },
    {
      name: "Denver | Cowboy",
      desc: "O queridinho da casa. Retirado do miolo do acém com gordura entremeada e sabor marcante.",
      price: "R$ 89,00",
      tag: "Favorito",
      gradient: "linear-gradient(135deg, #a84028, #803008)"
    },
    {
      name: "Bife do Vazio",
      desc: "Também conhecido como flank steak, muito saboroso e macio. Acompanha farofa e vinagrete.",
      price: "R$ 99,00",
      tag: "Angus",
      gradient: "linear-gradient(135deg, #b03828, #902008)"
    },
    {
      name: "Picanha de Novilho",
      desc: "A rainha dos churrascos. Localizada na parte traseira com sabor único e inigualável.",
      price: "R$ 289,00",
      tag: "Premium",
      gradient: "linear-gradient(135deg, #800010, #600000)"
    },
    {
      name: "Paleta de Cordeiro",
      desc: "Preparada durante 12 horas, finalizada com demi-glace.",
      price: "R$ 280,00",
      tag: "Especial",
      gradient: "linear-gradient(135deg, #805040, #604030)"
    }
  ],
  acompanhamentos: [
    {
      name: "Arroz",
      desc: "",
      price: "R$ 15,00",
      tag: "Arroz",
      gradient: "linear-gradient(135deg, #e8e0c8, #d0c8a0)"
    },
    {
      name: "Arroz de Brócolis",
      desc: "",
      price: "R$ 22,00",
      tag: "Arroz",
      gradient: "linear-gradient(135deg, #507040, #385030)"
    },
    {
      name: "Arroz Piamontese",
      desc: "",
      price: "R$ 29,00",
      tag: "Arroz",
      gradient: "linear-gradient(135deg, #d8c878, #b8a848)"
    },
    {
      name: "Risoto de Grana Padano",
      desc: "",
      price: "R$ 35,00",
      tag: "Risoto",
      gradient: "linear-gradient(135deg, #d0c890, #b0a870)"
    },
    {
      name: "Risoto de Funghi",
      desc: "",
      price: "R$ 38,00",
      tag: "Risoto",
      gradient: "linear-gradient(135deg, #786858, #585040)"
    },
    {
      name: "Risoto de Limão Siciliano",
      desc: "",
      price: "R$ 38,00",
      tag: "Risoto",
      gradient: "linear-gradient(135deg, #d8d870, #b8b840)"
    },
    {
      name: "Risoto de Alho Negro",
      desc: "",
      price: "R$ 45,00",
      tag: "Risoto",
      gradient: "linear-gradient(135deg, #282018, #504028)"
    },
    {
      name: "Risoto de Alho Poró",
      desc: "",
      price: "R$ 39,00",
      tag: "Risoto",
      gradient: "linear-gradient(135deg, #a8c878, #88a858)"
    },
    {
      name: "Batata Canoa",
      desc: "",
      price: "R$ 19,00",
      tag: "Batata",
      gradient: "linear-gradient(135deg, #d0a848, #b08828)"
    },
    {
      name: "Batata Cavi",
      desc: "",
      price: "R$ 28,00",
      tag: "Batata",
      gradient: "linear-gradient(135deg, #c89840, #a87820)"
    },
    {
      name: "Folhas de Batata Doce",
      desc: "",
      price: "R$ 22,00",
      tag: "Batata",
      gradient: "linear-gradient(135deg, #c87838, #a85818)"
    },
    {
      name: "Pão de Alho",
      desc: "",
      price: "R$ 12,00",
      tag: "Pão",
      gradient: "linear-gradient(135deg, #d8b870, #b89850)"
    },
    {
      name: "Pão de Alho Negro",
      desc: "",
      price: "R$ 15,00",
      tag: "Pão",
      gradient: "linear-gradient(135deg, #302820, #503820)"
    },
    {
      name: "Farofa de Ovos | Banana",
      desc: "",
      price: "R$ 22,00",
      tag: "Farofa",
      gradient: "linear-gradient(135deg, #d8c058, #b8a038)"
    },
    {
      name: "Farofa de Castanhas",
      desc: "",
      price: "R$ 29,00",
      tag: "Farofa",
      gradient: "linear-gradient(135deg, #a07840, #806020)"
    },
    {
      name: "Farofa Bacon e Eggs",
      desc: "",
      price: "R$ 29,00",
      tag: "Farofa",
      gradient: "linear-gradient(135deg, #c07840, #a05820)"
    },
    {
      name: "Polenta Frita",
      desc: "",
      price: "R$ 19,00",
      tag: "Polenta",
      gradient: "linear-gradient(135deg, #d8b848, #b89828)"
    },
    {
      name: "Creme de Espinafre",
      desc: "",
      price: "R$ 26,00",
      tag: "Creme",
      gradient: "linear-gradient(135deg, #406840, #285028)"
    },
    {
      name: "Banana Empanada",
      desc: "",
      price: "R$ 18,00",
      tag: "Especial",
      gradient: "linear-gradient(135deg, #c8a840, #a88020)"
    },
    {
      name: "Legumes na Brasa",
      desc: "",
      price: "R$ 25,00",
      tag: "Vegano",
      gradient: "linear-gradient(135deg, #608040, #485830)"
    },
    {
      name: "Salada Caprese",
      desc: "",
      price: "R$ 25,00",
      tag: "Salada",
      gradient: "linear-gradient(135deg, #c03030, #902010)"
    },
    {
      name: "Salada Cavi",
      desc: "",
      price: "R$ 22,00",
      tag: "Salada",
      gradient: "linear-gradient(135deg, #507848, #385830)"
    },
    {
      name: "Linguiças",
      desc: "2 un. de linguiça — toscana, costela angus, cordeiro ou duroc.",
      price: "R$ 19,00",
      tag: "Grelhado",
      gradient: "linear-gradient(135deg, #a04030, #803020)"
    },
    {
      name: "Purê de Baroa",
      desc: "",
      price: "R$ 25,00",
      tag: "Purê",
      gradient: "linear-gradient(135deg, #c8a058, #a88038)"
    }
  ],
  sobremesas: [
    {
      name: "Pistacchio",
      desc: "Profiterole com sorvete e praliné de pistache e ganache de chocolate branco.",
      price: "R$ 44,00",
      tag: "Especial",
      gradient: "linear-gradient(135deg, #506030, #384520)"
    },
    {
      name: "Romeu do Porto",
      desc: "Sorvete de queijo com calda de goiabada ao vinho do porto.",
      price: "R$ 35,00",
      tag: "Brasileiro",
      gradient: "linear-gradient(135deg, #c03050, #a01030)"
    },
    {
      name: "Panqueca Cavi",
      desc: "Panqueca com doce de leite e flor de sal.",
      price: "R$ 49,00",
      tag: "Assinatura",
      gradient: "linear-gradient(135deg, #b87830, #906010)"
    },
    {
      name: "Petit Gateau de Doce de Leite",
      desc: "Com sorvete de queijo e doce de leite.",
      price: "R$ 38,00",
      tag: "Favorito",
      gradient: "linear-gradient(135deg, #7a2808, #5a0800)"
    },
    {
      name: "Ninho e Nutella",
      desc: "Petit gâteau servido com sorvete de baunilha e nutella.",
      price: "R$ 35,00",
      tag: "Popular",
      gradient: "linear-gradient(135deg, #4a2010, #2a0800)"
    },
    {
      name: "Torta",
      desc: "Fatia de torta — consulte os sabores disponíveis.",
      price: "R$ 32,00",
      tag: "Sazonal",
      gradient: "linear-gradient(135deg, #c8a060, #a08040)"
    }
  ]
};

// ===== RENDER MENU =====
function renderMenu(tab) {
  const grid = document.getElementById("menuGrid");
  const items = menuData[tab];

  grid.innerHTML = items.map((item, i) => `
    <div class="menu-card reveal" style="animation-delay: ${i * 0.08}s">
      <div class="menu-card-img" style="background: ${item.gradient}; display:flex; align-items:center; justify-content:center;">
        <span style="font-size: 2.5rem; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.2));">
          ${getEmoji(tab)}
        </span>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-tag">${item.tag}</div>
        <h3 class="menu-card-name">${item.name}</h3>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-price">${item.price}</span>
          <span class="menu-badge">${tab === "comecar" ? "Entrada" : tab === "compartilhar" ? "Para 2+" : tab === "pratos" ? "Prato" : tab === "carnes" ? "Carne" : tab === "acompanhamentos" ? "Acomp." : "Sobremesa"}</span>
        </div>
      </div>
    </div>
  `).join("");

  // Trigger reveal for new cards
  requestAnimationFrame(() => {
    grid.querySelectorAll(".reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 80);
    });
  });
}

function getEmoji(tab) {
  const map = { comecar: "🍞", compartilhar: "🧀", pratos: "🍝", carnes: "🥩", acompanhamentos: "🥗", sobremesas: "🍮" };
  return map[tab] || "🍽️";
}

// ===== TABS =====
const menuTabsEl = document.getElementById("menuTabs");
if (menuTabsEl) {
  menuTabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.tab);
  });
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ===== CUSTOM DATE PICKER (WHATSAPP) =====
const waDateHidden = document.getElementById("wa_date");
const waDateDisplay = document.getElementById("wa_date_display");
const waDatePopover = document.getElementById("waDatePopover");
const waDatePicker = document.getElementById("waDatePicker");

function pad2(n) {
  return String(n).padStart(2, "0");
}

function toISODate(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function formatBR(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return "";
  return `${pad2(d)}/${pad2(m)}/${y}`;
}

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

const dpToday = startOfDay(new Date());
const dpMin = dpToday;

let dpView = new Date(dpToday.getFullYear(), dpToday.getMonth(), 1);

function monthLabel(d) {
  try {
    return d.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  } catch {
    return `${d.getMonth() + 1}/${d.getFullYear()}`;
  }
}

function sameDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function openDatePopover() {
  if (!waDatePopover || !waDateDisplay) return;
  waDatePopover.classList.add("open");
  waDatePopover.setAttribute("aria-hidden", "false");
  waDateDisplay.setAttribute("aria-expanded", "true");
  renderDatePopover();
}

function closeDatePopover() {
  if (!waDatePopover || !waDateDisplay) return;
  waDatePopover.classList.remove("open");
  waDatePopover.setAttribute("aria-hidden", "true");
  waDateDisplay.setAttribute("aria-expanded", "false");
}

function setSelectedISO(iso) {
  if (waDateHidden) waDateHidden.value = iso || "";
  if (waDateDisplay) waDateDisplay.value = formatBR(iso);
}

function renderDatePopover() {
  if (!waDatePopover) return;
  const selectedISO = waDateHidden?.value;
  const selectedDate = selectedISO ? new Date(`${selectedISO}T00:00:00`) : null;

  const year = dpView.getFullYear();
  const month = dpView.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  // Monday-first index
  const weekday = (first.getDay() + 6) % 7;
  const daysInMonth = last.getDate();

  const head = `
    <div class="dp-head">
      <button type="button" class="dp-nav" data-dp-nav="-1" aria-label="Mês anterior">‹</button>
      <div class="dp-month" aria-live="polite">${monthLabel(first)}</div>
      <button type="button" class="dp-nav" data-dp-nav="1" aria-label="Próximo mês">›</button>
    </div>
    <div class="dp-weekdays">
      <span>seg</span><span>ter</span><span>qua</span><span>qui</span><span>sex</span><span>sáb</span><span>dom</span>
    </div>
  `;

  let grid = `<div class="dp-grid">`;
  for (let i = 0; i < weekday; i++) {
    grid += `<span></span>`;
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const iso = toISODate(date);
    const disabled = startOfDay(date) < dpMin;
    const classes = [
      "dp-day",
      sameDate(date, dpToday) ? "is-today" : "",
      selectedDate && sameDate(date, selectedDate) ? "is-selected" : ""
    ].filter(Boolean).join(" ");
    grid += `<button type="button" class="${classes}" data-dp-date="${iso}" ${disabled ? "disabled" : ""}>${day}</button>`;
  }
  grid += `</div>`;

  const actions = `
    <div class="dp-actions">
      <button type="button" class="dp-clear" data-dp-clear="1">Limpar</button>
      <span></span>
    </div>
  `;

  waDatePopover.innerHTML = head + grid + actions;
}

if (waDateDisplay && waDatePicker && waDatePopover) {
  // Initialize min and default view
  dpView = new Date(dpToday.getFullYear(), dpToday.getMonth(), 1);

  waDateDisplay.addEventListener("click", () => {
    if (waDatePopover.classList.contains("open")) closeDatePopover();
    else openDatePopover();
  });

  document.addEventListener("click", (e) => {
    if (!waDatePopover.classList.contains("open")) return;
    const target = e.target;
    if (target instanceof Node && waDatePicker.contains(target)) return;
    closeDatePopover();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!waDatePopover.classList.contains("open")) return;
    closeDatePopover();
  });

  waDatePopover.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const nav = btn.getAttribute("data-dp-nav");
    if (nav) {
      const dir = parseInt(nav, 10);
      dpView = new Date(dpView.getFullYear(), dpView.getMonth() + dir, 1);
      renderDatePopover();
      return;
    }

    if (btn.getAttribute("data-dp-clear")) {
      setSelectedISO("");
      closeDatePopover();
      return;
    }

    const iso = btn.getAttribute("data-dp-date");
    if (iso) {
      setSelectedISO(iso);
      closeDatePopover();
    }
  });
}

// ===== WHATSAPP RESERVATION =====
function getWhatsAppNumber() {
  const phoneEl = document.getElementById("reservationPhone");
  if (!phoneEl) return null;
  const digits = phoneEl.textContent.replace(/\D/g, "");
  if (!digits) return null;
  return digits.startsWith("55") ? digits : `55${digits}`;
}

function buildReservationWhatsAppText() {
  const name = document.getElementById("wa_name")?.value?.trim();
  const date = document.getElementById("wa_date")?.value;
  const time = document.getElementById("wa_time")?.value;
  const guests = document.getElementById("wa_guests")?.value;
  const notes = document.getElementById("wa_notes")?.value?.trim();

  const lines = ["Olá! Gostaria de fazer uma reserva."];
  if (name) lines.push(`Nome: ${name}`);
  if (date) lines.push(`Data: ${formatBR(date)}`);
  if (time) lines.push(`Horário: ${time}`);
  if (guests) lines.push(`Pessoas: ${guests}`);
  if (notes) lines.push(`Observações: ${notes}`);
  return lines.join("\n");
}

const whatsappReserveBtn = document.getElementById("whatsappReserve");
if (whatsappReserveBtn) {
  whatsappReserveBtn.addEventListener("click", () => {
    const number = getWhatsAppNumber();
    if (!number) return;
    const text = buildReservationWhatsAppText();
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  });
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

function observeReveal() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => {
    revealObserver.observe(el);
  });
}

// Apply reveal class to sections
function initReveal() {
  // Directional reveals for about section
  const aboutMedia = document.querySelector(".about-media");
  const aboutText  = document.querySelector(".about-text");
  if (aboutMedia) { aboutMedia.classList.add("reveal-left"); revealObserver.observe(aboutMedia); }
  if (aboutText)  { aboutText.classList.add("reveal-right"); revealObserver.observe(aboutText); }

  const targets = document.querySelectorAll(
    ".section-header, .gallery-item, .reservation-grid > *, .footer-grid > *"
  );
  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${i * 0.06}s`;
  });
  observeReveal();
}

// ===== SMOOTH ACTIVE NAV =====
const sections = document.querySelectorAll("section[id], footer[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute("href") === `#${id}` ? "var(--black)" : "";
          a.style.fontWeight = a.getAttribute("href") === `#${id}` ? "500" : "";
        });
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach(s => sectionObserver.observe(s));

// ===== LOADER =====
const loaderStart = Date.now();
window.addEventListener("load", () => {
  const elapsed = Date.now() - loaderStart;
  const delay = Math.max(0, 950 - elapsed);
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (!loader) return;
    loader.classList.add("hidden");
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");
  }, delay);
});


// ===== PARALLAX =====
const heroImg = document.querySelector(".hero-img");
if (heroImg) {
  window.addEventListener("scroll", () => {
    heroImg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
  }, { passive: true });
}

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const raw = el.textContent.trim();
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) return;
  const [, prefix, numStr, suffix] = match;
  const target   = parseFloat(numStr);
  const decimal  = numStr.includes(".");
  const duration = 1400;
  const t0 = performance.now();

  (function step(now) {
    const p = Math.min((now - t0) / duration, 1);
    const v = target * (1 - Math.pow(1 - p, 3));
    el.textContent = prefix + (decimal ? v.toFixed(1) : Math.round(v)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll(".highlight strong, .about-stat strong").forEach(el => obs.observe(el));
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("menuGrid")) renderMenu("comecar");
  initReveal();
  initCounters();
});
