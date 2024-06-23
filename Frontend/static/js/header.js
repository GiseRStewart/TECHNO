var headerContent = `
<header>
    <!-- Logo -->
    <div class="menu">
    <img id="logo" src="../static/img/IdearepresentativadeLogo-removebg-preview.png" alt="">

    </div>
    <!-- Hipervínculos del menú -->
    <nav class="menu">
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
        <i class="fa-solid fa-bars"></i>
        </label>
        <ul>
            <li><a class="hipervinculo" href="../index.html">Home</a></li>
            <li><a class="hipervinculo" href="../Frontend/templates/Nosotros.html">Nosotros</a></li>
            <li><a class="hipervinculo" href="../Frontend/templates/Producto.html">Producto</a></li>
            <li><a class="hipervinculo" href="../Frontend/templates/Contacto.html">Contacto</a></li>
            <li><a class="hipervinculo" href="../tabla_productos.html">Tabla</a></li>
        </ul>
    </nav>
</header>
`;

document.body.insertAdjacentHTML("afterbegin", headerContent);
