// Menu Toggle para Mobile
const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('header nav')

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})

// Carousel Funcionalidade
const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')
const prev = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

// Contador começa em 1 devido ao clone da última imagem no início
let counter = 1
let size = carouselImages[0].clientWidth

// Inicializar o posicionamento do slide
carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'

// Botão Next
nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return
  carouselSlide.style.transition = 'transform 0.5s ease-in-out'
  counter++
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
})

// Botão Previous
prev.addEventListener('click', () => {
  if (counter <= 0) return
  carouselSlide.style.transition = 'transform 0.5s ease-in-out'
  counter--
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
})

// Evento de Transição para Loop Infinito
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none'
    counter = 1
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
  }
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length - 2
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
  }
})

// Auto Slide
let slideInterval = setInterval(() => {
  if (counter >= carouselImages.length - 1) return
  carouselSlide.style.transition = 'transform 0.5s ease-in-out'
  counter++
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
}, 5000)

// Pausar o auto slide ao passar o mouse sobre o carousel
const carousel = document.getElementById('carousel')
carousel.addEventListener('mouseenter', () => {
  clearInterval(slideInterval)
})

carousel.addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => {
    if (counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = 'transform 0.5s ease-in-out'
    counter++
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
  }, 5000)
})

// Atualizar tamanho do carousel ao redimensionar a janela
window.addEventListener('resize', () => {
  size = carouselImages[0].clientWidth
  carouselSlide.style.transition = 'none'
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
})

// Garantir o posicionamento correto ao carregar a página
window.addEventListener('load', () => {
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'
})

// Lógica para Tabs (corrigido)
const tabLinks = document.querySelectorAll('.tab-link')
const tabContents = document.querySelectorAll('.tab-pane') // Corrigido para selecionar o conteúdo correto

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove a classe 'active' de todas as abas e conteúdos
    tabLinks.forEach(l => l.classList.remove('active'))
    tabContents.forEach(content => content.classList.remove('active'))

    // Adiciona a classe 'active' à aba clicada
    link.classList.add('active')

    // Mostra o conteúdo da aba clicada
    const tabId = link.getAttribute('data-tab')
    const activeTab = document.getElementById(tabId)
    activeTab.classList.add('active')
  })
})
