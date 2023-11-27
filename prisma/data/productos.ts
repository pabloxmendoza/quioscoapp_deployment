
const productos = [
  {
      nombre: "Café Caramel con Chocolate",
      precio: 59.9,
      imagen: "cafe_01",
      categoriaId: 1
    },
    {
      nombre: "Café Frio con Chocolate Grande",
      precio: 49.9,
      imagen: "cafe_02",
      categoriaId: 1
    },
    {
      nombre: "Latte Frio con Chocolate Grande",
      precio: 54.9,
      imagen: "cafe_03",
      categoriaId: 1
    },
    {
      nombre: "Latte Frio con Chocolate Grande",
      precio: 54.9,
      imagen: "cafe_04",
      categoriaId: 1
    },
    {
      nombre: "Malteada Fria con Chocolate Grande",
      precio: 54.9,
      imagen: "cafe_05",
      categoriaId: 1
    },
    {
      nombre: "Café Mocha Caliente Chico",
      precio: 39.9,
      imagen: "cafe_06",
      categoriaId: 1
    },
    {
      nombre: "Café Mocha Caliente Grande con Chocolate",
      precio: 59.9,
      imagen: "cafe_07",
      categoriaId: 1
    },
    {
      nombre: "Café Caliente Capuchino Grande",
      precio: 59.9,
      imagen: "cafe_08",
      categoriaId: 1
    },
    {
      nombre: "Café Mocha Caliente Mediano",
      precio: 49.9,
      imagen: "cafe_09",
      categoriaId: 1
    },
    {
      nombre: "Café Mocha Frio con Caramelo Mediano",
      precio: 49.9,
      imagen: "cafe_10",
      categoriaId: 1
    },
    {
      nombre: "Café Mocha Frio con Chocolate Mediano",
      precio: 49.9,
      imagen: "cafe_11",
      categoriaId: 1
    },
    {
      nombre: "Café Espresso",
      precio: 29.9,
      imagen: "cafe_12",
      categoriaId: 1
    },
    {
      nombre: "Café Capuchino Grande con Caramelo",
      precio: 59.9,
      imagen: "cafe_13",
      categoriaId: 1
    },
    {
      nombre: "Café Caramelo Grande",
      precio: 59.9,
      imagen: "cafe_14",
      categoriaId: 1
    },
    {
      nombre: "Paquete de 3 donas de Chocolate",
      precio: 39.9,
      imagen: "donas_01",
      categoriaId: 4
    },
    {
      nombre: "Paquete de 3 donas Glaseadas",
      precio: 39.9,
      imagen: "donas_02",
      categoriaId: 4
    },
    {
      nombre: "Dona de Fresa ",
      precio: 19.9,
      imagen: "donas_03",
      categoriaId: 4
    },
    {
      nombre: "Dona con Galleta de Chocolate ",
      precio: 19.9,
      imagen: "donas_04",
      categoriaId: 4
    },
    {
      nombre: "Dona glass con Chispas Sabor Fresa ",
      precio: 19.9,
      imagen: "donas_05",
      categoriaId: 4
    },
    {
      nombre: "Dona glass con Chocolate ",
      precio: 19.9,
      imagen: "donas_06",
      categoriaId: 4
    },
    {
      nombre: "Dona de Chocolate con MÁS Chocolate ",
      precio: 19.9,
      imagen: "donas_07",
      categoriaId: 4
    },
    {
      nombre: "Paquete de 3 donas de Chocolate ",
      precio: 39.9,
      imagen: "donas_08",
      categoriaId: 4
    },
    {
      nombre: "Paquete de 3 donas con Vainilla y Chocolate ",
      precio: 39.9,
      imagen: "donas_09",
      categoriaId: 4
    },
    {
      nombre: "Paquete de 6 Donas",
      precio: 69.9,
      imagen: "donas_10",
      categoriaId: 4
    },
    {
      nombre: "Paquete de 3 Variadas",
      precio: 39.9,
      imagen: "donas_11",
      categoriaId: 4
    },
    {
      nombre: "Dona Natural con Chocolate",
      precio: 19.9,
      imagen: "donas_12",
      categoriaId: 4
    },
    {
      nombre: "Paquete de 3 Donas de Chocolate con Chispas",
      precio: 39.9,
      imagen: "donas_13",
      categoriaId: 4
    },
    {
      nombre: "Dona Chocolate y Coco",
      precio: 19.9,
      imagen: "donas_14",
      categoriaId: 4
    },
    {
      nombre: "Paquete Galletas de Chocolate",
      precio: 29.9,
      imagen: "galletas_01",
      categoriaId: 6
    },
    {
      nombre: "Paquete Galletas de Chocolate y Avena",
      precio: 39.9,
      imagen: "galletas_02",
      categoriaId: 6
    },
    {
      nombre: "Paquete de Muffins de Vainilla",
      precio: 39.9,
      imagen: "galletas_03",
      categoriaId: 6
    },
    {
      nombre: "Paquete de 4 Galletas de Avena",
      precio: 24.9,
      imagen: "galletas_04",
      categoriaId: 6
    },
    {
      nombre: "Galletas de Mantequilla Variadas",
      precio: 39.9,
      imagen: "galletas_05",
      categoriaId: 6
    },
    {
      nombre: "Galletas de sabores frutales",
      precio: 39.9,
      imagen: "galletas_06",
      categoriaId: 6
    },
    {
      nombre: "Hamburguesa Sencilla",
      precio: 59.9,
      imagen: "hamburguesas_01",
      categoriaId: 2
    },
    {
      nombre: "Hamburguesa de Pollo",
      precio: 59.9,
      imagen: "hamburguesas_02",
      categoriaId: 2
    },
    {
      nombre: "Hamburguesa de Pollo y Chili",
      precio: 59.9,
      imagen: "hamburguesas_03",
      categoriaId: 2
    },
    {
      nombre: "Hamburguesa Queso y  Pepinos",
      precio: 59.9,
      imagen: "hamburguesas_04",
      categoriaId: 2
    },
    {
      nombre: "Hamburguesa Cuarto de Libra",
      precio: 59.9,
      imagen: "hamburguesas_05",
      categoriaId: 2
    },
    {
      nombre: "Hamburguesa Doble Queso",
      precio: 69.9,
      imagen: "hamburguesas_06",
      categoriaId: 2
    },
    {
      nombre: "Hot Dog Especial",
      precio: 49.9,
      imagen: "hamburguesas_07",
      categoriaId: 2
    },
    {
      nombre: "Paquete 2 Hot Dogs",
      precio: 69.9,
      imagen: "hamburguesas_08",
      categoriaId: 2
    },
    {
      nombre: "4 Rebanadas de Pay de Queso",
      precio: 69.9,
      imagen: "pastel_01",
      categoriaId: 5
    },
    {
      nombre: "Waffle Especial",
      precio: 49.9,
      imagen: "pastel_02",
      categoriaId: 5
    },
    {
      nombre: "Croissants De la casa",
      precio: 39.9,
      imagen: "pastel_03",
      categoriaId: 5
    },
    {
      nombre: "Pay de Queso",
      precio: 19.9,
      imagen: "pastel_04",
      categoriaId: 5
    },
    {
      nombre: "Pastel de Chocolate",
      precio: 29.9,
      imagen: "pastel_05",
      categoriaId: 5
    },
    {
      nombre: "Rebanada Pastel de Chocolate",
      precio: 29.9,
      imagen: "pastel_06",
      categoriaId: 5
    },
    {
      nombre: "Pizza Spicy con Doble Queso",
      precio: 69.9,
      imagen: "pizzas_01",
      categoriaId: 3
    },
    {
      nombre: "Pizza Jamón y Queso",
      precio: 69.9,
      imagen: "pizzas_02",
      categoriaId: 3
    },
    {
      nombre: "Pizza Doble Queso",
      precio: 69.9,
      imagen: "pizzas_03",
      categoriaId: 3
    },
    {
      nombre: "Pizza Especial de la Casa",
      precio: 69.9,
      imagen: "pizzas_04",
      categoriaId: 3
    },
    {
      nombre: "Pizza Chorizo",
      precio: 69.9,
      imagen: "pizzas_05",
      categoriaId: 3
    },
    {
      nombre: "Pizza Hawaiana",
      precio: 69.9,
      imagen: "pizzas_06",
      categoriaId: 3
    },
    {
      nombre: "Pizza Tocino",
      precio: 69.9,
      imagen: "pizzas_07",
      categoriaId: 3
    },
    {
      nombre: "Pizza Vegetales y Queso",
      precio: 69.9,
      imagen: "pizzas_08",
      categoriaId: 3
    },
    {
      nombre: "Pizza Pepperoni y Queso",
      precio: 69.9,
      imagen: "pizzas_09",
      categoriaId: 3
    },
    {
      nombre: "Pizza Aceitunas y Queso",
      precio: 69.9,
      imagen: "pizzas_10",
      categoriaId: 3
    },
    {
      nombre: "Pizza Queso, Jamón y Champiñones",
      precio: 69.9,
      imagen: "pizzas_11",
      categoriaId: 3
    },
    {
      nombre: "Modelo Especial",
      precio: 30.0,
      imagen: "cerveza_01",
      categoriaId: 7
    },
    {
      nombre: "Negra Modelo",
      precio: 30.0,
      imagen: "cerveza_02",
      categoriaId: 7
    },
    {
      nombre: "Pacifico Clara",
      precio: 30.0,
      imagen: "cerveza_03",
      categoriaId: 7
    },
    {
      nombre: "Budweiser",
      precio: 30.0,
      imagen: "cerveza_04",
      categoriaId: 7
    },
    {
      nombre: "Heiniken",
      precio: 30.0,
      imagen: "cerveza_05",
      categoriaId: 7
    },
    {
      nombre: "XX lager",
      precio: 30.0,
      imagen: "cerveza_06",
      categoriaId: 7
    },
    {
      nombre: "Corona",
      precio: 30.0,
      imagen: "cerveza_07",
      categoriaId: 7
    },
    {
      nombre: "Victoria",
      precio: 30.0,
      imagen: "cerveza_08",
      categoriaId: 7
    },
    {
      nombre: "Coca Cola",
      precio: 25.0,
      imagen: "soda_01",
      categoriaId: 8
    },
    {
      nombre: "7 Up",
      precio: 25.0,
      imagen: "soda_02",
      categoriaId: 8
    },
    {
      nombre: "Fanta Naranja",
      precio: 25.0,
      imagen: "soda_03",
      categoriaId: 8
    },
    {
      nombre: "Sprite",
      precio: 25.0,
      imagen: "soda_04",
      categoriaId: 8
    },
    {
      nombre: "Pepsi",
      precio: 25.0,
      imagen: "soda_05",
      categoriaId: 8
    },
    {
      nombre: "Coca Cola Light",
      precio: 25.0,
      imagen: "soda_06",
      categoriaId: 8
    },
    {
      nombre: "Fanta Fresa",
      precio: 25.0,
      imagen: "soda_07",
      categoriaId: 8
    },
    {
      nombre: "Coca Cola Sin Azucar",
      precio: 25.0,
      imagen: "soda_08",
      categoriaId: 8
    }
]

export {
  productos 
}