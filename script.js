let products = [
    {
        name: "Paracetamol",
        price: 50,
        image: "https://www.riagenerics.com/assets/img/unlicensed/Paracetamol%20500mg%20Tablets.jpg"
    },
    {
        name: "Cough Syrup",
        price: 120,
        image: "https://images.ctfassets.net/sabbecbbwaz3/SUANq01Uei9mbWy71UDmI/6e3f899ab6164b8209ff21a67d8dfba1/Vicks_AU_Cough_2in1_Syrup_front.jpg"
    },
    {
        name: "Vitamin Tablets",
        price: 200,
        image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
    },
    {
        name: "Pain Relief Spray",
        price: 180,
        image: "https://cdn01.pharmeasy.in/dam/products_otc/D39047/flamingo-pain-relief-spray-50g-2-1699001773.jpg"
    },{
        name: "Bandage",
        price: 5,
        image: "https://cdn-icons-png.flaticon.com/128/2760/2760650.png"
    },{
        
        name: "Proteinbar",
        price: 70,
        image: "https://images.tcdn.com.br/img/img_prod/971829/protein_bar_barra_de_proteina_12_und_de_55g_bodyaction_493_1_4f3c00e23d3fdad55f9e4ce08ef5ab0f.jpg"
    }
    

];



function displayProducts(list) {
    let container = document.getElementById("product-list");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.image}" class="product-img">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart('${p.name}', ${p.price})">
                Add to Cart
            </button>
        </div>
        `;
    });
}
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function goToCart() {
    window.location.href = "cart.html";
}

function searchProduct() {
    let value = document.getElementById("search").value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(value));
    displayProducts(filtered);
}

displayProducts(products);