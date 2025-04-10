function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".projet-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    function revealSections() {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const revealPoint = 150;

            if (top < windowHeight - revealPoint) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections();
});
