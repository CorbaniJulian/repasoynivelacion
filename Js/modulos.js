const header=`<div id="titulo">
            <i class="fa-regular fa-face-smile"></i><h2>Julian</h2>
        </div> 
        <input type="checkbox" id="boton-menu">
        <label for="boton-menu"><img src="Image/menuimg.png"></label>
        <nav class="menu">
            <div id="menuderecha"></div>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="pagina1.html">Proyectos</a></li>
                    <li><a href="pagina2.html">Contacto</a></li>
                </ul>
            </div>
        </nav>`;
const footer=' <ul class="redes"><li><a href="#"><i class="fa-brands fa-instagram"></i></a></li><li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li><li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li><li><a href="#"><i class="fa-brands fa-square-youtube"></i></a></li></ul><ul class="menufooter"><li><a href="index.html">Inicio</a></li><li><a href="pagina1.html">Mas sobre mi</a></li><li><a href="pagina2.html">Contacto</a></li></ul><p>@2025 | Todos los derechos reservados.</p>';
document.querySelector('header').innerHTML=header;
document.querySelector('footer').innerHTML=footer;