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
function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");
let total = document.getElementById("cart-total");

if(!cartItems) return;

cartItems.innerHTML = "";

let grandTotal = 0;

cart.forEach((item,index)=>{

grandTotal += item.price;

cartItems.innerHTML += `
<div class="card" style="margin-bottom:20px;">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
</div>
`;

});

total.innerText = "Total: ₹" + grandTotal;

}
