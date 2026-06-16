// MENÚ HAMBURGUESA
function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}

// CARGAR PROYECTOS DESDE JSON
fetch("data/proyectos.json")
.then(res => res.json())
.then(data => {
    let contenedor = document.getElementById("lista-proyectos");

    if(contenedor){
        data.forEach(p => {
            contenedor.innerHTML += `
                <div class="card">
                    <h3>${p.titulo}</h3>
                    <p>${p.descripcion}</p>
                </div>
            `;
        });
    }
});

// CARGAR GALERÍA DESDE JSON
fetch("data/galeria.json")
.then(res => res.json())
.then(data => {
    let contenedor = document.getElementById("lista-galeria");

    if(contenedor){
        data.forEach(img => {
            contenedor.innerHTML += `
                <div class="card">
                    <img src="${img.imagen}" style="width:100%; border-radius:10px;">
                    <p>${img.titulo}</p>
                </div>
            `;
        });
    }
});
