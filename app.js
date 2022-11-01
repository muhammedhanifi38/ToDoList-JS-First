let leftAddButton = document.getElementById("leftAdd");
let toDomain = document.getElementById('toDomain');
let inputText = document.getElementById('inputText');
let rightClear = document.getElementById('rightClear');

leftAddButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    toDomain.appendChild(paragraph);
    paragraph.innerHTML =  inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function(){
        toDomain.removeChild(paragraph);
    });

    rightClear.addEventListener('click', function(){
        paragraph.remove();
    })



})
