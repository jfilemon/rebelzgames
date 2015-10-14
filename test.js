//your code for stuff should go here
    $('#Fullscreen').css('height', $(document).outerWidth() + 'px');
    //for when you click on an image
    $('.myImg').click(function () {
        var src = $(this).attr('src'); //get the source attribute of the clicked image
        $('#Fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#Fullscreen').fadeIn();
    });
    $('#Fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
