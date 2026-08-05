// ==========================================
// KGANYA FINAL GROUND FUNERAL SERVICES
// Designed by Hlaks Web Wonders
// ==========================================

// ================= LOADER =================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// ================= STICKY NAVBAR =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(11,45,107,.98)";
        navbar.style.padding = "12px 8%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "rgba(11,45,107,.88)";
        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "none";

    }

});

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ================= COUNTERS =================

const counters = document.querySelectorAll(".counter");

const speed = 30;

counters.forEach(counter=>{

    const updateCount=()=>{

        const target=+counter.getAttribute("data-target");

        const count=+counter.innerText;

        const increment=Math.ceil(target/speed);

        if(count<target){

            counter.innerText=count+increment;

            setTimeout(updateCount,40);

        }else{

            counter.innerText=target.toLocaleString();

        }

    };

    updateCount();

});

// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(
".about,.why-card,.package-card,.service-card,.gallery-item,.testimonial-card,.stat-box,.contact-container,.faq details"
);

function reveal(){

    reveals.forEach(item=>{

        const windowHeight=window.innerHeight;

        const revealTop=item.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// ================= HERO FLOAT =================

const hero=document.querySelector(".hero-content");

let position=0;

setInterval(()=>{

    position=position===0?10:0;

    hero.style.transform=`translateY(${position}px)`;

    hero.style.transition="2.5s ease";

},2500);

// ================= ACTIVE NAVIGATION =================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ================= PARALLAX HERO =================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.backgroundPositionY=window.pageYOffset*0.5+"px";

});

// ================= GALLERY HOVER =================

const gallery=document.querySelectorAll(".gallery-item img");

gallery.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(110%)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="brightness(100%)";

    });

});

// ================= CONTACT FORM =================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you for contacting Kganya Final Ground Funeral Services. We will contact you shortly.");

    form.reset();

});
