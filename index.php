<!--Incluimos la cabecera de la página-->
<?php
    include('src/header.php');
?>
    <h4 id="resultados" class="bg-info text-center mt-1 mb-1">
        Cantidad del botin robada:
    </h4>
    <h4 id="resultados1" class="bg-info text-center mt-1 mb-2">
        Peso total robado:
    </h4>
<!--Tabla con datos recabados del algoritmo -->
    <h5 class="ms-2">Detalles del botín</h5>
    <table class="table" id="tabla">
    <thead>
        <tr class="table-primary">
        <th scope="col">Nombre</th>
        <th scope="col">Peso(Kg)</th>
        <th scope="col">Costo</th>
        </tr>
    </thead>
    <tbody id="CuerpoTabla">
        
    </tbody>
    </table>

    <h5 id="timeEj" class="ms-2">
        El tiempo de ejecución es: 
    </h5>

    <a href="./index.php" class="btn btn-success stretched-link center ms-2">Intentar de nuevo</a>
    <script src="main.js"></script> 
<!--Incluimos el footer de la página-->
<?php
    include('src/footer.php');
?>