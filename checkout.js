let listCart = [];
const noJsonProducts = [
    {
        "id": 1,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 200,
        "image": "images/item1.jpg"
    },
    {
        "id": 2,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 200,
        "image": "images/item2.jpg"
    },
    {
        "id": 3,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 200,
        "image": "images/item3.jpg"
    },
    {
        "id": 4,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 200,
        "image": "images/item4.jpg"
    },
    {
        "id": 5,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 200,
        "image": "images/item5.jpg"
    },
    {
        "id": 6,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 200,
        "image": "images/item6.jpg"
    },
    {
        "id": 7,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 199,
        "image": "images/item1.jpg"
    },
    {
        "id": 8,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 199,
        "image": "images/item2.jpg"
    },
    {
        "id": 9,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 99,
        "image": "images/item3.jpg"
    },
    {
        "id": 10,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 99,
        "image": "images/item4.jpg"
    },
    {
        "id": 11,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 30,
        "image": "images/item5.jpg"
    },
    {
        "id": 12,
        "name": "DREAMLAND LOGO Zipup Hoodie/チャコール",
        "price": 30,
        "image": "images/item6.jpg"
    }
]
product.push(...noJsonProducts)








function checkCart(){
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue){
        console.log(JSON.parse(cookieValue.split('=')[1]))
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}