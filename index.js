const projects = [
    {
        title: "Ecommerce Jap",
        description: "E-commerce Jóvenes a Programar es una tienda online desarrollada como proyecto académico, que simula un sistema de comercio electrónico permitiendo visualizar productos, navegar por categorías y practicar funcionalidades clave del desarrollo web front-end. el usuario es admin@admin y la contraseña es 1234.",
        image: "ecommerce.png",
        code: "https://github.com/NicolasRamosDamiano/proyecto-final",
        pagina: "https://nicolasramosdamiano.github.io/proyecto-final/login.html",
        iconos: [
    { icon: "fa-brands fa-html5", nombre: "HTML5" },
    { icon: "fa-brands fa-css3-alt", nombre: "CSS3" },
    { icon: "fa-brands fa-js", nombre: "JavaScript" },
    { icon: "fa-brands fa-bootstrap", nombre: "Bootstrap" }
]
    },
    {
        title: "CodeHub",
        description: "CodeHub es una plataforma que recopila y organiza herramientas y recursos útiles para desarrolladores web, facilitando el acceso a páginas que ayudan a resolver problemas, optimizar el trabajo y mejorar la productividad.",
        image: "codehub.png",
        code: "https://github.com/NicolasRamosDamiano/codehub",
        pagina: "https://nicolasramosdamiano.github.io/codehub/",
        iconos:[{ icon: "fa-brands fa-html5", nombre: "HTML5" },
        { icon: "fa-brands fa-css3-alt", nombre: "CSS3" },
        { icon: "fa-brands fa-js", nombre: "JavaScript" },
        { icon: "fa-brands fa-react", nombre: "React" }]
    },
{
    title: "PorteX",
    description: "Portex es una aplicación web desarrollada con Vue para una empresa española dedicada a portes y mudanzas. Su objetivo es facilitar la gestión y planificación de traslados. La plataforma permite calcular la distancia entre direcciones para estimar recorridos y organizar los servicios de transporte de forma más eficiente. Además, incorpora un sistema de seguimiento mediante un mapa, donde se puede visualizar el recorrido y la ubicación del traslado.",
    image: "portex.png",
    code: "https://github.com/DrAsHMkR/PortexApp",
    pagina: "https://nicolasramosdamiano.github.io/portex/",
    iconos: [
        { icon: "fa-brands fa-vuejs", nombre: "Vue.js" },
        { icon: "fa-brands fa-js", nombre: "JavaScript" },
        { icon: "fa-brands fa-css3-alt", nombre: "CSS3" }
    ]
}
];

function loadProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <button class="ver-mas">Ver más</button>
                <div class="project-links">
                    <a href="${project.code}" target="_blank">Código</a>
                    <a href="${project.pagina}" target="_blank">Página</a>
                </div>
                <div class="project-icons">
                 ${project.iconos.map(i => `<i class="${i.icon}" title="${i.nombre}"></i>`).join('')}
                </div>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}


function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });
}


function initContactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xgoldqor', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('¡Mensaje enviado correctamente!');
                form.reset();
            } else {
                alert('Hubo un error al enviar el mensaje.');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión.');
        }
    });
}


function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initScrollAnimations();

    document.querySelectorAll('.ver-mas').forEach(boton => {
    boton.addEventListener('click', () => {
        const descripcion = boton.previousElementSibling;
        descripcion.classList.toggle('visible');
    });
});
});

// Cambiar estilo de navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

