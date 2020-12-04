$(function(){
    var movieIcon = $('.movie_box');
    var showBox = $('.showbox');
    var intro = $('.intro');
    showBox.hide();

    movieIcon.click(function(){
        showBox.show()
    })

})