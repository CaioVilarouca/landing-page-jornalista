/* ========== SHOW MENU ========== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* MENU SHOW */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* FECHAR MENU AO CLICAR EM QUALQUER LINK */
const navLinks = document.querySelectorAll('.nav-link, .nav-menu .button')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
})

/* ========== CHANGE BACKGROUND HEADER ========== */
const bgHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header'):header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/* ========== SERVICES MODAL ========== */
const modal = document.querySelectorAll('.services-modal'),
      modalButton = document.querySelectorAll('.services-button'),
      modalClose = document.querySelectorAll('.services-modal-close')

const activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((button, i) => {
    button.addEventListener('click', () => {
        activeModal(i)
    })
})

modalClose.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        modal.forEach((modalItem) => {
            modalItem.classList.remove('active-modal')
        })
    })
})

/* ========== show scroll up ========== */
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up')

    if (window.scrollY >= 350) {
        scrollUpButton.classList.add('show-scroll')
    } else {
        scrollUpButton.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

/* ======== DARK LIGHT THEME ======== */
const themeButton = document.getElementById('theme-button')
const lightTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line'  ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* ========== SCROLL REVEAL ANIMATION ========== */
const revealElements = document.querySelectorAll(
    '.section-title, .about-perfil, .about-content, .work-card, .contact-form'
);

revealElements.forEach((element) => {
    element.classList.add('reveal');
});

const scrollReveal = () => {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('show-reveal');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);