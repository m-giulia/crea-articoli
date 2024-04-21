/* const nodoScript = document.getElementById('script');
//console.log(nodoScript);
let container = document.createElement("div");
container.className = "container";
let sx = document.createElement("aside");
let main = document.createElement("main");
let inputTitolo = document.createElement("input");
let inputTesto = document.createElement("textarea");
document.body.prepend(container);
container.append(sx);
container.append(main);
sx.append(inputTitolo);
sx.append(inputTesto); */

// let titolo = inputTitolo.value;
// let testo = inputTesto.value;




let main = document.querySelector("main");



function inserisciArticolo() { 
    let inputTitolo = document.getElementById("inputTitolo");
    let inputTesto = document.getElementById("inputTesto");
    if (inputTitolo.value && inputTesto.value) {
        let article = document.createElement("article");
        let titolo = document.createElement("h3");
        let testo = document.createElement("p");
        console.log(inputTitolo + inputTesto);

        titolo.innerHTML = inputTitolo.value;
        testo.innerHTML = inputTesto.value;
        
        main.append(article);
        article.append(titolo);
        article.append(testo);

        console.log('Prima del reset titolo:' + inputTitolo + ' testo:' + inputTesto);
        inputTitolo.value = '';
        inputTesto.value = '';
        console.log('Dopo il reset titolo:' + inputTitolo + ' testo:' + inputTesto);
    }
    else if (inputTitolo.value == '' && inputTesto.value) {
        alert("Inserisci un Titolo!");
        console.log('titolo:' + inputTitolo + 'testo:' + inputTesto);
    }
    else if (inputTitolo.value && inputTesto.value == '') {
        alert("Inserisci un Testo!");
        console.log('titolo:' + inputTitolo + 'testo:' + inputTesto);
    }
    else {
        alert("Inserisci prima un Testo ed un Titolo!");
        console.log('titolo:' + inputTitolo + 'testo:' + inputTesto);
    }
}