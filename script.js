// Cargar proyectos
fetch("data/proyectos.json")
.then(response => response.json())
.then(data => {

    const contenedor = document.getElementById("lista-proyectos");

    data.forEach(proyecto => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
        `;

        contenedor.appendChild(card);

    });

});

// Cargar galería
fetch("data/galeria.json")
.then(response => response.json())
.then(data => {

    const contenedor = document.getElementById("lista-galeria");

    data.forEach(item => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.imagen}" alt="${item.titulo}">
            <h3>${item.titulo}</h3>
        `;

        contenedor.appendChild(card);

    });

});

// Cargar blog
fetch("data/blog.json")
.then(response => response.json())
.then(data => {

    const contenedor = document.getElementById("lista-blog");

    data.forEach(post => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${post.titulo}</h3>
            <small>${post.fecha}</small>
            <p>${post.contenido}</p>
        `;

        contenedor.appendChild(card);

    });

});

console.log("Sitio cargado correctamente");
