
fetch("data/proyectos.json")
.then(r => r.json())
.then(data => {
    const cont = document.getElementById("exp");

    data.forEach(p => {
        cont.innerHTML += `
        <div class="card">
            <img class="card-img" src="${p.imagen}">
            <h3>${p.titulo}</h3>
            <p>${p.descripcion}</p>
        </div>`;
    });
});

fetch("data/negocio.json")
.then(r => r.json())
.then(data => {
    const cont = document.getElementById("shop");

    data.forEach(p => {
        cont.innerHTML += `
        <div class="card">
            <img class="card-img" src="${p.imagen}">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <strong>${p.precio}</strong>
        </div>`;
    });
});
