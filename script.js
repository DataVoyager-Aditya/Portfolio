console.log("Running")

var typed = new Typed(".auto-type",{
    strings:["Programmer", "Researcher", "Community Worker", "Entrepreneur"],
    typeSpeed:200,
    backSpeed:200,
    loop:true
})

document.addEventListener('scroll', ()=>{
    const header = document.querySelector('header')

    if(window.scrollY>0){
        header.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled')
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    function slideIn() {
        const triggerBottom = window.innerHeight / 5 * 4;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', slideIn);
    slideIn();
});