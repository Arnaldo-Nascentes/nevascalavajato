// Para trocar o número do WhatsApp, edite apenas a linha abaixo (DDI+DDD+número, sem símbolos).
const WHATSAPP = "5521970419309";

document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(a.dataset.wa);
  a.target = "_blank"; a.rel = "noopener";
});

const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

document.getElementById("ano").textContent = new Date().getFullYear();
