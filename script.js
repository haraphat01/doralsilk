document.addEventListener("DOMContentLoaded", () => {
  // Navigation menu toggle for mobile
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-menu a")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })

  // Active navigation link based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-menu a")

    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })
  })

  // Smooth header background on scroll
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "10px 0"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.padding = "15px 0"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
    }
  })

  // Product selection for order form
  const productButtons = document.querySelectorAll(".product-card .btn")

  productButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const productName = this.closest(".product-card").querySelector("h3").textContent

      // Scroll to order section
      document.querySelector("#order").scrollIntoView({
        behavior: "smooth",
      })

      // If there was a real form, we would pre-select the product here
      console.log(`Selected product: ${productName}`)
    })
  })

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".product-card, .step, .about-image")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  const elementsToAnimate = document.querySelectorAll(".product-card, .step, .about-image")
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  // Run animation on load and scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)

  // Testimonial slider (placeholder for future implementation)
  console.log("Dorasilk website loaded successfully!")
})
