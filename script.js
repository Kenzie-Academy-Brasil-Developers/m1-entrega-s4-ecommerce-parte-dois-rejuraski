const arr = [{
        id: 1,
        imagem: './imagens/lakers.jpeg',
        categoria: 'Camisetas',
        titulo: 'Lebron James - 23 Lakers',
        descricao: 'City Edition 2021 - Swingman',
        preco: 299.99,
    },
    {
        id: 2,
        imagem: './imagens/Lebron18.jpg',
        categoria: 'Calcados',
        titulo: 'Nike LeBron 18',
        descricao: 'Wile E. vs Roadrunner',
        preco: 1109.99,
    },
    {
        id: 3,
        imagem: './imagens/gsw.jpeg',
        categoria: 'Camisetas',
        titulo: 'Stephen Curry - 30 GSW',
        descricao: '"THE TOWN" - Swingman',
        preco: 299.99,
    },
    {
        id: 4,
        imagem: './imagens/tenis curry 7.jpg',
        categoria: 'Calcados',
        titulo: 'Under Armour Curry 7',
        descricao: 'Cinza e preto - Unissex',
        preco: 799.90,
    },
    {
        id: 5,
        imagem: './imagens/pack meia.jpg',
        categoria: 'Acessorios',
        titulo: 'Meia Nike Cano Alto',
        descricao: 'Elite Crew - Pack c/ 3',
        preco: 129.99,
    },
    {
        id: 6,
        imagem: './imagens/bola nba.jpg',
        categoria: 'Acessorios',
        titulo: 'Bola Wilson NBA',
        descricao: 'Authentic Series Outdoor #7',
        preco: 209.00,
    },
]

let result = [];

function formatPrice(price) {
    return `R$ ${price.toFixed(2)}`;
}

function chooseFilter(categoria) {
    if (categoria !== undefined) {
        result = arr.filter(item => item.categoria === categoria);
    } else {
        result = arr;
    }
    createElement();
}

const principal = document.getElementById('principal');


function createElement() {
    principal.textContent = ''

    result.forEach(item => {
        let div1 = document.createElement('div');
        div1.className = 'item';
        principal.appendChild(div1);

        let figure1 = document.createElement('figure');
        figure1.className = 'item__figure';
        div1.appendChild(figure1);

        let img1 = document.createElement('img');
        img1.className = 'item__img';
        img1.src = item.imagem;
        figure1.appendChild(img1);

        let figcap1 = document.createElement('figcaption');
        figure1.appendChild(figcap1);

        let div2 = document.createElement('div');
        div1.appendChild(div2);

        let button1 = document.createElement('button');
        button1.className = 'item__type';
        button1.innerText = item.categoria;
        button1.onclick = () => chooseFilter(item.categoria);
        div2.appendChild(button1);

        let h2 = document.createElement('h2');
        h2.className = 'item__title';
        h2.innerText = item.titulo;
        div2.appendChild(h2);

        let p1 = document.createElement('p');
        p1.className = 'item__description';
        p1.innerText = item.descricao;
        div2.appendChild(p1);

        let p2 = document.createElement('p');
        p2.className = 'item__price';
        p2.innerText = formatPrice(item.preco);
        div2.appendChild(p2);

        let button2 = document.createElement('button');
        button2.onclick = () => addToCart(item);
        button2.className = 'item__add';
        button2.innerText = 'Adicionar ao carrinho';
        div2.appendChild(button2);
    });
}

const cartlist = document.getElementById('cart__list');

let car = []


function createElementCard() {
    cartlist.textContent = ''


    car.forEach(item => {
        let div2 = document.createElement('div');
        div2.id = 'cart__add';
        cartlist.appendChild(div2);

        let img2 = document.createElement('img');
        img2.className = 'item-cart__img';
        img2.src = item.imagem;
        div2.appendChild(img2);

        let div3 = document.createElement('div');
        div3.className = 'item-cart';
        div2.appendChild(div3);

        let h2 = document.createElement('h2');
        h2.className = 'item-cart__title';
        h2.innerText = item.titulo;
        div3.appendChild(h2);

        let p2 = document.createElement('p');
        p2.className = 'item-cart__price';
        p2.innerText = item.preco;
        div3.appendChild(p2);

        let button3 = document.createElement('button');
        button3.onclick = () => removeToCart(item);
        button3.className = 'item__add';
        button3.innerText = 'Remover produto';
        div3.appendChild(button3);
    })
}

function addToCart(item) {
    car.push(item);
    createElementCard();
    updateValue();

}

function removeToCart(item) {
    const index = car.findIndex(itemFinded => item.id === itemFinded.id);
    car.splice(index, 1);
    createElementCard();
    updateValue();
}

function updateValue() {
    const quantidade = car.length;
    const total2 = quantidade > 0 ? car.map(item => item.preco).reduce((oldValue, currentValue) => oldValue += currentValue) : 0;
    let quantidade2 = document.getElementById('quantity');
    quantidade2.innerText = quantidade;
    let total3 = document.getElementById('total');
    total3.innerText = formatPrice(total2);
}

chooseFilter();