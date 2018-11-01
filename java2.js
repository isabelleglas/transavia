///*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
//
///*eslint-env browser*/
//
///*eslint 'no-console': 0*/


var downloadbutton = document.querySelector('.download');
var loading = document.querySelector('.loading');

downloadbutton.addEventListener('click', function startDownload () {
    loading.classList.toggle('show');
    downloadbutton.textContent = 'Downloaden...'; 
    
    setTimeout( function() {
    downloadComplete();
    }, 2000);
});

function downloadComplete(){
    loading.style.display = "none";
    downloadbutton.textContent = 'Gedownload';
}


var likebutton = document.querySelector('.ilike');
var likepage = document.querySelector('.like');

likebutton.addEventListener('click', function () {
    likebutton.classList.toggle('liked');
    likepage.classList.toggle('liking');
});