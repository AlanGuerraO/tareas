function CPN(jugador1, jugador2) {
    let mensaje = "";

    switch (jugador1) {
        case "T":
            switch (jugador2) {
                case "T":
                    mensaje = "T-T Ambos jugadores eligieron T. Es un empate.";
                    break;
                case "R":
                    mensaje = "T-R Roca rompe tijeras. Gana el jugador 2.";
                    break;
                case "P":
                    mensaje = "T-P Tijeras rompe papel. Gana el jugador 1.";
                    break;
                default:
                    mensaje = "Jugador 2 ha seleccionado una opción inválida.";
                    break;
            }
            break;
        case "R":
            switch (jugador2) {
                case "T":
                    mensaje = "R-T Roca rompe tijeras. Gana el jugador 1.";
                    break;
                case "R":
                    mensaje = "R-R Ambos jugadores eligieron R. Es un empate.";
                    break;
                case "P":
                    mensaje = "R-P Papel cubre piedra. Gana el jugador 2.";
                    break;
                default:
                    mensaje = "Jugador 2 ha seleccionado una opción inválida.";
                    break;
            }
            break;
        case "P":
            switch (jugador2) {
                case "T":
                    mensaje = "P-T Tijeras rompe papel. Gana el jugador 2.";
                    break;
                case "R":
                    mensaje = "P-R Papel cubre piedra. Gana el jugador 1.";
                    break;
                case "P":
                    mensaje = "Ambos jugadores eligieron P. Es un empate.";
                    break;
                default:
                    mensaje = "Jugador 2 ha seleccionado una opción inválida.";
                    break;
            }
            break;
        default:
            mensaje = "Jugador 1 ha seleccionado una opción inválida.";
            break;
    }

    return mensaje;
}

const jugador1 = prompt("Jugador 1, elige T, R o P:");
const jugador2 = prompt("Jugador 2, elige T, R o P:");

const resultado = CPN(jugador1, jugador2);

alert(resultado);