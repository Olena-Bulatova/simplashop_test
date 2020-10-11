$(document).ready(function(){
    $('.banner__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autospeed: 1500,
        waitForAnimate: false,
    });

    const svg = document.querySelectorAll('svg');

    svg.forEach( item => {
        item.addEventListener('load', event => {
            let currentElement = event.target;
            let parentHeight = currentElement.parentElement.clientHeight;
            currentElement.setAttribute('height', `${parentHeight}px`);
        })
    })

});