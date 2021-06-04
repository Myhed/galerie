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

    const imgPath = {
        path: 'img/',
        prefix: 'image'
    }

    for(let i  = 1; i < 11; i++){
        const img = createElement('img');
        img.addEventListener('click', function(event){
            const popup = createElement('div', [], 'popup');
            const galeriePopup = createElement('div', [], 'popup-galerie');
            // child galeriePopup
            const imgClass = createElement('div', ['img']);
            imgClass.appendChild(event.target);
            const com = createElement('div', ['commentaire']);
            const deletePopup = createElement('div', ['delete']);

            galeriePopup.appendChild(imgClass);
            galeriePopup.appendChild(com);

            galeriePopup.appendChild(deletePopup);

            deletePopup.addEventListener('click', (e) => {
                body.removeChild(popup);
                // console.log(e.target.parentNode);
                body.removeChild(e.target.parentNode);
            });

            body.appendChild(popup);
            body.appendChild(galeriePopup);  
        }, false);

        console.log(img);
        img.setAttribute('src', imgPath.path + imgPath.prefix + i + '.png');
        galerie.appendChild(img);
    }
}