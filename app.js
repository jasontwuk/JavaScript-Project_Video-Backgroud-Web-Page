// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// set const
const preloader = document.querySelector('.preloader');
const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

// set function for switch button
btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
});

// hide preloader when the whole page has loaded
window.addEventListener('load', function(){
    // console.log('page is fully loaded');
    preloader.classList.add('hide-preloader');
});