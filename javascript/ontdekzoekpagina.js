///*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
//
///*eslint-env browser*/
//
///*eslint 'no-console': 0*/


var button = document.querySelector('.click')
var body = document.querySelector('body')

button.addEventListener('click', function () {
    body.classList.toggle('discover');
    
    if (this.textContent == 'Zoek verhalen' ){
        this.textContent = 'Ontdek verhalen';  
    } else {
        this.textContent = 'Zoek verhalen';
    }
});

