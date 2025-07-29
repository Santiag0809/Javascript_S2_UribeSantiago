let rickimartin = [];
let paginasCargadas = 0;

for (i = 1; i <= 42; i++) {
  const apisita = new XMLHttpRequest();
  apisita.open("GET", `https://rickandmortyapi.com/api/character?page=${i}`, true);
  apisita.onload = function () {
    if (apisita.status === 200) {
      const datos = JSON.parse(apisita.responseText);
      rickimartin.push(...datos.results);
      paginasCargadas++;
      if (paginasCargadas === 42) {
        
        const nombreBuscado = prompt("Escribe el personaje");
        buscarPersonaje(nombreBuscado);
      }
    }
  };
  apisita.send();
}

function buscarPersonaje(nombre) {
  const encontrados = [];
  rickimartin.forEach(p => {
    if (p.name.toLowerCase().includes(nombre.toLowerCase())) {
      encontrados.push(p);
    }
  });

  if (encontrados.length === 0) {
    alert(`No existen ningun personaje con el nombre : "${nombre}".`);
  } else {
    let mensaje = `Se encontraron ${encontrados.length} personaje(s):\n\n`;
    encontrados.forEach(p => {
      mensaje += `- ${p.name}\n`;
    });
    alert(mensaje);
  }
}

