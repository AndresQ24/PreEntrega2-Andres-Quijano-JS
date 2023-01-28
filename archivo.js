class Cancion {
    constructor(id, cancion, artista, album){
        this.id = id,
        this.cancion = cancion,
        this.artista = artista,
        this.album = album

    }
}

//Instanciación de objetos -- respetamos orden y cantidad de atributos

const cancion1 = new Cancion(1,"Sola con mi voz","Blanco Palamera", "Promesas")

const cancion2 = new Cancion(2,"Cruel World","Active Child", "In another life")

const cancion3 = new Cancion(3,"Circles", "Alfie Templeman", "Don't go wasting time")

//crear un array de objetos: 
//2 formas de cargar un array:
//con método push
const bibliotecaDeCanciones = []
bibliotecaDeCanciones.push(cancion1, cancion2, cancion3)

///

let nombre = prompt(`ingrese su nombre`);

// MENU
let salirMenu = true;

//FUNCION AGREGAR CANCION

function agregarCancion(bibliotecaDeCanciones){
    let cancionIngresada = prompt("Ingrese el nombre de la cancion")
    let artistaIngresado = prompt("Ingrese el nombre del artista")
    let albumIngresado = prompt("Ingrese el titulo del album")
    
    //hacerlo con la function constructora
    const nuevaCancion = new Cancion(bibliotecaDeCanciones.length+1, cancionIngresada, artistaIngresado, albumIngresado)
    
    //pushearlo o sumarlo al array
    bibliotecaDeCanciones.push(nuevaCancion)
    
    alert(JSON.stringify(nuevaCancion, null, nuevaCancion.length));
 
 }

//FUNCION MOSTRAR CATALOGO

function mostrarCatalogo(bibliotecaDeCanciones){
    alert("Los canciones dispobibles son:")   
    alert(JSON.stringify(bibliotecaDeCanciones, null, bibliotecaDeCanciones.length));
}

//FUNCION BUSCAR POR TITULO
function buscarPorTitulo(array){
  let tituloBuscado = prompt("Ingrese el nombre de la cancion que desea buscar")
  let tituloEncontrado = array.find(
      //una function arrow si no tiene {} tiene un return implicito
      // (book) => {return book.titulo == "Aleph"} 
      (titulo) => titulo.cancion.toLowerCase() == tituloBuscado.toLowerCase() 
  )
  if(tituloEncontrado == undefined){
      alert(`${tituloBuscado} no se encuentra en nuestro stock`)
  }else{
      alert(JSON.stringify(tituloEncontrado))
  }
}

//FUNCION BUSCAR POR AUTOR
function buscarPorAutor(ar){
  let autorBuscado = prompt("Ingrese el nombre del autor que está buscando")
  let busqueda = ar.filter(
      (nombre) => nombre.artista.toLowerCase() == autorBuscado.toLowerCase()
  )
  if(busqueda.length == 0){
      alert(`Para ${autorBuscado} no hay canciones en el stock`)
  }else{
    alert(mostrarCatalogo(busqueda))
  }
}

//FUNCION ORDENAR ALFABETICAMENTE

function ordenarAlfabeticamenteArtista(array){
  const ordenadoAlfabeticamente = [].concat(array)

  ordenadoAlfabeticamente.sort((a, b) => {
      if (a.artista > b.artista) {
        return 1
      }
      if (a.artista < b.artista) {
        return -1
      }
      // a es igual b
      return 0
    })
    alert(mostrarCatalogo(ordenadoAlfabeticamente))
}

//FUNCION PRINCIPAL

function menu() {
  let salirMenu = false;
  do {
    salirMenu = preguntarOpcion(salirMenu);
  } while (!salirMenu);
}

//FUNCION BORRAR LIBRO
function borrarLibro(array){
  alert(`A partir del cátalogo ingrese el id del libro que desea eliminar:`)
  for(let elem of array){
      alert(`${elem.id} - ${elem.cancion} del autor/a ${elem.artista}`)
  }
  let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))
  //map: copiar un array con sólo los indices
  let arrayID = array.map(elemento => elemento.id)
  //indexOf para averiguar la posición del elemento que queremos
  let indice = arrayID.indexOf(idEliminar)
  //splice para una vez localizado el elemento, borrarlo
  
  array.splice(indice,1)
  alert(JSON.stringify(mostrarCatalogo(array)))
}

function preguntarOpcion(salir) {
  let opcionIngresada = parseInt(
    prompt(`Hola ${nombre} bienvenid@ a la biblioteca de canciones, por favor ingresa la opción deseada:
        1 - Agregar Cancion
        2 - Borrar Cancion
        3 - Consultar catálogo        
        4 - Buscar por nombre de cancion:
        5 - Buscar por autor:
        6 - Ordenar Alfabeticamente por artista:
        0 - Salir del menu`)
  );

  switch (opcionIngresada) {
    case 1:
      agregarCancion(bibliotecaDeCanciones);
      break;
    case 2:
      borrarLibro(bibliotecaDeCanciones);
      break;
    case 3:
      mostrarCatalogo(bibliotecaDeCanciones);
      break;
    case 4:
      buscarPorTitulo(bibliotecaDeCanciones);
      break;
    case 5:
      buscarPorAutor(bibliotecaDeCanciones);
      break;
    case 6:
      ordenarAlfabeticamenteArtista(bibliotecaDeCanciones)
      break;
    case 0:
      alert("gracias por utilizar nuestra app");
      salir = true;
      return salir;
    default:
        alert("Ingrese una opción correcta");
      break; 
    }
}

//código

menu()
