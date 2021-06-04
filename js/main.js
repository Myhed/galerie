window.onload = function(){
    // Générer la galerie
    function createElement(tag = '', classes = [], id = ''){
        const htmlElement = document.createElement(tag);
        if(classes.length > 0){
            htmlElement.classList.add(...classes);
        }

        if(id.length > 0){
            htmlElement.setAttribute('id', id);
        }
        return htmlElement;
    }

    const body = document.body;
    // create H1
    const h1 = createElement('h1');
    const textH1 = document.createTextNode('Galerie');
    
    // Create div galerie;
    const galerie = createElement('div', [], 'galerie');
    h1.appendChild(textH1);

    body.appendChild(h1);
    body.appendChild(galerie);

    const obj = {
        key: 'value'
    }

    const objectArray = [
        {
            key: 'value'
        }, 
        {
            key: 'value'
        }
    ]
}