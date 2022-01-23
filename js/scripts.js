const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleIconProjects = document.getElementById('projects-toggle__icon');
const toggleProjectsText = document.getElementById('projects-toggle__text');
const toggleProjects = document.getElementById('projects-toogle__item');
const rootStyle = document.documentElement.style; //All variables of style.css
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');
const mainProjects = document.querySelectorAll('.card--mainProject');
const javascriptProjects = document.querySelectorAll('.card--javascript');
let isJavascriptDisplayed = false;
let appLanguage = 'en';
let screenWidth = document.body.clientWidth;

//Hide JavaScript projects
javascriptProjects.forEach((item) => {
    item.style.display = 'none';
});

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./assets/languages/${language}.json`);
    const texts = await requestJson.json();

    appLanguage = language;

    for (const item of textsToChange) {
        const section = item.dataset.section;
        const value = item.dataset.value;

        item.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'assets/icons/sun.svg';
        rootStyle.setProperty('--primary-color', 'hsl(214,84%,56%)');
    } else {
        toggleIcon.src = 'assets/icons/moon.svg';
        rootStyle.setProperty('--primary-color', 'hsl(150,84%,56%)');
    }
});

//Toggle javascript projects
toggleProjects.addEventListener('click', () => {
    if (isJavascriptDisplayed == false) {

        toggleIconProjects.src = 'assets/icons/mainProjects.svg'
        toggleProjectsText.setAttribute('data-value', 'mainProjectsIcon__text');

        if (appLanguage == 'en') {
            toggleProjectsText.textContent = 'Main projects';
        } else {
            toggleProjectsText.textContent = 'Proyectos';
        }

        javascriptProjects.forEach((item) => {
            item.style.display = '';
        });
        mainProjects.forEach((item) => {
            item.style.display = 'none';
        });

        isJavascriptDisplayed = true;
    } else {

        toggleIconProjects.src = 'assets/icons/javascript.svg'
        toggleProjectsText.setAttribute('data-value', 'javascriptProjectsIcon__text');

        if (appLanguage == 'en') {
            toggleProjectsText.textContent = 'JavaScript examples';
        } else {
            toggleProjectsText.textContent = 'Ejemplos de javaScript';
        }

        javascriptProjects.forEach((item) => {
            item.style.display = 'none';
        });
        mainProjects.forEach((item) => {
            item.style.display = '';
        });

        isJavascriptDisplayed = false;
    }

    if (screenWidth < 720) {
        smoothScroll()
    }
});

window.addEventListener('resize', () => {
    screenWidth = document.body.clientWidth;
})

function smoothScroll() {
    const targetPosition = document.getElementById('projectSection').offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};