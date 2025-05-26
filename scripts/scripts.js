document.addEventListener("DOMContentLoaded", function () {
    const sidebarBtn = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    sidebarBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        sidebarBtn.classList.toggle("active");
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-1000px";
    } else {
      sidebar.style.left = "0px";
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});