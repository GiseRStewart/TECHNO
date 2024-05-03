var footerContent = `


<!-- Pie de página -->

    <footer class="pie-pagina">
        <div>
            <section class="seccion-pie">
                <h1>Sitio Web</h1>
                <p><a class="hiperv" href="../index.html">Home</a></p>
                <p><a class="hiperv" href="../templates/Nosotros.html">Nosotros</a></p>
                <p><a class="hiperv" href="../templates/Producto.html">Producto</a></p>
                <p><a class="hiperv" href="../templates/Contacto.html">Contacto</a></p>
            </section>
            <section class="seccion-pie">
                <h1>Ayuda</h1>
                <p><a class="terminos-s1" href="">Términos y condiciones</a></p>
                <p><a class="terminos-s1" href="">Preguntas Frecuentes</a></p>
                <p><a class="terminos-s1" href="">Ayuda</a></p>
            </section>
            <section class="seccion-pie">
                <h1>Siguenos</h1>
                <a href="https://www.facebook.com/" target="_blank"><img class="redes-img"
                        src="../static/img/facebook.png" alt=""></a>
                <a href="https://www.instagram.com/" target="_blank"><img class="redes-img"
                        src="../static/img/instagram.png" alt=""></a>
                <a href="https://twitter.com/" target="_blank"><img class="redes-img" src="../static/img/gorjeo.png"
                        alt=""></a>
                <a class="copy" <small>&copy; Derechos Reservados 2024</small></a>
            </section>
            <div class="recuperar"></div>
        </div>
    </footer>
`;
document.body.insertAdjacentHTML('afterbegin', footerContent)
