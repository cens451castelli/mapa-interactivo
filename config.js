/*
  CONFIGURACIÓN DEL MAPA INTERACTIVO DE CASTELLI
  Editá este archivo con el Bloc de notas o cualquier editor de texto.

  COORDENADAS:
  x = porcentaje desde el borde izquierdo del mapa (0 a 100)
  y = porcentaje desde el borde superior del mapa (0 a 100)
  Ejemplo: x: 50, y: 50 coloca el punto en el centro.

  FOTOS:
  La carpeta debe coincidir con el nombre de la carpeta real.
  "fotos" enumera los nombres de archivo de la galería, sin la carpeta.
  La extensión por defecto es .jpg; podés cambiarla globalmente en extensionFotos
  o individualmente en cada punto con extension: ".png".

  IMPORTANTE:
  Los navegadores no permiten que una página local descubra automáticamente
  qué archivos hay dentro de una carpeta. Por eso hay que enumerar las fotos
  de cada lugar en la propiedad "fotos".
*/
window.MAPA_CONFIG = {
  titulo: "Mapa Interactivo: Sitios de memoria en Castelli",
  anchoMapa: 2810,
  altoMapa: 2842,
  extensionFotos: ".jpeg",

  puntos: [
    {
      id: "punto1",
      carpeta: "punto1",
      x: 50,
      y: 50,
      nombre: "Plaza de la Juventud",
      descripcion: "Escribí acá una breve descripción de este lugar. Podés usar varias líneas.",
      fotos: ["1.jpeg", "2.jpeg"]
    },
    {
      id: "punto2",
      carpeta: "punto2",
      x: 65,
      y: 38,
      nombre: "Ejemplo: Estación de tren",
      descripcion: "Reemplazá este texto por la descripción del lugar.",
      fotos: ["1.jpg", "2.jpg"]
    }
  ]
};
