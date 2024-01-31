const product = [
    {
        id: 0,
        image: 'https://m.media-amazon.com/images/I/413KwLyNfIL._SY300_SX300_QL70_FMwebp_.jpg',
        title: 'parker pen ',
        price: 120,
    },
    {
        id: 1,
        image: 'img/folder/cutepencil.webp',
        title: 'cute-pencil set',
        price: 60,
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/612f+d0WVxL._SL1080_.jpg',
        title: 'brush combo pack',
        price: 230,
    },
    {
        id: 3,
        image: 'https://www.tinyminymo.com/cdn/shop/files/Cactus-10-in-1-Ball-Pen.png?v=1696077889&width=720',
        title: 'cactus-10-in-1-ball-pen',
        price: 120,
    },
    {
        id: 4,
        image: 'https://rukminim2.flixcart.com/image/850/1000/kfoapow0/art-set/y/u/j/stationery-kit-bag-all-in-one-classmate-original-imafw2qhxg3zr8hj.jpeg?q=20',
        title: 'classmate notebook set',
        price: 60,
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/I/71GpHch4mxL._SX466_.jpg',
        title: 'pastel-highlighter-set-highlighter',
        price: 60,
    },
    {
        id: 6,
        image: 'https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/marker-highlighter/v/f/q/pastel-highlighter-set-highlighter-faber-castell-original-imag5juva3r5hzms.jpeg?q=20',
        title: 'unicorn pen collection',
        price: 60,
    },
    {
        id: 7,
        image: 'https://www.tinyminymo.com/cdn/shop/files/Cactus-10-in-1-Ball-Pen.png?v=1696077889&width=720',
        title: 'Cactus-10-in-1-Ball-Pen',
        price: 230,
    },
    {
        id: 8,
        image: 'https://rukminim2.flixcart.com/image/850/1000/kfoapow0/art-set/y/u/j/stationery-kit-bag-all-in-one-classmate-original-imafw2qhxg3zr8hj.jpeg?q=20',
        title: 'note-book set',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>&#x20B9 ${price}.00</h2>`+
        "<button    onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "&#x20B9 "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "&#x20B9 "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>&#x20B9 ${price}.00</h2>`+
                "<i class='fa fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
