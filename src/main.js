function saludar() {
  console.log("Hola!");
}

let producto = [
  {
    id: 1,
    nombre: "banana",
    precio: 10
  },
  {
    id: 2,
    nombre: "manzana",
    precio: 8
  },
  {
    id: 3,
    nombre: "pera",
    precio: 6
  },
  {
    id: 4,
    nombre: "frutilla",
    precio: 15
  }
];
function mostrar() {
  let divLista = document.getElementById("divLista");
  let listaVisualProductos = document.createElement("ul");
  listaVisualProductos.setAttribute("id", "proList");
  divLista.appendChild(listaVisualProductos);
  let indice;
  for (indice = 0; indice <= producto.length; indice++) {
    let miLi = document.createElement("li");
    listaVisualProductos.appendChild(miLi);
    miLi.setAttribute("class", "item");
    miLi.setAttribute("id", "item" + indice);
    let miItem =
      " ID: " +
      producto[indice].id +
      " producto: " +
      producto[indice].nombre +
      " precio: " +
      producto[indice].precio;
    miLi.innerHTML = miItem;
  }
}

const formulario = document.querySelector("#formulario");

let listadoProductos = new Array();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = new FormData(formulario);
  console.log("producto: ", datos.get("campoProducto"));
  console.log("precio: ", datos.get("campoPrecio"));

  listadoProductos.push({
    producto: datos.get("campoProducto"),
    precio: parseInt(datos.get("campoPrecio"))
  });
});

function calcularTotal() {
  if (listadoProductos.length === 0) {
    alert("No se agrego producto");
  } else {
    console.log("Entro a calcular...");
    let indice;
    let total = 0;
    for (indice = 0; indice <= listadoProductos.length; indice++) {
      total = total + listadoProductos[indice].precio;
      console.log("Total parcial : ", total);
    }
    console.log("Total : ", total);
  }
}
