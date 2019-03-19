$(document).ready(function(){
  $('.home-button').on('click', function() {
  
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
        var $timestamp = $('<p></p>');
        $timestamp.text('(' + tweet.created_at + ')');
        $tweet.text(tweet.message);
        $user.appendTo($messageBox);
        $tweet.appendTo($messageBox);
        $timestamp.appendTo($messageBox);
        $messageBox.appendTo($container);
        index -= 1;
      }
  });

  $('.container').on('click', '.shawndrost', function() {
    $(document).ready(function(){
    var $container = $('.container');
        $container.html('');   
  
    var index = streams.users.shawndrost.length - 1;
    console.log(index);
      while(index >= 0){
        var $messageBox = $('<div class=\"messageContainer\"></div>') 
        var tweet = streams.users.shawndrost[index];
        var $user = $('<button class=\"' + tweet.user + '\"></button>');
        $user.text('@' + tweet.user);
        var $tweet = $('<p></p>');
        var $timestamp = $('<p></p>');
        $timestamp.text('(' + tweet.created_at + ')');
        $tweet.text(tweet.message);
        $user.appendTo($messageBox);
        $tweet.appendTo($messageBox);
        $timestamp.appendTo($messageBox);
        $messageBox.appendTo($container);
        index -= 1;
      }
    });  
  });

  $('.container').on('click', '.sharksforcheap', function() {
    $(document).ready(function(){
    var $container = $('.container');
        $container.html('');   
  
    var index = streams.users.sharksforcheap.length - 1;
    console.log(index);
      while(index >= 0){
        var $messageBox = $('<div class=\"messageContainer\"></div>') 
        var tweet = streams.users.sharksforcheap[index];
        var $user = $('<button class=\"' + tweet.user + '\"></button>');
        $user.text('@' + tweet.user);
        var $tweet = $('<p></p>');
        var $timestamp = $('<p></p>');
        $timestamp.text('(' + tweet.created_at + ')');
        $tweet.text(tweet.message);
        $user.appendTo($messageBox);
        $tweet.appendTo($messageBox);
        $timestamp.appendTo($messageBox);
        $messageBox.appendTo($container);
        index -= 1;
      }
    });  
  });

  $('.container').on('click', '.mracus', function() {
    $(document).ready(function(){
    var $container = $('.container');
        $container.html('');   
  
    var index = streams.users.mracus.length - 1;
    console.log(index);
      while(index >= 0){
        var $messageBox = $('<div class=\"messageContainer\"></div>') 
        var tweet = streams.users.mracus[index];
        var $user = $('<button class=\"' + tweet.user + '\"></button>');
        $user.text('@' + tweet.user);
        var $tweet = $('<p></p>');
        var $timestamp = $('<p></p>');
        $timestamp.text('(' + tweet.created_at + ')');
        $tweet.text(tweet.message);
        $user.appendTo($messageBox);
        $tweet.appendTo($messageBox);
        $timestamp.appendTo($messageBox);
        $messageBox.appendTo($container);
        index -= 1;
      }
    });  
  });

  $('.container').on('click', '.douglascalhoun', function() {
    $(document).ready(function(){
    var $container = $('.container');
        $container.html('');   
  
    var index = streams.users.douglascalhoun.length - 1;
    console.log(index);
      while(index >= 0){
        var $messageBox = $('<div class=\"messageContainer\"></div>') 
        var tweet = streams.users.douglascalhoun[index];
        var $user = $('<button class=\"' + tweet.user + '\"></button>');
        $user.text('@' + tweet.user);
        var $tweet = $('<p></p>');
        var $timestamp = $('<p></p>');
        $timestamp.text('(' + tweet.created_at + ')');
        $tweet.text(tweet.message);
        $user.appendTo($messageBox);
        $tweet.appendTo($messageBox);
        $timestamp.appendTo($messageBox);
        $messageBox.appendTo($container);
        index -= 1;
      }
    });  
  });

  $('.submit-button').on('click', function() {
    $(document).ready(function() {
      
    });
  });
});
