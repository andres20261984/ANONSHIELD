let countdownInterval;

function fetchEmail() {
  fetch('/generate')
    .then(res => res.json())
    .then(data => {
      const emailEl = document.getElementById("email");
      emailEl.textContent = data.email;
      startCountdown(600);
    })
    .catch(err => {
      console.error("Error al generar el correo:", err);
      document.getElementById("email").textContent = "Error de conexión";
    });
}

function copyEmail() {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email)
    .then(() => alert("Correo copiado"))
    .catch(() => alert("Error al copiar"));
}

function startCountdown(seconds) {
  clearInterval(countdownInterval);
  const timeEl = document.getElementById("time");
  let timeLeft = seconds;
  timeEl.textContent = timeLeft;

  countdownInterval = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) clearInterval(countdownInterval);
  }, 1000);
}

window.onload = fetchEmail;
