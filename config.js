//função que define com JS o titulo da pagina e o titulo da aba
function setConfig (){
    const texts = {
        "title": "App Compra"
    }
    document.title = texts.title;
    document.getElementById ("navTitle").innerHTML = texts.title;
}

setConfig ()