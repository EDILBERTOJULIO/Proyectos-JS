var estadolicuadora = "apagada";
var sonidoLicuadora = document.getElementById( "blender-sound" );
var botonLicuadora = document.getElementById( "blender-button-sound" );
var licuadora = document.getElementById("blender");


function controlarLicuadora() {
    if (estadolicuadora == "apagada") {
        estadolicuadora = "encendido";
        hacerRuidito();
        licuadora.classList.add("active");
    } else {
        estadolicuadora = "apagada";
        hacerRuidito();
        licuadora.classList.remove("active");
    }
}

function hacerRuidito() {
    if( sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
      } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
      }
    }