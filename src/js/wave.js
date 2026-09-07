document.addEventListener("DOMContentLoaded", () => {
  // Ищем все элементы с data-wave
  const elements = document.querySelectorAll("[data-wave]");

  elements.forEach((el) => {
    el.addEventListener("mousemove", createWave);
    // Можно также использовать 'mouseenter' вместо 'mousemove',
    // если нужна только одна волна при наведении
  });

  function createWave(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    // Координаты курсора относительно элемента
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Размер волны (берём наибольшую сторону элемента)
    const size = Math.max(rect.width, rect.height);

    const wave = document.createElement("span");
    wave.className = "wave";

    // Позиционируем и задаём размер
    wave.style.width = wave.style.height = `${size}px`;
    wave.style.left = `${x - size / 2}px`;
    wave.style.top = `${y - size / 2}px`;

    el.appendChild(wave);

    // Удаляем элемент после анимации
    wave.addEventListener("animationend", () => {
      wave.remove();
    });
  }
});
