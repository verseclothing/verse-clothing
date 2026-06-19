function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("✅ Product Added to Cart");

}

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = document.getElementById("cart-count");

    if (count) {
        count.innerText = cart.length;
    }

}

function loadCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("cart-total");

    if (!cartItems || !total) return;

    cartItems.innerHTML = "";

    let grandTotal = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        total.innerText = "Total: ₹0";
        return;

    }

    cart.forEach((item) => {

        grandTotal += item.price;

        cartItems.innerHTML += `
<div class="card" style="margin-bottom:20px;padding:20px;">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button
class="buy-btn"
onclick="removeItem(${index})">

Remove

</button>

</div>
`;

    });

    total.innerText = "Total: ₹" + grandTotal;

}

window.onload = function () {

    updateCartCount();

    loadCart();

};

function removeItem(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

loadCart();

}
