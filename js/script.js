function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name: name,
price: price
});

localStorage.setItem("cart", JSON.stringify(cart));

document.getElementById("cart-count").innerText = cart.length;

alert("✅ Product Added to Cart");

}

window.onload = function(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = document.getElementById("cart-count");

if(count){
count.innerText = cart.length;
}

}
