/* ========================
   MENU MOBILE
========================= */

/* === Elementos do Menu === */

const menuMobile = document.querySelector(".menu-mobile");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

/* === Função para abrir e fechar o menu === */

function toggleMenu() {
    navbar.classList.toggle("active");
}

/* === Fechar o menu ao clicar em um link === */

function closeMenu() {
    navbar.classList.remove("active");
}

/* === Eventos === */

menuMobile.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

/* ========================
   HEADER STICKY
========================= */

/* === Elemento === */

const header = document.querySelector(".header");

/* === Função === */

function headerSticky() {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

/* === Eventos === */

window.addEventListener("scroll", headerSticky);

window.addEventListener("load", headerSticky);

/* ========================
   SCROLL REVEAL
========================= */

/* === Elementos === */

const revealElements = document.querySelectorAll(".reveal");

/* === Função === */

function scrollReveal() {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((element) => {
        const top = element.getBoundingClientRect().top;

        if (top < trigger) {
            element.classList.add("show");
        }
    });
}

/* === Eventos === */

window.addEventListener("scroll", scrollReveal);

window.addEventListener("load", scrollReveal);

/* ========================
   SCROLL REVEAL
========================= */

/* === Elementos === */

const reveals = document.querySelectorAll(".reveal");

/* === Função === */

function revealSections() {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }
    });
}

/* =================================
   BOTÃO VOLTAR AO TOPO / SCROLL TOP
================================= */

/* === Elemento === */

const btnTopo = document.querySelector("#btn-topo");

/* === Função === */

function scrollTopButton() {
    if (window.scrollY > 500) {
        btnTopo.classList.add("show");
    } else {
        btnTopo.classList.remove("show");
    }
}

/* === Evento de Clique === */

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,

        behavior: "smooth",
    });
});

/* ========================
   MENU ATIVO / LINK ATIVO
========================= */

/* === Elementos === */

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".nav-link");

/* === Função === */

function activeMenu() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    menuLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

/* === Eventos === */

window.addEventListener("scroll", activeMenu);

window.addEventListener("load", activeMenu);


