//Filtro para las categorias

function filterProductos (value) {
    const buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
    
        (value.toUpperCase() == button.innerText.toUpperCase()) ? button.classList.add("activo") : button.classList.remove("activo");
    })

    const elementos = document.querySelectorAll(".article");
    elementos.forEach((elemento) => {

        (value == "all") ? elemento.classList.remove("hide") : ((elemento.classList.contains(value)) ? elemento.classList.remove("hide") : elemento.classList.add("hide"));
    })
    
}



//Primero se debe cargar la función que muestre todos los productos

window.onload = () => {
    filterProductos("all");
}



//Crear buscador de productos que se venden en la tienda


const buttonSearch = document.getElementById("btn-search");

const inputSearch = document.getElementById("input-search");

function searchBar () {
    const inputSearch = document.getElementById("input-search").value;
    const element = document.querySelectorAll(".producto-nombre");
    const articles = document.querySelectorAll(".article");
    

    element.forEach((elemento, index) => {
        
        (elemento.innerText.includes(inputSearch.toUpperCase())) ? articles[index].classList.remove("hide") : articles[index].classList.add("hide");
    });
    
}


buttonSearch.addEventListener("click", searchBar);

inputSearch.addEventListener('keyup', searchBar); 




//Crear un modal de promociones aplicando promesas con fetch


fetch('js/productos.json')
.then((respuesta) => respuesta.json())
.then((dato) => {
    const modalBody = document.getElementById("popup-body");
        
    let salida = "";

    dato.forEach(elemento => {
        salida += `<div class="card col-sm-10 col-md-6 col-lg-3">
            <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.descripcion}">
            <div class="card-body">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">${elemento.descripcion}</p>
                <p>Precio: $${elemento.precio}</p>
            </div>
        </div>` ;
    })

    modalBody.innerHTML = salida;
})

window.addEventListener("load", function () {
    
    this.setInterval ( function open(event) {
        document.querySelector("#popup-container").style.display = "flex";
    }, 15000);

})


document.querySelector("#close").addEventListener("click", function () {
    document.querySelector("#popup-container").style.display = "none";
})

