const productosCarrito = () => {
    const productos_carrito = cargarProductosAlCarrito ();
    let salida = "";

    if (totalDeProductosEnCarrito () > 0) {

        for (let producto of productos_carrito) {
            salida += `<div id="carrito_body">
                <div>
                    <img src="${producto.imagen}" alt="${producto.descripcion}" width="86" class="p-2">
                </div>
                <div id="datos_body">
                    <p>${producto.nombre}</p>
                    <div class="botonera">
                        <div id="btn_carrito" class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn" title="Eliminar Item" onClick="eliminarItemCarrito(${producto.id})">
                                <img src="multimedia/iconos/restar_producto.png" alt="Sacar producto del carrito según la cantidad que se requiera">
                            </button>
                            <button type="button" class="btn" disabled>${producto.cantidad}</button>
                            <button type="button" class="btn" title="Agregar Item" onClick="agregarItemCarrito(${producto.id})">
                                <img src="multimedia/iconos/suma_producto.png" alt="Sumar producto del carrito según la cantidad que se requiera">
                            </button>
                        </div>
                        <p>${producto.cantidad} X $${producto.precio}</p>
                    </div>
                    <div class="eliminar_producto">
                        <p>Subtotal:  $${producto.cantidad * producto.precio}</p>
                        <a href="#" title="Eliminar item seleccionado" onClick="eliminarProductoCarrito(${producto.id})">
                            <img src="multimedia/iconos/eliminar_producto.png" alt="Eliminar producto correspondiente por completo del carrito">
                        </a>
                    </div>
                </div>
            </div>`;
        }

        salida += `<div id="carrito_footer">
            <div id="precio-total">
                <p>Total a pagar:</p>
                <p>$${sumaTotalCarrito ()}</p>
            </div>
            <div id="descuento" class="alert alert-danger" role="alert">${aplicarDescuento()}</div>
            <div class="d-flex flex-column align-items-center justify-content-center">
                <button id="btn_vaciar" class="btn btn-sm" onClick="vaciarCarrito()">Vaciar Carrito <img src="multimedia/iconos/eliminar_producto.png" alt="Vaciar productos del carrito por completo"></button>
                <button class="btn btn-sm">Continuar con Pago<img src="multimedia/iconos/pago.png" alt="Continuar con el medio de pago"></button>
            </div>
        </div>`;
    } else {
        salida = `<div class="alert alert-danger text-center fs-5 fw-semibold fst-italic" role="alert">
            No se encontraron productos en el Carrito!
        </div>`;
    }

    document.getElementById("carrito_compras").innerHTML = salida;
}


productosCarrito ();

botonCarrito ();