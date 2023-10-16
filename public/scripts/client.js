/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// When page ready
$(document).ready(function () {

  // Calculate days since tweet was created
  const timeSinceTweet = function (tweetTimestamp) {
    const timeDifference = tweetTimestamp - Date.now();

    // Less than a minute
    if (timeDifference < 60000) {
      return "just now";
    }
    // Less than an hour
    else if (timeDifference < 3600000) {
      const minutes = Math.floor(timeDifference / 60000);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } // Less than a day
    else if (timeDifference < 86400000) {
      const hours = Math.floor(timeDifference / 3600000);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(timeDifference / 86400000);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  const createTweetElement = function (tweetData) {

    const $tweet = `
  <article class="tweet">
  <header>
  <div>
  <img class="mini-avatar" src="${tweetData.user.avatars}">${tweetData.user.name}
  </div>
    <div class="handle">@${tweetData.user.handle}</div>
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

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});