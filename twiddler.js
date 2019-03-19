$(document).ready(function(){
  $('.refresh-button').on('click', function() {
  
    var $container = $('.container');
      $container.html('');   
  
    var index = streams.home.length - 1;
    console.log(index);
      while(index >= 0){
        var $messageBox = $('<div class=\"messageContainer\"></div>') 
        var tweet = streams.home[index];
        var $user = $('<button class=\"' + tweet.user + '\"></button>');
        $user.text('@' + tweet.user);
        var $tweet = $('<p></p>');
        $tweet.text(tweet.message + ' (' + tweet.created_at + ')');
        $user.appendTo($messageBox);
        $tweet.appendTo($messageBox);
        $messageBox.appendTo($container);
        index -= 1;
      }
  });

  $('.shawndrost').on('click', function() {
    alert('it works');
  });
  
});

// $('.shawndrost').on('click', function() {
//   $(document).ready(function(){
//   var $container = $('.container');
//       $container.html('');   
  
//   var userIndex = streams.users.shawndrost.length - 1;
//   console.log(index);
//       while(userIndex >= 0){
//         // var $messageBox = $('<div class=\"messageContainer\"></div>') 
//         var userTweet = streams.users.shawndrost[userIndex];
//         // var $user = $('<button class=\"' + tweet.user + '\"></button>');
//         $user.text('@' + tweet.user);
//         // var $tweet = $('<p></p>');
//         $tweet.text(tweet.message + ' (' + tweet.created_at + ')');
//         $user.appendTo($messageBox);
//         $userTweet.appendTo($messageBox);
//         $messageBox.appendTo($container);
//         index -= 1;
//       }
//   });  
// });

