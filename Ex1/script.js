

    function generate() {
        fetch("becode.json")
            .then((response) => response.json())
            .then(json => generateRules(json))
            .catch((error) => {
                console.log("There was an error!", error);
            });
    }
    
    function generateRules(json) {
        let ul = document.createElement('ul');
        document.body.appendChild(ul);
    
    
        for (let txt of json){
            const li = document.createElement("li");
            li.innerText = txt;
            ul.appendChild(li);
        }
    
    }


