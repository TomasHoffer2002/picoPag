        document.addEventListener('DOMContentLoaded', function () {
            // Obtener todos los enlaces y secciones
            const links = document.querySelectorAll('.toc-item a');
            const sections = document.querySelectorAll('.section');

            // Función para cambiar de sección
            function showSection(sectionId) {
                // Ocultar todas las secciones
                sections.forEach(section => {
                    section.classList.remove('active');
                });

                // Mostrar la sección seleccionada
                document.getElementById(sectionId).classList.add('active');

                // Actualizar enlace activo
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }

            // Agregar event listeners a los enlaces
            links.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const sectionId = this.getAttribute('data-section');
                    showSection(sectionId);
                });
            });

            // Efecto adicional al pasar el cursor
            document.querySelectorAll('.toc-item').forEach(item => {
                item.addEventListener('mouseenter', function () {
                    this.style.transform = 'scale(1.02)';
                });

                item.addEventListener('mouseleave', function () {
                    this.style.transform = 'scale(1)';
                });
            });
        });