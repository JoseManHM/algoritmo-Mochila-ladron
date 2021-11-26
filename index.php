<?php
include ('src/header.php');
?>
<div class="card text-center">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
    </a>
  </div>
  <div class="card-body">
    <h4 class="card-title">Reconocimiento facial</h4>
    <p class="note note-info text-sm-start w-75 p-3">
        Durante un robo, el ladrón encuentra un botín más cuantioso de lo esperado y tiene que elegir qué llevarse. Su mochila puede transportar como máximo W kilos. En el botín hay n objetos que pesan w1,…, wn kilos y valen v1,…, vn pesos. ¿Qué objetos debe elegir para llevarse el máximo valor sin que se rompa la mochila?
    </p>
    <a href="main.php" class="btn btn-primary">Iniciar algortimo</a>
  </div>
  <img
      src="src/img.png"
      class="img-fluid align-center mx-auto" width="30%"
    />
</div>
<?php
include ('src/footer.php');
?>