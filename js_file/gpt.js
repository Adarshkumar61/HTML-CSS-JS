// Sample data for doctors and medicines
const items = [
    { name: "Dr. John Doe", type: "doctor" },
    { name: "Dr. Jane Smith", type: "doctor" },
    { name: "Aspirin", type: "medicine" },
    { name: "Ibuprofen", type: "medicine" },
    { name: "Dr. Emily Johnson", type: "doctor" },
    { name: "Paracetamol", type: "medicine" },
];

// Function to handle search
function searchItems() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = ''; // Clear previous results

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (${item.type})`;
            resultsList.appendChild(li);
        });
    } else {
        resultsList.innerHTML = '<li>No results found</li>';
    }
}

// Attach the search function to the form submission
document.querySelector('.search-container form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    searchItems(); // Call the search function
});

// Cart functionality
let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement;
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('Price: $', ''));

        cart.push({ id: productId, name: productName, price: productPrice });
        totalPrice += productPrice;

        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').innerText = `Total: $${totalPrice}`;
}

// Profile modal functionality
function toggleProfile() {
    const modal = document.getElementById('profile-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Chat functionality
const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatBox.appendChild(messageElement);
        messageInput.value = ''; // Clear input after sending
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
}