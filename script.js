var toglleButton = document.getElementById('toglleButton');
var hiddenContent = document.getElementById('hiddenContent')

toglleButton.addEventListener('click', function(){
    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
    } else {
        hiddenContent.style.display = 'none';
    }
});