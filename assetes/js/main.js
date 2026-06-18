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

/* ========== EMAIL ========== */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // ServiceID - TemplateID - Form - PublicKey
    emailjs.sendForm(
        'service_fwvhypj',
        'template_0kovht3',
        '#contact-form',
        'ozOjc4akZ1T_4mK6R'
    )
    .then(() => {
        contactMessage.textContent = 'Mensagem enviada com sucesso.';
        contactMessage.style.color = 'green';

        contactForm.reset();

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
    })
    .catch((error) => {
        contactMessage.textContent = 'Erro ao enviar a mensagem.';
        contactMessage.style.color = 'red';

        console.log('Erro:', error);
    });
};
contactForm.addEventListener('submit', sendEmail);