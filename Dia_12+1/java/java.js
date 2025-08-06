const token = "21d5a4da61aa90ddf2aa0d12005f9abe";

function buscarPersonaje() {
    document.getElementById("resultados").innerHTML = ``;
    const nombreBuscado = document.getElementById("nombreInput").value.trim();
    const superHeroe = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/${token}/search/${nombreBuscado}`;
    superHeroe.open("GET", url, true);

    superHeroe.onreadystatechange = function () {
        if (superHeroe.readyState === 3) {
            console.log("Cargando...");
        }
        else if (superHeroe.readyState === 4 && superHeroe.status === 200) {
            try {
                const daticos = JSON.parse(superHeroe.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    for (let i = 0; i < daticos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                            <div class="card">
                                <img src="${daticos.results[i].image.url}" alt="">
                                <h3>${daticos.results[i].name}</h3>
                                <h3>${daticos.results[i].biography["full-name"]}</h3>
                            </div>
                        `;
                        
                    }
                }
            } catch (err) {
                console.log(err.message);
            }
        }
    };
    superHeroe.send();
}
