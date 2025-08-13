document.addEventListener('DOMContentLoaded', () => {
    const datotes = document.querySelector('.opciones');
    const inputYei = document.getElementById('inputsito');
    const botonEnvio = document.getElementById('botoncete');

    async function fetchData() {
        const res = await fetch('https://689a172ffed141b96ba1d5f0.mockapi.io/hola', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        let data = await res.json();
        return data;
    }

    async function addNewTask() {
        const task = inputYei.value;
        console.log(task);
        if (task.trim() === '') return;
        await fetch('https://689a172ffed141b96ba1d5f0.mockapi.io/hola', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task, status: 'hold on'
            })
        });
        inputYei.value = '';
        const data = await fetchData();
        displayCapsula(data);
    }

    function displayCapsula(capsula) {
        datotes.innerHTML = '';
        capsula.forEach(cap => {
            const capDiv = document.createElement('div')
            if (cap.status === "ready") {
                capDiv.classList.add('capsula');
                capDiv.innerHTML = `
                <div class="capsula">
                    <div class="infoText">
                        <p>${cap["task"]}</p>
                    </div>
                    <div class="botones">
                        <div class="terminado">
                        <img src="./storage/check.png" alt="">
                    </div>
                    <div class="eliminado">
                        <img src="./storage/basuritaCerrada.png" alt="">
                    </div>
                </div>
                `
            } else if (cap.status === "hold on") {
                capDiv.classList.add('capsulaNegativa');
                capDiv.innerHTML = `
                <div class="capsulaNegativa">
                    <div class="infoTextNegativo">
                        <p>${cap["task"]}</p>
                    </div>
                    <div class="botones">
                        <div class="terminadoNegativo">
                            <img src="./storage/check.png" alt="">
                        </div>
                        <div class="eliminadoNegativo">
                            <img src="./storage/basuritaCerrada.png" alt="">
                        </div>
                    </div>
                </div>`
            }
            datotes.appendChild(capDiv);
        });
    }
    fetchData().then(data => {
        displayCapsula(data);
    });
    botonEnvio.addEventListener('click', addNewTask);
});