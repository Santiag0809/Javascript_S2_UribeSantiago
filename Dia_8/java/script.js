function buscarPersonaje() {
  const id = prompt("Ingrese el ID del personaje :");
  const starWars = new XMLHttpRequest();
  const url = `https://swapi.py4e.com/api/people/${id}/`;

  starWars.onreadystatechange = function () {
    if (starWars.readyState === 3) {
      alert("Cargando...");
    } else if (starWars.readyState === 4 && starWars.status === 200) {
      try {
        const infoStarWars = JSON.parse(starWars.responseText);
        let mensaje = "Personaje :\n\n";

        for (let valorsito in infoStarWars) {
          if (Array.isArray(infoStarWars[valorsito])) {
            mensaje += `${valorsito}:\n`;
            infoStarWars[valorsito].forEach((valorArray, i) => {
              mensaje += `  - ${valorArray}\n`;
            });
          } else {
            mensaje += `${valorsito}: ${infoStarWars[valorsito]}\n`;
          }
        }

        alert(mensaje);
      } catch (err) {
        console.log("Errorsito :", err.message);
      }
    } else if (starWars.readyState === 4 && starWars.status !== 200) {
      alert("No se encontro el personaje. Ingresa otro ID");
    }
  };

  starWars.open("GET", url, true);
  starWars.send();
}

buscarPersonaje();
