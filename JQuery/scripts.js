let btn1 = $('<button>').text('Click Me');
let para = document.getElementById('para');
let btn5 = document.getElementById('btn5');
let nameP = document.createElement('p');
let name = document.createTextNode('Ann Calvert');
let nameDiv = document.getElementById('nameDiv');
let friends = ['Dennis', 'Steve', 'Everett', 'Anna', 'Ashley', 'Melissa', 'Pracilla', 'Rainey', 'Polly', 'Ripley'];
let btn6 = document.getElementById('btn6');
let list = document.getElementById('list');


$('#div1').append(btn1);
nameP.appendChild(name);

//1. button with nice message
$(btn1).click(function() {
    alert('Have a nice day!');
})

//2. alert message in input box
$('#btn2').click(function() {
    alert($('#text').val());
})

//3. div hover color
$('#div3').hover(function() {
    $(this).css('background-color', 'blue');
    }, function() {
        $(this).css('background-color', 'black');
    });

//4. <p> that will change to a random color
para.addEventListener('click', function () {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    (this).style.color = randomColor;
});

//5. button that shows name
btn5.addEventListener('click', function () {
    nameDiv.appendChild(nameP);
});

//6. button that adds friends to list
btn6.addEventListener('click', function () {
    friends.forEach(listEach);
    function listEach(friends) {
        let li = document.createElement('li');
        let liText = document.createTextNode(friends);
        li.appendChild(liText);
        document.body.appendChild(li);
    };
});