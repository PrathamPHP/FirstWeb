document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been entered.");

    document.getElementById("contactForm").reset();
});
