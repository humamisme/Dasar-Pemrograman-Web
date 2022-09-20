// Navigation Menu Toggle

const navMenuToggle = document.querySelector('.nav-menu-toggle');
const navList = document.querySelector('.nav-list');
navMenuToggle.addEventListener('click', () => {
    navMenuToggle.classList.toggle('active');
    navList.classList.toggle('slide')
})

// Active Navigation

const sections = document.querySelectorAll('article');
const navItem = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    const homeHeight = sections[0].offsetTop;

    sections.forEach( (section) => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - homeHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    console.log(current);

    navItem.forEach( (item) => {
        item.classList.remove('active');
        if (item.querySelector('a').getAttribute('href') === '#'.concat(current)) {
            item.classList.add('active');
        }
    });
});