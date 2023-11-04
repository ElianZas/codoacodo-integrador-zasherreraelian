/*Copiar Header en página Comprar Tickets*/

//Guardo mi elemento body de la página
const bodyComprarTickets = document.getElementById("body-comprartickets");

//Creo mi elemento nuevo dentro de la variable newheader
const newHeader = document.createElement("header");
//Le agrego una clase a través del método classList a mi Header nuevo
newHeader.classList.add("contenedor-header");

//Escribo dentro de mi header VACIO todo el código HTML de mi Header original.
newHeader.innerHTML = `
  <header class="contenedor-header" id="header">
  <!--Nav de Bootstrap-->
      <nav class="navbar navbar-expand-lg bg-nav barranav">
          <div class="container-fluid">
              <div class="contenedor-nav">
                  <img class="logo" src="../images/codoacodo.png" alt="Logo Codo a Codo">
                  <h1 class="tituloLogo">Conf Bs As</h1>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="../index.html">La conferencia</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active menu-gris" aria-current="page" href="#oradores">Los oradores</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active menu-gris" aria-current="page" href="#">El lugar y la fecha</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active menu-gris" aria-current="page"
                              href="#conviertete-orador">Conviértete en orador</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active comprar-verde" aria-current="page" href="./pages/comprartickets.html">Comprar tickets</a>
                      </li>
                      <li class="nav-item dropdown">
                          <ul class="dropdown-menu menu">
                              <li><a class="dropdown-item" href="../index.html">La conferencia</a></li>
                              <li><a class="dropdown-item" href="#oradores">Los oradores</a></li>
                              <li><a class="dropdown-item" href="#">El lugar y la fecha</a></li>
                              <li><a class="dropdown-item" href="#conviertete-orador">Conviértete en orador</a></li>
                              <li><a class="dropdown-item" href="#">Comprar tickets</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>
  `;
bodyComprarTickets.appendChild(newHeader); //Lo adhiero con el método appendChild, al hijo de BODY.
//selecciono mi elemento body y le adjunto mi nuevo header con el contenido de mi header original.
newHeader.classList.add("fixed-top"); //Le agrego una clase definida en css.



