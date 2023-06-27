//const fs = require('fs');
//gestionaire de fichier, importer avec node.js

//si le fichier existe => le lire
// if(fs.existsSync("storage.json")){
//     loadStorage();
// }

/**
 * Charger le contenu du fichier storage.json
 */
// function loadStorage() {
//     try {
//         const data = fs.readFileSync('storage.json', 'utf8' );
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }


//Request to the chucknorris.io API to retrieve categories
fetch("https://api.chucknorris.io/jokes/categories")
            .then((response) => response.json())
            .then(json => createCategories(json))
            .catch((error) => {
                console.log("There was an error!", error);
            });

        
//Calling the "select" tag
let select = document.getElementById('select');


//Browse all categories
function createCategories(json){
    for(let categories of json){
        //Create 'option' and add to 'select'
        let option = document.createElement('option');
        option.innerText = categories;
        select.append(option);
        
    }
}

function randomFacts() {
    //Receive category to select
    let choice = select.options[select.selectedIndex].innerText;

    let src;
//If no category select make a query to random
if(choice === 'none'){
    src = 'https://api.chucknorris.io/jokes/random';
}
//Otherwise specify the category
else {
    src = "https://api.chucknorris.io/jokes/random?category=" + choice;
}


//Request to the API with or no category and calling function createElement  with the return in parameter
fetch(src)
    .then((response) => response.json())
    .then(json => createBloc(json))
    .catch((error) => {
        console.log("There was an error!", error);
    });
}

function createBloc(json) {
    //create an element div
    let div = document.createElement('div');
    document.body.appendChild(div);
    
    //Create an element text
    let text = document.createElement('p');
    text.innerText = json['value'];

    div.append(text);

    window.scrollTo(0, document.body.scrollHeight);
}

// function saveToStorage() {
//
//     let body = document.body.json();
//
//     fs.writeFile("storage.json", body);
//
// }