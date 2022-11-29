var main = document.querySelector('#main');

var x = window.prompt('what is the best club ever?');
if (x == 'Real Madrid') {
    main.innerHTML = x;

} else {
    main.innerHTML = 'no'
}