const productos = [
    {id: 1, nombre:"Lana fino color VERDE AGUA", precio: 480, descripcion: "Lana 100%  orgnánico fino color VERDE AGUA", imagen: "multimedia/img/fino/fino-verdeagua.webp", category: "lanas"},
    {id: 2, nombre:"Lana fino color GRIS SUAVE (PLATA)", precio: 480, descripcion: "Lana 100%  orgnánico fino color GRIS SUAVE", imagen: "multimedia/img/fino/fino-gris.webp", category: "lanas"},
    {id: 3, nombre:"Lana fino color SALMÓN", precio: 480, descripcion: "Lana 100%  orgnánico fino color SALMÓN", imagen: "multimedia/img/fino/fino-salmon.webp", category: "lanas"},
    {id: 4, nombre:"Lana fino color ROJO FUERTE", precio: 480, descripcion: "Lana 100%  orgnánico fino color ROJO FUERTE", imagen: "multimedia/img/fino/fino-rojo.webp", category: "lanas"},
    {id: 5, nombre:"Lana fino color CELESTE CLARO", precio: 480, descripcion: "Lana 100%  orgnánico fino color CELESTE CLARO", imagen: "multimedia/img/fino/fino-celeste.webp", category: "lanas"},
    {id: 6, nombre:"Lana fino color BEIGE CLARO", precio: 480, descripcion: "Lana 100%  orgnánico fino color BEIGE CLARO", imagen: "multimedia/img/fino/fino-beige.webp", category: "lanas"},
    {id: 7, nombre:"Lana fino color AZUL FRANCIA", precio: 480, descripcion: "Lana 100%  orgnánico fino color AZUL FRANCIA", imagen: "multimedia/img/fino/fino-azul.webp", category: "lanas"},
    {id: 8, nombre:"Lana fino color AMARILLO PATITO", precio: 480, descripcion: "Lana 100%  orgnánico fino color AMARILLO PATITO", imagen: "multimedia/img/fino/fino-amarillo.webp", category: "lanas"},
    {id: 9, nombre:"Lana semifino color MOSTAZA", precio: 530, descripcion: "Lana 100%  orgnánico semifino color MOSTAZA", imagen: "multimedia/img/semi-fino/semifino-mostaza.webp", category: "lanas"},
    {id: 10, nombre:"Lana semifino color AQUA", precio: 530, descripcion: "Lana 100%  orgnánico semifino color AQUA", imagen: "multimedia/img/semi-fino/semifino-aqua.webp", category: "lanas"},
    {id: 11, nombre:"Lana semifino color ARENA", precio: 530, descripcion: "Lana 100%  orgnánico semifino color ARENA", imagen: "multimedia/img/semi-fino/semifino-arena.webp", category: "lanas"},
    {id: 12, nombre:"Lana semifino color AZUL FRANCIA", precio: 530, descripcion: "Lana 100%  orgnánico semifino color AZUL FRANCIA", imagen: "multimedia/img/semi-fino/semifino-azulfrancia.webp", category: "lanas"},
    {id: 13, nombre:"Lana semifino color LILA", precio: 530, descripcion: "Lana 100%  orgnánico semifino color LILA", imagen: "multimedia/img/semi-fino/semifino-lila.webp", category: "lanas"},
    {id: 14, nombre:"Lana semifino color ROJO", precio: 530, descripcion: "Lana 100%  orgnánico semifino color ROJO", imagen: "multimedia/img/semi-fino/semifino-rojo.webp", category: "lanas"},
    {id: 15, nombre:"Lana semifino color CELESTE", precio: 530, descripcion: "Lana 100%  orgnánico semifino color CELESTE", imagen: "multimedia/img/semi-fino/semifino-celeste.webp", category: "lanas"},
    {id: 16, nombre:"Lana semifino color NEGRO", precio: 530, descripcion: "Lana 100%  orgnánico semifino color NEGRO", imagen: "multimedia/img/semi-fino/semifino-negro.webp", category: "lanas"},
    {id: 17, nombre:"Lana grueso combinado código 001", precio: 590, descripcion: "Lana 100%  orgnánico grueso combinado código 001", imagen: "multimedia/img/grueso/grueso-001.webp", category: "lanas"},
    {id: 18, nombre:"Lana grueso combinado código 002", precio: 590, descripcion: "Lana 100%  orgnánico grueso combinado código 002", imagen: "multimedia/img/grueso/grueso-002.webp", category: "lanas"},
    {id: 19, nombre:"Lana grueso combinado código 003", precio: 590, descripcion: "Lana 100%  orgnánico grueso combinado código 003", imagen: "multimedia/img/grueso/grueso-003.webp", category: "lanas"},
    {id: 20, nombre:"Lana grueso combinado código 004", precio: 590, descripcion: "Lana 100%  orgnánico grueso combinado código 004", imagen: "multimedia/img/grueso/grueso-004.webp", category: "lanas"},
    {id: 21, nombre:"Lana grueso combinado código 005", precio: 590, descripcion: "Lana 100%  orgnánico grueso combinado código 005", imagen: "multimedia/img/grueso/grueso-005.webp", category: "lanas"},
    {id: 22, nombre:"Lana grueso combinado código 006", precio: 590, descripcion: "Lana 100%  orgnánico grueso combinado código 006", imagen: "multimedia/img/grueso/grueso-006.webp", category: "lanas"},
    {id: 23, nombre:"Lana grueso combinado código 007", precio: 590, descripcion: "Lana 100%  orgnánico grueso combinado código 007", imagen: "multimedia/img/grueso/grueso-007.webp", category: "lanas"},
    {id: 24, nombre:"Lana grueso combinado código 008", precio: 590, descripcion: "Lana 100%  orgnánico grueso combinado código 008", imagen: "multimedia/img/grueso/grueso-008.webp", category: "lanas"},
    {id: 25, nombre:"Pack de 6 unidades Agujas Laneras", precio: 390, descripcion: "Paquete de 6 agujas laneras para tejer", imagen: "multimedia/img/accesorios/aguajs-laneras.webp", category: "accesorios"},
    {id: 26, nombre:"Pack de 10 unidades de marcadores de punteros en espiral", precio: 360, descripcion: "Marcadores de puntero en espiral para tejer 10 unidades", imagen: "multimedia/img/accesorios/marcadores-de-punto.webp", category: "accesorios"},
    {id: 27, nombre:"20 Ganchitos de puntos de plástico", precio: 410, descripcion: "Ganchitos de puntos para tejer, utilizarlo como marcador", imagen: "multimedia/img/accesorios/marcadores-normal.webp", category: "accesorios"},
    {id: 28, nombre:"Set de 18 agujas, tejido circular", precio: 3950, descripcion: "Set de 18 agujas, tejido circular", imagen: "multimedia/img/accesorios/set-18-agujas-circular.webp", category: "kit-agujas"},
    {id: 29, nombre:"Regla SKC medidora de ovillo y agujas", precio: 550, descripcion: "Regla SKC Ideal para medir calibre de lanas hilos y agujas", imagen: "multimedia/img/accesorios/reglaSKC.webp", category: "accesorios"},
    {id: 30, nombre:"Protector de punta para agujas pack 4 unidades", precio: 555, descripcion: "Protector de punta para agujas de tejer en forma de cono", imagen: "multimedia/img/accesorios/protector-punta.webp", category: "accesorios"},
    {id: 31, nombre:"Agujas Doble Punta x 5 unidades", precio: 535, descripcion: "Agujas Doble Punta cortas de Acero Inoxidable. Pack de 5 agujas de la misma medida", imagen: "multimedia/img/accesorios/agujas-doblepunta.webp", category: "kit-agujas"},
    {id: 32, nombre:"Set de 22 Agujas de Crochet de acero inoxidable", precio: 3020, descripcion: "Set de 22 agujas que incluye las medidas de 0.60cm a 6.50cm", imagen: "multimedia/img/accesorios/set22agujas.webp", category: "kit-agujas"},
    {id: 33, nombre:"Ovillador devanador madejero", precio: 12270, descripcion: "Excelente ovillador devanador para lanas e hilos", imagen: "multimedia/img/accesorios/ovillero.webp", category: "accesorios"},
    {id: 34, nombre:"Set de 13 Agujas de Crochet con mango silicona", precio: 5338, descripcion: "Set de 13 Agujas de Crochet con Mango de Silicona", imagen: "multimedia/img/accesorios/set-13.webp", category: "kit-agujas"},
    {id: 35, nombre:"Aguja Latch Hook de Crochet, Curva P/ Lana", precio: 490, descripcion: "Aguja Curva de Metal con Mango de Madera, ideal para hacer tapices y alfombras", imagen: "multimedia/img/accesorios/aguja-Latch.webp", category: "kit-agujas"},
    {id: 36, nombre:"Pack 6 unidades de Agujas Laneras acero inoxidable", precio: 340, descripcion: "Pack de 6 Agujas Laneras SURTIDAS CBX de acero de Excelente Calidad", imagen: "multimedia/img/accesorios/agujaslaneras.webp", category: "accesorios"},
    {id: 37, nombre:"Kit de 4 Telares Circulares", precio: 6550, descripcion: "Kit de 4 Telares Circulares de plástico", imagen: "multimedia/img/accesorios/kit-telar.webp", category: "kit-agujas"},
    {id: 38, nombre:"Set de 3 Agujas Auxiliares de plástico, incluye 3 medidas", precio: 480, descripcion: "Set de 3 Agujas Auxiliares de Plástico. Incluye 3 Medidas", imagen: "multimedia/img/accesorios/agujas-auxiliares.webp", category: "kit-agujas"},
    {id: 39, nombre:"Kit de 4 Telares Rectos de plástico", precio: 8745, descripcion: "Kit de 4 Telares rectos de diferentes tamaños", imagen: "multimedia/img/accesorios/telar-recto.webp", category: "kit-agujas"},
];

const guardarProductosLocal = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLocal = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLocal (productos);

