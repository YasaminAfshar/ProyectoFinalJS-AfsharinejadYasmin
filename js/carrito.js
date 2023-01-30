
const guardarProductosAlCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductosAlCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const dentroDelCarrito = (id) => {
    const productos_carrito = cargarProductosAlCarrito ();

    return productos_carrito.some(elemento => elemento.id === id);
}

const agregarProductoCarrito = (id) => {
    const productos = cargarProductosLocal ();
    const productos_carrito = cargarProductosAlCarrito ();

    let posicion;
    let producto;

    dentroDelCarrito (id) ? (posicion = productos_carrito.findIndex (elemento  => elemento .id === id),productos_carrito [posicion].cantidad += 1) : (producto = productos.find (elemento  => elemento .id === id), producto.cantidad = 1,productos_carrito.push (producto) );


    guardarProductosAlCarrito (productos_carrito);
    botonCarrito ();
   

    Toastify({
        text: "Se ha agreado el producto al carrito",
        duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #941600, #b65e4f)",
        },
        onClick: function(){} 
      }).showToast();
}

const agregarItemCarrito = (id) => {
    const productos_carrito = cargarProductosAlCarrito ();
    let posicion = productos_carrito.findIndex (elemento  => elemento .id === id);
    productos_carrito [posicion].cantidad += 1;
    guardarProductosAlCarrito (productos_carrito);
    productosCarrito ();
    botonCarrito ();
}

const eliminarProductoCarrito = (id) => {
    const productos_carrito = cargarProductosAlCarrito ();
    let productos_actualizados = productos_carrito.filter (elemento  => elemento .id !== id);
    guardarProductosAlCarrito (productos_actualizados);
    productosCarrito ();
    botonCarrito ();
}

const eliminarItemCarrito = (id) => {
    const productos_carrito = cargarProductosAlCarrito ();
    let posicion = productos_carrito.findIndex (elemento  => elemento .id === id);
    productos_carrito [posicion].cantidad -= 1;

    (productos_carrito [posicion].cantidad == 0) ? eliminarProductoCarrito (id) : (guardarProductosAlCarrito (productos_carrito), productosCarrito (), botonCarrito ());
}


function vaciarElCarrito () {
    localStorage.removeItem("carrito");
    productosCarrito ();
    botonCarrito ();
}

const vaciarCarrito = () => {

    Swal.fire({
        title: '¿Estás seguro/a de vaciar el carrito?',
        text: "No podrás recuperar los productos seleccionados!",
        position: 'center',
        color: '#000000',
        background: '#FFFDE9',
        icon: 'warning',
        iconColor: '#A00000',
        showCancelButton: true,
        confirmButtonColor: '#084418',
        cancelButtonColor: '#920000',
        confirmButtonText: 'Si, deseo vaciarlo!',
      }).then((result) => {
        if (result.isConfirmed) {
            return vaciarElCarrito ();
        }
      });
}


const totalDeProductosEnCarrito = () => {
    const productos_carrito = cargarProductosAlCarrito ();

    return productos_carrito.reduce((total,elemento) => total += elemento.cantidad, 0);
}

const sumaAlCarrito = () => {
    const productos_carrito = cargarProductosAlCarrito ();
    
    return productos_carrito.reduce((total, elemento) => total += elemento.cantidad * elemento.precio, 0);
}

const sumaTotalCarrito = () => {
    let descuento = 0.25;  

    let sumaTotalCarrito;

    return (sumaAlCarrito () < 2500) ? sumaAlCarrito ()  : (sumaTotalCarrito = sumaAlCarrito() - (sumaAlCarrito() * descuento));

}

const aplicarDescuento = () => {
    let salida1 = "";
    let salida2 = "";

    return (sumaAlCarrito () > 2500) ? (salida1 = "SE HA APLICADO el 25% de descuento en el total de tu compra") : (salida2 = "NO SE HA APLICADO el 25% de descuento en el total de tu compra");
}

const botonCarrito = () => {
    let salida = `<button class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <img src="multimedia/iconos/tienda.png" alt="Ícono del carrito de compras">
        <span class="badge position-absolute top-0 start-70">${totalDeProductosEnCarrito()}</span>
    </button>  `;

    document.getElementById("boton_carrito").innerHTML = salida;
}
