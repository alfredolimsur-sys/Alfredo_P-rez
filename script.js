import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let admin = false;

// navegación
window.show = function(id){
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
};

// login admin
window.login = function(){
  let pass = prompt("Clave admin:");
  if(pass === "1234"){
    admin = true;
    alert("Acceso permitido");
    show("admin");
  } else {
    alert("Incorrecto");
  }
};

// agregar red
window.addRed = async function(){
  if(!admin) return alert("No autorizado");

  let nombre = document.getElementById("redNombre").value;
  let url = document.getElementById("redUrl").value;

  await addDoc(collection(db, "redes"), { nombre, url });
};

// agregar post
window.addPost = async function(){
  if(!admin) return alert("No autorizado");

  let text = document.getElementById("postText").value;

  await addDoc(collection(db, "posts"), { text });
};

// mostrar redes
const redesContainer = document.getElementById("redesContainer");

onSnapshot(collection(db, "redes"), (snap) => {
  redesContainer.innerHTML = "";
  snap.forEach(doc => {
    let d = doc.data();
    redesContainer.innerHTML += `
      <div class="card">
        <a href="${d.url}" target="_blank">${d.nombre}</a>
      </div>
    `;
  });
});

// mostrar posts
const postsContainer = document.getElementById("postsContainer");

onSnapshot(collection(db, "posts"), (snap) => {
  postsContainer.innerHTML = "";
  snap.forEach(doc => {
    let d = doc.data();
    postsContainer.innerHTML += `
      <div class="card">${d.text}</div>
    `;
  });
});
