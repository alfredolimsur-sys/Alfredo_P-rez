fetch("data/perfil.json")
.then(res => res.json())
.then(data => {
    document.querySelector(".hero h2").innerText = data.nombre;
    document.querySelector(".hero h3").innerText = data.rol;
    document.querySelector(".hero p").innerText = data.descripcion;
});

fetch("data/proyectos.json")
.then(res => res.json())
.then(data => {
    const cont = document.querySelector("#experiencia .grid");

    data.forEach(p => {
        cont.innerHTML += `
        <div class="card">
            <h3>${p.titulo}</h3>
            <p>${p.descripcion}</p>
        </div>`;
    });
});

fetch("data/negocio.json")
.then(res => res.json())
.then(data => {
    const cont = document.querySelector("#negocio .grid");

    data.forEach(p => {
        cont.innerHTML += `
        <div class="card">
            <h3>${p.titulo}</h3>
            <p>${p.descripcion}</p>
        </div>`;
    });
});
