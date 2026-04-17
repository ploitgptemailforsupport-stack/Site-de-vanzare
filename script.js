document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("continueBtn");
  const timerText = document.getElementById("timerText");
  const keyText = document.getElementById("keyText");

  let countdown = 60;
  let interval;
  let running = false;

  btn.addEventListener("click", () => {
    if (running) return;
    running = true;

    btn.disabled = true;
    btn.classList.add("loading");

    timerText.textContent = "Loading key system... 60s";

    interval = setInterval(() => {
      countdown--;

      // smooth text update
      timerText.textContent = `Generating key... ${countdown}s`;

      // little animation effect change
      btn.style.transform = `scale(${1 + Math.sin(countdown) * 0.02})`;

      if (countdown <= 0) {
        clearInterval(interval);

        btn.classList.remove("loading");
        btn.style.transform = "scale(1)";

        timerText.textContent = "Complete!";
        keyText.textContent = "🔑 Key: Rombad3012941232139";

        btn.textContent = "Done";
      }
    }, 1000);
  });

});