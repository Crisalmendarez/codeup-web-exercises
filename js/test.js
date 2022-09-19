
//1.
$('#change-bg-color').on('click', function(){
    $('body').css('background-color', 'blue');
});


//2.
$('.btn').on('click', function(){
    $(this).css('background-color', '')
});

//3.
$('#reset-btn').on('click', function (){
    location.reload()
})

//4.
$('.star').hover(function(){
        $('#review-result').text();
})
//5.
$('.go-to-btn').on('click', function(){
    window.location = $('#custom-url').val();
});


//6.
$('#append-to-ul').on('click', function (){
    $('#append-to-me').append('<li>text</li>')
})

//7.

setTimeout(function(){
    $('#message').text('Hello, Everyone!');
}, 2000);

//8.

$('#hl-toggle li').on('click', function(){
    $(this).css('background-color', 'yellow');
});

//9.
$('#upcase-name').on('click', function(){
    console.log($('input').val());
    $('#output').text('Your name uppercased is: ' + input.toUpperCase())
})


//10.

$('#font-grow li').on('dblclick', function(){
    let fontSize = $(this).css('font-size')
})
