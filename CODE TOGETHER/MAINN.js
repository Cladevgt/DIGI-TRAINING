// Récupère nos éléments HTML et on les stocke
let form = document.getElementById("form");

// Attention, on ne peut pas utiliser getElementById 
let title = form.querySelector("#title");
let description = form.querySelector("#description");

// Tableau qui stockera nos taches
let taskList = [];

// Depuis la variable form, je lui affecte un évènement de type submit (soumission de formulaire)
form.addEventListener("submit", function (event){
  
    // Bloquer le rechargement de la page
    event.preventDefault ();

    // Déclaration de notre objet
    let newTask = {
      
        title: title.value,
        description : description.value,
    }

    // Push des valeurs de l'objet dans le tableau 
    taskList.push(newTask);
  	addTask(newTask);
  
})

function addTask(taskToAdd){
  if (taskToAdd.title == "" || taskToAdd.description== ""){
  alert("Champ vide");
  return;}
  else {
    //importer notre ul via son id 'list'
        let list = document.getElementById('list');
        //creation de notre element balise
    		let li = document.createElement("li");
           
            //création des boutons Modifier et Supprimer
    		let editButton = document.createElement("button");
    		editButton.textContent = 'Modifier';

    		editButton.addEventListener("click", function (event){
           console.log("tache modifiée");                    
    		})
    
    		let deleteButton = document.createElement("button");
    		deleteButton.textContent = 'Supprimer'; 
    		deleteButton.addEventListener("click", function (event){
           console.log("tache supprimée");   
           list.removeChild(li);                 
    		})
          
       
            // ajoute du contenu à notre balise li
    		li.textContent = taskToAdd.title + " : "+ taskToAdd.description;
    		

            //ajoute les boutons dans notre balise li
            li.append(editButton);
    		li.append(deleteButton);
            list.append(li);
    		
    } 
}
