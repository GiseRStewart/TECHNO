var asideContent = `
<aside>
<!-- Noticias o novedades -->
    <h1 class="animate__animated animate__heartBeat">Novedades</h1>
    <h2 class="padre-h2">Las 10 mejores laptops que puedes regalar este 2024:</h2>
    <!-- video -->
            <div id="ppal-animation">
                <iframe class= "video" width="400" height="300" frameborder: 1  src="https://www.youtube.com/embed/HeIz534YWas?si=Kvhgs1dRNOCR7ANt"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
            <hr>  
            <ul id="aside-list">

                <li><a class="hiper-aside" href="./templates/Producto.html">Apple MacBook Air M2</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">Dell XPS 13 (9315)</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">Razer Blade 14</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">Asus ZenBook 14 OLED</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">Lenovo ThinkPad Z13</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">Microsoft Surface Pro 9</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">HP Spectre x360 13.5</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">Dell XPS 15 (9520)</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">Lenovo Yoga 9i Gen 8</a></li>
                <li><a class="hiper-aside" href="./templates/Producto.html">Lenovo Chromebook Duet 3</a></li>
            </ul>
            <div id="texto-aside">
            <hr>
                <p> 
                Cada una de ellas han sido examinada minuciosamente. Ya sea una Chromebook de buen
                precio o una computadora portátil para juegos de primera línea, todas han sido sometidas a duras
                pruebas en el mundo real, así como a comparativas de rendimiento y duración de la batería.
                </p>
            <div/>
            
</aside>`;

document.body.insertAdjacentHTML('afterbegin', asideContent)