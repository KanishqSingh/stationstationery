const product = [
    {
        id: 0,
        image: 'img/folder/cutepencil.webp',
        title: 'cute teddy pencils',
        price: 120,
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/413KwLyNfIL._SY300_SX300_QL70_FMwebp_.jpg',
        title: 'parker pen set',
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
        price: 230,
    },
    {
        id: 4,
        image: 'https://rukminim2.flixcart.com/image/850/1000/kfoapow0/art-set/y/u/j/stationery-kit-bag-all-in-one-classmate-original-imafw2qhxg3zr8hj.jpeg?q=20',
        title: 'classmate notebook set',
        price: 230,
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/I/71GpHch4mxL._SX466_.jpg',
        title: 'pastel-highlighter-set-highlighter',
        price: 100,
    },
    {
        id: 6,
        image: 'https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/marker-highlighter/v/f/q/pastel-highlighter-set-highlighter-faber-castell-original-imag5juva3r5hzms.jpeg?q=20',
        title: 'unicorn pen collection',
        price: 230,
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
        title: 'notebook-set classmate',
        price: 100,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root1').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>&#x20B9 ${price}.00</h2>
                <button onclick="window.location.href='detail.html';">Add to cart</button>
                </div>
            </div>`
        )
    }).join('')

    document.getElementById('root2').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>&#x20B9 ${price}.00</h2>
                <button onclick="window.location.href='detail.html';">Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories)




// const imageElement = document.createElement('img');

// // Set attributes of the image element
// imageElement.src = product.image;
// imageElement.alt = product.title;

// // Get reference to the image container in HTML
// const imageContainer = document.getElementById('imageContainer');

// // Append the image element to the image container
// imageContainer.appendChild(imageElement);

// // Add click event listener to the image
// imageElement.addEventListener('click', function() {
//     // Navigate to another page when the image is clicked
//     window.location.href = 'spro1.html'; // Replace 'another-page.html' with the URL of the page you want to navigate to
// });