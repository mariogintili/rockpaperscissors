$(document).ready(function(){
  var p1 = new Player('Human');
  var p2 = new Player('Computer');
  var game = new Game(p1, p2);

  $('.choices .imageContainer').on('click', function(){
    p1.picks($(this).data('pick'));
    p2.picks('lizard');
    $('#message').html(game.whoWonMessage() + " " + game.winningMessage());

    if(!game.winner()) {
      $('.overlay').css('background', '');
    } else {
      game.loser() === p1 ? $('.overlay').css('background', '#e74c3c') : $('.overlay').css('background', '#27ae60');
    }
    $('.overlay').fadeIn(800).fadeOut(1000);
  });
})

