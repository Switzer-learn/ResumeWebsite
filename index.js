$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 2 + 1);
    if (randomNumber % 2 === 0) {
        $('#myPic').attr('src', "./assets/image/2.png");
        $('#hero').addClass('flex-row-reverse');
    }
});

$("#contactMe").click(function (e) { 
    $("#contactMeChoice").slideToggle();
});


$("#ecommerceLink").click(function (e) { 
    e.preventDefault();
    window.open("https://ecommerce-project-hqub.onrender.com", "ecommerce");
});

$("#bookLink").click(function (e) { 
    e.preventDefault();
    window.open("https://booknoteapp-rzg0.onrender.com", "book");
});

$("#posLink").click(function (e) { 
    e.preventDefault();
    window.open("https://fnb-pos-willy-candras-projects.vercel.app", "POS");
});
