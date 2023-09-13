setInterval(() => {
  const now = new Date().getTime();
  const mas = new Date(`2023-12-25,00:00:00`).getTime();
  const leftTime = (mas - now) / 1000;
  const seconds = Math.floor(leftTime % 60);
  const minute = Math.floor(leftTime / 60) % 60;
  const hour = Math.floor(leftTime / (60 * 60)) % 24;
  const days = Math.floor(leftTime / (60 * 60 * 24));

  document.querySelector(
    "h2"
  ).innerHTML = `${days}day ${hour}hour ${minute}min ${seconds}sec`;
}, 1000);
