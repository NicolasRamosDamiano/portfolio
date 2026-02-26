// Datos de proyectos
const projects = [
    {
        title: "E commerce Jap",
        description: "Este es un proyecto en el cual trabajé mientras estudiaba con unos compañeros, el cual se trata de un e-commerce con diferentes productos , el cual, si se quiere ver, primero que nada hay que lanzar el server y una vez lanzado, el usuario es admin@admin y la contraseña es 1234.",
        image: "eccomerce.png",
        demo: "#",
        code: "#"
    },
    {
        title: "Proyecto 2",
        description: "Este segundo proyecto en realidad es un repositorio en el cual se acumulan un montón de diferentes aplicaciones, páginas, servicios que pueden ser de gran ayuda para un desarrollador y para cualquier otro tipo de trabajo en IT. Ahí se enlistan diferentes páginas que fui conociendo y otras que fui investigando. La idea era practicar más que nada justamente la parte del CSS, por eso tiene más efectos y no trabajé tanto en la parte de hacer un backend con una base de datos.",
        image: "piratebay.png",
        demo: "#",
        code: "#"
    },
    {
        title: "Proyecto 3",
        description: "Descripción breve del proyecto 3",
        image: "https://via.placeholder.com/300x200",
        demo: "#",
        code: "#"
    }
];

// Cargar proyectos dinámicamente
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.demo}" target="_blank">Demo</a>
                    <a href="${project.code}" target="_blank">Código</a>
                </div>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Menú móvil
function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Navegación suave
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
                // Cerrar menú móvil si está abierto
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });
}

// Formulario de contacto
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

// Animaciones al hacer scroll
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

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initScrollAnimations();
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