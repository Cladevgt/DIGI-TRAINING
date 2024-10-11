import {maFonction,maSecondeFonction} from "./Functions"
// objet qui représente une tache
let taskModel = 
{    title: '',   
     description: ''
}

// récupère nos éléments HTML et on les stocke
let form = Document.getElementById('form');
let title=Document.getElementById("title");
let description = Document.getElementsById("description");


// tableau qui stockera nos taches
let taskList = [];

//depuis la variable form , je lui attache un évènement de type submit(soumission de formulaire)
form.addEventListener("submit",function (event){
event.preventDefault();

// bloquer le rechargement de la page
event.preventDefault();

let titleInputValue = title.value
let descriptionInputValue = description.value;
console.log(titleInputValue , descriptionInputValue)

// je récupère et stock les valeurs de mon champs

let newTask = {
    title,Value,description:description.value
};

taskList.push(newTask)
console.log(taskList)
})