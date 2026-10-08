```javascript
// ========================================
// ExploreWorld - Travel & Tourism
// JavaScript
// ========================================


// 1. BOOKING FORM
// ========================================

function showBookingMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let message = document.getElementById("bookingMessage");

    message.innerHTML =
        "🎉 <strong>Booking Successful!</strong><br>" +
        "Thank you, " + name +
        "! Your travel booking request has been received.";

    message.style.display = "block";

    // Clear form after booking
    document.querySelector("form").reset();
}



// 2. CONTACT FORM
// ========================================

function sendMessage(event) {

    event.preventDefault();

    let name =
        document.getElementById("contactName").value;

    let message =
        document.getElementById("contactMessage");

    message.innerHTML =
        "✅ <strong>Message Sent Successfully!</strong><br>" +
        "Thank you, " + name +
        ". We will contact you soon.";

    message.style.display = "block";

    // Clear form
    document.querySelector("form").reset();
}



// 3. MOBILE NUMBER VALIDATION
// ========================================

function validateMobile() {

    let mobile =
        document.getElementById("mobile").value;

    if (mobile.length !== 10) {

        alert("Please enter a valid 10-digit mobile number.");

        return false;
    }

    return true;
}



// 4. BOOKING FORM DATE VALIDATION
// ========================================

let today = new Date();

let year = today.getFullYear();

let month =
    String(today.getMonth() + 1).padStart(2, "0");

let day =
    String(today.getDate()).padStart(2, "0");

let currentDate =
    year + "-" + month + "-" + day;

let dateInput =
    document.querySelector('input[type="date"]');

if (dateInput) {

    dateInput.setAttribute(
        "min",
        currentDate
    );
}



// 5. GALLERY IMAGE CLICK EFFECT
// ========================================

let galleryImages =
    document.querySelectorAll(".gallery-item img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(
            image.src,
            "_blank"
        );

    });

});



// 6. BOOK NOW BUTTON MESSAGE
// ========================================

let bookingButtons =
    document.querySelectorAll(".package-btn");

bookingButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log(
            "User selected a travel package."
        );

    });

});



// 7. WELCOME MESSAGE
// ========================================

console.log(
    "🌍 Welcome to ExploreWorld Travel & Tourism!"
);
```
