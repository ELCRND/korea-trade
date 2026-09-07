const PRODUCTS_PER_PAGE = 8;

const PRODUCT_TEMPLATES = [
  {
    brand: "SOME BY MI",
    name: "AHA BHA PHA 30 Days Miracle Toner",
    sku: "SM2022",
    volume: "Объём 150 мл",
    image: "./images/some-by-mi/catalog/AHA·BHA·PHA 30 Days Miracle Toner.avif",
    category: "toners",
    lineup: "aha-bha-pha",
    skin: ["oily", "combination"],
    effect: ["anti-acne", "soothing"],
    component: ["aha", "bha", "pha"],
  },
  {
    brand: "SOME BY MI",
    name: "Snail Truecica Miracle Repair Serum",
    sku: "SM0111",
    volume: "Объём 50 мл",
    image:
      "./images/some-by-mi/catalog/Snail Truecica Miracle Repair Serum.avif",
    category: "serums",
    lineup: "snail-truecica",
    skin: ["sensitive", "dry"],
    effect: ["soothing", "moisturizing"],
    component: ["centella"],
  },
  {
    brand: "SOME BY MI",
    name: "Beta Panthenol Repair Cream",
    sku: "SM2201",
    volume: "Объём 50 мл",
    image: "./images/some-by-mi/catalog/Beta Panthenol Repair Cream.avif",
    category: "creams",
    lineup: "beta-panthenol",
    skin: ["dry", "sensitive", "normal"],
    effect: ["moisturizing", "soothing"],
    component: [],
  },
  {
    brand: "SOME BY MI",
    name: "Retinol Intense Reactivating Ampoule",
    sku: "SM0301",
    volume: "Объём 30 мл",
    image:
      "./images/some-by-mi/catalog/Retinol Intense Reactivating Ampoule.avif",
    category: "serums",
    lineup: "retinol-intense",
    skin: ["normal", "combination"],
    effect: ["anti-aging"],
    component: ["retinol"],
  },
  {
    brand: "SOME BY MI",
    name: "Yuja Niacin Blemish Care Serum",
    sku: "SM0401",
    volume: "Объём 50 мл",
    image: "./images/some-by-mi/catalog/Yuja Niacin Blemish Care Serum.avif",
    category: "serums",
    lineup: "yuja-niacin",
    skin: ["oily", "combination"],
    effect: ["brightening", "anti-acne"],
    component: ["niacinamide"],
  },
  {
    brand: "SOME BY MI",
    name: "Galactomyces Pure Vitamin C Glow Cream",
    sku: "SM0311",
    volume: "Объём 50 мл",
    image:
      "./images/some-by-mi/catalog/Galactomyces Pure Vitamin C Glow Cream.avif",
    category: "creams",
    lineup: "galactomyces",
    skin: ["dry", "normal"],
    effect: ["brightening", "moisturizing"],
    component: [],
  },
  {
    brand: "SOME BY MI",
    name: "AHA BHA PHA 30 Days Miracle Acne Clear Foam",
    sku: "SM0501",
    volume: "Объём 100 мл",
    image:
      "./images/some-by-mi/catalog/AHA·BHA·PHA 30 Days Miracle Acne Clear Foam.avif",
    category: "cleansing",
    lineup: "aha-bha-pha",
    skin: ["oily", "combination"],
    effect: ["anti-acne"],
    component: ["aha", "bha", "pha"],
  },
  {
    brand: "SOME BY MI",
    name: "Real Cica Calming Care Mask",
    sku: "SM0601",
    volume: "Объём 25 г",
    image: "./images/some-by-mi/catalog/Real Cica Calming Care Mask.avif",
    category: "masks",
    lineup: "snail-truecica",
    skin: ["sensitive", "dry"],
    effect: ["soothing"],
    component: ["centella"],
  },
  {
    brand: "SOME BY MI",
    name: "AHA BHA PHA 30 Days Miracle Serum",
    sku: "SM0702",
    volume: "Объём 50 мл",
    image:
      "./images/some-by-mi/catalog/AHA·BHA·PHA 30 Days Miracle Serum transparent.avif",
    category: "serums",
    lineup: "aha-bha-pha",
    skin: ["oily"],
    effect: ["anti-acne"],
    component: ["aha", "bha", "pha"],
  },
  {
    brand: "SOME BY MI",
    name: "Retinol Intense Reactivating Cream",
    sku: "SM0803",
    volume: "Объём 60 мл",
    image:
      "./images/some-by-mi/catalog/Retinol Intense Reactivating Ampoule.avif",
    category: "creams",
    lineup: "retinol-intense",
    skin: ["normal"],
    effect: ["anti-aging"],
    component: ["retinol"],
  },
  {
    brand: "SOME BY MI",
    name: "Yuja Niacin Brightening Toner",
    sku: "SM0904",
    volume: "Объём 150 мл",
    image: "./images/some-by-mi/catalog/Yuja Niacin Blemish Care Serum.avif",
    category: "toners",
    lineup: "yuja-niacin",
    skin: ["combination"],
    effect: ["brightening"],
    component: ["niacinamide"],
  },
  {
    brand: "SOME BY MI",
    name: "Snail Truecica Moisture Cream",
    sku: "SM1005",
    volume: "Объём 60 мл",
    image: "./images/some-by-mi/catalog/Snail Truecica.avif",
    category: "creams",
    lineup: "snail-truecica",
    skin: ["dry", "sensitive"],
    effect: ["moisturizing", "soothing"],
    component: ["centella"],
  },
  {
    brand: "SOME BY MI",
    name: "Beta Panthenol Moisture Toner",
    sku: "SM1106",
    volume: "Объём 150 мл",
    image: "./images/some-by-mi/catalog/Beta Panthenol Repair Cream.avif",
    category: "toners",
    lineup: "beta-panthenol",
    skin: ["dry", "sensitive"],
    effect: ["moisturizing"],
    component: [],
  },
  {
    brand: "SOME BY MI",
    name: "Galactomyces Niacin Essence",
    sku: "SM1207",
    volume: "Объём 100 мл",
    image:
      "./images/some-by-mi/catalog/Galactomyces Pure Vitamin C Glow Cream.avif",
    category: "serums",
    lineup: "galactomyces",
    skin: ["normal", "dry"],
    effect: ["brightening"],
    component: ["niacinamide"],
  },
  {
    brand: "SOME BY MI",
    name: "AHA BHA PHA Miracle Peeling Pad",
    sku: "SM1308",
    volume: "70 шт",
    image:
      "./images/some-by-mi/catalog/AHA·BHA·PHA 30 Days Miracle Foam transparent.avif",
    category: "special",
    lineup: "aha-bha-pha",
    skin: ["oily", "combination"],
    effect: ["anti-acne"],
    component: ["aha", "bha", "pha"],
  },
  {
    brand: "SOME BY MI",
    name: "Retinol Intense Eye Cream",
    sku: "SM1409",
    volume: "Объём 30 мл",
    image: "./images/some-by-mi/catalog/Retinol Intense.avif",
    category: "special",
    lineup: "retinol-intense",
    skin: ["normal"],
    effect: ["anti-aging"],
    component: ["retinol"],
  },
];

function generateProducts(count = 89) {
  const list = [];
  const counts = {};

  for (let i = 0; i < count; i++) {
    const t = PRODUCT_TEMPLATES[i % PRODUCT_TEMPLATES.length];
    const skuNum = String(2000 + i).padStart(4, "0");
    const popular = i < 8 ? 100 - i * 2 + Math.random() : Math.random() * 70;
    list.push({
      ...t,
      id: i + 1,
      sku: i < PRODUCT_TEMPLATES.length ? t.sku : `SM${skuNum}`,
      name:
        i < PRODUCT_TEMPLATES.length
          ? t.name
          : `${t.name} #${Math.floor(i / PRODUCT_TEMPLATES.length) + 1}`,
      popular,
      newest: Date.now() - i * 86400000 * (0.5 + Math.random() * 20),
    });

    counts[t.category] = counts[t.category] ? (counts[t.category] += 1) : 1;
  }

  Object.entries(counts).forEach(([v, c]) => {
    const q = document.querySelector(`[data-count="${v}"]`);
    q.textContent = `(${c})`;
  });

  return list;
}

const allProducts = generateProducts(189);

// State
let state = {
  currentPage: 1,
  perPage: PRODUCTS_PER_PAGE,
  sort: "popular",
  filters: {
    category: [],
    lineup: [],
    skin: [],
    effect: [],
    component: [],
  },
  showAll: false,
};

// DOM
const grid = document.getElementById("productsGrid");
const totalCountEl = document.getElementById("totalCount");
const paginationEl = document.getElementById("pagination");
const pagesEl = document.getElementById("paginationPages");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const showAllBtn = document.getElementById("showAll");
const currentSortEl = document.getElementById("currentSort");
const sortDropdown = document.getElementById("sortDropdown");
const resetBtn = document.getElementById("resetFilters");
const filters = document.getElementById("catalogSidebar");
const filterClose = document.getElementById("catalogFiltersClose");
const filteOpen = document.getElementById("catalogFiltersOpen");
const applyFilters = document.getElementById("applyFilters");
const sortOpen = document.getElementById("catalogSortOpen");
const sortClose = document.getElementById("catalogSortClose");
const sortApply = document.getElementById("sortDropdownApply");

// ===== Filtering =====
function getFilteredProducts() {
  let result = [...allProducts];

  const { category, lineup, skin, effect, component } = state.filters;

  if (category.length) {
    result = result.filter((p) => category.includes(p.category));
  }
  if (lineup.length) {
    result = result.filter((p) => lineup.includes(p.lineup));
  }
  if (skin.length) {
    result = result.filter((p) => p.skin.some((s) => skin.includes(s)));
  }
  if (effect.length) {
    result = result.filter((p) => p.effect.some((e) => effect.includes(e)));
  }
  if (component.length) {
    result = result.filter((p) =>
      p.component.some((c) => component.includes(c)),
    );
  }

  // Sort
  switch (state.sort) {
    case "popular":
      result.sort((a, b) => b.popular - a.popular);
      break;
    case "newest":
      result.sort((a, b) => b.newest - a.newest);
      break;
    case "name-asc":
      result.sort((a, b) => a.name.localeCompare(b.name, "ru"));
      break;
    case "name-desc":
      result.sort((a, b) => b.name.localeCompare(a.name, "ru"));
      break;
  }

  return result;
}

// ===== Render products (with smooth enter animation) =====
let isAnimating = false;

export function renderProducts(animate = true) {
  const filtered = getFilteredProducts();
  totalCountEl.textContent = filtered.length;

  let pageItems;
  if (state.showAll) {
    pageItems = filtered;
    paginationEl.style.display = "none";
  } else {
    paginationEl.style.display = "flex";
    const totalPages = Math.max(1, Math.ceil(filtered.length / state.perPage));
    if (state.currentPage > totalPages) state.currentPage = totalPages;

    const start = (state.currentPage - 1) * state.perPage;
    pageItems = filtered.slice(start, start + state.perPage);
    renderPagination(totalPages);
  }

  const doRender = () => {
    if (pageItems.length === 0) {
      grid.classList.remove("is-leaving");
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:48px 16px;color:#6b6b6b;">
          <p style="font-size:16px;margin-bottom:8px;">Ничего не найдено</p>
          <p style="font-size:14px;">Попробуйте сбросить фильтры</p>
        </div>`;
      isAnimating = false;
      return;
    }

    grid.innerHTML = pageItems
      .map(
        (p, index) => `
      <article class="product-card ${animate ? "is-animating" : "is-visible"}" data-id="${p.id}" style="${animate ? `--delay: ${index * 45}ms` : ""}">
        <div class="product-card__image">
          <img src="${p.image}" alt="${p.name}" loading="lazy" width="190" height="190">
        </div>
        <div class="product-card__brand">${p.brand}</div>
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__meta">
          <span>Артикул: ${p.sku}</span>
          <span>${p.volume}</span>
        </div>
        <button type="button" class="product-card__btn u-btn--regular">Запросить цену</button>
      </article>`,
      )
      .join("");

    grid.classList.remove("is-leaving");

    if (animate) {
      // Force reflow, then animate cards in (stagger via transition-delay)
      requestAnimationFrame(() => {
        const cards = grid.querySelectorAll(".product-card.is-animating");
        cards.forEach((card) => {
          const delay = card.style.getPropertyValue("--delay") || "0ms";
          card.style.transitionDelay = delay;
          // trigger
          requestAnimationFrame(() => {
            card.classList.remove("is-animating");
            card.classList.add("is-visible");
          });
        });
        // cleanup delay after animation
        setTimeout(
          () => {
            cards.forEach((card) => {
              card.style.transitionDelay = "";
            });
            isAnimating = false;
          },
          400 + cards.length * 45,
        );
      });
    } else {
      isAnimating = false;
    }
  };

  // Если уже есть контент и нужна анимация — сначала fade-out
  if (
    animate &&
    grid.children.length > 0 &&
    !grid.querySelector("[style*='grid-column']")
  ) {
    isAnimating = true;
    grid.classList.add("is-leaving");

    const onEnd = (e) => {
      if (e.target !== grid || e.propertyName !== "opacity") return;
      grid.removeEventListener("transitionend", onEnd);
      doRender();
    };
    grid.addEventListener("transitionend", onEnd);

    // fallback на случай, если transitionend не сработает
    setTimeout(() => {
      if (isAnimating) {
        grid.removeEventListener("transitionend", onEnd);
        doRender();
      }
    }, 280);
  } else {
    doRender();
  }
}

// ===== Pagination UI =====
function renderPagination(totalPages) {
  const current = state.currentPage;
  prevBtn.disabled = current <= 1;
  nextBtn.disabled = current >= totalPages;

  const pages = [];
  const maxVisible = 5;

  if (totalPages <= maxVisible + 2) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    let start = Math.max(2, current - 1);
    let end = Math.min(totalPages - 1, current + 1);

    if (current <= 3) {
      start = 2;
      end = 4;
    }
    if (current >= totalPages - 2) {
      start = totalPages - 3;
      end = totalPages - 1;
    }

    if (start > 2) pages.push("…");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("…");
    pages.push(totalPages);
  }

  pagesEl.innerHTML = pages
    .map((p) => {
      if (p === "…") {
        return `<span class="pagination__page is-dots">…</span>`;
      }
      return `<button type="button" class="pagination__page ${
        p === current ? "is-active" : ""
      }" data-page="${p}">${p}</button>`;
    })
    .join("");
}

// ===== Event listeners =====
prevBtn.addEventListener("click", () => {
  if (state.currentPage > 1) {
    state.currentPage--;
    state.showAll = false;
    renderProducts();
    // window.scrollTo({ top: grid.offsetTop - 80, behavior: "smooth" });
  }
});

nextBtn.addEventListener("click", () => {
  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / state.perPage);
  if (state.currentPage < totalPages) {
    state.currentPage++;
    state.showAll = false;
    renderProducts();
    // window.scrollTo({ top: grid.offsetTop - 80, behavior: "smooth" });
  }
});

pagesEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-page]");
  if (!btn) return;
  const page = Number(btn.dataset.page);
  if (page && page !== state.currentPage) {
    state.currentPage = page;
    state.showAll = false;
    renderProducts();
    // window.scrollTo({ top: grid.offsetTop - 80, behavior: "smooth" });
  }
});

showAllBtn.addEventListener("click", () => {
  state.showAll = true;
  renderProducts();
});

filterClose.addEventListener("click", () => {
  filters.classList.remove("catalog__sidebar--open");
});
applyFilters.addEventListener("click", () => {
  filters.classList.remove("catalog__sidebar--open");
});

filteOpen.addEventListener("click", () => {
  filters.classList.add("catalog__sidebar--open");
});

sortOpen.addEventListener("click", (e) => {
  sortDropdown.setAttribute("open", "");
});

sortClose.addEventListener("click", () => {
  sortDropdown.removeAttribute("open");
});

sortApply.addEventListener("click", () => {
  sortDropdown.removeAttribute("open");
});

// Sorting
document.querySelectorAll(".sort-option").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const sort = btn.dataset.sort;
    state.sort = sort;
    state.currentPage = 1;
    state.showAll = false;

    document
      .querySelectorAll(".sort-option")
      .forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    currentSortEl.textContent = btn.textContent;
    sortOpen.lastElementChild.textContent = btn.textContent;

    if (window.matchMedia("min-width: 767px").matches) {
      sortDropdown.removeAttribute("open");
    }

    renderProducts();
  });
});

// Close sort dropdown on outside click
document.addEventListener("click", (e) => {
  // if (!sortDropdown.contains(e.target)) {
  //   sortDropdown.removeAttribute("open");
  // }
});

// Filters
document
  .querySelectorAll('#catalogSidebar input[type="checkbox"]')
  .forEach((input) => {
    input.addEventListener("change", () => {
      const name = input.name; // category | lineup | skin | effect | component
      const value = input.value;

      if (input.checked) {
        if (!state.filters[name].includes(value)) {
          state.filters[name].push(value);
        }
      } else {
        state.filters[name] = state.filters[name].filter((v) => v !== value);
      }

      state.currentPage = 1;
      state.showAll = false;
      renderProducts();
    });
  });

// Reset filters
resetBtn.addEventListener("click", () => {
  document
    .querySelectorAll('#catalogSidebar input[type="checkbox"]')
    .forEach((input) => {
      input.checked = false;
    });
  state.filters = {
    category: [],
    lineup: [],
    skin: [],
    effect: [],
    component: [],
  };
  state.currentPage = 1;
  state.showAll = false;
  renderProducts();

  filters.classList.remove("catalog__sidebar--open");
});

let startY = 0; // Точка начала касания
let currentY = 0; // Текущая точка пальца
let isSwiping = false;

// Порог в пикселях, после которого модалка закроется
const sortModal = sortDropdown.parentElement;
const SWIPE_THRESHOLD = 150;

sortModal.addEventListener("touchstart", (e) => {
  console.log(1);
  // Запоминаем начальную координату Y первого пальца
  startY = e.touches[0].clientY;
  isSwiping = true;

  // Убираем CSS-анимацию на время свайпа, чтобы объект мгновенно следовал за пальцем
  sortModal.style.transition = "none";
});

sortModal.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;

  currentY = e.touches[0].clientY;
  const diffY = currentY - startY;

  // Разрешаем движение только вниз (diffY > 0)
  if (diffY > 0) {
    // Чтобы страница не скроллилась во время перетаскивания окна
    if (e.cancelable) e.preventDefault();

    // Сдвигаем модалку вслед за пальцем
    sortModal.style.transform = `translateY(${diffY}px)`;
  }
});

sortModal.addEventListener("touchend", (e) => {
  if (!isSwiping) return;
  isSwiping = false;

  // Возвращаем плавную анимацию
  sortModal.style.transition = "transform 0.3s ease";

  const diffY = currentY - startY;

  // Если протащили ниже порога — закрываем, иначе возвращаем на место
  if (diffY > SWIPE_THRESHOLD) {
    sortDropdown.open = false;
  }
  sortModal.style.transform = "translateY(0)";

  // Сбрасываем координаты
  startY = 0;
  currentY = 0;
});
