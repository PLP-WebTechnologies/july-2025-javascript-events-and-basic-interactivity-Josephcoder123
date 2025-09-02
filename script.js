// script.js

// Part 1: Light/Dark Mode Toggle
const toggleModeButton = document.getElementById('toggle-mode');
toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Part 2: Counter
let counter = 0;
const incrementButton = document.getElementById('increment-btn');
const counterValue = document.getElementById('counter-value');

incrementButton.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

// Part 3: FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Part 4: Dropdown Menu
const dropdownButton = document.getElementById('dropdown-btn');
const dropdownContent = document.getElementById('dropdown-content');

dropdownButton.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Part 5: Tabbed Interface
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    });
});

// Part 6: Form Validation
const form = document.getElementById('user-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (name === '' || email === '' || password === '') {
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        formMessage.textContent = 'Please enter a valid email!';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Form submitted successfully!';
        formMessage.style.color = 'green';
        form.reset(); // Reset form fields
    }
});
