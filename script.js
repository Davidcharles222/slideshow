const images = [
    { 'id': '1', 'url':'./img/chrono.jpg'},
    { 'id': '2', 'url':'./img/inuyasha.jpg'},
    { 'id': '3', 'url':'./img/tenchi.jpg'},
    { 'id': '4', 'url':'./img/tenjhotenge.jpg'},
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg'},
    { 'id': '6', 'url':'./img/ippo.png'}
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, containerItems) => {
    images.forEach (image => {
        containerItems.innerHTML += `
            <div class = 'item'>
                <img src = '${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);//adicionar o último item antes do item de índice 0
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click',next);


//---------------------------------------------------
const tituto = document.querySelector('h1');
const nome = ['P','r','o','j','e','t','o',' ','S','l','i','d','e',' ','d','e',' ','i','m','a','g','e','n','s','.','.','.' ]

let indice = 0;

setInterval(function(){
    
    if(indice == nome.length){
        return
    };

    tituto.innerHTML += nome[indice]
    indice++
},100)
