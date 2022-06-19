var inputText = document.getElementById('input-text');
var counter = document.getElementById('counter');
inputText.addEventListener('input', function(){
    counter.innerHTML = inputText.value.length;
    
    if(inputText.value == ''){
        counter.style.color = 'red';
    } else{
        counter.style.color = 'green';
    }
});