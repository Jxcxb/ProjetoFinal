const opUm = document.querySelector(".opção136");
const opDois = document.querySelector(".opção417");
const opTres = document.querySelector(".opção249");
const opQuatro = document.querySelector(".opção355");

const containerUm = document.querySelector(".containerUm");
const containerDois = document.querySelector(".containerDois");
const containerTres = document.querySelector(".containerTres");
const containerQuatro = document.querySelector(".containerQuatro");

function comecarArrastar(){
	console.log("Começou a arrastar");

	this.classList.add("arrastando");
}
function entrouSoltar(){
	this.classList.add("hover");
	const elementoArrastado = document.querySelector(".arrastando");

	this.appendChild(elementoArrastado);

}
function saiuSoltar(){
	this.classList.remove("hover");
}

opUm.addEventListener("dragstart", comecarArrastar);

palavras.forEach((palavra) =>{
	palavra.addEventListener("dragstart", comecarArrastar);
})

containerUm.addEventListener("dragover", entrouSoltar);
containerUm.addEventListener("dragleave", saiuSoltar);
containerDois.addEventListener("dragover", entrouSoltar);
containerDois.addEventListener("dragleave", saiuSoltar);
containerTres.addEventListener("dragover", entrouSoltar);
containerTres.addEventListener("dragleave", saiuSoltar);
containerQuatro.addEventListener("dragover", entrouSoltar);
containerQuatro.addEventListener("dragleave", saiuSoltar);