const skills = [
    { icon: 'devicon-java-plain colored', name: 'Java - JavaWeb' },
    { icon: 'devicon-html5-plain colored', name: 'HTML5' },
    { icon: 'devicon-css3-plain colored', name: 'CSS3' },
    { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
    { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
    { icon: 'devicon-react-original colored', name: 'ReactJS' },
    { icon: 'devicon-nodejs-plain colored', name: 'NodeJS' },
    { icon: 'devicon-express-original', name: 'ExpressJS' },
    { icon: 'devicon-php-plain colored', name: 'Php' },
    { icon: 'devicon-laravel-plain colored', name: 'Laravel' },
    { icon: 'devicon-python-plain colored', name: 'Python' },
    { icon: 'devicon-git-plain colored', name: 'Git & GitHub' },
    { icon: 'devicon-mysql-plain colored', name: 'MySQL' },
    { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
    { icon: 'devicon-mariadb-original', name: 'MariaDB' },
    { icon: 'devicon-sequelize-plain', name: 'Sequelize' }
];

const itemsContainer = document.querySelector('.items');
const itemWidth = 220; // Ancho del item + margen
let currentIndex = 0;

// Duplicar las habilidades para crear el efecto infinito
const allSkills = [...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills]; // Duplica los ítems para el efecto infinito

// Generar los items
allSkills.forEach((skill) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
        <i class="${skill.icon}"></i>
        <p>${skill.name}</p>
    `;
    itemsContainer.appendChild(item);
});

// Actualizar la posición del slider
function updateSliderPosition() {
    itemsContainer.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

// Mover el slider automáticamente
// Mover el slider automáticamente
function moveSlider() {
    currentIndex++;
    updateSliderPosition();

    // Si llegamos al final de los ítems, reiniciar
    if (currentIndex >= allSkills.length) {
        currentIndex = 0; // Regresar al inicio
        itemsContainer.style.transition = 'none'; // Para que no se vea el "vacío"
        updateSliderPosition(); // Reajustar posición
        setTimeout(() => {
            itemsContainer.style.transition = 'transform 0.5s ease'; // Restaurar la transición
        }, 50);
    }
}

// Mover el slider automáticamente cada 2 segundos
setInterval(moveSlider, 1500);

// Iniciar el slider
updateSliderPosition();

