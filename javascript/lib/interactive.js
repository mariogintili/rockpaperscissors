$(document).ready(function(){
  var p1 = new Player('Human');
  var p2 = new Player('Computer');
  var game = new Game(p1, p2);

  $('.choices img').on('click', function(){
    p1.picks($(this).data('pick'));
    p2.picks(game.randomPick());
    $('#results').html(game.winningMessage());
  });
})
