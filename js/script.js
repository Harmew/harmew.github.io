function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(' a[href^="#"]')
  function scrollToSection(element) {
    element.preventDefault()
    const href = element.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
} initScrollSuave();