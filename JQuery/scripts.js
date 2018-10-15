let btn1 = $('<button>').text('Click Me');
let friends = ['Dennis', 'Steve', 'Everett', 'Anna', 'Ashley', 'Melissa', 'Pracilla', 'Rainey', 'Polly', 'Ripley'];
$('#div1').append(btn1);

//1. button with nice message
$(btn1).click(function () {
    alert('Have a nice day!');
})

//2. alert message in input box
$('#btn2').click(function () {
    alert($('#text').val());
})

//3. div hover color
$('#div3').hover(function () {
    $(this).css('background-color', 'blue');
}, function () {
    $(this).css('background-color', 'black');
});

//4. <p> that will change to a random color
$('#para').click(function () {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $(this).css('color', randomColor);
})

//5. button that shows name
$('#btn5').click(function () {
    $('#nameDiv').append($('<p>')).text('Ann Calvert');
})

//6. button that adds friends to list
$('#btn6').click(function () {
    $(friends).each(function () {
        let li = $('<li>').text(this);
        $('#list').append(li);
    });
});