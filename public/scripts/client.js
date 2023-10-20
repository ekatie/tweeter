// When document is ready
$(document).ready(function () {
  // Toggle new tweet form
  $('nav button').on('click', function () {
    $('#new-tweet').toggle(400);
  });

  $('#new-tweet').on('submit', function (event) {
    // No content entered
    if (!$('#tweet-text').val()) {
      event.preventDefault();
      const message = 'Please enter at least one character!';
      $('.error p').text(message);
      $('.error').slideDown(300);
      return;
    }
    // Over 140 characters
    if ($('#tweet-text').val().length > 140) {
      event.preventDefault();
      const message = 'Your tweet cannot exceed 140 characters!';
      $('.error p').text(message);
      $('.error').slideDown(300);
      return;
    }
    onSubmit(event);
    $('#new-tweet')[0].reset();
    $('.error').slideUp();
  });

  loadTweets();
});

/**
 * This function handles form submission for new tweets. After successfully posting a new tweet, it load the updated tweets.
 * @param {object} event - The event object generated by the form submission.
 */
const onSubmit = function (event) {
  event.preventDefault();
  const tweetData = $('#new-tweet').serialize();

  $.post('/tweets', tweetData)
    .then(() => {
      loadTweets();
    });
};

/**
 * This function escapes any XSS entered as tweet content.
 * @param {String} str - String text input by user.
 * @returns - Secure / sanitized version of the string.
 */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

/**
* This function creates a tweet element from an object containing tweet data.
* @param {object} tweetData - Object containing tweet data, including username, avatar, handle, tweet content and date (UNIX timestamp).
* @returns - Tweet element
*/
const createTweetElement = function (tweetData) {
  const tweetContent = escape(tweetData.content.text);

  const $tweet = `
    <article class="tweet">
    <header>
    <div>
    <img class="mini-avatar" alt="user avatar for post" src="${tweetData.user.avatars}">${tweetData.user.name}
    </div>
      <div class="handle">${tweetData.user.handle}</div>
    </header>
    <p>${tweetContent}</p>
    <footer>
      <div>${timeago.format(new Date(tweetData["created_at"]))}</div>
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
  // Clear the container
  $('#tweets-container').empty();

  // Render all the tweets, including new ones
  tweetsArray.forEach(tweet => {
    $('#tweets-container').prepend(createTweetElement(tweet));
  });
};

/**
 * This function loads the existing tweets.
 */
const loadTweets = function () {
  $.get('/tweets', (res) => {
    renderTweets(res);
  });
};