document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const html = document.documentElement;
  const langButton = document.getElementById("language-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  const setLanguage = (lang) => {
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    html.dataset.lang = lang;
    langButton.textContent = lang === "ar" ? "FR" : "AR";
    localStorage.setItem("siteLanguage", lang);
  };

  const savedLang = localStorage.getItem("siteLanguage") || "ar";
  setLanguage(savedLang);

  langButton.addEventListener("click", () => {
    setLanguage(html.dataset.lang === "ar" ? "fr" : "ar");
  });

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    const expanded = mobileMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", expanded);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
});
