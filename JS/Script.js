//=========================Sticky navbar===============================
window.addEventListener('scroll', stickyNavbar);

var navbar = document.getElementById("navbar"),
    navList = document.querySelector(".nav-list"),
    sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navList.style.border = "none";
    } else {
        navbar.classList.remove("sticky");
        navList.style.border = "";
    }
};

//==========================hamburger-menu=============================

var hamburger = document.querySelector('#header .hamburger'),
    lines = document.querySelectorAll('.hamburger .line');

hamburger.onclick = function () {
    if (navbar.style.left === "") {
        navbar.style.left = "0";
        lines[0].style.transform = "translate(0, 8px) rotate(45deg)";
        lines[1].style.opacity = "0";
        lines[2].style.transform = "translate(0, -8px) rotate(-45deg)";
        contactBox.classList.remove('show');
    } else {
        hideHamMenu();
    }
}

function hideHamMenu() {
    navbar.style.left = "";
        lines[0].style.transform = "";
        lines[1].style.opacity = "";
        lines[2].style.transform = "";
}

var navLinks = document.querySelectorAll('#navbar .nav-item div.drop-menu'),
    linkArrow = document.querySelectorAll('#navbar .nav-item div i'),
    dropMenu = document.querySelectorAll('#navbar .nav-item ul');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
        if (link.nextElementSibling.style.display === "") {
            dropMenu.forEach(menu => {
                menu.style.display = "";
            });
            navLinks.forEach(link => {
                linkDefault(link)
            })
            link.nextElementSibling.style.display = "block";
            link.style.background = "#3cc3c1"
            link.firstElementChild.style.color = "#fff"
            link.lastElementChild.style.transform = "rotate(180deg)"
            link.lastElementChild.style.color = "#fff"
        } else {
            linkDefault(link)
        }
    })
});
function linkDefault(link) {
    link.nextElementSibling.style.display = "";
    link.style.background = "";
    link.firstElementChild.style.color = "";
    link.lastElementChild.style.transform = "";
    link.lastElementChild.style.color = "";
}

//=========================contact-box=================================
var contactBox = document.querySelector('.contact-box'),
ellipsis = document.querySelector('#header .ellipsis'),
dots = document.querySelectorAll('#header .ellipsis .dot');

ellipsis.addEventListener('click', function() {
    contactBox.classList.toggle('show');
    if (contactBox.classList.contains('show')){
        hideHamMenu()
    }
})


//=============================Slider==================================

let sliderImages = document.querySelectorAll('.slide'),
sliderCont = document.querySelector('.slider-cont'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    counter = 1;


const size = sliderImages[0].clientWidth;

sliderCont.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Sliding right function
function slideRight() {
    if (counter >= sliderImages.length - 1) return;
    sliderCont.style.transition = "transform 0.5s ease-in-out";
    counter++;
    sliderCont.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Right arrow event
arrowRight.addEventListener('click', slideRight);

// Auto slide every 5s
setInterval(slideRight, 5000);

arrowLeft.addEventListener('click', function () {
    if (counter <= 0) return;
    sliderCont.style.transition = "transform 0.5s ease-in-out";
    counter--;
    sliderCont.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

sliderCont.addEventListener('transitionend', function () {
    if (sliderImages[counter].id === 'lastClone') {
        sliderCont.style.transition = "none";
        counter = sliderImages.length - 2;
        sliderCont.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

sliderCont.addEventListener('transitionend', function () {
    if (sliderImages[counter].id === 'firstClone') {
        sliderCont.style.transition = "none";
        counter = sliderImages.length - counter;
        sliderCont.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

// ====================Background & Color change=======================

var icons = document.querySelectorAll(".service-icon i"),
    background = ["#fff", "#3cc3c1", "#f9e95e"],
    color = ["#151515", "#fff", "#151515"],
    y = 0;

setInterval(function change() {

    if (y === color.length) { y = 0 }

    for (x = 0; x < icons.length; x++) {

        icons[x].style.backgroundColor = background[y];

        icons[x].style.color = color[y];

    };

    y++;

}, 5000)

//===========================Why Go Vegan==============================

// =============Owl Carousel
$('.why-go-vegan .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    autoplaySpeed: 1000,
});

// ==============Reasons part
var reasonHead = document.querySelectorAll(".reason-head"),
    angelRight = document.querySelectorAll(".reason-head i"),
    reasonDesc = document.querySelectorAll(".reason-desc");

reasonHead.forEach(head => {

    // Add event to every head
    head.addEventListener('click', function () {

        if (head.classList.contains('active')) {
            removeClass(head)
        } else {

            reasonHead.forEach(head => {
                removeClass(head);
            })

            addClass(head);
        }

    })

})

// Add classes function
function addClass(add) {
    add.nextElementSibling.classList.add('show');
    add.children[0].classList.add('rotate');
    add.classList.add('active')
};

// Remove classes function
function removeClass(remove) {
    remove.nextElementSibling.classList.remove('show');
    remove.children[0].classList.remove('rotate');
    remove.classList.remove('active')
}

// =========================Testimonials================================

var clientInfo = document.querySelectorAll('.client-info'),
    reviewsCont = document.querySelector('.reviews-cont'),
    reviews = document.querySelectorAll('.reviews-cont .review'),
    size2 = reviewsCont.clientWidth;

// Scroll review every 3 seconds
setInterval(clientTwo, 3000);
setInterval(clientThree, 6000);
setInterval(clientOne, 12000);

// Scroll when clicked on client
clientInfo[0].addEventListener('click', clientOne)
clientInfo[1].addEventListener('click', clientTwo)
clientInfo[2].addEventListener('click', clientThree)

// Function for client one 
function clientOne() {
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.transform = 'translate(-' + (size2 * 0) + 'px,0)';
        clientInfo[0].classList.add('active')
        clientInfo[1].classList.remove('active')
        clientInfo[2].classList.remove('active')
    }
}
// Function for client two 
function clientTwo() {
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.transform = 'translate(-' + (size2 * 1) + 'px,0)';
        clientInfo[1].classList.add('active')
        clientInfo[0].classList.remove('active')
        clientInfo[2].classList.remove('active')
    }
}
// Function for client three
function clientThree() {
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.transform = 'translate(-' + (size2 * 2) + 'px,0)';
        clientInfo[2].classList.add('active')
        clientInfo[0].classList.remove('active')
        clientInfo[1].classList.remove('active')
    }
}

//=============================Gallery==================================

var imgs = $('.imgs-cont .gallery-img');

imgs.addClass('show');

$('.selectors-list .selector').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
        imgs.addClass('show');
    } else {
        imgs.removeClass('show');
        $($(this).data('class')).addClass('show');
    }
});

//=========================parallax effect=============================

// document.getElementById("body").onscroll = function myFunction() {  
//     var scrolltotop = document.scrollingElement.scrollTop;
//     var target = document.getElementById("bg");
//     var xvalue = "center";
//     var factor = 0.3;
//     var yvalue = scrolltotop * factor;
//     target.style.backgroundPosition = xvalue + " " + yvalue + "px";
//     console.log(target)
// }

//==============================================================

mybutton = document.getElementById("myBtn");

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.bottom = "40px";
    } else {
        mybutton.style.bottom = "";
    }
})

function topFunction() {
    //   document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}