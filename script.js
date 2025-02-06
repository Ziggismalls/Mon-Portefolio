// Debut du code
const map = document.querySelector("#map");

map.addEventListener("click", () => {
  window.open(
    "https://www.google.fr/maps/place/19+Rue+du+Lion+d'Or,+59140+Dunkerque/@51.0319043,2.3704021,17z/data=!3m1!4b1!4m6!3m5!1s0x47dc8c7d10b5266d:0x203eb40f99b43ed7!8m2!3d51.031901!4d2.372977!16s%2Fg%2F11c2bm8dl0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    "_blank"
  );
});
const p = document.querySelector("#typedStyle");
const typed = new Typed(p, {
  strings: ["Bonjour !", "Je m'appelle Frantz", "Bienvenue sur mon site"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  cursorChar: "_",
  onStringTyped: function (arrayPos, self) {
    if (arrayPos === self.strings.length - 1) {
      setTimeout(() => {
        self.cursor.remove();
      }, 500);
    }
  },
});

const btn = document.getElementById("btnGoUp");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > window.innerHeight * 0.9) {
    btn.style.animation = "fadeIn 1s";
    btn.style.visibility = "visible";
  } else {
    btn.style.animation = "fadeOut 1s";
    setTimeout(() => {
      btn.style.visibility = "hidden";
    }, 1000);
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
