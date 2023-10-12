$(document).ready(() => {

  $('#tweet-text').on('input', function () {
    let tweetLength = this.value.length;
    const maxTweetLength = 140;

    const charsRemaining = maxTweetLength - tweetLength;
    $('#tweet-text').parent('form').find('.counter').text(charsRemaining);

    if (charsRemaining < 0) {
      $('#tweet-text').parent('form').find('.counter').css({ 'color': 'red' });
    } else {
      $('#tweet-text').parent('form').find('.counter').css({ 'color': '#545149' });
    }
  });

});