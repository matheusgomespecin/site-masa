var colorButton = document.getElementsByClassName('colorButton');
var content = document.getElementsByClassName('content');

Array.prototype.forEach.call(colorButton, function(button) {
    button.addEventListener('click', function(){
        var color = this.getAttribute('data-color');
        content.style.background = color;
    });
});