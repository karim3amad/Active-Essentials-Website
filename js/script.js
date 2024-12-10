function scroll() {
    var t = window.scrollY
    var para = document.getElementById("gym")
    var m = -0.20
    var b = 0

    var newY = m*t + b
    para.style.backgroundPositionY = newY + "px";
}


// Function to toggle the navbar's transparency
function toggleNavbarTransparency() {
    // Select the nav section
    const navSection = document.getElementById('nav_section');
    
    // Get the current scroll position
    const scrollY = window.scrollY;

    if (scrollY > 200) {
        navSection.classList.add('scrolled'); 
    } else {
        navSection.classList.remove('scrolled'); 
    }
}

window.addEventListener('scroll', toggleNavbarTransparency);




// Scroll fire addition
function revealOnScroll() {
    const teamMembers = document.querySelectorAll('.team-section');
    teamMembers.forEach((member) => {
        const rect = member.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 180) {
            member.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Trigger the animation on page load for any visible elements
revealOnScroll();













const validProductCodes = ["RB101", "HD707", "WJR303", "FT404"]; // Valid product codes

// Validate Name
function validateName() {
    const nameField = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    const nameValue = nameField.value;

    if (nameValue.length >= 4 && /^[^\d]*$/.test(nameValue)) {
        nameField.classList.add("valid");
        nameField.classList.remove("invalid");
        nameError.style.display = "none";
    } else {
        nameField.classList.add("invalid");
        nameField.classList.remove("valid");
        nameError.textContent = "Name must be at least 4 characters and contain no numbers.";
        nameError.style.display = "block";
    }
}

// Validate Phone Number
function validatePhone() {
    const phoneField = document.getElementById("phone");
    const phoneError = document.getElementById("phone-error");
    const phoneValue = phoneField.value;

    if (/^\d{3} \d{3} \d{4}$/.test(phoneValue)) {
        phoneField.classList.add("valid");
        phoneField.classList.remove("invalid");
        phoneError.style.display = "none";
    } else {
        phoneField.classList.add("invalid");
        phoneField.classList.remove("valid");
        phoneError.textContent = "Phone number must follow the format: 123 456 7890.";
        phoneError.style.display = "block";
    }
}

// Toggle Product ID Field
function toggleProductId() {
    const reasonField = document.getElementById("reason");
    const productIdGroup = document.getElementById("product-id-group");

    if (reasonField.value === "product") {
        productIdGroup.style.display = "block";
    } else {
        productIdGroup.style.display = "none";
    }
}

// Validate Product ID
function validateProductId() {
    const productIdField = document.getElementById("product-id");
    const productIdError = document.getElementById("product-id-error");
    const productIdValue = productIdField.value;

    if (validProductCodes.includes(productIdValue)) {
        productIdField.classList.add("valid");
        productIdField.classList.remove("invalid");
        productIdError.style.display = "none";
    } else {
        productIdField.classList.add("invalid");
        productIdField.classList.remove("valid");
        productIdError.textContent = "Invalid Product ID. Please use a valid product code.";
        productIdError.style.display = "block";
    }
}

// Validate Message
function validateMessage() {
    const messageField = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    const messageValue = messageField.value;

    if (messageValue.length >= 10 && messageValue.length <= 30) {
        messageField.classList.add("valid");
        messageField.classList.remove("invalid");
        messageError.style.display = "none";
    } else {
        messageField.classList.add("invalid");
        messageField.classList.remove("valid");
        messageError.textContent = "Message must be 10-30 characters long.";
        messageError.style.display = "block";
    }
}




const popup = document.getElementById('dayPopup');
const popupMessage = document.getElementById('popupMessage');

function closePopup() {
    popup.style.display = 'none';
}

function showDayPopup() {
    const dayOfWeek = new Date().getDay();
    let message = '';

    if (dayOfWeek === 0) {
        message = `
            <h2>Sunday Special</h2>
            <p>Start your fitness week right with our durable Resistance Bands! Perfect for strength training and rehabilitation exercises.</p>
        `;
    } else if (dayOfWeek === 1) {
        message = `
            <h2>Monday Motivation</h2>
            <p>Build your strength this Monday with Hex Dumbbells. Available in multiple weights to suit all fitness levels!</p>
        `;
    } else if (dayOfWeek === 2) {
        message = `
            <h2>Tuesday Endurance</h2>
            <p>Take your cardio to the next level with Weighted Jump Ropes! Improve endurance and burn calories effectively.</p>
        `;
    } else if (dayOfWeek === 3) {
        message = `
            <h2>Workout Wednesday</h2>
            <p>Midweek Gains! Check out our Olympic Weight Plates for building serious strength. Train like a pro.</p>
        `;
    } else if (dayOfWeek === 4) {
        message = `
            <h2>Thursday Thrills</h2>
            <p>Stay strong with Resistance Bands on Thursday! Great for versatile and portable strength workouts.</p>
        `;
    } else if (dayOfWeek === 5) {
        message = `
            <h2>Friday Focus</h2>
            <p>Friday Focus: Build your muscle game with Hex Dumbbells. Durable and reliable for every workout.</p>
        `;
    } else if (dayOfWeek === 6) {
        message = `
            <h2>Saturday Power</h2>
            <p>Power up your weekend with Olympic Weight Plates! The ultimate addition to your home gym.</p>
        `;
    }

    popupMessage.innerHTML = message;
    popup.style.display = 'block';
}

window.onload = showDayPopup;



