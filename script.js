let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/painting/images.jpeg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto5 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto7 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }, 
    produto8 = {
        image: './assets/img/actions/grimjow.jpeg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }, 
    produto9 = {
        image: './assets/img/actions/akasunanosasori.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }, 
    produto10 = {
        image: './assets/img/painting/Sauron.jpg',
        name: 'Sauron',
        price: 'R$150,00',
        type: 'Painting'
    }, 
];


const figuresList = [];
const framesList = [];

function separateItens(){
    for(let i = 0; i < itens.length; i++){
        if(itens[i].type === 'Action Figures'){
          figuresList.push(itens[i]);
        }else if(itens[i].type === 'Painting'){
            framesList.push(itens[i]);
        }
    }
    return {
        figuresList, 
        framesList
    };
}

function createListFrame(listFrame){
    for(let i = 0; i < listFrame.length; i++){
        const listFrameSection = document.getElementsByClassName('list-frame')[0];
        
        const frameItem = document.createElement('li')
        frameItem.className = "list-itens";

        const frameImage = document.createElement('img')
        frameImage.src = `${listFrame[i].image}`
        frameImage.className = "image-itens";
        
        const frameName = document.createElement('span')
        frameName.innerText = `${listFrame[i].name}`;
        frameName.className = "title-item"

        const framePrice = document.createElement('p')
        framePrice.innerText = `${listFrame[i].price}`;
        framePrice.className = "price-item"
        

        frameItem.appendChild(frameImage);
        frameItem.appendChild(frameName);
        frameItem.appendChild(framePrice);
        listFrameSection.appendChild(frameItem);
    }
};


function createListFigure(listFigure){ 
    for(let i = 0; i < listFigure.length; i++){
        const listFigureSection = document.getElementsByClassName('list-figure')[0];
        
        const figureItem = document.createElement('li')
        figureItem.className = "list-itens";

        const figureImage = document.createElement('img')
        figureImage.src = `${listFigure[i].image}`; 
        figureImage.className = "image-itens"; 

        const figureName = document.createElement('span');
        figureName.innerText = `${listFigure[i].name}`;
        figureName.className = "title-item"

        const figureFigure = document.createElement('p')
        figureFigure.innerText = `${listFigure[i].price}`;
        figureFigure.className = "price-item"

        
        
        figureItem.appendChild(figureImage);
        figureItem.appendChild(figureName);
        figureItem.appendChild(figureFigure);
        listFigureSection.appendChild(figureItem);
    }
};

const listByType = separateItens();
createListFigure(listByType.figuresList);
createListFrame(listByType.framesList);

