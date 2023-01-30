const mainProductos = () => {
    const productos = cargarProductosLocal ();
    let salida = "";

    for (let producto of productos) {
        salida += `<article class="article hide col-sm-10 col-md-4 col-lg-3 ${producto.category}">
            <img src="${producto.imagen}" alt="${producto.descripcion}" class="w-100 img-thumbnail">
            <h5 class="producto-nombre">${producto.nombre.toUpperCase()}</h5>
            <p>$${producto.precio}</p>
            <div class="boton">
                <img class="animate__animated animate__jello animate__slower animate__infinite" src="multimedia/iconos/carrito.png" alt="Icono carrito para el boton donde se hará la compra del producto">
                <button type="button" class="btn w-50" onClick="agregarProductoCarrito (${producto.id});">+ Carrito</button>   
            </div>
        </article>` ;
    }

    document.getElementById("cont_section").innerHTML = salida;
}


mainProductos();
botonCarrito ();


