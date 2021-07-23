//MODAL START

const openEls = document.querySelector("[data-open]");
const closeEls = document.querySelector("[data-close]");
const isVisible = "is-visible";

//Revela el modal
openEls.addEventListener("click", function () {
  //Leer datos de formulario
  const genero = document.querySelector(".input_genero:checked").value;
  const pais = document.querySelector("input[name='pais']:checked").value;
  let cantidad = document.querySelector("input[name='cantidad']:checked").value;

  // console.log(genero);
  // console.log(pais);
  // console.log(cantidad);

  //Trae contenido de API

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "public/css/assets/names.json", true);

  //Trae datos ya filtrados e imprime en modal
  xhr.onload = function () {
    if (this.status === 200) {
      const uinames = JSON.parse(this.responseText);

      uinames.forEach((element) => {
        if (element.region == pais) {


          if (genero == "male") {
            if (cantidad == "todas") {
              cantidad = element.male.length;
            }
            let nombresFiltrados = []

            for (let i = 0; i < cantidad; i++) {
              let e = element.male[i];
              nombresFiltrados.push(e)
            }
            //Imprime los nombres filtrados por pais y por genero MALE
            console.log(nombresFiltrados);
            imprimirNombres(nombresFiltrados)



          } else if (genero == "female") {
            if (cantidad == "todas") {
              cantidad = element.female.length;
            }

            let nombresFiltrados = []

            for (let i = 0; i < cantidad; i++) {
              let e = element.female[i];
              nombresFiltrados.push(e)
            }
            //Imprime los nombres filtrados por pais y por genero FEMALE
            console.log(nombresFiltrados);
            imprimirNombres(nombresFiltrados)

          } else if (genero == "neutro") {
            if (cantidad == "todas") {
              if (element.female.length > element.male.length) {
                cantidad = element.male.length;
              } else if (element.female.length < element.male.length) {
                cantidad = element.female.length;
              }
            }

            let nombresFiltrados = []

            for (let i = 0; i < cantidad; i++) {
              let e = element.female[i];
              nombresFiltrados.push(e)

            }
            for (let i = 0; i < cantidad; i++) {
              let e = element.male[i];
              nombresFiltrados.push(e)
            }
            //Imprime los nombres filtrados por pais y por genero Neutro
            console.log(nombresFiltrados);
            imprimirNombres(nombresFiltrados)

          }
        }
      });
    }
  };

  xhr.send();

  //Revela el modal
  const modalId = this.dataset.open;
  document.getElementById(modalId).classList.add(isVisible);
});


//Cierra el modal en la X
closeEls.addEventListener("click", function () {
  this.parentElement.parentElement.classList.remove(isVisible);
});

//Cierra el modal en cualquier lugar fuera del modal
document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

//Cierra el modal si se presiona ESC
document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

//Codigo fuente original//

/* https://webdesign.tutsplus.com/es/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500
 */

//MODAL END


//Funciones

function imprimirNombres(arrayNames){
    let namesBox = document.querySelector(".modal-content-principal")
    //console.log("printing");

    namesBox.innerHTML = "";

    let ul = document.createElement("ul");

    arrayNames.forEach(element => {
        console.log(element);
        let li = document.createElement("li");
        li.innerText = element

        ul.appendChild(li);
    });

    namesBox.appendChild(ul)
}