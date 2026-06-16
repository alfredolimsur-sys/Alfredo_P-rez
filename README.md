<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Mi Web Personal</title>
<link rel="stylesheet" href="stiker.css">
</head>

<body>

<header>
  <h1>Mi Espacio Personal</h1>
  <p>Enlaces, proyectos y publicaciones</p>
</header>

<nav>
  <button onclick="show('inicio')">Inicio</button>
  <button onclick="show('links')">Enlaces</button>
  <button onclick="show('posts')">Publicaciones</button>
  <button onclick="login()">Admin</button>
</nav>

<section id="inicio" class="active">
  <h2>Bienvenido</h2>
  <p>Este es mi sitio personal.</p>
</section>

<section id="links">
  <h2>Enlaces</h2>
  <div id="linksContainer"></div>
</section>

<section id="posts">
  <h2>Publicaciones</h2>
  <div id="postsContainer"></div>
</section>

<section id="admin">
  <h2>Panel Admin</h2>

  <h3>Nuevo enlace</h3>
  <input id="linkText" placeholder="Texto">
  <input id="linkUrl" placeholder="URL">
  <button onclick="addLink()">Guardar</button>

  <h3>Nueva publicación</h3>
  <input id="postText" placeholder="Texto">
  <button onclick="addPost()">Guardar</button>
</section>

<script type="module" src="script.js"></script>
</body>
</html>
