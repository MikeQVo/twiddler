$('.refresh-button').on('click', function() {
  $(document).ready(function(){
  var $container = $('.container');
      $container.html('');

  var index = streams.home.length - 1;
  console.log(index);
      while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<p></p>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' (' + tweet.created_at + ')');
        $tweet.appendTo($container);
        index -= 1;
      }
  });  
}); 