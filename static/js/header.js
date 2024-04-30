var headerContent = `
<header>
    <!-- Logo -->
    <div class="menu">
        <img id="logo" src="../static/img/IdearepresentativadeLogo-removebg-preview.png" alt="">

    </div>
    <!-- Hipervínculos del menú -->
    <nav class="menu">
        <ul>
            <li><a class="hipervinculo" href="../index.html">Home</a></li>
            <li><a class="hipervinculo" href="../templates/Nosotros.html">Nosotros</a></li>
            <li><a class="hipervinculo" href="../templates/Producto.html">Producto</a></li>
            <li><a class="hipervinculo" href="../templates/Contacto.html">Contacto</a></li>  
        </ul>
    </nav>
</header>
`;

document.body.insertAdjacentHTML('afterbegin', headerContent)