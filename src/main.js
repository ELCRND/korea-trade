import { renderProducts } from "./js/catalog";
import "./scss/main.scss";
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header-menu");
  const menuOpen = document.querySelector(".header-menu-open");

  menuOpen.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuOpen.classList.toggle("is-open");
    menuOpen.setAttribute("aria-expanded", isOpen);
  });

  menu.querySelectorAll("a, .header__action").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuOpen.classList.remove("is-open");
      menuOpen.setAttribute("aria-expanded", "false");
    });
  });

  renderProducts();

  const elements = document.querySelectorAll("[data-wave]");

  let isTouch = false;

  elements.forEach((el) => {
    el.addEventListener("mouseenter", createWave);
    el.addEventListener("touchstart", createWave, { passive: true });
  });

  function createWave(e) {
    if (event.type === "touchstart") isTouch = true;
    if (event.type === "mouseenter" && isTouch) {
      isTouch = false;
      return;
    }

    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    let x, y;

    if (e.type === "touchstart") {
      const touch = e.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    // Размер волны (берём наибольшую сторону элемента)
    const size = Math.max(rect.width, rect.height);

    const wave = document.createElement("span");
    wave.className = "wave";

    // Позиционируем и задаём размер
    wave.style.width = wave.style.height = `${size}px`;
    wave.style.left = `${x - size / 2}px`;
    wave.style.top = `${y - size / 2}px`;
    wave.style.background = el.dataset.waveColor || "rgba(0, 0, 0, 1)";

    el.appendChild(wave);

    // Удаляем элемент после анимации
    wave.addEventListener("animationend", () => {
      wave.remove();
    });
  }
});
