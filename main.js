/**
 * Este metodo agregara un nodo ROOT a nuestro arbol
 * @param {JSON} config objeto el cual utilizaremos para poder configurar nuestro nodo root
 */
function addRoot(config) {
    let root = document.getElementById("mainBranch"),
        node = document.createElement("LI"),
        ulNode = document.createElement("UL"),
        aRef = document.createElement("a"),
        branchName = config.name,
        textnode = document.createTextNode(branchName);

        aRef.href = "#";
        aRef.appendChild(textnode);

        node.appendChild(aRef);

        ulNode.id = "root";
        node.appendChild(ulNode);
    
        root.appendChild(node);
}

/**
 * Este metodo agregara un nodo hijo hacia un nodo padre recibiendo un id
 * @param {string} idParent Este parametro representa al id del papa al que vamos a agregarle el nuevo nodo
 * @param {JSON} config objeto el cual utilizaremos para poder configurar nuestro nodo
 */
function addChild(idParent, config) {
    let parentNode = document.getElementById(idParent),
        node = document.createElement("LI"),
        ulNode = document.createElement("UL"),
        aRef = document.createElement("a"),
        branchName = config.name,
        textnode = document.createTextNode(branchName);

        aRef.href = "#";
        aRef.appendChild(textnode);

        node.appendChild(aRef);

        if (config.isParent) {
            ulNode.id = config.id;
            node.appendChild(ulNode);
        }
    
        parentNode.appendChild(node);
}

/**
 * Funcion que se ejecutara en el momento que la pagina se cargue al 100%
 */
$(document).ready(function() {
    //Agreguen su codigo aqui
});

/**
 * Para obtener el arreglo que deben de utilizar 
 * diriganse el Readme.md y ingresen al link ahi les generara el json
 */
let tree = []