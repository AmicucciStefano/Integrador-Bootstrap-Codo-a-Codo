const btnBorrar = document.querySelector(".btn-borrar");
const btnResumen = document.querySelector(".btn-resumen");
const total = document.querySelector(".total");
const categorySelected = document.querySelector(".category-selected");
const inputCantidad = document.querySelector(".input-cantidad");
const form = document.querySelector(".form");
const inputName = document.querySelector(".input-name");
const inputSurname = document.querySelector(".input-surname");
const inputEmail = document.querySelector(".input-email");

const eraseAll = (e) => {
    e.preventDefault();
    form.reset()
    total.innerHTML="";
}

const getResume = (e) => {
    e.preventDefault();
    if(inputCantidad.value <= 0){
        return renderError("Por favor, Ingrese un numero mayor a 0")
    }else if(categorySelected.value === "-") {
        return renderError("Por favor, Ingrese una categoria")
    }else if (inputEmail.value === "" || inputName.value === "" || inputSurname.value === "") {
        return renderError("Por favor, llene todos los campos");
    }else
    total.innerHTML = `${sumQuantity()}`;
}

const sumQuantity = () => {
    let value = "";
    let category = Number(categorySelected.value);
    let quantity = Number(inputCantidad.value);
    if(category === 1) {
        value = quantity*((20*200)/100);
    }else if (category === 2) {
        value = quantity*((50*200)/100);
    }else if(category === 3) {
        value = quantity*((85*200)/100);
    } 
    return value;
}

const renderError = (message) => {
    alert(message);
}


btnResumen.addEventListener("click", getResume);
btnBorrar.addEventListener("click", eraseAll);