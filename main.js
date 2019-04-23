var input = document.getElementById('inputitem');
var button = document.getElementById('button');
var ul = document.querySelector('ul');

function checkinput(){
    return input.value.length;
}

function createlistElement(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
     
}

function additemonclick(){
    if(checkinput()){
        createlistElement();
    }
};

function additemonkeypress(){
    if(checkinput() && event.keyCode === 13){
        createlistElement(); 
    } 
};

button.addEventListener('click', additemonclick);
input.addEventListener('keypress', additemonkeypress);

