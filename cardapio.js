const menuStructure = {
  principal: {
    label: "Menu Principal",
    categories: [
      { key: "comecar",         label: "Para Começar",    count: 4,  note: null },
      { key: "compartilhar",    label: "Compartilhar",    count: 5,  note: null },
      { key: "pratos",          label: "Pratos",          count: 11, note: null },
      { key: "carnes",          label: "Carnes",          count: 10, note: "Nossas carnes são preparadas com sal e pimenta no Josper — forno espanhol a carvão que proporciona sabor único pela cocção em alta temperatura. Acompanha farofa crocante e vinagrete." },
      { key: "acompanhamentos", label: "Acompanhamentos", count: 24, note: null },
      { key: "sobremesas",      label: "Sobremesas",      count: 6,  note: null }
    ]
  },
  executivo: {
    label: "Menu Executivo",
    categories: [
      { key: "especiais",            label: "Especiais",       count: 3,  note: null },
      { key: "personalizados",       label: "Personalizados",  count: 4,  note: "Escolha seu corte e até 2 acompanhamentos da lista abaixo." },
      { key: "acompanhamentos_exec", label: "Acompanhamentos", count: 10, note: null }
    ]
  },
  chef: {
    label: "Reserva do Chef",
    categories: [
      { key: "pratos_chef", label: "Pratos",     count: 1, note: null },
      { key: "hamburguer",  label: "Hambúrguer", count: 5, note: null }
    ]
  },
  bebidas: {
    label: "Bebidas",
    categories: [
      { key: "soft",     label: "Soft Drink", count: 9, note: null },
      { key: "cervejas", label: "Cervejas",   count: 4, note: null },
      { key: "doses",    label: "Doses",      count: 6, note: null },
      { key: "drinks",   label: "Drinks",     count: 2, note: "Elaborado com Yvy Mar — best brazilian London gin." }
    ]
  }
};

const menuData = {
  /* ── MENU PRINCIPAL ─────────────────────────── */
  comecar: [
    { name: "Couvert",               desc: "Cesta de pães, queijo de cabra, pickles de tomate e manteiga de vinho.", price: "R$ 39,00", tag: "Para Começar",    gradient: "linear-gradient(135deg, #c8b880, #a89050)" },
    { name: "Arancini Cacio e Pepe", desc: "4 unidades elaborados com risoto a base de queijos e pimenta preta.",   price: "R$ 45,00", tag: "Apimentado",       gradient: "linear-gradient(135deg, #d4a850, #b07820)" },
    { name: "Pastel",                desc: "2 un. com creme de queijos e alho negro.",                              price: "R$ 35,00", tag: "Para Começar",    gradient: "linear-gradient(135deg, #e0c060, #c09830)" },
    { name: "Coalho Crocante",       desc: "6 dadinhos de coalho crocante com geleia de pimenta e manjericão.",     price: "R$ 29,00", tag: "Lev. Apimentado", gradient: "linear-gradient(135deg, #d8c860, #b8a030)" }
  ],
  compartilhar: [
    { name: "Brie Trufado",       desc: "Queijo brie gratinado com mel trufado e cesta de pães.",                            price: "R$ 69,00", tag: "Vegetariano", gradient: "linear-gradient(135deg, #e0d8b8, #c8c090)" },
    { name: "Burrata",            desc: "Servida com pesto, rúcula e pickles de tomate cereja.",                             price: "R$ 69,00", tag: "Vegetariano", gradient: "linear-gradient(135deg, #f0e8d0, #d8d0a8)" },
    { name: "Carpaccio de Wagyu", desc: "Servido com molho de dijon e romesco com lascas de grana padano.",                  price: "R$ 65,00", tag: "Premium",     gradient: "linear-gradient(135deg, #b83830, #902018)" },
    { name: "Taglio",             desc: "Tiras de filé mignon ao molho gorgonzola.",                                         price: "R$ 99,00", tag: "Chef",        gradient: "linear-gradient(135deg, #7a4030, #5a2010)" },
    { name: "Petit Tartare",      desc: "Mignon cru na ponta da faca ao tempero do chef em folhas de batata doce.",          price: "R$ 49,00", tag: "Especial",    gradient: "linear-gradient(135deg, #a83030, #802010)" }
  ],
  pratos: [
    { name: "Carbonara",          desc: "Nossa releitura do tradicional carbonara italiano.",                                                 price: "R$ 69,00", tag: "Chef",        gradient: "linear-gradient(135deg, #d8c870, #b8a040)" },
    { name: "Pomodorini",         desc: "Tagliatelle com tomates italianos assados, queijo de búfula e basílico.",                           price: "R$ 65,00", tag: "Vegetariano", gradient: "linear-gradient(135deg, #c83030, #a01010)" },
    { name: "Tartufo",            desc: "Tagliatelle com fonduta de grana padano e cogumelos trufado.",                                      price: "R$ 89,00", tag: "Trufado",     gradient: "linear-gradient(135deg, #3a2818, #5a4028)" },
    { name: "San Marzano",        desc: "Ribeye duroc empanado, gratinado com grana padano e tagliatelle ao pomodoro e sálvia.",             price: "R$ 75,00", tag: "Chef",        gradient: "linear-gradient(135deg, #b83020, #901800)" },
    { name: "Risoto de Cordeiro", desc: "Risoto de grana padano com ragu de cordeiro.",                                                      price: "R$ 75,00", tag: "Chef",        gradient: "linear-gradient(135deg, #b89060, #907040)" },
    { name: "Amatriciana",        desc: "Tradicional rigatoni com guanciale, grana padano e pimenta preta.",                                 price: "R$ 69,00", tag: "Clássico",    gradient: "linear-gradient(135deg, #c03828, #a01808)" },
    { name: "Paris",              desc: "Filé da costela com manteiga de ervas, fritas e molho dijon.",                                      price: "R$ 79,00", tag: "Clássico",    gradient: "linear-gradient(135deg, #906040, #704020)" },
    { name: "Negre",              desc: "Maminha angus com risoto de alho negro e farofa panko.",                                            price: "R$ 89,00", tag: "Clássico",    gradient: "linear-gradient(135deg, #282018, #403828)" },
    { name: "Mignon Au Poivre",   desc: "Mignon ao demi-glace de pimenta verde com risoto de queijo de cabra.",                             price: "R$ 98,00", tag: "Premium",     gradient: "linear-gradient(135deg, #804030, #602010)" },
    { name: "Confit de Pato",     desc: "Coxa de pato confitado com risoto de laranja.",                                                     price: "R$ 98,00", tag: "Premium",     gradient: "linear-gradient(135deg, #c06828, #a04808)" },
    { name: "Aligot",             desc: "Denver com aligot trufado.",                                                                        price: "R$ 99,00", tag: "Trufado",     gradient: "linear-gradient(135deg, #c8b870, #a89840)" }
  ],
  carnes: [
    { name: "Chorizo Angus",      desc: "Retirado do miolo do contrafilé, macio e de sabor marcante.",                      price: "R$ 85,00",  tag: "Angus",    gradient: "linear-gradient(135deg, #b84828, #902808)" },
    { name: "Maminha Angus",      desc: "Oriunda da alcatra, muito macia, suculenta e de sabor suave.",                      price: "R$ 69,00",  tag: "Angus",    gradient: "linear-gradient(135deg, #c04030, #a01810)" },
    { name: "Ribeye Angus",       desc: "Filé da costela, um dos cortes mais exclusivos do contrafilé.",                     price: "R$ 105,00", tag: "Premium",  gradient: "linear-gradient(135deg, #a83020, #801000)" },
    { name: "Prime Rib Duroc",    desc: "Corte suíno da parte mais nobre da costela com osso.",                              price: "R$ 79,00",  tag: "Suíno",    gradient: "linear-gradient(135deg, #c06848, #a04828)" },
    { name: "Prime Rib Angus",    desc: "Superior da costela com osso, similar ao ribeye com sabor único.",                  price: "R$ 198,00", tag: "Premium",  gradient: "linear-gradient(135deg, #901810, #700000)" },
    { name: "Tornedor de Mignon", desc: "Retirado do centro do mignon, um dos cortes mais macios e nobres.",                 price: "R$ 68,00",  tag: "Nobre",    gradient: "linear-gradient(135deg, #b83028, #901008)" },
    { name: "Denver | Cowboy",    desc: "O queridinho da casa. Retirado do miolo do acém com gordura entremeada.",           price: "R$ 89,00",  tag: "Favorito", gradient: "linear-gradient(135deg, #a84028, #803008)" },
    { name: "Bife do Vazio",      desc: "Também conhecido como flank steak, muito saboroso e macio.",                        price: "R$ 99,00",  tag: "Angus",    gradient: "linear-gradient(135deg, #b03828, #902008)" },
    { name: "Picanha de Novilho", desc: "A rainha dos churrascos. Localizada na parte traseira com sabor único.",            price: "R$ 289,00", tag: "Premium",  gradient: "linear-gradient(135deg, #800010, #600000)" },
    { name: "Paleta de Cordeiro", desc: "Preparada durante 12 horas, finalizada com demi-glace.",                            price: "R$ 280,00", tag: "Especial", gradient: "linear-gradient(135deg, #805040, #604030)" }
  ],
  acompanhamentos: [
    { name: "Arroz",                     desc: "", price: "R$ 15,00", tag: "Arroz",   gradient: "linear-gradient(135deg, #e8e0c8, #d0c8a0)" },
    { name: "Arroz de Brócolis",         desc: "", price: "R$ 22,00", tag: "Arroz",   gradient: "linear-gradient(135deg, #507040, #385030)" },
    { name: "Arroz Piamontese",          desc: "", price: "R$ 29,00", tag: "Arroz",   gradient: "linear-gradient(135deg, #d8c878, #b8a848)" },
    { name: "Risoto de Grana Padano",    desc: "", price: "R$ 35,00", tag: "Risoto",  gradient: "linear-gradient(135deg, #d0c890, #b0a870)" },
    { name: "Risoto de Funghi",          desc: "", price: "R$ 38,00", tag: "Risoto",  gradient: "linear-gradient(135deg, #786858, #585040)" },
    { name: "Risoto de Limão Siciliano", desc: "", price: "R$ 38,00", tag: "Risoto",  gradient: "linear-gradient(135deg, #d8d870, #b8b840)" },
    { name: "Risoto de Alho Negro",      desc: "", price: "R$ 45,00", tag: "Risoto",  gradient: "linear-gradient(135deg, #282018, #504028)" },
    { name: "Risoto de Alho Poró",       desc: "", price: "R$ 39,00", tag: "Risoto",  gradient: "linear-gradient(135deg, #a8c878, #88a858)" },
    { name: "Batata Canoa",              desc: "", price: "R$ 19,00", tag: "Batata",  gradient: "linear-gradient(135deg, #d0a848, #b08828)" },
    { name: "Batata Cavi",               desc: "", price: "R$ 28,00", tag: "Batata",  gradient: "linear-gradient(135deg, #c89840, #a87820)" },
    { name: "Folhas de Batata Doce",     desc: "", price: "R$ 22,00", tag: "Batata",  gradient: "linear-gradient(135deg, #c87838, #a85818)" },
    { name: "Pão de Alho",              desc: "", price: "R$ 12,00", tag: "Pão",     gradient: "linear-gradient(135deg, #d8b870, #b89850)" },
    { name: "Pão de Alho Negro",        desc: "", price: "R$ 15,00", tag: "Pão",     gradient: "linear-gradient(135deg, #302820, #503820)" },
    { name: "Farofa de Ovos | Banana",  desc: "", price: "R$ 22,00", tag: "Farofa",  gradient: "linear-gradient(135deg, #d8c058, #b8a038)" },
    { name: "Farofa de Castanhas",      desc: "", price: "R$ 29,00", tag: "Farofa",  gradient: "linear-gradient(135deg, #a07840, #806020)" },
    { name: "Farofa Bacon e Eggs",      desc: "", price: "R$ 29,00", tag: "Farofa",  gradient: "linear-gradient(135deg, #c07840, #a05820)" },
    { name: "Polenta Frita",            desc: "", price: "R$ 19,00", tag: "Polenta", gradient: "linear-gradient(135deg, #d8b848, #b89828)" },
    { name: "Creme de Espinafre",       desc: "", price: "R$ 26,00", tag: "Creme",   gradient: "linear-gradient(135deg, #406840, #285028)" },
    { name: "Banana Empanada",          desc: "", price: "R$ 18,00", tag: "Especial",gradient: "linear-gradient(135deg, #c8a840, #a88020)" },
    { name: "Legumes na Brasa",         desc: "", price: "R$ 25,00", tag: "Vegano",  gradient: "linear-gradient(135deg, #608040, #485830)" },
    { name: "Salada Caprese",           desc: "", price: "R$ 25,00", tag: "Salada",  gradient: "linear-gradient(135deg, #c03030, #902010)" },
    { name: "Salada Cavi",              desc: "", price: "R$ 22,00", tag: "Salada",  gradient: "linear-gradient(135deg, #507848, #385830)" },
    { name: "Linguiças",               desc: "2 un. de linguiça — toscana, costela angus, cordeiro ou duroc.", price: "R$ 19,00", tag: "Grelhado", gradient: "linear-gradient(135deg, #a04030, #803020)" },
    { name: "Purê de Baroa",            desc: "", price: "R$ 25,00", tag: "Purê",    gradient: "linear-gradient(135deg, #c8a058, #a88038)" }
  ],
  sobremesas: [
    { name: "Pistacchio",                    desc: "Profiterole com sorvete e praliné de pistache e ganache de chocolate branco.", price: "R$ 44,00", tag: "Especial",   gradient: "linear-gradient(135deg, #506030, #384520)" },
    { name: "Romeu do Porto",                desc: "Sorvete de queijo com calda de goiabada ao vinho do porto.",                  price: "R$ 35,00", tag: "Brasileiro", gradient: "linear-gradient(135deg, #c03050, #a01030)" },
    { name: "Panqueca Cavi",                 desc: "Panqueca com doce de leite e flor de sal.",                                   price: "R$ 49,00", tag: "Assinatura", gradient: "linear-gradient(135deg, #b87830, #906010)" },
    { name: "Petit Gateau de Doce de Leite", desc: "Com sorvete de queijo e doce de leite.",                                     price: "R$ 38,00", tag: "Favorito",   gradient: "linear-gradient(135deg, #7a2808, #5a0800)" },
    { name: "Ninho e Nutella",               desc: "Petit gâteau servido com sorvete de baunilha e nutella.",                    price: "R$ 35,00", tag: "Popular",    gradient: "linear-gradient(135deg, #4a2010, #2a0800)" },
    { name: "Torta",                         desc: "Fatia de torta — consulte os sabores disponíveis.",                          price: "R$ 32,00", tag: "Sazonal",    gradient: "linear-gradient(135deg, #c8a060, #a08040)" }
  ],

  /* ── MENU EXECUTIVO ─────────────────────────── */
  especiais: [
    { name: "Parmegiana",          desc: "Filé de frango à parmegiana com arroz branco e fritas.",                       price: "R$ 59,00", tag: "Especial", gradient: "linear-gradient(135deg, #c83828, #a01808)" },
    { name: "Tagliatelle ao Pesto",desc: "Tagliatelle ao pesto de manjericão, tomate confit e burrata.",                 price: "R$ 49,00", tag: "Especial", gradient: "linear-gradient(135deg, #406830, #285020)" },
    { name: "Strogonoff",          desc: "Strogonoff de mignon com arroz branco e fritas.",                              price: "R$ 69,00", tag: "Especial", gradient: "linear-gradient(135deg, #c89060, #a07040)" }
  ],
  personalizados: [
    { name: "Filé de Frango",     desc: "", price: "R$ 49,00", tag: "Frango", gradient: "linear-gradient(135deg, #d4c070, #b4a040)" },
    { name: "Maminha",            desc: "", price: "R$ 59,00", tag: "Bovina", gradient: "linear-gradient(135deg, #c04030, #a01810)" },
    { name: "Ribeye Duroc",       desc: "", price: "R$ 55,00", tag: "Suíno",  gradient: "linear-gradient(135deg, #c06848, #a04828)" },
    { name: "Sobrecoxa de Frango",desc: "", price: "R$ 49,00", tag: "Frango", gradient: "linear-gradient(135deg, #c8a840, #a88020)" }
  ],
  acompanhamentos_exec: [
    { name: "Entradas e Sobremesas",   desc: "Adicione uma entrada ou sobremesa ao seu executivo.",   price: "R$ 12,00", tag: "Adicional", gradient: "linear-gradient(135deg, #c8a97a, #a88050)" },
    { name: "Arroz Branco",            desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #e8e0c8, #d0c8a0)" },
    { name: "Arroz de Brócolis",       desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #507040, #385030)" },
    { name: "Arroz Piamontese",        desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #d8c878, #b8a848)" },
    { name: "Farofa Panko",            desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #d8c058, #b8a038)" },
    { name: "Farofa de Ovos ou Banana",desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #c07840, #a05820)" },
    { name: "Legumes na Brasa",        desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #608040, #485830)" },
    { name: "Salada",                  desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #507848, #385830)" },
    { name: "Purê de Batata",          desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #c8a058, #a88038)" },
    { name: "Batata Frita",            desc: "", price: "Incluso", tag: "Acompanha", gradient: "linear-gradient(135deg, #d0a848, #b08828)" }
  ],

  /* ── RESERVA DO CHEF ────────────────────────── */
  pratos_chef: [
    { name: "Costela Angus", desc: "Preparada com sal e pimenta por 6 horas.", price: "R$ 290,00", tag: "Especial", gradient: "linear-gradient(135deg, #800010, #600000)" }
  ],
  hamburguer: [
    { name: "Clássic Burguer",   desc: "Pão brioche, 160g do nosso blend de carne angus, american cheese, alface americana, tomate assado e aioli.", price: "R$ 39,00", tag: "Hambúrguer", gradient: "linear-gradient(135deg, #a06030, #804010)" },
    { name: "Cheddar Burguer",   desc: "Pão brioche, 160g do nosso blend de carne angus, queijo cheddar, bacon de panceta e aioli.",                  price: "R$ 42,00", tag: "Hambúrguer", gradient: "linear-gradient(135deg, #d08030, #b06010)" },
    { name: "Primitivo Burguer", desc: "Pão brioche, 160g do nosso blend de carne angus, queijo provolone, tomate assado e creme balsâmico.",          price: "R$ 41,00", tag: "Hambúrguer", gradient: "linear-gradient(135deg, #907050, #705030)" },
    { name: "American Burguer",  desc: "Pão brioche, 160g do nosso blend de carne angus, american cheese, cebola, picles, mostarda e ketchup.",        price: "R$ 38,00", tag: "Hambúrguer", gradient: "linear-gradient(135deg, #b05030, #903010)" },
    { name: "Acréscimo de Batata", desc: "Adicione batata frita ao seu hambúrguer.",                                                                    price: "R$ 7,00",  tag: "Adicional",  gradient: "linear-gradient(135deg, #c89840, #a87820)" }
  ],

  /* ── BEBIDAS ────────────────────────────────── */
  soft: [
    { name: "Água com ou sem Gás",    desc: "330ml",                        price: "R$ 9,00",  tag: "Soft Drink", gradient: "linear-gradient(135deg, #a0b8c8, #8098a8)" },
    { name: "Água San Pelegrino",     desc: "505ml com gás",                price: "R$ 27,00", tag: "Soft Drink", gradient: "linear-gradient(135deg, #80a8c0, #6088a0)" },
    { name: "Suco",                   desc: "Uva ou laranja",               price: "R$ 14,00", tag: "Soft Drink", gradient: "linear-gradient(135deg, #e09030, #c07010)" },
    { name: "Espresso",               desc: "",                             price: "R$ 9,00",  tag: "Café",       gradient: "linear-gradient(135deg, #3a2010, #5a3020)" },
    { name: "Refrigerante",           desc: "",                             price: "R$ 9,00",  tag: "Soft Drink", gradient: "linear-gradient(135deg, #c03030, #a01010)" },
    { name: "Ice Tea | Mate",         desc: "",                             price: "R$ 9,00",  tag: "Soft Drink", gradient: "linear-gradient(135deg, #907850, #705830)" },
    { name: "Tônica | Citrus",        desc: "",                             price: "R$ 9,00",  tag: "Soft Drink", gradient: "linear-gradient(135deg, #d0d860, #b0b840)" },
    { name: "Wewi Tônica",           desc: "Rosé, tangerina e gengibre.",   price: "R$ 14,00", tag: "Especial",   gradient: "linear-gradient(135deg, #d06080, #b04060)" },
    { name: "Acqua Panna",            desc: "",                             price: "R$ 27,00", tag: "Soft Drink", gradient: "linear-gradient(135deg, #90b8c8, #7098a8)" }
  ],
  cervejas: [
    { name: "Corona",      desc: "330ml", price: "R$ 14,00", tag: "Cerveja", gradient: "linear-gradient(135deg, #d8c860, #b8a840)" },
    { name: "Stella Gold", desc: "355ml", price: "R$ 14,00", tag: "Cerveja", gradient: "linear-gradient(135deg, #d4a830, #b48810)" },
    { name: "Becks",       desc: "330ml", price: "R$ 14,00", tag: "Cerveja", gradient: "linear-gradient(135deg, #408030, #285010)" },
    { name: "Hoegarden",   desc: "330ml", price: "R$ 19,00", tag: "Cerveja", gradient: "linear-gradient(135deg, #e8d880, #c8b860)" }
  ],
  doses: [
    { name: "Whisky Black Label 12 Anos",  desc: "", price: "R$ 29,00", tag: "Dose", gradient: "linear-gradient(135deg, #2a1808, #4a3018)" },
    { name: "Cachaça da Quinta",           desc: "", price: "R$ 18,00", tag: "Dose", gradient: "linear-gradient(135deg, #d0c870, #b0a850)" },
    { name: "Porto Ceremony Tawny 10 Anos",desc: "", price: "R$ 22,00", tag: "Dose", gradient: "linear-gradient(135deg, #8a1030, #6a0018)" },
    { name: "Licor 43",                    desc: "", price: "R$ 25,00", tag: "Dose", gradient: "linear-gradient(135deg, #c89020, #a87000)" },
    { name: "Taça de Espumante",           desc: "", price: "R$ 20,00", tag: "Dose", gradient: "linear-gradient(135deg, #d8d080, #b8b060)" },
    { name: "Decanter de Vinho",           desc: "Tinto, branco ou rosé.",             price: "R$ 35,00", tag: "Vinho", gradient: "linear-gradient(135deg, #901830, #701018)" }
  ],
  drinks: [
    { name: "Gin Tônica",    desc: "Gin e tônica com limão siciliano.",    price: "R$ 34,00", tag: "Drink", gradient: "linear-gradient(135deg, #d0d860, #a8b840)" },
    { name: "Aperol Spritz", desc: "Aperol, espumante e laranja.",         price: "R$ 32,00", tag: "Drink", gradient: "linear-gradient(135deg, #e06020, #c04000)" }
  ]
};

/* ── RENDERING ──────────────────────────────────── */

function itemHTML(item) {
  const isIncluso = item.price === "Incluso";
  const photoPath = `menu/${item.name}.webp`;
  const photoSrc = encodeURI(photoPath);
  return `
    <div class="menu-item">
      <div class="item-swatch" style="background: ${item.gradient}">
        <img class="item-photo" src="${photoSrc}" alt="${item.name}" loading="lazy" onerror="this.remove()" />
      </div>
      <div class="item-body">
        <div class="item-name">${item.name}</div>
        ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ""}
        <span class="item-tag">${item.tag}</span>
      </div>
      <div class="item-right">
        <div class="item-price${isIncluso ? " muted" : ""}">${item.price}</div>
      </div>
    </div>`;
}

function renderSidebar(menuKey) {
  const cats = menuStructure[menuKey].categories;
  document.getElementById("sidebarNav").innerHTML = cats.map((cat, i) => `
    <a href="#sec-${cat.key}" class="sidebar-link${i === 0 ? " active" : ""}" data-section="sec-${cat.key}">
      ${cat.label} <span>${cat.count}</span>
    </a>`).join("");

  document.querySelectorAll(".sidebar-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

function renderContent(menuKey) {
  const cats = menuStructure[menuKey].categories;
  document.getElementById("cardapioMain").innerHTML = cats.map(cat => `
    <section class="cat-section" id="sec-${cat.key}">
      <span class="cat-eyebrow">${cat.label}</span>
      <h2 class="cat-title">${cat.label}</h2>
      ${cat.note ? `<p class="cat-note">${cat.note}</p>` : ""}
      <div class="cat-items">
        ${menuData[cat.key].map(itemHTML).join("")}
      </div>
    </section>`).join("");
}

let sectionObserver = null;

function initSectionObserver() {
  if (sectionObserver) sectionObserver.disconnect();
  sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".sidebar-link").forEach(link => {
          link.classList.toggle("active", link.dataset.section === entry.target.id);
        });
      }
    });
  }, { rootMargin: "-15% 0px -70% 0px" });
  document.querySelectorAll(".cat-section").forEach(s => sectionObserver.observe(s));
}

function switchMenu(menuKey) {
  document.querySelectorAll(".menu-sel-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.menu === menuKey);
  });
  renderSidebar(menuKey);
  renderContent(menuKey);
  window.scrollTo({ top: 0, behavior: "smooth" });
  initSectionObserver();
}

/* ── NAVBAR & HAMBURGER ─────────────────────────── */

window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.add("scrolled");
});

const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

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

/* ── INIT ───────────────────────────────────────── */

document.querySelectorAll(".menu-sel-btn").forEach(btn => {
  btn.addEventListener("click", () => switchMenu(btn.dataset.menu));
});

document.addEventListener("DOMContentLoaded", () => {
  switchMenu("principal");
});
