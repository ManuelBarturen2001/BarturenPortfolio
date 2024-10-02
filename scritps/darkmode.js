const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
    
        themeToggle.addEventListener('click', () => {
            document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
            themeIcon.classList.toggle('fa-moon');
            themeIcon.classList.toggle('fa-sun');
            localStorage.setItem('theme', document.body.dataset.theme);
        });
    
        // Aplicar el tema guardado al cargar la página
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.dataset.theme = savedTheme;
            if (savedTheme === 'dark') {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        }