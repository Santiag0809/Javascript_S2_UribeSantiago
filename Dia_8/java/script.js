document.getElementById("busqueda").addEventListener("click", function () {
  const id = document.getElementById("buscaID").value;
  const starWars = new XMLHttpRequest();
  const url = `https://swapi.py4e.com/api/people/${id}/`;

  starWars.onreadystatechange = function () {
    const contenedor = document.getElementById("resultadito");

    if (starWars.readyState === 4) {
      contenedor.innerHTML = ""; 

      if (starWars.status === 200) {
        const data = JSON.parse(starWars.responseText);

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h2");
        titulo.textContent = `Nombre: ${data.name}`;
        tarjeta.appendChild(titulo);

        const lista = document.createElement("ul");

        for (let clave in data) {
          const item = document.createElement("li");

          if (Array.isArray(data[clave])) {
            item.innerHTML = `<strong>${clave}:</strong><ul>`;
            data[clave].forEach(valor => {
              item.innerHTML += `<li><a href="${valor}" target="_blank">${valor}</a></li>`;
            });
            item.innerHTML += `</ul>`;
          } else {
            if (typeof data[clave] === "string" && data[clave].startsWith("http")) {
              item.innerHTML = `<strong>${clave}:</strong> <a href="${data[clave]}" target="_blank">${data[clave]}</a>`;
            } else {
              item.innerHTML = `<strong>${clave}:</strong> ${data[clave]}`;
            }
          }

          lista.appendChild(item);
        }

        tarjeta.appendChild(lista);
        contenedor.appendChild(tarjeta);
      } else {
        contenedor.innerHTML = `No se encontró el personaje con ID ${id}</p>`;
      }
    }
  };

  starWars.open("GET", url, true);
  starWars.send();
});
