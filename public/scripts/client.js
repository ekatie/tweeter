// When document is ready
$(document).ready(function () {
  $('#new-tweet').on('submit', onSubmit);
  loadTweets();
});

const onSubmit = function (event) {
  event.preventDefault();
  const tweetData = $('#new-tweet').serialize();
  console.log(tweetData);
  $.post('/tweets', tweetData)
    .then(() => {
      loadTweets();
    });
};

/**
* This function creates a tweet element from an object containing tweet data.
* @param {object} tweetData - Object containing tweet data, including username, avatar, handle, tweet content and date (UNIX timestamp).
* @returns - Tweet element
*/

const createTweetElement = function (tweetData) {
  const $tweet = `
    <article class="tweet">
    <header>
    <div>
    <img class="mini-avatar" alt="user avatar for post" src="${tweetData.user.avatars}">${tweetData.user.name}
    </div>
      <div class="handle">${tweetData.user.handle}</div>
    </header>
    <p>${tweetData.content.text}</p>
    <footer>
      <div>${timeSinceTweet(tweetData["created_at"])}</div>
      <div>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
      </article>`;
  return $tweet;
};

/**
 * This function takes in an array of tweet objects and uses jQuery to insert each tweet at the end of the #tweet-container section.
 * @param {array} tweetsArray - Array of tweet objects.
 */

const renderTweets = function (tweetsArray) {
  tweetsArray.forEach(tweet => {
    $('#tweets-container').prepend(createTweetElement(tweet));
  });
};

const loadTweets = function () {
  $.get('/tweets', (res) => {
    console.log(res);
    renderTweets(res);
  });
};