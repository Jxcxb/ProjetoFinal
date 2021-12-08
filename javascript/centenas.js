elemento = ""
ondragstart = function(ev){
    elemento = ev.target.id;
}
            
ondragover = function(ev){
    ev.preventDefault();   
}

ondrop = function(ev){
    ev.preventDefault();
    var origem = document.getElementById(elemento);
    var destino = document.getElementById(ev.target.id);
    console.log(ev.target.id)

    if (origem.innerHTML == destino.innerHTML) {
    origem.style.opacity = "0.5";
    destino.style.opacity = "1";
    } else {
        console.log("ERRO.")
    }
                
}