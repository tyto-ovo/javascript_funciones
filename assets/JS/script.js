// ----- 2 ----- //

let ele = document.getElementById("ele1");

// ----- 2.1 ----- //
/* 
function pintar() {
  ele.style.backgroundColor = "yellow";
} */
// ----- 2.2 ----- //
/* ele.addEventListener("click", function () {
  ele.style.backgroundColor = "yellow";
}); */
// ----- 2.3 ----- //
function pintar(color) {
  ele.style.backgroundColor = color;
}
/* ele.style.backgroundColor = "green";
ele.addEventListener("click", pintar("yellow")); */
// ----- ----- //

// ------ 3 ----- //
let azul = document.querySelector("#Azul");
let roja = document.querySelector("#Roja");
let verde = document.querySelector("#Verde");
let amarilla = document.querySelector("#Amarilla");

function blackOut(parama) {
  let nom = document.querySelector("#" + parama);
  nom.style.backgroundColor = "black";
}

azul.addEventListener("click", function () {
  azul.style.backgroundColor = "black";
});
roja.addEventListener("click", function () {
  roja.style.backgroundColor = "black";
});
verde.addEventListener("click", function () {
  verde.style.backgroundColor = "black";
});
amarilla.addEventListener("click", function () {
  amarilla.style.backgroundColor = "black";
});

function agregarElemento(colour) {
  contenedor = document.querySelector("#new");
  nuevoElemento = document.createElement("div");
  nuevoElemento.setAttribute("class", "nuevo");
  nuevoElemento.style.backgroundColor = colour;
  contenedor.appendChild(nuevoElemento);
}

let a = "rosado";
let s = "naranjo";
let d = "celeste";

let q = "morado";
let w = "gris";
let e = "cafe";

let elemento = document.querySelector("#key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    a = "pink";
    //console.log(a);
    elemento.style.backgroundColor = a;
  } else if (event.key === "s") {
    s = "orange";
    //console.log(s);
    elemento.style.backgroundColor = s;
  } else if (event.key === "d") {
    d = "skyblue";
    //console.log(d);
    elemento.style.backgroundColor = d;
  } else if (event.key === "q") {
    q = "purple";
    //console.log(q);
    agregarElemento(q);
  } else if (event.key === "w") {
    w = "grey";
    //console.log(w);
    agregarElemento(w);
  } else if (event.key === "e") {
    e = "brown";
    //console.log(e);
    agregarElemento(e);
  }
});
